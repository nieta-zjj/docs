(function () {
  "use strict";

  var GRAPH_DATA_FILE = "graph-data.json";
  var GRAPH_MAX_NODES = 320;
  var graphDataPromise = null;
  var tocCleanup = null;

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function unique(arr) {
    return Array.from(new Set(arr));
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

    var trimmed = candidate;
    while (trimmed.indexOf("/") > -1) {
      trimmed = trimmed.slice(trimmed.indexOf("/") + 1);
      if (nodeIds.has(trimmed)) return trimmed;
    }

    return candidate;
  }

  function splitSlug(slug) {
    if (!slug || slug === "README") return [];
    return slug.split("/").filter(Boolean);
  }

  function hrefForSlug(fromSlug, toSlug) {
    var fromParts = splitSlug(fromSlug);
    if (fromParts.length > 0) fromParts.pop();

    if (!toSlug || toSlug === "README") {
      if (fromParts.length === 0) return "index.html";
      return "../".repeat(fromParts.length) + "index.html";
    }

    var toParts = splitSlug(toSlug);
    var i = 0;
    while (i < fromParts.length && i < toParts.length && fromParts[i] === toParts[i]) {
      i += 1;
    }

    var up = "../".repeat(fromParts.length - i);
    var down = toParts.slice(i).join("/");
    return (up + down + ".html").replace(/ /g, "%20");
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

  function renderBacklinks(data, currentSlug, idToNode) {
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
      a.href = hrefForSlug(currentSlug, slug);
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
      "00-元语": "#2F80ED",
      "01-博客": "#27AE60",
      "02-资源": "#F2994A",
      "03-图书": "#9B51E0",
      "04-聊天": "#EB5757",
      "其他": "#7F8C8D"
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
    var radius = 220;
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
      var jitterX = ((index * 17) % 23) - 11;
      var jitterY = ((index * 29) % 19) - 9;
      node.x = center.x + jitterX * 6;
      node.y = center.y + jitterY * 6;
      node.vx = 0;
      node.vy = 0;
      node.r = 5;
    });
  }

  function runForce(nodes, links, idToNode, degree) {
    var springLength = 54;
    var springK = 0.012;
    var charge = 5800;

    for (var step = 0; step < 200; step += 1) {
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
        node.vx += -node.x * 0.0009;
        node.vy += -node.y * 0.0009;

        node.vx *= 0.86;
        node.vy *= 0.86;

        node.x += node.vx;
        node.y += node.vy;

        node.r = 4 + Math.min(8, Math.sqrt((degree.get(node.id) || 1) / 1.8));
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
      if (dx * dx + dy * dy <= (node.r + 3) * (node.r + 3)) {
        return node;
      }
    }
    return null;
  }

  function renderGraphCanvas(container, graph, currentSlug) {
    container.innerHTML = "";
    var canvas = document.createElement("canvas");
    canvas.className = "relation-graph-canvas";
    container.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    var dpr = Math.max(window.devicePixelRatio || 1, 1);

    var resize = function () {
      var rect = container.getBoundingClientRect();
      var width = Math.max(380, Math.floor(rect.width));
      var height = Math.max(420, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

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
    };

    var resetViewport = function () {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      state.scale = 1;
      state.offsetX = width / 2;
      state.offsetY = height / 2;
    };

    function draw() {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(state.offsetX, state.offsetY);
      ctx.scale(state.scale, state.scale);

      ctx.lineWidth = 1 / Math.max(1, state.scale);
      ctx.strokeStyle = "rgba(140, 152, 164, 0.28)";
      for (var i = 0; i < links.length; i += 1) {
        var link = links[i];
        var a = link._source;
        var b = link._target;
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (var n = 0; n < nodes.length; n += 1) {
        var node = nodes[n];
        ctx.beginPath();
        ctx.fillStyle = colorForGroup(node.group);
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        if (node.id === currentSlug) {
          ctx.beginPath();
          ctx.strokeStyle = "#111827";
          ctx.lineWidth = 2 / Math.max(1, state.scale);
          ctx.arc(node.x, node.y, node.r + 2.5, 0, Math.PI * 2);
          ctx.stroke();
        }

        if (state.scale > 0.85) {
          ctx.fillStyle = "#1f2937";
          ctx.font = "12px sans-serif";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(node.title || node.id, node.x + node.r + 4, node.y);
        }
      }

      ctx.restore();
    }

    canvas.addEventListener("mousedown", function (event) {
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
    });

    canvas.addEventListener("mousemove", function (event) {
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
        draw();
      } else if (state.isPanning) {
        state.offsetX += dx;
        state.offsetY += dy;
        draw();
      }

      state.lastX = x;
      state.lastY = y;
    });

    canvas.addEventListener("mouseup", function (event) {
      var clickedNode = state.downNode;
      var shouldNavigate = clickedNode && !state.moved;
      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;

      if (shouldNavigate) {
        window.location.href = hrefForSlug(currentSlug, clickedNode.id);
      }

      if (event) {
        draw();
      }
    });

    canvas.addEventListener("mouseleave", function () {
      state.draggingNode = null;
      state.isPanning = false;
      state.downNode = null;
    });

    canvas.addEventListener(
      "wheel",
      function (event) {
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
      },
      { passive: false }
    );

    window.addEventListener("resize", resize);

    resetViewport();
    resize();

    return function cleanup() {
      window.removeEventListener("resize", resize);
    };
  }

  var graphCleanup = null;

  function renderHomeGraph(data, currentSlug) {
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

    graphCleanup = renderGraphCanvas(graphHost, { nodes: nodes, links: links }, currentSlug);

    var stats = document.getElementById("relation-graph-stats");
    if (stats) {
      var parts = [
        "节点：" + (data.stats && data.stats.nodes ? data.stats.nodes : data.nodes.length),
        "连线：" + (data.stats && data.stats.links ? data.stats.links : data.links.length),
      ];
      if (subset.truncated) {
        parts.push("当前视图：" + nodes.length + " 节点");
      }
      stats.textContent = parts.join(" ｜ ");
    }
  }

  function decoratePage() {
    loadGraphData().then(function (data) {
      var idToNode = new Map((data.nodes || []).map(function (node) { return [node.id, node]; }));
      var currentSlug = resolveCurrentSlug(data);

      renderRightToc(currentSlug);
      renderBacklinks(data, currentSlug, idToNode);
      renderHomeGraph(data, currentSlug);
    });
  }

  if (window.gitbook && window.gitbook.events && window.gitbook.events.bind) {
    window.gitbook.events.bind("page.change", decoratePage);
  }

  document.addEventListener("DOMContentLoaded", decoratePage);
})();
