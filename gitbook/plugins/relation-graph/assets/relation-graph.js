(function () {
  "use strict";

  var GRAPH_DATA_FILE = "graph-data.json";
  var GRAPH_MAX_NODES = 320;
  var ROOT_SECTIONS = ["00-元语", "01-博客", "02-资源", "03-图书", "04-聊天"];
  var graphDataPromise = null;
  var mermaidReadyPromise = null;
  var tocCleanup = null;
  var graphCleanup = null;

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (err) {
      return value;
    }
  }

  function loadGraphData() {
    if (graphDataPromise) return graphDataPromise;

    var prefixes = ["", "./", "../", "../../", "../../../", "../../../../", "../../../../../", "/"];

    graphDataPromise = (async function () {
      for (var i = 0; i < prefixes.length; i += 1) {
        var url = prefixes[i] + GRAPH_DATA_FILE;
        try {
          var response = await fetch(url, { cache: "no-store" });
          if (!response.ok) continue;
          var json = await response.json();
          if (json && Array.isArray(json.nodes) && Array.isArray(json.links)) {
            return json;
          }
        } catch (err) {
          continue;
        }
      }
      return { nodes: [], links: [], backlinks: {}, stats: { nodes: 0, links: 0 } };
    })();

    return graphDataPromise;
  }

  function ensureMermaidLibrary() {
    if (window.mermaid && typeof window.mermaid.initialize === "function") {
      return Promise.resolve(window.mermaid);
    }
    if (mermaidReadyPromise) return mermaidReadyPromise;

    mermaidReadyPromise = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
      script.async = true;
      script.onload = function () {
        if (window.mermaid) resolve(window.mermaid);
        else reject(new Error("Mermaid script loaded but window.mermaid is unavailable"));
      };
      script.onerror = function () {
        reject(new Error("Failed to load Mermaid runtime from CDN"));
      };
      document.head.appendChild(script);
    })
      .then(function (mermaid) {
        mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: "default" });
        return mermaid;
      })
      .catch(function (err) {
        console.error("[relation-graph] mermaid init failed", err);
        mermaidReadyPromise = null;
        throw err;
      });

    return mermaidReadyPromise;
  }

  function renderMermaidBlocks() {
    var blocks = $all(".markdown-section .mermaid").filter(function (block) {
      return block && !block.dataset.rendered;
    });
    if (blocks.length === 0) return Promise.resolve();

    return ensureMermaidLibrary()
      .then(function (mermaid) {
        var chain = Promise.resolve();
        blocks.forEach(function (block, index) {
          chain = chain.then(function () {
            var source = block.textContent || "";
            var id = "mermaid-" + Date.now() + "-" + index;
            return mermaid
              .render(id, source)
              .then(function (result) {
                block.innerHTML = result.svg;
                block.dataset.rendered = "1";
              })
              .catch(function (err) {
                block.dataset.rendered = "error";
                block.classList.add("mermaid-error");
                console.error("[relation-graph] mermaid render failed", err);
              });
          });
        });
        return chain;
      })
      .catch(function () {
        blocks.forEach(function (block) {
          if (!block.dataset.rendered) {
            block.dataset.rendered = "error";
            block.classList.add("mermaid-error");
          }
        });
      });
  }

  function getPathCandidateFromLocation() {
    var pathname = safeDecode(window.location.pathname || "").replace(/\\/g, "/");
    pathname = pathname.replace(/\/+/g, "/");
    if (!pathname || pathname === "/") return "README";

    pathname = pathname.replace(/^\//, "");
    if (pathname.endsWith("/")) pathname = pathname + "index.html";

    if (pathname === "index.html") return "README";
    if (pathname.endsWith(".html")) {
      pathname = pathname.slice(0, -5);
    }

    if (!pathname || pathname === "index") return "README";
    return pathname;
  }

  function resolveCurrentSlug(data) {
    var nodeIds = new Set((data.nodes || []).map(function (node) { return node.id; }));
    var candidate = getPathCandidateFromLocation();

    if (candidate === "README") return "README";
    if (nodeIds.has(candidate)) return candidate;

    for (var i = 0; i < ROOT_SECTIONS.length; i += 1) {
      var marker = ROOT_SECTIONS[i] + "/";
      var idx = candidate.indexOf(marker);
      if (idx >= 0) {
        var sliced = candidate.slice(idx);
        if (nodeIds.has(sliced)) return sliced;
      }
    }

    var trimmed = candidate;
    while (trimmed.indexOf("/") > -1) {
      trimmed = trimmed.slice(trimmed.indexOf("/") + 1);
      if (nodeIds.has(trimmed)) return trimmed;
    }

    return candidate;
  }

  function detectSiteBase(currentSlug) {
    var pathname = safeDecode(window.location.pathname || "/").replace(/\\/g, "/");
    pathname = pathname.replace(/\/+/g, "/");
    if (!pathname.startsWith("/")) pathname = "/" + pathname;

    if (currentSlug && currentSlug !== "README") {
      var root = currentSlug.split("/")[0];
      var marker = "/" + root + "/";
      var markerIdx = pathname.indexOf(marker);
      if (markerIdx >= 0) {
        return pathname.slice(0, markerIdx + 1);
      }
    }

    for (var i = 0; i < ROOT_SECTIONS.length; i += 1) {
      var sectionMarker = "/" + ROOT_SECTIONS[i] + "/";
      var idx = pathname.indexOf(sectionMarker);
      if (idx >= 0) {
        return pathname.slice(0, idx + 1);
      }
    }

    if (pathname.endsWith("/index.html")) {
      return pathname.slice(0, -"index.html".length);
    }

    if (pathname.endsWith(".html")) {
      return pathname.slice(0, pathname.lastIndexOf("/") + 1);
    }

    if (pathname.endsWith("/")) {
      return pathname;
    }

    return pathname + "/";
  }

  function hrefForSlug(siteBase, toSlug) {
    var base = siteBase || "/";
    if (!base.endsWith("/")) base += "/";

    if (!toSlug || toSlug === "README") {
      return base + "index.html";
    }

    var encoded = toSlug
      .split("/")
      .map(function (part) { return encodeURIComponent(part); })
      .join("/");
    return base + encoded + ".html";
  }

  function headingIdFromText(text, index) {
    var slug = text
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^\w\u4e00-\u9fa5-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    if (!slug) slug = "section-" + (index + 1);
    return "toc-" + slug + "-" + (index + 1);
  }

  function removeRightToc() {
    var old = document.getElementById("docs-right-toc");
    if (old) old.remove();

    var book = $(".book");
    if (book) book.classList.remove("with-right-toc");

    if (typeof tocCleanup === "function") {
      tocCleanup();
      tocCleanup = null;
    }
  }

  function renderRightToc(currentSlug) {
    removeRightToc();

    if (!currentSlug || currentSlug === "README") return;

    var markdownSection = $(".book .book-body .page-inner .markdown-section") || $(".markdown-section");
    if (!markdownSection) return;

    var headings = $all("h2, h3, h4", markdownSection).filter(function (heading) {
      var text = (heading.textContent || "").trim();
      if (!text) return false;
      if (/^反向链接$/.test(text)) return false;
      return true;
    });

    if (headings.length === 0) return;

    var seenIds = new Set();
    headings.forEach(function (heading, index) {
      if (!heading.id) {
        heading.id = headingIdFromText(heading.textContent || "", index);
      }
      while (seenIds.has(heading.id)) {
        heading.id = heading.id + "-dup";
      }
      seenIds.add(heading.id);
    });

    var aside = document.createElement("aside");
    aside.id = "docs-right-toc";

    var title = document.createElement("div");
    title.className = "docs-right-toc-title";
    title.textContent = "目录";
    aside.appendChild(title);

    var list = document.createElement("ul");
    list.className = "docs-right-toc-list";

    headings.forEach(function (heading) {
      var level = Number((heading.tagName || "H2").replace("H", ""));
      var item = document.createElement("li");
      item.className = "docs-right-toc-item level-" + level;

      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = (heading.textContent || "").trim();
      link.dataset.targetId = heading.id;
      item.appendChild(link);
      list.appendChild(item);
    });

    aside.appendChild(list);

    var host = $(".book .book-body") || document.body;
    host.appendChild(aside);

    var book = $(".book");
    if (book) book.classList.add("with-right-toc");

    var onScroll = function () {
      var activeId = "";
      for (var i = headings.length - 1; i >= 0; i -= 1) {
        var top = headings[i].getBoundingClientRect().top;
        if (top <= 140) {
          activeId = headings[i].id;
          break;
        }
      }

      var links = $all("a", list);
      links.forEach(function (link) {
        if (link.dataset.targetId === activeId) link.classList.add("active");
        else link.classList.remove("active");
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    tocCleanup = function () {
      window.removeEventListener("scroll", onScroll);
    };
  }

  function renderBacklinks(data, currentSlug, idToNode, siteBase) {
    var markdownSection = $(".book .book-body .page-inner .markdown-section") || $(".markdown-section");
    if (!markdownSection) return;

    var old = document.getElementById("relation-backlinks");
    if (old) old.remove();

    if (!currentSlug || currentSlug === "README") return;

    var refs = ((data.backlinks || {})[currentSlug] || []).filter(function (slug) {
      return idToNode.has(slug);
    });

    if (refs.length === 0) return;

    var section = document.createElement("section");
    section.id = "relation-backlinks";
    section.className = "relation-backlinks";

    var h2 = document.createElement("h2");
    h2.textContent = "反向链接";
    section.appendChild(h2);

    var ul = document.createElement("ul");
    refs.forEach(function (slug) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = hrefForSlug(siteBase, slug);
      a.textContent = idToNode.get(slug).title || slug;
      li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    markdownSection.appendChild(section);
  }

  function degreeMapFromLinks(links) {
    var degree = new Map();
    (links || []).forEach(function (link) {
      degree.set(link.source, (degree.get(link.source) || 0) + 1);
      degree.set(link.target, (degree.get(link.target) || 0) + 1);
    });
    return degree;
  }

  function pickGraphSubset(data, currentSlug) {
    var nodes = data.nodes || [];
    var links = data.links || [];
    if (nodes.length <= GRAPH_MAX_NODES) return { nodes: nodes, links: links, truncated: false };

    var degree = degreeMapFromLinks(links);
    var sorted = nodes
      .slice()
      .sort(function (a, b) {
        var d = (degree.get(b.id) || 0) - (degree.get(a.id) || 0);
        if (d !== 0) return d;
        return a.id.localeCompare(b.id, "zh-Hans-CN");
      });

    var selected = sorted.slice(0, GRAPH_MAX_NODES - 1).map(function (node) { return node.id; });
    if (currentSlug && currentSlug !== "README" && !selected.includes(currentSlug)) {
      selected.push(currentSlug);
    }

    var selectedSet = new Set(selected);
    var selectedNodes = nodes.filter(function (node) { return selectedSet.has(node.id); });
    var selectedLinks = links.filter(function (link) {
      return selectedSet.has(link.source) && selectedSet.has(link.target);
    });

    return { nodes: selectedNodes, links: selectedLinks, truncated: true };
  }

  function colorForGroup(group) {
    var map = {
      "00-元语": "#2563eb",
      "01-博客": "#059669",
      "02-资源": "#d97706",
      "03-图书": "#7c3aed",
      "04-聊天": "#db2777",
      "其他": "#64748b"
    };
    return map[group] || map["其他"];
  }

  function buildInitialPositions(nodes) {
    var groups = new Map();
    nodes.forEach(function (node) {
      var group = node.group || "其他";
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(node);
    });

    var groupKeys = Array.from(groups.keys());
    var radius = 290;
    var groupCenters = new Map();

    groupKeys.forEach(function (group, idx) {
      var angle = (Math.PI * 2 * idx) / Math.max(1, groupKeys.length);
      groupCenters.set(group, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    });

    nodes.forEach(function (node, index) {
      var center = groupCenters.get(node.group || "其他") || { x: 0, y: 0 };
      var jitterX = ((index * 13) % 29) - 14;
      var jitterY = ((index * 19) % 23) - 11;
      node.x = center.x + jitterX * 8;
      node.y = center.y + jitterY * 8;
      node.vx = 0;
      node.vy = 0;
      node.r = 5;
    });
  }

  function runForce(nodes, links, idToNode, degree) {
    var springLength = 62;
    var springK = 0.011;
    var charge = 6800;

    for (var step = 0; step < 240; step += 1) {
      for (var i = 0; i < links.length; i += 1) {
        var link = links[i];
        var a = idToNode.get(link.source);
        var b = idToNode.get(link.target);
        if (!a || !b) continue;

        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 1;
        var force = (dist - springLength) * springK;

        var fx = (dx / dist) * force;
        var fy = (dy / dist) * force;

        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }

      for (var m = 0; m < nodes.length; m += 1) {
        for (var n = m + 1; n < nodes.length; n += 1) {
          var p = nodes[m];
          var q = nodes[n];

          var rdx = q.x - p.x;
          var rdy = q.y - p.y;
          var d2 = rdx * rdx + rdy * rdy + 0.01;
          var rep = charge / d2;

          var distRep = Math.sqrt(d2);
          var rfx = (rdx / distRep) * rep;
          var rfy = (rdy / distRep) * rep;

          p.vx -= rfx;
          p.vy -= rfy;
          q.vx += rfx;
          q.vy += rfy;
        }
      }

      for (var k = 0; k < nodes.length; k += 1) {
        var node = nodes[k];
        node.vx += -node.x * 0.001;
        node.vy += -node.y * 0.001;

        node.vx *= 0.87;
        node.vy *= 0.87;

        node.x += node.vx;
        node.y += node.vy;

        node.r = 4 + Math.min(8.5, Math.sqrt((degree.get(node.id) || 1) / 1.6));
      }
    }
  }

  function pointerToWorld(canvasState, x, y) {
    return {
      x: (x - canvasState.offsetX) / canvasState.scale,
      y: (y - canvasState.offsetY) / canvasState.scale,
    };
  }

  function findNodeAt(nodes, canvasState, x, y) {
    var world = pointerToWorld(canvasState, x, y);
    for (var i = nodes.length - 1; i >= 0; i -= 1) {
      var node = nodes[i];
      var dx = world.x - node.x;
      var dy = world.y - node.y;
      if (dx * dx + dy * dy <= (node.r + 4) * (node.r + 4)) {
        return node;
      }
    }
    return null;
  }

  function drawRoundedRect(ctx, x, y, width, height, radius) {
    var r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  }

  function drawGrid(ctx, width, height, state) {
    var grid = 36;
    var startX = state.offsetX % grid;
    var startY = state.offsetY % grid;

    ctx.save();
    ctx.strokeStyle = "rgba(120, 139, 177, 0.16)";
    ctx.lineWidth = 1;

    for (var x = startX; x < width; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (var y = startY; y < height; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  function buildGraphHud(container, groupCounts, statsText) {
    var hud = document.createElement("div");
    hud.className = "relation-graph-hud";

    var top = document.createElement("div");
    top.className = "relation-graph-hud-top";

    var badge = document.createElement("div");
    badge.className = "relation-graph-title";
    badge.textContent = "关系图谱";
    top.appendChild(badge);

    var controls = document.createElement("div");
    controls.className = "relation-graph-controls";

    var resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "relation-graph-btn";
    resetBtn.textContent = "重置视角";

    var centerBtn = document.createElement("button");
    centerBtn.type = "button";
    centerBtn.className = "relation-graph-btn";
    centerBtn.textContent = "聚焦当前";

    controls.appendChild(resetBtn);
    controls.appendChild(centerBtn);
    top.appendChild(controls);

    hud.appendChild(top);

    var legend = document.createElement("div");
    legend.className = "relation-graph-legend";

    var orderedGroups = Object.keys(groupCounts).sort(function (a, b) {
      return a.localeCompare(b, "zh-Hans-CN");
    });

    orderedGroups.forEach(function (group) {
      var item = document.createElement("div");
      item.className = "relation-graph-legend-item";

      var dot = document.createElement("span");
      dot.className = "dot";
      dot.style.background = colorForGroup(group);

      var text = document.createElement("span");
      text.className = "text";
      text.textContent = group + " · " + groupCounts[group];

      item.appendChild(dot);
      item.appendChild(text);
      legend.appendChild(item);
    });

    var hover = document.createElement("div");
    hover.className = "relation-graph-hover";
    hover.textContent = "悬停节点可查看标题，点击节点可跳转";

    var stats = document.createElement("div");
    stats.className = "relation-graph-meta";
    stats.textContent = statsText;

    hud.appendChild(legend);
    hud.appendChild(hover);
    hud.appendChild(stats);

    container.appendChild(hud);

    return {
      hover: hover,
      resetBtn: resetBtn,
      centerBtn: centerBtn,
      stats: stats,
    };
  }

  function renderGraphCanvas(container, graph, currentSlug, siteBase, graphStats) {
    container.innerHTML = "";

    var hud = buildGraphHud(container, graphStats.groupCounts, graphStats.metaText);

    var canvas = document.createElement("canvas");
    canvas.className = "relation-graph-canvas";
    container.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var dpr = Math.max(window.devicePixelRatio || 1, 1);

    var nodes = graph.nodes.map(function (node) {
      return {
        id: node.id,
        title: node.title,
        group: node.group,
        x: node.x,
        y: node.y,
        vx: node.vx,
        vy: node.vy,
        r: node.r,
      };
    });

    var links = graph.links;
    var adjacency = new Map();

    nodes.forEach(function (node) {
      adjacency.set(node.id, new Set());
    });

    var nodeMap = new Map();
    nodes.forEach(function (node) {
      nodeMap.set(node.id, node);
    });

    links.forEach(function (link) {
      link._source = nodeMap.get(link.source) || null;
      link._target = nodeMap.get(link.target) || null;
      if (adjacency.has(link.source)) adjacency.get(link.source).add(link.target);
      if (adjacency.has(link.target)) adjacency.get(link.target).add(link.source);
    });

    var state = {
      scale: 1,
      offsetX: 0,
      offsetY: 0,
      draggingNode: null,
      isPanning: false,
      moved: false,
      lastX: 0,
      lastY: 0,
      downNode: null,
      hoverNode: null,
    };

    var getCurrentNode = function () {
      return currentSlug ? nodeMap.get(currentSlug) : null;
    };

    var resetViewport = function () {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      state.scale = 1;
      state.offsetX = width / 2;
      state.offsetY = height / 2;
    };

    var centerOnNode = function (node, scale) {
      if (!node) return;
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      if (typeof scale === "number") {
        state.scale = Math.max(0.35, Math.min(2.8, scale));
      }
      state.offsetX = width / 2 - node.x * state.scale;
      state.offsetY = height / 2 - node.y * state.scale;
    };

    function draw() {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      drawGrid(ctx, width, height, state);

      ctx.save();
      ctx.translate(state.offsetX, state.offsetY);
      ctx.scale(state.scale, state.scale);

      var focusSet = null;
      if (state.hoverNode) {
        focusSet = new Set([state.hoverNode.id]);
        var neighbors = adjacency.get(state.hoverNode.id) || new Set();
        neighbors.forEach(function (id) { focusSet.add(id); });
      }

      for (var i = 0; i < links.length; i += 1) {
        var link = links[i];
        var a = link._source;
        var b = link._target;
        if (!a || !b) continue;

        var isFocusEdge =
          state.hoverNode && (a.id === state.hoverNode.id || b.id === state.hoverNode.id);

        ctx.beginPath();
        ctx.lineWidth = (isFocusEdge ? 1.9 : 1.05) / Math.max(1, state.scale);
        ctx.strokeStyle = isFocusEdge
          ? "rgba(37, 99, 235, 0.52)"
          : "rgba(123, 138, 165, 0.19)";
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (var n = 0; n < nodes.length; n += 1) {
        var node = nodes[n];
        var isCurrent = node.id === currentSlug;
        var isHover = state.hoverNode && state.hoverNode.id === node.id;
        var isDimmed = !!focusSet && !focusSet.has(node.id);

        var fill = colorForGroup(node.group);

        ctx.save();
        ctx.globalAlpha = isDimmed ? 0.36 : 1;
        ctx.shadowColor = isCurrent || isHover ? "rgba(30, 64, 175, 0.45)" : "rgba(15, 23, 42, 0.18)";
        ctx.shadowBlur = isCurrent || isHover ? 16 : 7;

        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.arc(node.x, node.y, node.r + (isHover ? 1.1 : 0), 0, Math.PI * 2);
        ctx.fill();

        if (isCurrent || isHover) {
          ctx.beginPath();
          ctx.lineWidth = 2.2 / Math.max(1, state.scale);
          ctx.strokeStyle = isCurrent ? "#0f172a" : "#1d4ed8";
          ctx.arc(node.x, node.y, node.r + 3.2, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      }

      var shouldShowLabels = state.scale > 0.9;
      if (shouldShowLabels || state.hoverNode) {
        ctx.font = "12px 'SF Pro Text','PingFang SC','Noto Sans SC',sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";

        for (var t = 0; t < nodes.length; t += 1) {
          var item = nodes[t];
          var focus = state.hoverNode && state.hoverNode.id === item.id;
          if (!shouldShowLabels && !focus) continue;

          var dim = !!focusSet && !focusSet.has(item.id) && !focus;
          if (dim) continue;

          var label = item.title || item.id;
          var textWidth = ctx.measureText(label).width;
          var x = item.x + item.r + 5;
          var y = item.y;

          ctx.save();
          ctx.globalAlpha = focus ? 1 : 0.9;
          drawRoundedRect(ctx, x - 4, y - 9, textWidth + 8, 18, 6);
          ctx.fillStyle = "rgba(255,255,255,0.88)";
          ctx.fill();
          ctx.fillStyle = "#1f2937";
          ctx.fillText(label, x, y);
          ctx.restore();
        }
      }

      ctx.restore();
    }

    var resize = function () {
      var rect = container.getBoundingClientRect();
      var width = Math.max(420, Math.floor(rect.width));
      var height = Math.max(500, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    var onMouseDown = function (event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var node = findNodeAt(nodes, state, x, y);

      state.moved = false;
      state.lastX = x;
      state.lastY = y;
      state.downNode = node;

      if (node) {
        state.draggingNode = node;
      } else {
        state.isPanning = true;
      }
    };

    var onMouseMove = function (event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      var dx = x - state.lastX;
      var dy = y - state.lastY;
      if (Math.abs(dx) + Math.abs(dy) > 1) state.moved = true;

      if (state.draggingNode) {
        var world = pointerToWorld(state, x, y);
        state.draggingNode.x = world.x;
        state.draggingNode.y = world.y;
      } else if (state.isPanning) {
        state.offsetX += dx;
        state.offsetY += dy;
      }

      var hoverNode = findNodeAt(nodes, state, x, y);
      if (hoverNode !== state.hoverNode) {
        state.hoverNode = hoverNode;
        if (hoverNode) {
          hud.hover.textContent = hoverNode.title || hoverNode.id;
          canvas.style.cursor = "pointer";
        } else {
          hud.hover.textContent = "悬停节点可查看标题，点击节点可跳转";
          canvas.style.cursor = state.isPanning ? "grabbing" : "grab";
        }
      }

      state.lastX = x;
      state.lastY = y;
      draw();
    };

    var onMouseUp = function () {
      var clickedNode = state.downNode;
      var shouldNavigate = clickedNode && !state.moved;

      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;

      if (shouldNavigate) {
        window.location.assign(hrefForSlug(siteBase, clickedNode.id));
      }

      draw();
    };

    var onMouseLeave = function () {
      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;
      state.hoverNode = null;
      hud.hover.textContent = "悬停节点可查看标题，点击节点可跳转";
      canvas.style.cursor = "grab";
      draw();
    };

    var onWheel = function (event) {
      event.preventDefault();
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var worldBefore = pointerToWorld(state, x, y);

      var delta = event.deltaY < 0 ? 1.08 : 0.92;
      state.scale = Math.min(2.8, Math.max(0.35, state.scale * delta));

      state.offsetX = x - worldBefore.x * state.scale;
      state.offsetY = y - worldBefore.y * state.scale;
      draw();
    };

    var onReset = function () {
      resetViewport();
      draw();
    };

    var onCenterCurrent = function () {
      var current = getCurrentNode();
      if (current) {
        centerOnNode(current, Math.max(1.05, state.scale));
      } else {
        resetViewport();
      }
      draw();
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", resize);
    hud.resetBtn.addEventListener("click", onReset);
    hud.centerBtn.addEventListener("click", onCenterCurrent);

    canvas.style.cursor = "grab";
    resetViewport();

    var currentNode = getCurrentNode();
    if (currentNode) centerOnNode(currentNode, 1.06);

    resize();

    return function cleanup() {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", resize);
      hud.resetBtn.removeEventListener("click", onReset);
      hud.centerBtn.removeEventListener("click", onCenterCurrent);
    };
  }

  function renderHomeGraph(data, currentSlug, siteBase) {
    var graphHost = document.getElementById("relation-graph-home");
    if (!graphHost) return;

    if (typeof graphCleanup === "function") {
      graphCleanup();
      graphCleanup = null;
    }

    var subset = pickGraphSubset(data, currentSlug);
    var nodes = subset.nodes.map(function (node) {
      return {
        id: node.id,
        title: node.title,
        group: node.group,
      };
    });

    var idToNode = new Map();
    nodes.forEach(function (node) {
      idToNode.set(node.id, node);
    });

    var links = subset.links
      .filter(function (link) { return idToNode.has(link.source) && idToNode.has(link.target); })
      .map(function (link) {
        return {
          source: link.source,
          target: link.target,
          _source: null,
          _target: null,
        };
      });

    var degree = degreeMapFromLinks(links);
    buildInitialPositions(nodes);

    var nodeMap = new Map();
    nodes.forEach(function (node) {
      nodeMap.set(node.id, node);
    });

    links.forEach(function (link) {
      link._source = nodeMap.get(link.source) || null;
      link._target = nodeMap.get(link.target) || null;
    });

    runForce(nodes, links, nodeMap, degree);

    var groupCounts = {};
    nodes.forEach(function (node) {
      var group = node.group || "其他";
      groupCounts[group] = (groupCounts[group] || 0) + 1;
    });

    var totalNodes = data.stats && data.stats.nodes ? data.stats.nodes : data.nodes.length;
    var totalLinks = data.stats && data.stats.links ? data.stats.links : data.links.length;
    var meta = "节点：" + totalNodes + " ｜ 连线：" + totalLinks;
    if (subset.truncated) meta += " ｜ 当前视图：" + nodes.length;

    graphCleanup = renderGraphCanvas(
      graphHost,
      { nodes: nodes, links: links },
      currentSlug,
      siteBase,
      { groupCounts: groupCounts, metaText: meta }
    );

    var stats = document.getElementById("relation-graph-stats");
    if (stats) stats.textContent = meta;
  }

  function decoratePage() {
    loadGraphData().then(function (data) {
      var idToNode = new Map((data.nodes || []).map(function (node) { return [node.id, node]; }));
      var currentSlug = resolveCurrentSlug(data);
      var siteBase = detectSiteBase(currentSlug);

      renderMermaidBlocks()
        .catch(function () {})
        .then(function () {
          renderRightToc(currentSlug);
          renderBacklinks(data, currentSlug, idToNode, siteBase);
          renderHomeGraph(data, currentSlug, siteBase);
        });
    });
  }

  if (window.gitbook && window.gitbook.events && window.gitbook.events.bind) {
    window.gitbook.events.bind("page.change", decoratePage);
  }

  document.addEventListener("DOMContentLoaded", decoratePage);
})();
