import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import { F as defu, t as kebabCase } from '../_/nitro.mjs';
import { e as nodeTextContent, h as htmlTags } from './server.mjs';
export { T as TEXT_TAGS, k as flatUnwrap, i as isTag, f as isText, g as nodeChildren, j as unwrap } from './server.mjs';
import remarkGFM from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import { detab } from 'detab';
import { normalizeUri } from 'micromark-util-sanitize-uri';
import { toString } from 'hast-util-to-string';
import Slugger from 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'vue';
import 'pinia';
import 'firebase/firestore';
import 'firebase/app';
import 'node:util';
import 'node:process';
import 'node:tty';
import '@posva/lru-cache';
import 'vuefire';
import '@iconify/vue';
import 'change-case/keys';
import 'change-case';
import 'vue/server-renderer';
import '@iconify/utils/lib/css/icon';
import 'property-information';
import 'firebase/analytics';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};
function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function parseThematicBlock(lang) {
  var _a, _b, _c;
  if (!(lang == null ? void 0 : lang.trim())) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[(.*)\]/);
  const meta = lang.replace((_a = languageMatches == null ? void 0 : languageMatches[0]) != null ? _a : "", "").replace((_b = highlightTokensMatches == null ? void 0 : highlightTokensMatches[0]) != null ? _b : "", "").replace((_c = filenameMatches == null ? void 0 : filenameMatches[0]) != null ? _c : "", "").trim();
  let filename = void 0;
  if (filenameMatches == null ? void 0 : filenameMatches[1]) {
    filename = filenameMatches[1].replace(/\\([[\]{}().*+?^$|])/g, "$1");
  }
  return {
    language: (languageMatches == null ? void 0 : languageMatches[0]) || void 0,
    highlights: parseHighlightedLines((highlightTokensMatches == null ? void 0 : highlightTokensMatches[1]) || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i2) => start + i2);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language = "text", highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language: language || "text",
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};
function html(state, node) {
  var _a;
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || ((_a = state.options) == null ? void 0 : _a.allowDangerousHtml)) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}
function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function inlineCode(state, node) {
  var _a, _b;
  const language = ((_a = node.attributes) == null ? void 0 : _a.language) || ((_b = node.attributes) == null ? void 0 : _b.lang);
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}
function containerComponent(state, node) {
  var _a;
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...(_a = node.data) == null ? void 0 : _a.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}
const handlers = {
  emphasis,
  code,
  link,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};
const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};
function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}
const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    var _a;
    if ((_a = header.children) == null ? void 0 : _a.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => {
    var _a;
    return {
      id: (_a = node.props) == null ? void 0 : _a.id,
      depth: getHeaderDepth(node),
      text: flattenNodeText(node)
    };
  });
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}
const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
function isAnchorLinkAllowed(value) {
  const decodedUrl = decodeURIComponent(value);
  const urlSanitized = decodedUrl.replace(/&#x([0-9a-f]+);?/gi, "").replace(/&#(\d+);?/g, "").replace(/&[a-z]+;?/gi, "");
  try {
    const url = new URL(urlSanitized, "http://example.com");
    if (url.origin === "http://example.com") {
      return true;
    }
    if (unsafeLinkPrefix.some((prefix) => url.protocol.toLowerCase().startsWith(prefix))) {
      return false;
    }
  } catch {
    return false;
  }
  return true;
}
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return isAnchorLinkAllowed(value);
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i2) => Number.parseInt(i2));
    }
  }
  return props;
};
function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    const position = ((_b = (_a = node.position) == null ? void 0 : _a.start) == null ? void 0 : _b.offset) && ((_d = (_c = node.position) == null ? void 0 : _c.end) == null ? void 0 : _d.offset) ? {
      start: node.position.start.offset,
      end: node.position.end.offset
    } : void 0;
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = (_e = node.children) == null ? void 0 : _e.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if ((_f = node.tagName) == null ? void 0 : _f.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(((_g = node.properties) == null ? void 0 : _g.id) || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && ((_h = node.content) == null ? void 0 : _h.children.length) ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      const result = {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
      if (options.keepPosition) {
        result.position = position;
      }
      return result;
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || ((_i = parent == null ? void 0 : parent.properties) == null ? void 0 : _i.emptyLinePlaceholder)) {
        return options.keepPosition ? { type: "text", value: node.value, position } : { type: "text", value: node.value };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return options.keepPosition ? { type: "comment", value: node.value, position } : { type: "comment", value: node.value };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => {
      var _a;
      return node.type === "comment" && ((_a = node.value) == null ? void 0 : _a.trim()) === "more";
    });
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}
let moduleOptions;
let generatedMdcConfigs;
const createParseProcessor = async (inlineOptions = {}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (!moduleOptions) {
    moduleOptions = await import(
      './virtual_nuxt_C__Users_Jakub_Schulz_Desktop_PROGRAMOWANIE_koronkowe-swieczki_.nuxt_mdc-imports-CfzcODwh.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await import(
      './virtual_nuxt_C__Users_Jakub_Schulz_Desktop_PROGRAMOWANIE_koronkowe-swieczki_.nuxt_mdc-configs-D-mPnyQ5.mjs'
      /* @vite-ignore */
    ).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu(inlineOptions, {
    remark: { plugins: moduleOptions == null ? void 0 : moduleOptions.remarkPlugins },
    rehype: { plugins: moduleOptions == null ? void 0 : moduleOptions.rehypePlugins },
    highlight: moduleOptions == null ? void 0 : moduleOptions.highlight
  }, defaults);
  if ((_b = (_a = options.rehype) == null ? void 0 : _a.plugins) == null ? void 0 : _b.highlight) {
    if (inlineOptions.highlight === false) {
      delete options.rehype.plugins.highlight;
    } else {
      options.rehype.plugins.highlight.options = {
        ...options.rehype.plugins.highlight.options || {},
        ...options.highlight || {}
      };
    }
  }
  let processor = unified();
  for (const config of mdcConfigs) {
    processor = await ((_d = (_c = config.unified) == null ? void 0 : _c.pre) == null ? void 0 : _d.call(_c, processor)) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs) {
    processor = await ((_f = (_e = config.unified) == null ? void 0 : _e.remark) == null ? void 0 : _f.call(_e, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_g = options.remark) == null ? void 0 : _g.plugins);
  processor.use(remark2rehype, (_h = options.rehype) == null ? void 0 : _h.options);
  for (const config of mdcConfigs) {
    processor = await ((_j = (_i = config.unified) == null ? void 0 : _i.rehype) == null ? void 0 : _j.call(_i, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_k = options.rehype) == null ? void 0 : _k.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs) {
    processor = await ((_m = (_l = config.unified) == null ? void 0 : _l.post) == null ? void 0 : _m.call(_l, processor)) || processor;
  }
  return processor;
};
const createMarkdownParser = async (inlineOptions = {}) => {
  const processor = await createParseProcessor(inlineOptions);
  return async function parse(md, { fileOptions } = {}) {
    var _a;
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "/tmp";
    const processedFile = await new Promise((resolve, reject) => {
      processor.process({ cwd, ...fileOptions, value: content, data: frontmatter }, (err, file) => {
        if (err) {
          reject(err);
        } else {
          resolve(file);
        }
      });
    });
    const parsedContent = processedFile == null ? void 0 : processedFile.result;
    const data = Object.assign(
      inlineOptions.contentHeading !== false ? contentHeading(parsedContent.body) : {},
      frontmatter,
      (processedFile == null ? void 0 : processedFile.data) || {}
    );
    const parsedResult = { data, body: parsedContent.body };
    const userTocOption = (_a = data.toc) != null ? _a : inlineOptions.toc;
    if (userTocOption !== false) {
      const tocOption = defu({}, userTocOption, defaults.toc);
      parsedResult.toc = generateToc(parsedContent.body, tocOption);
    }
    if (parsedContent.excerpt) {
      parsedResult.excerpt = parsedContent.excerpt;
    }
    return parsedResult;
  };
};
const parseMarkdown = async (md, markdownParserOptions = {}, parseOptions = {}) => {
  const parser = await createMarkdownParser(markdownParserOptions);
  return parser(md.replace(/\r\n/g, "\n"), parseOptions);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

export { createMarkdownParser, createParseProcessor, nodeTextContent, parseMarkdown };
//# sourceMappingURL=index-eyyXVjyM.mjs.map
