#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const CONTENT_ROOTS = ["00-元语", "01-博客", "02-资源", "03-图书", "04-聊天"];
const SOURCE_DIR = path.join(process.cwd(), ".tmp", "gitbook-src");
const GRAPH_DATA_FILE = "graph-data.json";
const RECENT_ROOT = "01-博客";
const RECENT_PAGE_SIZE = 200;
const WIKI_LINK_RE = /\[\[([^\]]+)\]\]/g;
const MD_LINK_RE = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;
const MERMAID_FENCE_RE = /```mermaid[^\n]*\n([\s\S]*?)```/g;

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function stripMd(p) {
  return p.replace(/\.md$/i, "");
}

function ensureMd(p) {
  return p.toLowerCase().endsWith(".md") ? p : `${p}.md`;
}

function normalizeRelPath(p) {
  return toPosix(path.posix.normalize(p)).replace(/^\.\//, "");
}

function safeDecode(text) {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

function encodeLinkPath(p) {
  return p.replace(/ /g, "%20");
}

function extractFrontmatterBlock(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return match ? match[1] : "";
}

function extractFrontmatterField(markdown, key) {
  const fm = extractFrontmatterBlock(markdown);
  if (!fm) return "";

  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = fm.match(new RegExp(`^${escapedKey}:\\s*(.+)\\s*$`, "m"));
  if (!match) return "";

  let value = match[1].trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }
  return value;
}

function extractTitle(markdown, relPath) {
  const fmTitle = extractFrontmatterField(markdown, "title");
  if (fmTitle) return fmTitle;

  const line = markdown
    .split(/\r?\n/, 60)
    .find((item) => /^#\s+/.test(item.trim()));
  if (line) {
    return line.replace(/^#\s+/, "").trim();
  }
  return path.posix.basename(stripMd(relPath));
}

function extractPublishDate(markdown) {
  const value = extractFrontmatterField(markdown, "发布日期");
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

async function removeAndRecreateDir(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

async function findMarkdownFiles(rootRel) {
  const rootAbs = path.join(process.cwd(), rootRel);
  try {
    const stat = await fs.stat(rootAbs);
    if (!stat.isDirectory()) {
      return [];
    }
  } catch {
    return [];
  }

  const files = [];

  async function walk(currentAbs, currentRel) {
    const entries = await fs.readdir(currentAbs, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const abs = path.join(currentAbs, entry.name);
      const rel = toPosix(path.posix.join(currentRel, entry.name));
      if (entry.isDirectory()) {
        await walk(abs, rel);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        files.push(rel);
      }
    }
  }

  await walk(rootAbs, rootRel);
  return files;
}

function parseWikiExpression(inner) {
  let raw = inner.trim();
  let alias = "";
  const pipeIdx = raw.indexOf("|");
  if (pipeIdx >= 0) {
    alias = raw.slice(pipeIdx + 1).trim();
    raw = raw.slice(0, pipeIdx).trim();
  }

  let anchor = "";
  const hashIdx = raw.indexOf("#");
  if (hashIdx >= 0) {
    anchor = raw.slice(hashIdx).trim();
    raw = raw.slice(0, hashIdx).trim();
  }

  return { target: raw, alias, anchor };
}

function buildPathCandidates(currentRel, target, basenameIndex) {
  const currentDir = path.posix.dirname(currentRel);
  let raw = safeDecode(target.trim().replace(/\\/g, "/"));
  if (!raw) return [];

  const candidates = [];
  const push = (value) => {
    const normalized = normalizeRelPath(value);
    if (!normalized || normalized.startsWith("../")) return;
    if (!candidates.includes(normalized)) {
      candidates.push(normalized);
    }
  };

  if (raw.startsWith("/")) {
    raw = raw.slice(1);
  }

  if (raw.startsWith("./") || raw.startsWith("../")) {
    push(path.posix.join(currentDir, raw));
  } else if (raw.includes("/")) {
    push(raw);
  } else {
    push(path.posix.join(currentDir, raw));
    for (const root of CONTENT_ROOTS) {
      push(path.posix.join(root, raw));
    }

    const basenameMatches = basenameIndex.get(raw) || [];
    if (basenameMatches.length === 1) {
      push(basenameMatches[0]);
    }
  }

  const withMd = [];
  for (const candidate of candidates) {
    withMd.push(candidate);
    withMd.push(ensureMd(candidate));
  }

  return withMd.filter((item, index, arr) => arr.indexOf(item) === index);
}

function resolveDocPath(currentRel, target, docsByRel, basenameIndex) {
  const candidates = buildPathCandidates(currentRel, target, basenameIndex);
  for (const candidate of candidates) {
    if (docsByRel.has(candidate)) {
      return candidate;
    }
  }
  return null;
}

function resolveMarkdownLink(currentRel, href, docsByRel) {
  const normalizedHref = href.trim();
  if (!normalizedHref) return null;
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(normalizedHref)) return null;
  if (normalizedHref.startsWith("#")) return null;

  const plainHref = safeDecode(normalizedHref)
    .replace(/[?#].*$/, "")
    .replace(/^\//, "");
  if (!plainHref) return null;

  const currentDir = path.posix.dirname(currentRel);
  let candidate = plainHref;
  if (!plainHref.includes("/") && !plainHref.endsWith(".md")) {
    candidate = path.posix.join(currentDir, plainHref);
  } else if (plainHref.startsWith("./") || plainHref.startsWith("../")) {
    candidate = path.posix.join(currentDir, plainHref);
  }

  const normalized = normalizeRelPath(candidate);
  const testPaths = [normalized, ensureMd(normalized)];
  for (const testPath of testPaths) {
    if (docsByRel.has(testPath)) return testPath;
  }
  return null;
}

function groupNameFromRel(relPath) {
  return relPath.split("/")[0] || "其他";
}

function toRelativeLink(fromRelPath, toRelPath) {
  const relative = path.posix.relative(path.posix.dirname(fromRelPath), toRelPath);
  const normalized = relative.startsWith(".") ? relative : `./${relative}`;
  return encodeLinkPath(normalized);
}

function buildPageRelPath(pageIndex) {
  return pageIndex === 1 ? "README.md" : `recent/page-${pageIndex}.md`;
}

function renderPagination({ pageIndex, totalPages, currentPagePath }) {
  if (totalPages <= 1) return "";

  const items = [];
  if (pageIndex > 1) {
    const prevPath = buildPageRelPath(pageIndex - 1);
    items.push(`- 上一页：[第 ${pageIndex - 1} 页](${toRelativeLink(currentPagePath, prevPath)})`);
  }
  if (pageIndex < totalPages) {
    const nextPath = buildPageRelPath(pageIndex + 1);
    items.push(`- 下一页：[第 ${pageIndex + 1} 页](${toRelativeLink(currentPagePath, nextPath)})`);
  }
  return items.join("\n");
}

function renderRecentPage({ docs, pageIndex, totalPages, totalDocs, stats, currentPagePath }) {
  const pageStart = (pageIndex - 1) * RECENT_PAGE_SIZE;
  const lines = docs.map((doc, idx) => {
    const number = pageStart + idx + 1;
    const link = toRelativeLink(currentPagePath, doc.relPath);
    return `${number}. ${doc.publishDate} [${doc.title}](${link})`;
  });
  const pagination = renderPagination({ pageIndex, totalPages, currentPagePath });
  const paginationBlock = pagination ? `${pagination}\n` : "";

  const graphSection =
    pageIndex === 1
      ? `
## 关系图谱

<div id="relation-graph-home" class="relation-graph-home"></div>

<div id="relation-graph-stats" class="relation-graph-stats">
  节点：${stats.nodes} ｜ 连线：${stats.links}
</div>

> 提示：拖拽画布可平移，滚轮可缩放，点击节点可跳转。若节点过多，默认展示高连接度子图以保证性能。
`
      : "";

  return `# 最近更新

## 文档信息

- 站点：wsl-docs GitBook
- 生成时间：${new Date().toISOString()}
- 数据范围：${RECENT_ROOT}
- 总条目：${totalDocs}
- 当前页：${pageIndex}/${totalPages}
- 每页条数：${RECENT_PAGE_SIZE}

## 摘要

按发布日期从新到旧展示文档，首页固定为最近更新列表。每页最多 ${RECENT_PAGE_SIZE} 条，可通过分页继续浏览历史内容。

## 正文

${paginationBlock}${lines.join("\n")}

${paginationBlock}${graphSection}`;
}

function renderLegacyHomePage(stats) {
  return `# 文档关系图谱首页

## 文档信息

- 站点：wsl-docs GitBook
- 生成时间：${new Date().toISOString()}

## 摘要

本首页提供 Obsidian 风格的全局关系图谱。节点来自仓库 Markdown 文档，连线来自文档内的 wiki 链接与 Markdown 内链。点击节点可直接跳转到对应文档。

## 正文

<div id="relation-graph-home" class="relation-graph-home"></div>

<div id="relation-graph-stats" class="relation-graph-stats">
  节点：${stats.nodes} ｜ 连线：${stats.links}
</div>

> 提示：拖拽画布可平移，滚轮可缩放，点击节点可跳转。若节点过多，默认展示高连接度子图以保证性能。
`;
}

function renderSummary(docs, recentPageCount) {
  const lines = ["# Summary", "", "* [首页（最近更新）](README.md)"];

  if (recentPageCount > 1) {
    lines.push("", "## 最近更新");
    for (let i = 2; i <= recentPageCount; i += 1) {
      lines.push(`* [第 ${i} 页](recent/page-${i}.md)`);
    }
  }

  for (const root of CONTENT_ROOTS) {
    const group = docs
      .filter((doc) => doc.relPath.startsWith(`${root}/`))
      .sort((a, b) => a.relPath.localeCompare(b.relPath, "zh-Hans-CN"));

    if (group.length === 0) continue;

    lines.push("", `## ${root}`);
    for (const doc of group) {
      const displayPath = stripMd(doc.relPath.slice(root.length + 1));
      const label = displayPath || doc.title;
      lines.push(`* [${label}](${encodeLinkPath(doc.relPath)})`);
    }
  }

  return `${lines.join("\n")}\n`;
}

function convertMermaidFences(markdown) {
  return markdown.replace(MERMAID_FENCE_RE, (_match, body) => {
    const normalized = body.replace(/\s+$/, "");
    return `<div class="mermaid">\n${normalized}\n</div>`;
  });
}

async function main() {
  await removeAndRecreateDir(SOURCE_DIR);

  const docRelPaths = [];
  for (const root of CONTENT_ROOTS) {
    const files = await findMarkdownFiles(root);
    docRelPaths.push(...files);
  }

  const uniqueDocRelPaths = [...new Set(docRelPaths)].sort((a, b) =>
    a.localeCompare(b, "zh-Hans-CN")
  );

  const docsByRel = new Map();
  const basenameIndex = new Map();

  for (const relPath of uniqueDocRelPaths) {
    const absPath = path.join(process.cwd(), relPath);
    const rawContent = await fs.readFile(absPath, "utf8");
    const title = extractTitle(rawContent, relPath);
    const slug = stripMd(relPath);
    const basename = path.posix.basename(slug);

    docsByRel.set(relPath, {
      relPath,
      absPath,
      rawContent,
      title,
      publishDate: extractPublishDate(rawContent),
      slug,
      group: groupNameFromRel(relPath),
    });

    const list = basenameIndex.get(basename) || [];
    list.push(relPath);
    basenameIndex.set(basename, list);
  }

  const edges = new Set();
  const unresolvedWikiLinks = [];

  for (const doc of docsByRel.values()) {
    const outgoing = new Set();

    let transformed = doc.rawContent.replace(WIKI_LINK_RE, (match, inner) => {
      const { target, alias, anchor } = parseWikiExpression(inner);
      if (!target) return match;

      const resolved = resolveDocPath(doc.relPath, target, docsByRel, basenameIndex);
      const text = alias || target;

      if (!resolved) {
        unresolvedWikiLinks.push({ from: doc.relPath, link: match });
        return text;
      }

      const targetDoc = docsByRel.get(resolved);
      const targetSlug = stripMd(resolved);
      outgoing.add(targetSlug);
      edges.add(`${doc.slug}=>${targetSlug}`);

      const relativePath = path.posix.relative(path.posix.dirname(doc.relPath), resolved);
      const normalizedPath = relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
      const finalPath = `${encodeLinkPath(normalizedPath)}${anchor || ""}`;
      const label = alias || targetDoc?.title || path.posix.basename(targetSlug);

      return `[${label}](${finalPath})`;
    });

    for (const match of transformed.matchAll(MD_LINK_RE)) {
      const href = match[1] || "";
      const resolved = resolveMarkdownLink(doc.relPath, href, docsByRel);
      if (!resolved) continue;
      const targetSlug = stripMd(resolved);
      outgoing.add(targetSlug);
      edges.add(`${doc.slug}=>${targetSlug}`);
    }

    transformed = convertMermaidFences(transformed);

    doc.outgoing = [...outgoing].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));

    const outAbs = path.join(SOURCE_DIR, doc.relPath);
    await fs.mkdir(path.dirname(outAbs), { recursive: true });
    await fs.writeFile(outAbs, transformed, "utf8");
  }

  const nodes = [...docsByRel.values()]
    .map((doc) => ({
      id: doc.slug,
      title: doc.title,
      path: doc.relPath,
      group: doc.group,
    }))
    .sort((a, b) => a.id.localeCompare(b.id, "zh-Hans-CN"));

  const links = [...edges]
    .map((edge) => {
      const [source, target] = edge.split("=>");
      return { source, target };
    })
    .sort((a, b) => `${a.source}->${a.target}`.localeCompare(`${b.source}->${b.target}`, "zh-Hans-CN"));

  const backlinks = {};
  for (const node of nodes) {
    backlinks[node.id] = [];
  }
  for (const link of links) {
    if (!backlinks[link.target]) backlinks[link.target] = [];
    backlinks[link.target].push(link.source);
  }
  for (const key of Object.keys(backlinks)) {
    backlinks[key] = [...new Set(backlinks[key])].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
  }

  const graphPayload = {
    generatedAt: new Date().toISOString(),
    stats: {
      nodes: nodes.length,
      links: links.length,
      unresolvedWikiLinks: unresolvedWikiLinks.length,
    },
    nodes,
    links,
    backlinks,
  };

  const allDocs = [...docsByRel.values()];
  const recentDocs = allDocs
    .filter(
      (doc) => doc.relPath.startsWith(`${RECENT_ROOT}/`) && !!doc.publishDate
    )
    .sort((a, b) => {
      if (a.publishDate !== b.publishDate) {
        return b.publishDate.localeCompare(a.publishDate, "zh-Hans-CN");
      }
      return a.relPath.localeCompare(b.relPath, "zh-Hans-CN");
    });

  const recentPageCount = Math.max(
    1,
    Math.ceil(recentDocs.length / RECENT_PAGE_SIZE)
  );

  for (let pageIndex = 1; pageIndex <= recentPageCount; pageIndex += 1) {
    const start = (pageIndex - 1) * RECENT_PAGE_SIZE;
    const end = start + RECENT_PAGE_SIZE;
    const pageDocs = recentDocs.slice(start, end);
    const pagePath = buildPageRelPath(pageIndex);
    const pageMarkdown =
      recentDocs.length > 0
        ? renderRecentPage({
            docs: pageDocs,
            pageIndex,
            totalPages: recentPageCount,
            totalDocs: recentDocs.length,
            stats: { nodes: nodes.length, links: links.length },
            currentPagePath: pagePath,
          })
        : renderLegacyHomePage({ nodes: nodes.length, links: links.length });

    const outPath = path.join(SOURCE_DIR, pagePath);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, pageMarkdown, "utf8");
  }

  const summaryMarkdown = renderSummary(allDocs, recentPageCount);

  await fs.writeFile(path.join(SOURCE_DIR, "SUMMARY.md"), summaryMarkdown, "utf8");
  await fs.writeFile(
    path.join(SOURCE_DIR, GRAPH_DATA_FILE),
    `${JSON.stringify(graphPayload, null, 2)}\n`,
    "utf8"
  );
  await fs.writeFile(
    path.join(SOURCE_DIR, "book.json"),
    `${JSON.stringify(
      {
        title: "wsl-docs 知识库",
        language: "zh-hans",
        plugins: ["relation-graph"],
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  if (unresolvedWikiLinks.length > 0) {
    const unresolvedLines = unresolvedWikiLinks
      .slice(0, 200)
      .map((item) => `${item.from} -> ${item.link}`)
      .join("\n");

    await fs.writeFile(
      path.join(SOURCE_DIR, "unresolved-wiki-links.log"),
      `${unresolvedLines}\n`,
      "utf8"
    );
  }

  console.log("[gitbook:prepare] done");
  console.log(`[gitbook:prepare] source: ${SOURCE_DIR}`);
  console.log(`[gitbook:prepare] docs: ${nodes.length}, links: ${links.length}`);
  console.log(`[gitbook:prepare] unresolved wiki links: ${unresolvedWikiLinks.length}`);
}

main().catch((error) => {
  console.error("[gitbook:prepare] failed", error);
  process.exitCode = 1;
});
