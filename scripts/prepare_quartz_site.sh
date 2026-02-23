#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$ROOT_DIR/.tmp"
RUNTIME_DIR="${QUARTZ_RUNTIME_DIR:-/tmp/quartz-runtime}"
TARBALL="${QUARTZ_TARBALL:-/tmp/quartz-v4.tar.gz}"
QUARTZ_REF="${QUARTZ_REF:-v4}"

mkdir -p "$TMP_DIR"
rm -rf "$RUNTIME_DIR"
mkdir -p "$(dirname "$RUNTIME_DIR")" "$(dirname "$TARBALL")"

curl -fsSL "https://codeload.github.com/jackyzha0/quartz/tar.gz/refs/heads/$QUARTZ_REF" -o "$TARBALL"
TOP_DIR="$(tar -tzf "$TARBALL" | awk -F/ 'NR==1 { print $1 }')"

tar -xzf "$TARBALL" -C "$TMP_DIR"
if [ ! -d "$TMP_DIR/$TOP_DIR" ]; then
  echo "[quartz:prepare] extracted directory not found: $TMP_DIR/$TOP_DIR" >&2
  exit 1
fi
mv "$TMP_DIR/$TOP_DIR" "$RUNTIME_DIR"

# Improve explorer hover UX by adding native title tooltip to long items.
EXPLORER_SCRIPT="$RUNTIME_DIR/quartz/components/scripts/explorer.inline.ts"
if [ -f "$EXPLORER_SCRIPT" ]; then
  perl -0pi -e 's/a\.textContent = node\.displayName/a.textContent = node.displayName\n  a.title = node.displayName/g' "$EXPLORER_SCRIPT"
  perl -0pi -e 's/span\.textContent = node\.displayName/span.textContent = node.displayName\n    span.title = node.displayName/g' "$EXPLORER_SCRIPT"
fi

# Inject repo-specific graph node coloring rules for Quartz knowledge graph.
GRAPH_SCRIPT="$RUNTIME_DIR/quartz/components/scripts/graph.inline.ts"
if [ -f "$GRAPH_SCRIPT" ]; then
  perl -0pi -e 's@const localStorageKey = "graph-visited"\n@const localStorageKey = "graph-visited"\n\nconst PRIORITY_PATH_COLOR_RULES: { terms: string[]; color: number }[] = [\n  { terms: ["claude"], color: 0xd97757 }, // 217,119,87\n  { terms: ["gemini"], color: 0xa261d4 }, // 162,97,212\n  { terms: ["openai", "codex", "chatgpt", "chat-gpt"], color: 0x000000 }, // 0,0,0\n  { terms: ["deepseek"], color: 0x0072d1 }, // 0,114,209\n  { terms: ["memo", "memory"], color: 0x00ffbf }, // 0,255,191\n  { terms: ["ai", "agent"], color: 0x82bcf2 }, // 130,188,242\n]\n\nconst PALE_YELLOW = 0xfef3c7\n@s' "$GRAPH_SCRIPT"

  perl -0pi -e 's@// calculate color\n  const color = \(d: NodeData\) => \{\n    const isCurrent = d.id === slug\n    if \(isCurrent\) \{\n      return computedStyleMap\["--secondary"\]\n    \} else if \(visited.has\(d.id\) \|\| d.id.startsWith\("tags/"\)\) \{\n      return computedStyleMap\["--tertiary"\]\n    \} else \{\n      return computedStyleMap\["--gray"\]\n    \}\n  \}@// calculate color\n  const keywordColorForNode = (nodeId: string): number | null => {\n    const originalPath = String(nodeId || "")\n    const normalizedPath = originalPath.toLowerCase()\n\n    let decodedPath = originalPath\n    try {\n      decodedPath = decodeURIComponent(originalPath)\n    } catch {\n      decodedPath = originalPath\n    }\n    const normalizedDecodedPath = decodedPath.toLowerCase()\n\n    const filename = normalizedPath.split("/").pop() || ""\n    const decodedFilename = normalizedDecodedPath.split("/").pop() || ""\n\n    if (\n      normalizedPath.includes("coding") ||\n      normalizedDecodedPath.includes("coding") ||\n      filename.includes("开发") ||\n      decodedFilename.includes("开发")\n    ) {\n      return PALE_YELLOW\n    }\n\n    for (const rule of PRIORITY_PATH_COLOR_RULES) {\n      if (\n        rule.terms.some(\n          (term) => normalizedPath.includes(term) || normalizedDecodedPath.includes(term),\n        )\n      ) {\n        return rule.color\n      }\n    }\n\n    return null\n  }\n\n  const color = (d: NodeData) => {\n    const keywordColor = keywordColorForNode(d.id)\n    if (keywordColor !== null) return keywordColor\n\n    const isCurrent = d.id === slug\n    if (isCurrent) {\n      return computedStyleMap["--secondary"]\n    }\n\n    if (visited.has(d.id) || d.id.startsWith("tags/")) {\n      return computedStyleMap["--tertiary"]\n    }\n\n    return computedStyleMap["--gray"]\n  }@s' "$GRAPH_SCRIPT"

  perl -0pi -e 's@    let oldLabelOpacity = 0\n    const isTagNode = nodeId.startsWith\("tags/"\)\n    const gfx = new Graphics\(\{\n      interactive: true,\n      label: nodeId,\n      eventMode: "static",\n      hitArea: new Circle\(0, 0, nodeRadius\(n\)\),\n      cursor: "pointer",\n    \}\)\n      \.circle\(0, 0, nodeRadius\(n\)\)\n      \.fill\(\{ color: isTagNode \? computedStyleMap\["--light"\] : color\(n\) \}\)\n      \.on\("pointerover", \(e\) => \{\n        updateHoverInfo\(e.target.label\)\n        oldLabelOpacity = label.alpha\n        if \(!dragging\) \{\n          renderPixiFromD3\(\)\n        \}\n      \}\)\n      \.on\("pointerleave", \(\) => \{\n        updateHoverInfo\(null\)\n        label.alpha = oldLabelOpacity\n        if \(!dragging\) \{\n          renderPixiFromD3\(\)\n        \}\n      \}\)\n\n    if \(isTagNode\) \{\n      gfx.stroke\(\{ width: 2, color: computedStyleMap\["--tertiary"\] \}\)\n    \}@    let oldLabelOpacity = 0\n    const isTagNode = nodeId.startsWith("tags/")\n    const keywordColor = keywordColorForNode(nodeId)\n    const nodeFillColor = isTagNode ? computedStyleMap["--light"] : color(n)\n\n    const gfx = new Graphics({\n      interactive: true,\n      label: nodeId,\n      eventMode: "static",\n      hitArea: new Circle(0, 0, nodeRadius(n)),\n      cursor: "pointer",\n    })\n      .circle(0, 0, nodeRadius(n))\n      .fill({ color: nodeFillColor })\n      .on("pointerover", (e) => {\n        updateHoverInfo(e.target.label)\n        oldLabelOpacity = label.alpha\n        if (!dragging) {\n          renderPixiFromD3()\n        }\n      })\n      .on("pointerleave", () => {\n        updateHoverInfo(null)\n        label.alpha = oldLabelOpacity\n        if (!dragging) {\n          renderPixiFromD3()\n        }\n      })\n\n    if (isTagNode) {\n      gfx.stroke({ width: 2, color: computedStyleMap["--tertiary"] })\n    } else if (keywordColor !== null) {\n      gfx.stroke({ width: 1.35, color: computedStyleMap["--darkgray"] })\n    }@s' "$GRAPH_SCRIPT"
fi

CONTENT_DIR="$RUNTIME_DIR/content"
rm -rf "$CONTENT_DIR"
mkdir -p "$CONTENT_DIR"

shopt -s nullglob
copied_dirs=0
for src_dir in "$ROOT_DIR"/0[0-4]-*; do
  if [ -d "$src_dir" ]; then
    cp -a "$src_dir" "$CONTENT_DIR/"
    copied_dirs=$((copied_dirs + 1))
  fi
done
shopt -u nullglob

RECENT_PAGE_SIZE="${QUARTZ_RECENT_PAGE_SIZE:-200}"
RECENT_SECTION_DIR="$CONTENT_DIR/最近更新"
mkdir -p "$RECENT_SECTION_DIR"

python3 - "$CONTENT_DIR" "$RECENT_PAGE_SIZE" <<'PY'
import math
import pathlib
import re
import sys

content_dir = pathlib.Path(sys.argv[1])
page_size = max(1, int(sys.argv[2]))
blog_root = content_dir / "01-博客"
recent_dir = content_dir / "最近更新"
recent_dir.mkdir(parents=True, exist_ok=True)

date_patterns = [
    re.compile(r'(?m)^发布日期[：:]\s*"?(\d{4}-\d{2}-\d{2})"?\s*$'),
    re.compile(r'(?m)^-\s*发布日期[：:]\s*"?(\d{4}-\d{2}-\d{2})"?\s*$'),
    re.compile(r'(?m)^date\s*:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$'),
]
title_re = re.compile(r"(?m)^#\s+(.+?)\s*$")

entries = []
if blog_root.exists():
    for md in blog_root.rglob("*.md"):
        rel = md.relative_to(content_dir).as_posix()
        if rel.endswith("/README.md") or rel == "README.md":
            continue

        text = md.read_text(encoding="utf-8", errors="ignore")
        date = None
        for pattern in date_patterns:
            match = pattern.search(text)
            if match:
                date = match.group(1)
                break
        if not date:
            continue

        title_match = title_re.search(text)
        title = title_match.group(1).strip() if title_match else md.stem
        slug = rel[:-3] if rel.endswith(".md") else rel
        entries.append(
            {
                "date": date,
                "title": title,
                "slug": slug,
            }
        )

entries.sort(key=lambda x: (x["date"], x["title"]), reverse=True)
page_count = max(1, math.ceil(len(entries) / page_size))

def nav_lines(page_no: int) -> list[str]:
    line = []
    if page_no > 1:
        if page_no == 2:
            line.append("[[index|上一页]]")
        else:
            line.append(f"[[最近更新/第{page_no - 1}页|上一页]]")
    if page_no < page_count:
        line.append(f"[[最近更新/第{page_no + 1}页|下一页]]")
    if not line:
        return ["- 当前仅 1 页"]
    return [f"- {' | '.join(line)}"]

def page_links(page_no: int) -> list[str]:
    start = max(1, page_no - 3)
    end = min(page_count, page_no + 3)
    links = []
    for i in range(start, end + 1):
        if i == page_no:
            if i == 1:
                links.append("**第1页（当前）**")
            else:
                links.append(f"**第{i}页（当前）**")
        else:
            if i == 1:
                links.append("[[index|第1页]]")
            else:
                links.append(f"[[最近更新/第{i}页|第{i}页]]")
    return [f"- {' | '.join(links)}"]

def render_page(page_no: int, page_entries: list[dict], include_catalog: bool = False) -> str:
    lines = [
        "---",
        f"title: 最近更新（第{page_no}页）" if page_no > 1 else "title: 文档首页",
        "---",
        "",
        "# 最近更新",
        "",
        f"按博客文档中的“发布日期”从新到旧排序；每页 {page_size} 篇。",
        "",
        f"共 {len(entries)} 篇，当前第 {page_no}/{page_count} 页。",
        "",
        "## 分页",
    ]
    lines.extend(nav_lines(page_no))
    lines.extend(page_links(page_no))
    lines.extend(["", "## 最新条目"])

    if not page_entries:
        lines.append("- 暂无可展示的博客条目")
    else:
        for idx, item in enumerate(page_entries, start=(page_no - 1) * page_size + 1):
            lines.append(f"{idx}. [[{item['slug']}|{item['title']}]]")
            lines.append(f"   - 发布日期：{item['date']}")

    if include_catalog:
        lines.extend(["", "## 目录"])
        if (content_dir / "00-元语").exists():
            lines.append("- [[00-元语/README|元语词条]]")
            lines.append("- [[00-元语/关系图谱|关系图谱]]")
        if (content_dir / "01-博客").exists():
            lines.append("- [[01-博客|博客归档]]")
        if (content_dir / "02-资源").exists():
            lines.append("- [[02-资源|资源档案]]")
        if (content_dir / "03-图书").exists():
            lines.append("- [[03-图书|图书记录]]")
        if (content_dir / "04-聊天").exists():
            lines.append("- [[04-聊天|聊天整理]]")

    lines.append("")
    return "\n".join(lines)

for i in range(1, page_count + 1):
    start = (i - 1) * page_size
    end = start + page_size
    page_entries = entries[start:end]
    body = render_page(i, page_entries, include_catalog=(i == 1))
    if i == 1:
        target = content_dir / "index.md"
    else:
        target = recent_dir / f"第{i}页.md"
    target.write_text(body, encoding="utf-8")
PY

BASE_URL="${QUARTZ_BASE_URL:-}"
if [ -z "$BASE_URL" ] && [ -n "${GITHUB_REPOSITORY:-}" ]; then
  OWNER="${GITHUB_REPOSITORY%%/*}"
  REPO="${GITHUB_REPOSITORY##*/}"
  if [ "$REPO" = "$OWNER.github.io" ]; then
    BASE_URL="$OWNER.github.io"
  else
    BASE_URL="$OWNER.github.io/$REPO"
  fi
fi
if [ -z "$BASE_URL" ]; then
  BASE_URL="localhost"
fi

cat > "$RUNTIME_DIR/quartz.config.ts" <<CONFIG_EOF
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "wsl-docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "$BASE_URL",
    ignorePatterns: ["private", "templates", ".obsidian", ".tmp"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f3f3f3",
          gray: "#9aa4b2",
          darkgray: "#435066",
          dark: "#1f2a3d",
          secondary: "#2f5ea5",
          tertiary: "#23a084",
          highlight: "rgba(47, 94, 165, 0.11)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#151515",
          gray: "#646f81",
          darkgray: "#d8dbe2",
          dark: "#f3f4f6",
          secondary: "#7aa2e3",
          tertiary: "#35c4a2",
          highlight: "rgba(122, 162, 227, 0.2)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
CONFIG_EOF

cat > "$RUNTIME_DIR/quartz.layout.ts" <<'LAYOUT_EOF'
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const graphOptions = {
  localGraph: {
    repelForce: 0.95,
    linkDistance: 70,
    centerForce: 0.22,
  },
  globalGraph: {
    repelForce: 1.25,
    linkDistance: 110,
    centerForce: 0.15,
  },
}

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/shiertier/docs",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(graphOptions),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [Component.Graph(graphOptions)],
}
LAYOUT_EOF

cat > "$RUNTIME_DIR/quartz/styles/custom.scss" <<'CUSTOM_STYLE_EOF'
@use "./base.scss";

:root[saved-theme="dark"] {
  --light: #0a0a0a;
  --lightgray: #151515;
}

:root[saved-theme="dark"] body,
:root[saved-theme="dark"] #quartz-body,
:root[saved-theme="dark"] .page {
  background-color: #0a0a0a !important;
}

@media (prefers-color-scheme: dark) {
  :root[saved-theme="auto"] {
    --light: #0a0a0a;
    --lightgray: #151515;
  }

  :root[saved-theme="auto"] body,
  :root[saved-theme="auto"] #quartz-body,
  :root[saved-theme="auto"] .page {
    background-color: #0a0a0a !important;
  }
}

/* Sidebar width: widen left explorer column for long Chinese titles. */
@media all and (min-width: 1200px) {
  .page > #quartz-body {
    grid-template-columns: 420px minmax(0, 1fr) 320px;
  }

  /* Restore right sidebar balance so backlinks stay visible under graph/toc. */
  .sidebar.right .toc {
    flex: 1.5 1 0;
    min-height: 21rem;
  }

  .sidebar.right .backlinks {
    flex: 0.75 1 0;
    min-height: 10rem;
  }

  .sidebar.right .backlinks > ul.overflow {
    max-height: 12rem;
  }
}

@media all and (min-width: 800px) and (max-width: 1199px) {
  .page > #quartz-body {
    grid-template-columns: 360px minmax(0, 1fr);
  }
}

/* Sidebar explorer: increase title spacing and add subtle separators. */
.explorer .explorer-content li {
  margin: 0.18rem 0;
}

.explorer .explorer-content li > a,
.explorer .folder-container div > a,
.explorer .folder-container div > button > span {
  display: block;
  width: 100%;
  font-size: 0.82rem;
  line-height: 1.38;
  padding: 0.12rem 0.16rem 0.3rem;
  border-bottom: 1px solid rgba(122, 133, 151, 0.56);
  border-bottom: 1px solid color-mix(in srgb, var(--gray) 46%, transparent);
}
CUSTOM_STYLE_EOF

echo "[quartz:prepare] runtime prepared at $RUNTIME_DIR"
echo "[quartz:prepare] baseUrl=$BASE_URL"
markdown_count="$(find "$CONTENT_DIR" -type f -name '*.md' | wc -l | tr -d ' ')"
echo "[quartz:prepare] copied_dirs=$copied_dirs markdown_files=$markdown_count"
