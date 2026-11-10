import { i as __toESM, t as __commonJSMin } from "./chunks/rolldown-runtime_DYf_mQCB.mjs";
import { C as CacheNotEnabled, G as MiddlewareNotAResponse, H as LocalsNotAnObject, M as GetStaticPathsExpectedParams, N as GetStaticPathsInvalidRouteParam, P as GetStaticPathsRequired, Q as NoManifestAvailable, R as InvalidGetStaticPathsEntry, S as AstroResponseHeadersReassigned, U as LocalsReassigned, W as MiddlewareNoDataOrNextCalled, _ as slash, a as collapseDuplicateSlashes, at as PrerenderDynamicEndpointPathCollide, b as ActionNotFoundError, c as hasFileExtension, ct as ResponseSentError, d as joinPaths, f as prependForwardSlash, g as removeTrailingForwardSlash, gt as isAstroError, ht as AstroError, i as collapseDuplicateLeadingSlashes, it as PrerenderClientAddressNotAvailable, j as ForbiddenRewrite, l as isInternalPath, lt as RewriteWithBodyUsed, m as removeLeadingForwardSlash, mt as i18nNoLocaleFoundInPath, n as matchPattern, o as collapseDuplicateTrailingSlashes, r as appendForwardSlash, rt as PageNumberParamNotFound, s as fileExtension, st as ReservedSlotName, tt as NoMatchingStaticPathFound, ut as StaticClientAddressNotAvailable, v as stripRequestBase, w as ClientAddressNotAvailable, x as ActionsReturnedInvalidDataError, y as trimSlashes, z as InvalidGetStaticPathsReturn } from "./chunks/remote_BNhAYZpA.mjs";
import { A as s, B as responseSentSymbol$1, D as isRoute3xx, E as getAssetsPrefix, F as REROUTABLE_STATUS_CODES, H as decryptString, I as STATUS_CODE_PAGES, L as clientAddressSymbol, M as ASTRO_GENERATOR, N as DEFAULT_404_COMPONENT, O as isRoute404, P as REDIRECT_STATUS_CODES, R as fetchStateSymbol, S as isAstroComponentFactory, T as renderEndpoint, U as generateCspDigest, V as decodeKey, a as renderPage, b as pushDirective, f as renderSlotToString, j as ASTRO_ERROR_HEADER, k as isRoute500, l as chunkToString, m as renderTemplate, n as AstroIntegrationLogger, o as renderJSX, p as isRenderTemplateResult, r as astroToRuntimeLogger, s as renderComponent, t as createConsoleLogger, u as createSlotValueFromString, v as isRenderInstruction, w as markHTMLString, y as normalizeCspResourceEntry, z as originPathnameSymbol } from "./chunks/console_DCWAR3Wv.mjs";
import React, { createElement, memo } from "react";
import ReactDOM from "react-dom/server";
// node_modules/.pnpm/@astrojs+vercel@11.0.20_ast_bf9dda9623edcbda38234a4c70a7f9f2/node_modules/@astrojs/vercel/dist/serverless/constants.js
/**
* The edge function calls the node server at /_render,
* with the original path as the value of this header.
*/
var ASTRO_PATH_HEADER = "x-astro-path";
var ASTRO_PATH_PARAM = "x_astro_path";
/**
* ISR functions receive the target path through the `x_astro_path` query
* parameter instead of a header. Because that parameter travels on the URL, it
* is accompanied by this token so the entrypoint can confirm the path override
* came from Astro's own build-time route rewrite rather than from an arbitrary
* caller. The value is the per-build `middlewareSecret`.
*/
var ASTRO_PATH_TOKEN_PARAM = "x_astro_path_token";
/**
* The edge function calls the node server at /_render,
* with the locals serialized into this header.
*/
var ASTRO_LOCALS_HEADER = "x-astro-locals";
var ASTRO_MIDDLEWARE_SECRET_HEADER = "x-astro-middleware-secret";
// \0virtual:astro-vercel:config
var middlewareSecret = "e08fd2cc-dd06-43ec-bc18-690d9db963f2";
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/noop-middleware.js
var NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
	return await next();
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/manifest.js
function deserializeManifest(serializedManifest, routesList) {
	const routes = [];
	if (serializedManifest.routes) for (const serializedRoute of serializedManifest.routes) routes.push({
		...serializedRoute,
		routeData: deserializeRouteData(serializedRoute.routeData)
	});
	if (routesList) for (const route of routesList?.routes) routes.push({
		file: "",
		links: [],
		scripts: [],
		styles: [],
		routeData: route
	});
	const assets = new Set(serializedManifest.assets);
	const componentMetadata = new Map(serializedManifest.componentMetadata);
	const inlinedScripts = new Map(serializedManifest.inlinedScripts);
	const clientDirectives = new Map(serializedManifest.clientDirectives);
	const key = decodeKey(serializedManifest.key);
	return {
		middleware() {
			return { onRequest: NOOP_MIDDLEWARE_FN };
		},
		...serializedManifest,
		rootDir: new URL(serializedManifest.rootDir),
		srcDir: new URL(serializedManifest.srcDir),
		publicDir: new URL(serializedManifest.publicDir),
		outDir: new URL(serializedManifest.outDir),
		cacheDir: new URL(serializedManifest.cacheDir),
		buildClientDir: new URL(serializedManifest.buildClientDir),
		buildServerDir: new URL(serializedManifest.buildServerDir),
		assets,
		componentMetadata,
		inlinedScripts,
		clientDirectives,
		routes,
		key
	};
}
function deserializeRouteData(rawRouteData) {
	return {
		route: rawRouteData.route,
		type: rawRouteData.type,
		pattern: new RegExp(rawRouteData.pattern),
		params: rawRouteData.params,
		component: rawRouteData.component,
		pathname: rawRouteData.pathname || void 0,
		segments: rawRouteData.segments,
		prerender: rawRouteData.prerender,
		redirect: rawRouteData.redirect,
		redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
		fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
			return deserializeRouteData(fallback);
		}),
		isIndex: rawRouteData.isIndex,
		origin: rawRouteData.origin,
		distURL: rawRouteData.distURL
	};
}
function deserializeRouteInfo(rawRouteInfo) {
	return {
		styles: rawRouteInfo.styles,
		file: rawRouteInfo.file,
		links: rawRouteInfo.links,
		scripts: rawRouteInfo.scripts,
		routeData: deserializeRouteData(rawRouteInfo.routeData)
	};
}
// \0astro:react:opts
var _astro_react_opts_default = {
	include: void 0,
	exclude: void 0,
	experimentalReactChildren: false,
	experimentalDisableStreaming: false
};
// node_modules/.pnpm/@astrojs+react@7.1.4_@types_7066c29ed3aaa9e9101a0f5f7d5eac33/node_modules/@astrojs/react/dist/context.js
var contexts = /* @__PURE__ */ new WeakMap();
var ID_PREFIX = "r";
function getContext(rendererContextResult) {
	if (contexts.has(rendererContextResult)) return contexts.get(rendererContextResult);
	const ctx = {
		currentIndex: 0,
		get id() {
			return ID_PREFIX + this.currentIndex.toString();
		}
	};
	contexts.set(rendererContextResult, ctx);
	return ctx;
}
function incrementId(rendererContextResult) {
	const ctx = getContext(rendererContextResult);
	const id = ctx.id;
	ctx.currentIndex++;
	return id;
}
// node_modules/.pnpm/@astrojs+react@7.1.4_@types_7066c29ed3aaa9e9101a0f5f7d5eac33/node_modules/@astrojs/react/dist/static-html.js
/**
* Astro passes `children` as a string of HTML, so we need
* a wrapper `div` to render that content as VNodes.
*
* As a bonus, we can signal to React that this subtree is
* entirely static and will never change via `shouldComponentUpdate`.
*/
var StaticHtml = ({ value, name, hydrate = true }) => {
	if (value == null || value.trim() === "") return null;
	return createElement(hydrate ? "astro-slot" : "astro-static-slot", {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value }
	});
};
/**
* React.memo is the modern functional equivalent of shouldComponentUpdate.
*
* By returning `true` in the comparison function (the second argument),
* we tell React that the props are "equal" and it should skip re-rendering,
* effectively making this subtree static.
*/
var static_html_default = memo(StaticHtml, () => true);
// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/constants.js
var require_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var WIN_SLASH = "\\\\/";
	var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
	var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
	/**
	* Posix glob regex
	*/
	var DOT_LITERAL = "\\.";
	var PLUS_LITERAL = "\\+";
	var QMARK_LITERAL = "\\?";
	var SLASH_LITERAL = "\\/";
	var ONE_CHAR = "(?=.)";
	var QMARK = "[^/]";
	var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
	var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
	var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
	var POSIX_CHARS = {
		DOT_LITERAL,
		PLUS_LITERAL,
		QMARK_LITERAL,
		SLASH_LITERAL,
		ONE_CHAR,
		QMARK,
		END_ANCHOR,
		DOTS_SLASH,
		NO_DOT: `(?!${DOT_LITERAL})`,
		NO_DOTS: `(?!${START_ANCHOR}${DOTS_SLASH})`,
		NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`,
		NO_DOTS_SLASH: `(?!${DOTS_SLASH})`,
		QMARK_NO_DOT: `[^.${SLASH_LITERAL}]`,
		STAR: `${QMARK}*?`,
		START_ANCHOR,
		SEP: "/"
	};
	/**
	* Windows glob regex
	*/
	var WINDOWS_CHARS = {
		...POSIX_CHARS,
		SLASH_LITERAL: `[${WIN_SLASH}]`,
		QMARK: WIN_NO_SLASH,
		STAR: `${WIN_NO_SLASH}*?`,
		DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
		NO_DOT: `(?!${DOT_LITERAL})`,
		NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
		NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
		NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
		QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
		START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
		END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
		SEP: "\\"
	};
	module.exports = {
		DEFAULT_MAX_EXTGLOB_RECURSION,
		MAX_LENGTH: 65536,
		POSIX_REGEX_SOURCE: {
			__proto__: null,
			alnum: "a-zA-Z0-9",
			alpha: "a-zA-Z",
			ascii: "\\x00-\\x7F",
			blank: " \\t",
			cntrl: "\\x00-\\x1F\\x7F",
			digit: "0-9",
			graph: "\\x21-\\x7E",
			lower: "a-z",
			print: "\\x20-\\x7E ",
			punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
			space: " \\t\\r\\n\\v\\f",
			upper: "A-Z",
			word: "A-Za-z0-9_",
			xdigit: "A-Fa-f0-9"
		},
		REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
		REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
		REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
		REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
		REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
		REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
		REPLACEMENTS: {
			__proto__: null,
			"***": "*",
			"**/**": "**",
			"**/**/**": "**"
		},
		CHAR_0: 48,
		CHAR_9: 57,
		CHAR_UPPERCASE_A: 65,
		CHAR_LOWERCASE_A: 97,
		CHAR_UPPERCASE_Z: 90,
		CHAR_LOWERCASE_Z: 122,
		CHAR_LEFT_PARENTHESES: 40,
		CHAR_RIGHT_PARENTHESES: 41,
		CHAR_ASTERISK: 42,
		CHAR_AMPERSAND: 38,
		CHAR_AT: 64,
		CHAR_BACKWARD_SLASH: 92,
		CHAR_CARRIAGE_RETURN: 13,
		CHAR_CIRCUMFLEX_ACCENT: 94,
		CHAR_COLON: 58,
		CHAR_COMMA: 44,
		CHAR_DOT: 46,
		CHAR_DOUBLE_QUOTE: 34,
		CHAR_EQUAL: 61,
		CHAR_EXCLAMATION_MARK: 33,
		CHAR_FORM_FEED: 12,
		CHAR_FORWARD_SLASH: 47,
		CHAR_GRAVE_ACCENT: 96,
		CHAR_HASH: 35,
		CHAR_HYPHEN_MINUS: 45,
		CHAR_LEFT_ANGLE_BRACKET: 60,
		CHAR_LEFT_CURLY_BRACE: 123,
		CHAR_LEFT_SQUARE_BRACKET: 91,
		CHAR_LINE_FEED: 10,
		CHAR_NO_BREAK_SPACE: 160,
		CHAR_PERCENT: 37,
		CHAR_PLUS: 43,
		CHAR_QUESTION_MARK: 63,
		CHAR_RIGHT_ANGLE_BRACKET: 62,
		CHAR_RIGHT_CURLY_BRACE: 125,
		CHAR_RIGHT_SQUARE_BRACKET: 93,
		CHAR_SEMICOLON: 59,
		CHAR_SINGLE_QUOTE: 39,
		CHAR_SPACE: 32,
		CHAR_TAB: 9,
		CHAR_UNDERSCORE: 95,
		CHAR_VERTICAL_LINE: 124,
		CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
		/**
		* Create EXTGLOB_CHARS
		*/
		extglobChars(chars) {
			return {
				"!": {
					type: "negate",
					open: "(?:(?!(?:",
					close: `))${chars.STAR})`
				},
				"?": {
					type: "qmark",
					open: "(?:",
					close: ")?"
				},
				"+": {
					type: "plus",
					open: "(?:",
					close: ")+"
				},
				"*": {
					type: "star",
					open: "(?:",
					close: ")*"
				},
				"@": {
					type: "at",
					open: "(?:",
					close: ")"
				}
			};
		},
		/**
		* Create GLOB_CHARS
		*/
		globChars(win32) {
			return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
		}
	};
}));
// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	var { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = require_constants();
	exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
	exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
	exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
	exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
	exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
	exports.isWindows = () => {
		if (typeof navigator !== "undefined" && navigator.platform) {
			const platform = navigator.platform.toLowerCase();
			return platform === "win32" || platform === "windows";
		}
		if (typeof process !== "undefined" && process.platform) return process.platform === "win32";
		return false;
	};
	exports.removeBackslashes = (str) => {
		return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
			return match === "\\" ? "" : match;
		});
	};
	exports.escapeLast = (input, char, lastIdx) => {
		const idx = input.lastIndexOf(char, lastIdx);
		if (idx === -1) return input;
		if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
		return `${input.slice(0, idx)}\\${input.slice(idx)}`;
	};
	exports.removePrefix = (input, state = {}) => {
		let output = input;
		if (output.startsWith("./")) {
			output = output.slice(2);
			state.prefix = "./";
		}
		return output;
	};
	exports.wrapOutput = (input, state = {}, options = {}) => {
		let output = `${options.contains ? "" : "^"}(?:${input})${options.contains ? "" : "$"}`;
		if (state.negated === true) output = `(?:^(?!${output}).*$)`;
		return output;
	};
	exports.basename = (path, { windows } = {}) => {
		const segs = path.split(windows ? /[\\/]/ : "/");
		const last = segs[segs.length - 1];
		if (last === "") return segs[segs.length - 2];
		return last;
	};
}));
// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/scan.js
var require_scan = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var utils = require_utils();
	var { CHAR_ASTERISK, CHAR_AT, CHAR_BACKWARD_SLASH, CHAR_COMMA, CHAR_DOT, CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS, CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET } = require_constants();
	var isPathSeparator = (code) => {
		return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};
	var depth = (token) => {
		if (token.isPrefix !== true) token.depth = token.isGlobstar ? Infinity : 1;
	};
	/**
	* Quickly scans a glob pattern and returns an object with a handful of
	* useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	* `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	* with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	*
	* ```js
	* const pm = require('picomatch');
	* console.log(pm.scan('foo/bar/*.js'));
	* { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	* ```
	* @param {String} `str`
	* @param {Object} `options`
	* @return {Object} Returns an object with tokens and regex source string.
	* @api public
	*/
	var scan = (input, options) => {
		const opts = options || {};
		const length = input.length - 1;
		const scanToEnd = opts.parts === true || opts.tokens === true || opts.scanToEnd === true;
		const slashes = [];
		const tokens = [];
		const parts = [];
		let str = input;
		let index = -1;
		let start = 0;
		let lastIndex = 0;
		let isBrace = false;
		let isBracket = false;
		let isGlob = false;
		let isExtglob = false;
		let isGlobstar = false;
		let braceEscaped = false;
		let backslashes = false;
		let negated = false;
		let negatedExtglob = false;
		let finished = false;
		let braces = 0;
		let prev;
		let code;
		let token = {
			value: "",
			depth: 0,
			isGlob: false
		};
		const eos = () => index >= length;
		const peek = () => str.charCodeAt(index + 1);
		const advance = () => {
			prev = code;
			return str.charCodeAt(++index);
		};
		while (index < length) {
			code = advance();
			let next;
			if (code === CHAR_BACKWARD_SLASH) {
				backslashes = token.backslashes = true;
				code = advance();
				if (code === CHAR_LEFT_CURLY_BRACE) braceEscaped = true;
				continue;
			}
			if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
				braces++;
				while (eos() !== true && (code = advance())) {
					if (code === CHAR_BACKWARD_SLASH) {
						backslashes = token.backslashes = true;
						advance();
						continue;
					}
					if (code === CHAR_LEFT_CURLY_BRACE) {
						braces++;
						continue;
					}
					if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
						isBrace = token.isBrace = true;
						isGlob = token.isGlob = true;
						finished = true;
						if (scanToEnd === true) continue;
						break;
					}
					if (braceEscaped !== true && code === CHAR_COMMA) {
						isBrace = token.isBrace = true;
						isGlob = token.isGlob = true;
						finished = true;
						if (scanToEnd === true) continue;
						break;
					}
					if (code === CHAR_RIGHT_CURLY_BRACE) {
						braces--;
						if (braces === 0) {
							braceEscaped = false;
							isBrace = token.isBrace = true;
							finished = true;
							break;
						}
					}
				}
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_FORWARD_SLASH) {
				slashes.push(index);
				tokens.push(token);
				token = {
					value: "",
					depth: 0,
					isGlob: false
				};
				if (finished === true) continue;
				if (prev === CHAR_DOT && index === start + 1) {
					start += 2;
					continue;
				}
				lastIndex = index + 1;
				continue;
			}
			if (opts.noext !== true) {
				if ((code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK) === true && peek() === CHAR_LEFT_PARENTHESES) {
					isGlob = token.isGlob = true;
					isExtglob = token.isExtglob = true;
					finished = true;
					if (code === CHAR_EXCLAMATION_MARK && index === start) negatedExtglob = true;
					if (scanToEnd === true) {
						let parens = 0;
						while (eos() !== true && (code = advance())) {
							if (code === CHAR_BACKWARD_SLASH) {
								backslashes = token.backslashes = true;
								advance();
								continue;
							}
							if (code === CHAR_LEFT_PARENTHESES) {
								parens++;
								continue;
							}
							if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
								finished = true;
								break;
							}
						}
						continue;
					}
					break;
				}
			}
			if (code === CHAR_ASTERISK) {
				if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
				isGlob = token.isGlob = true;
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_QUESTION_MARK) {
				isGlob = token.isGlob = true;
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_LEFT_SQUARE_BRACKET) {
				while (eos() !== true && (next = advance())) {
					if (next === CHAR_BACKWARD_SLASH) {
						backslashes = token.backslashes = true;
						advance();
						continue;
					}
					if (next === CHAR_RIGHT_SQUARE_BRACKET) {
						isBracket = token.isBracket = true;
						isGlob = token.isGlob = true;
						finished = true;
						break;
					}
				}
				if (scanToEnd === true) continue;
				break;
			}
			if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
				negated = token.negated = true;
				start++;
				continue;
			}
			if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
				isGlob = token.isGlob = true;
				if (scanToEnd === true) {
					let parens = 1;
					while (eos() !== true && (code = advance())) {
						if (code === CHAR_BACKWARD_SLASH) {
							backslashes = token.backslashes = true;
							advance();
							continue;
						}
						if (code === CHAR_LEFT_PARENTHESES) {
							parens++;
							continue;
						}
						if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
							finished = true;
							break;
						}
					}
					continue;
				}
				break;
			}
			if (isGlob === true) {
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
		}
		if (opts.noext === true) {
			isExtglob = false;
			isGlob = false;
		}
		let base = str;
		let prefix = "";
		let glob = "";
		if (start > 0) {
			prefix = str.slice(0, start);
			str = str.slice(start);
			lastIndex -= start;
		}
		if (base && isGlob === true && lastIndex > 0) {
			base = str.slice(0, lastIndex);
			glob = str.slice(lastIndex);
		} else if (isGlob === true) {
			base = "";
			glob = str;
		} else base = str;
		if (base && base !== "" && base !== "/" && base !== str) {
			if (isPathSeparator(base.charCodeAt(base.length - 1))) base = base.slice(0, -1);
		}
		if (opts.unescape === true) {
			if (glob) glob = utils.removeBackslashes(glob);
			if (base && backslashes === true) base = utils.removeBackslashes(base);
		}
		const state = {
			prefix,
			input,
			start,
			base,
			glob,
			isBrace,
			isBracket,
			isGlob,
			isExtglob,
			isGlobstar,
			negated,
			negatedExtglob
		};
		if (opts.tokens === true) {
			state.maxDepth = 0;
			if (!isPathSeparator(code)) tokens.push(token);
			state.tokens = tokens;
		}
		if (opts.parts === true || opts.tokens === true) {
			let prevIndex;
			for (let idx = 0; idx < slashes.length; idx++) {
				const n = prevIndex !== void 0 ? prevIndex + 1 : start;
				const i = slashes[idx];
				const value = input.slice(n, i);
				if (opts.tokens) {
					if (idx === 0 && start !== 0) {
						tokens[idx].isPrefix = true;
						tokens[idx].value = prefix;
					} else tokens[idx].value = value;
					depth(tokens[idx]);
					state.maxDepth += tokens[idx].depth;
				}
				if (i >= start) {
					parts.push(value);
					prevIndex = i;
				}
			}
			const n = prevIndex !== void 0 ? prevIndex + 1 : start;
			const value = input.slice(n);
			parts.push(value);
			if (opts.tokens && prevIndex && prevIndex + 1 < input.length) {
				tokens[tokens.length - 1].value = value;
				depth(tokens[tokens.length - 1]);
				state.maxDepth += tokens[tokens.length - 1].depth;
			}
			state.slashes = slashes;
			state.parts = parts;
		}
		return state;
	};
	module.exports = scan;
}));
// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constants = require_constants();
	var utils = require_utils();
	/**
	* Constants
	*/
	var { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants;
	/**
	* Helpers
	*/
	var expandRange = (args, options) => {
		if (typeof options.expandRange === "function") return options.expandRange(...args, options);
		args.sort();
		const value = `[${args.join("-")}]`;
		try {
			new RegExp(value);
		} catch (ex) {
			return args.map((v) => utils.escapeRegex(v)).join("..");
		}
		return value;
	};
	/**
	* Create the message for a syntax error
	*/
	var syntaxError = (type, char) => {
		return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
	};
	var splitTopLevel = (input) => {
		const parts = [];
		let bracket = 0;
		let paren = 0;
		let quote = 0;
		let value = "";
		let escaped = false;
		for (const ch of input) {
			if (escaped === true) {
				value += ch;
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				value += ch;
				escaped = true;
				continue;
			}
			if (ch === "\"") {
				quote = quote === 1 ? 0 : 1;
				value += ch;
				continue;
			}
			if (quote === 0) {
				if (ch === "[") bracket++;
				else if (ch === "]" && bracket > 0) bracket--;
				else if (bracket === 0) {
					if (ch === "(") paren++;
					else if (ch === ")" && paren > 0) paren--;
					else if (ch === "|" && paren === 0) {
						parts.push(value);
						value = "";
						continue;
					}
				}
			}
			value += ch;
		}
		parts.push(value);
		return parts;
	};
	var isPlainBranch = (branch) => {
		let escaped = false;
		for (const ch of branch) {
			if (escaped === true) {
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				escaped = true;
				continue;
			}
			if (/[?*+@!()[\]{}]/.test(ch)) return false;
		}
		return true;
	};
	var normalizeSimpleBranch = (branch) => {
		let value = branch.trim();
		let changed = true;
		while (changed === true) {
			changed = false;
			if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
				value = value.slice(2, -1);
				changed = true;
			}
		}
		if (!isPlainBranch(value)) return;
		return value.replace(/\\(.)/g, "$1");
	};
	var hasRepeatedCharPrefixOverlap = (branches) => {
		const values = branches.map(normalizeSimpleBranch).filter(Boolean);
		for (let i = 0; i < values.length; i++) for (let j = i + 1; j < values.length; j++) {
			const a = values[i];
			const b = values[j];
			const char = a[0];
			if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) continue;
			if (a === b || a.startsWith(b) || b.startsWith(a)) return true;
		}
		return false;
	};
	var parseRepeatedExtglob = (pattern, requireEnd = true) => {
		if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") return;
		let bracket = 0;
		let paren = 0;
		let quote = 0;
		let escaped = false;
		for (let i = 1; i < pattern.length; i++) {
			const ch = pattern[i];
			if (escaped === true) {
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				escaped = true;
				continue;
			}
			if (ch === "\"") {
				quote = quote === 1 ? 0 : 1;
				continue;
			}
			if (quote === 1) continue;
			if (ch === "[") {
				bracket++;
				continue;
			}
			if (ch === "]" && bracket > 0) {
				bracket--;
				continue;
			}
			if (bracket > 0) continue;
			if (ch === "(") {
				paren++;
				continue;
			}
			if (ch === ")") {
				paren--;
				if (paren === 0) {
					if (requireEnd === true && i !== pattern.length - 1) return;
					return {
						type: pattern[0],
						body: pattern.slice(2, i),
						end: i
					};
				}
			}
		}
	};
	var buildCharClassStar = (chars) => {
		return `${chars.length === 1 ? utils.escapeRegex(chars[0]) : `[${chars.map((ch) => utils.escapeRegex(ch)).join("")}]`}*`;
	};
	var getStarExtglobSequenceChars = (pattern) => {
		let index = 0;
		const chars = [];
		while (index < pattern.length) {
			const match = parseRepeatedExtglob(pattern.slice(index), false);
			if (!match || match.type !== "*") return;
			const branches = splitTopLevel(match.body).map((branch) => branch.trim());
			if (branches.length !== 1) return;
			const branch = normalizeSimpleBranch(branches[0]);
			if (!branch || branch.length !== 1) return;
			chars.push(branch);
			index += match.end + 1;
		}
		if (chars.length < 1) return;
		return chars;
	};
	var repeatedExtglobRecursion = (pattern) => {
		let depth = 0;
		let value = pattern.trim();
		let match = parseRepeatedExtglob(value);
		while (match) {
			depth++;
			value = match.body.trim();
			match = parseRepeatedExtglob(value);
		}
		return depth;
	};
	var analyzeRepeatedExtglob = (body, options) => {
		if (options.maxExtglobRecursion === false) return { risky: false };
		const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
		const branches = splitTopLevel(body).map((branch) => branch.trim());
		if (branches.length > 1) {
			if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) return { risky: true };
		}
		const safeChars = [];
		let sawStarSequence = false;
		let combinable = true;
		for (const branch of branches) {
			const chars = getStarExtglobSequenceChars(branch);
			if (chars) {
				sawStarSequence = true;
				safeChars.push(...chars);
				continue;
			}
			const literal = normalizeSimpleBranch(branch);
			if (literal && literal.length === 1) {
				safeChars.push(literal);
				continue;
			}
			combinable = false;
			if (repeatedExtglobRecursion(branch) > max) return { risky: true };
		}
		if (sawStarSequence) return combinable ? {
			risky: true,
			safeOutput: buildCharClassStar([...new Set(safeChars)])
		} : { risky: true };
		return { risky: false };
	};
	/**
	* Parse the given input string.
	* @param {String} input
	* @param {Object} options
	* @return {Object}
	*/
	var parse = (input, options) => {
		if (typeof input !== "string") throw new TypeError("Expected a string");
		input = REPLACEMENTS[input] || input;
		const opts = { ...options };
		const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
		let len = input.length;
		if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
		const bos = {
			type: "bos",
			value: "",
			output: opts.prepend || ""
		};
		const tokens = [bos];
		const capture = opts.capture ? "" : "?:";
		const PLATFORM_CHARS = constants.globChars(opts.windows);
		const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
		const { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS;
		const globstar = (opts) => {
			return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
		};
		const nodot = opts.dot ? "" : NO_DOT;
		const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
		let star = opts.bash === true ? globstar(opts) : STAR;
		if (opts.capture) star = `(${star})`;
		if (typeof opts.noext === "boolean") opts.noextglob = opts.noext;
		const state = {
			input,
			index: -1,
			start: 0,
			dot: opts.dot === true,
			consumed: "",
			output: "",
			prefix: "",
			backtrack: false,
			negated: false,
			brackets: 0,
			braces: 0,
			parens: 0,
			quotes: 0,
			globstar: false,
			tokens
		};
		input = utils.removePrefix(input, state);
		len = input.length;
		const extglobs = [];
		const braces = [];
		const stack = [];
		let prev = bos;
		let value;
		/**
		* Tokenizing helpers
		*/
		const eos = () => state.index === len - 1;
		const peek = state.peek = (n = 1) => input[state.index + n];
		const advance = state.advance = () => input[++state.index] || "";
		const remaining = () => input.slice(state.index + 1);
		const consume = (value = "", num = 0) => {
			state.consumed += value;
			state.index += num;
		};
		const append = (token) => {
			state.output += token.output != null ? token.output : token.value;
			consume(token.value);
		};
		const negate = () => {
			let count = 1;
			while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
				advance();
				state.start++;
				count++;
			}
			if (count % 2 === 0) return false;
			state.negated = true;
			state.start++;
			return true;
		};
		const increment = (type) => {
			state[type]++;
			stack.push(type);
		};
		const decrement = (type) => {
			state[type]--;
			stack.pop();
		};
		/**
		* Push tokens onto the tokens array. This helper speeds up
		* tokenizing by 1) helping us avoid backtracking as much as possible,
		* and 2) helping us avoid creating extra tokens when consecutive
		* characters are plain text. This improves performance and simplifies
		* lookbehinds.
		*/
		const push = (tok) => {
			if (prev.type === "globstar") {
				const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
				const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
				if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
					state.output = state.output.slice(0, -prev.output.length);
					prev.type = "star";
					prev.value = "*";
					prev.output = star;
					state.output += prev.output;
				}
			}
			if (extglobs.length && tok.type !== "paren") extglobs[extglobs.length - 1].inner += tok.value;
			if (tok.value || tok.output) append(tok);
			if (prev && prev.type === "text" && tok.type === "text") {
				prev.output = (prev.output || prev.value) + tok.value;
				prev.value += tok.value;
				return;
			}
			tok.prev = prev;
			tokens.push(tok);
			prev = tok;
		};
		const extglobOpen = (type, value) => {
			const token = {
				...EXTGLOB_CHARS[value],
				conditions: 1,
				inner: ""
			};
			token.prev = prev;
			token.parens = state.parens;
			token.output = state.output;
			token.startIndex = state.index;
			token.tokensIndex = tokens.length;
			const output = (opts.capture ? "(" : "") + token.open;
			increment("parens");
			push({
				type,
				value,
				output: state.output ? "" : ONE_CHAR
			});
			push({
				type: "paren",
				extglob: true,
				value: advance(),
				output
			});
			extglobs.push(token);
		};
		const extglobClose = (token) => {
			const literal = input.slice(token.startIndex, state.index + 1);
			const analysis = analyzeRepeatedExtglob(input.slice(token.startIndex + 2, state.index), opts);
			if ((token.type === "plus" || token.type === "star") && analysis.risky) {
				const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
				const open = tokens[token.tokensIndex];
				open.type = "text";
				open.value = literal;
				open.output = safeOutput || utils.escapeRegex(literal);
				for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
					tokens[i].value = "";
					tokens[i].output = "";
					delete tokens[i].suffix;
				}
				state.output = token.output + open.output;
				state.backtrack = true;
				push({
					type: "paren",
					extglob: true,
					value,
					output: ""
				});
				decrement("parens");
				return;
			}
			let output = token.close + (opts.capture ? ")" : "");
			let rest;
			if (token.type === "negate") {
				let extglobStar = star;
				if (token.inner && token.inner.length > 1 && token.inner.includes("/")) extglobStar = globstar(opts);
				if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) output = token.close = `)$))${extglobStar}`;
				if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) output = token.close = `)${parse(rest, {
					...options,
					fastpaths: false
				}).output})${extglobStar})`;
				if (token.prev.type === "bos") state.negatedExtglob = true;
			}
			push({
				type: "paren",
				extglob: true,
				value,
				output
			});
			decrement("parens");
		};
		/**
		* Fast paths
		*/
		if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
			let backslashes = false;
			let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
				if (first === "\\") {
					backslashes = true;
					return m;
				}
				if (first === "?") {
					if (esc) return esc + first + (rest ? QMARK.repeat(rest.length) : "");
					if (index === 0) return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
					return QMARK.repeat(chars.length);
				}
				if (first === ".") return DOT_LITERAL.repeat(chars.length);
				if (first === "*") {
					if (esc) return esc + first + (rest ? star : "");
					return star;
				}
				return esc ? m : `\\${m}`;
			});
			if (backslashes === true) {
				if (opts.unescape === true) output = output.replace(/\\/g, "");
				else output = output.replace(/\\+/g, (m) => {
					return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
				});
			}
			if (output === input && opts.contains === true) {
				state.output = input;
				return state;
			}
			state.output = utils.wrapOutput(output, state, options);
			return state;
		}
		/**
		* Tokenize input until we reach end-of-string
		*/
		while (!eos()) {
			value = advance();
			if (value === "\0") continue;
			/**
			* Escaped characters
			*/
			if (value === "\\") {
				const next = peek();
				if (next === "/" && opts.bash !== true) continue;
				if (next === "." || next === ";") continue;
				if (!next) {
					value += "\\";
					push({
						type: "text",
						value
					});
					continue;
				}
				const match = /^\\+/.exec(remaining());
				let slashes = 0;
				if (match && match[0].length > 2) {
					slashes = match[0].length;
					state.index += slashes;
					if (slashes % 2 !== 0) value += "\\";
				}
				if (opts.unescape === true) value = advance();
				else value += advance();
				if (state.brackets === 0) {
					push({
						type: "text",
						value
					});
					continue;
				}
			}
			/**
			* If we're inside a regex character class, continue
			* until we reach the closing bracket.
			*/
			if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
				if (opts.posix !== false && value === ":") {
					const inner = prev.value.slice(1);
					if (inner.includes("[")) {
						prev.posix = true;
						if (inner.includes(":")) {
							const idx = prev.value.lastIndexOf("[");
							const pre = prev.value.slice(0, idx);
							const posix = POSIX_REGEX_SOURCE[prev.value.slice(idx + 2)];
							if (posix) {
								prev.value = pre + posix;
								state.backtrack = true;
								advance();
								if (!bos.output && tokens.indexOf(prev) === 1) bos.output = ONE_CHAR;
								continue;
							}
						}
					}
				}
				if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") value = `\\${value}`;
				if (value === "]" && (prev.value === "[" || prev.value === "[^")) value = `\\${value}`;
				if (opts.posix === true && value === "!" && prev.value === "[") value = "^";
				prev.value += value;
				append({ value });
				continue;
			}
			/**
			* If we're inside a quoted string, continue
			* until we reach the closing double quote.
			*/
			if (state.quotes === 1 && value !== "\"") {
				value = utils.escapeRegex(value);
				prev.value += value;
				append({ value });
				continue;
			}
			/**
			* Double quotes
			*/
			if (value === "\"") {
				state.quotes = state.quotes === 1 ? 0 : 1;
				if (opts.keepQuotes === true) push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Parentheses
			*/
			if (value === "(") {
				increment("parens");
				push({
					type: "paren",
					value
				});
				continue;
			}
			if (value === ")") {
				if (state.parens === 0 && opts.strictBrackets === true) throw new SyntaxError(syntaxError("opening", "("));
				const extglob = extglobs[extglobs.length - 1];
				if (extglob && state.parens === extglob.parens + 1) {
					extglobClose(extglobs.pop());
					continue;
				}
				push({
					type: "paren",
					value,
					output: state.parens ? ")" : "\\)"
				});
				decrement("parens");
				continue;
			}
			/**
			* Square brackets
			*/
			if (value === "[") {
				if (opts.nobracket === true || !remaining().includes("]")) {
					if (opts.nobracket !== true && opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
					value = `\\${value}`;
				} else increment("brackets");
				push({
					type: "bracket",
					value
				});
				continue;
			}
			if (value === "]") {
				if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
					push({
						type: "text",
						value,
						output: `\\${value}`
					});
					continue;
				}
				if (state.brackets === 0) {
					if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("opening", "["));
					push({
						type: "text",
						value,
						output: `\\${value}`
					});
					continue;
				}
				decrement("brackets");
				const prevValue = prev.value.slice(1);
				if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) value = `/${value}`;
				prev.value += value;
				append({ value });
				if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) continue;
				const escaped = utils.escapeRegex(prev.value);
				state.output = state.output.slice(0, -prev.value.length);
				if (opts.literalBrackets === true) {
					state.output += escaped;
					prev.value = escaped;
					continue;
				}
				prev.value = `(${capture}${escaped}|${prev.value})`;
				state.output += prev.value;
				continue;
			}
			/**
			* Braces
			*/
			if (value === "{" && opts.nobrace !== true) {
				increment("braces");
				const open = {
					type: "brace",
					value,
					output: "(",
					outputIndex: state.output.length,
					tokensIndex: state.tokens.length
				};
				braces.push(open);
				push(open);
				continue;
			}
			if (value === "}") {
				const brace = braces[braces.length - 1];
				if (opts.nobrace === true || !brace) {
					push({
						type: "text",
						value,
						output: value
					});
					continue;
				}
				let output = ")";
				if (brace.dots === true) {
					const arr = tokens.slice();
					const range = [];
					for (let i = arr.length - 1; i >= 0; i--) {
						tokens.pop();
						if (arr[i].type === "brace") break;
						if (arr[i].type !== "dots") range.unshift(arr[i].value);
					}
					output = expandRange(range, opts);
					state.backtrack = true;
				}
				if (brace.comma !== true && brace.dots !== true) {
					const out = state.output.slice(0, brace.outputIndex);
					const toks = state.tokens.slice(brace.tokensIndex);
					brace.value = brace.output = "\\{";
					value = output = "\\}";
					state.output = out;
					for (const t of toks) state.output += t.output || t.value;
				}
				push({
					type: "brace",
					value,
					output
				});
				decrement("braces");
				braces.pop();
				continue;
			}
			/**
			* Pipes
			*/
			if (value === "|") {
				if (extglobs.length > 0) extglobs[extglobs.length - 1].conditions++;
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Commas
			*/
			if (value === ",") {
				let output = value;
				const brace = braces[braces.length - 1];
				if (brace && stack[stack.length - 1] === "braces") {
					brace.comma = true;
					output = "|";
				}
				push({
					type: "comma",
					value,
					output
				});
				continue;
			}
			/**
			* Slashes
			*/
			if (value === "/") {
				if (prev.type === "dot" && state.index === state.start + 1) {
					state.start = state.index + 1;
					state.consumed = "";
					state.output = "";
					tokens.pop();
					prev = bos;
					continue;
				}
				push({
					type: "slash",
					value,
					output: SLASH_LITERAL
				});
				continue;
			}
			/**
			* Dots
			*/
			if (value === ".") {
				if (state.braces > 0 && prev.type === "dot") {
					if (prev.value === ".") prev.output = DOT_LITERAL;
					const brace = braces[braces.length - 1];
					prev.type = "dots";
					prev.output += value;
					prev.value += value;
					brace.dots = true;
					continue;
				}
				if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
					push({
						type: "text",
						value,
						output: DOT_LITERAL
					});
					continue;
				}
				push({
					type: "dot",
					value,
					output: DOT_LITERAL
				});
				continue;
			}
			/**
			* Question marks
			*/
			if (value === "?") {
				if (!(prev && prev.value === "(") && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					extglobOpen("qmark", value);
					continue;
				}
				if (prev && prev.type === "paren") {
					const next = peek();
					let output = value;
					if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) output = `\\${value}`;
					push({
						type: "text",
						value,
						output
					});
					continue;
				}
				if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
					push({
						type: "qmark",
						value,
						output: QMARK_NO_DOT
					});
					continue;
				}
				push({
					type: "qmark",
					value,
					output: QMARK
				});
				continue;
			}
			/**
			* Exclamation
			*/
			if (value === "!") {
				if (opts.noextglob !== true && peek() === "(") {
					if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
						extglobOpen("negate", value);
						continue;
					}
				}
				if (opts.nonegate !== true && state.index === 0) {
					negate();
					continue;
				}
			}
			/**
			* Plus
			*/
			if (value === "+") {
				if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					extglobOpen("plus", value);
					continue;
				}
				if (prev && prev.value === "(" || opts.regex === false) {
					push({
						type: "plus",
						value,
						output: PLUS_LITERAL
					});
					continue;
				}
				if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
					push({
						type: "plus",
						value
					});
					continue;
				}
				push({
					type: "plus",
					value: PLUS_LITERAL
				});
				continue;
			}
			/**
			* Plain text
			*/
			if (value === "@") {
				if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					push({
						type: "at",
						extglob: true,
						value,
						output: ""
					});
					continue;
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Plain text
			*/
			if (value !== "*") {
				if (value === "$" || value === "^") value = `\\${value}`;
				const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
				if (match) {
					value += match[0];
					state.index += match[0].length;
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Stars
			*/
			if (prev && (prev.type === "globstar" || prev.star === true)) {
				prev.type = "star";
				prev.star = true;
				prev.value += value;
				prev.output = star;
				state.backtrack = true;
				state.globstar = true;
				consume(value);
				continue;
			}
			let rest = remaining();
			if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
				extglobOpen("star", value);
				continue;
			}
			if (prev.type === "star") {
				if (opts.noglobstar === true) {
					consume(value);
					continue;
				}
				const prior = prev.prev;
				const before = prior.prev;
				const isStart = prior.type === "slash" || prior.type === "bos";
				const afterStar = before && (before.type === "star" || before.type === "globstar");
				if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
					push({
						type: "star",
						value,
						output: ""
					});
					continue;
				}
				const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
				const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
				if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
					push({
						type: "star",
						value,
						output: ""
					});
					continue;
				}
				while (rest.slice(0, 3) === "/**") {
					const after = input[state.index + 4];
					if (after && after !== "/") break;
					rest = rest.slice(3);
					consume("/**", 3);
				}
				const isEnd = eos() || state.parens > 0 && rest === ")".repeat(state.parens) && !extglobs.some((extglob) => extglob.type === "negate");
				if (prior.type === "bos" && eos()) {
					prev.type = "globstar";
					prev.value += value;
					prev.output = globstar(opts);
					state.output = prev.output;
					state.globstar = true;
					consume(value);
					continue;
				}
				if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && isEnd) {
					state.output = state.output.slice(0, -(prior.output + prev.output).length);
					prior.output = `(?:${prior.output}`;
					prev.type = "globstar";
					prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
					prev.value += value;
					state.globstar = true;
					state.output += prior.output + prev.output;
					consume(value);
					continue;
				}
				if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
					const end = rest[1] !== void 0 ? "|$" : "";
					state.output = state.output.slice(0, -(prior.output + prev.output).length);
					prior.output = `(?:${prior.output}`;
					prev.type = "globstar";
					prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
					prev.value += value;
					state.output += prior.output + prev.output;
					state.globstar = true;
					consume(value + advance());
					push({
						type: "slash",
						value: "/",
						output: ""
					});
					continue;
				}
				if (prior.type === "bos" && rest[0] === "/") {
					prev.type = "globstar";
					prev.value += value;
					prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
					state.output = prev.output;
					state.globstar = true;
					consume(value + advance());
					push({
						type: "slash",
						value: "/",
						output: ""
					});
					continue;
				}
				state.output = state.output.slice(0, -prev.output.length);
				prev.type = "globstar";
				prev.output = globstar(opts);
				prev.value += value;
				state.output += prev.output;
				state.globstar = true;
				consume(value);
				continue;
			}
			const token = {
				type: "star",
				value,
				output: star
			};
			if (opts.bash === true) {
				token.output = ".*?";
				if (prev.type === "bos" || prev.type === "slash") token.output = nodot + token.output;
				push(token);
				continue;
			}
			if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
				token.output = value;
				push(token);
				continue;
			}
			if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
				if (prev.type === "dot") {
					state.output += NO_DOT_SLASH;
					prev.output += NO_DOT_SLASH;
				} else if (opts.dot === true) {
					state.output += NO_DOTS_SLASH;
					prev.output += NO_DOTS_SLASH;
				} else {
					state.output += nodot;
					prev.output += nodot;
				}
				if (peek() !== "*") {
					state.output += ONE_CHAR;
					prev.output += ONE_CHAR;
				}
			}
			push(token);
		}
		while (state.brackets > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
			state.output = utils.escapeLast(state.output, "[");
			decrement("brackets");
		}
		while (state.parens > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
			state.output = utils.escapeLast(state.output, "(");
			decrement("parens");
		}
		while (state.braces > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
			state.output = utils.escapeLast(state.output, "{");
			decrement("braces");
		}
		if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) push({
			type: "maybe_slash",
			value: "",
			output: `${SLASH_LITERAL}?`
		});
		if (state.backtrack === true) {
			state.output = "";
			for (const token of state.tokens) {
				state.output += token.output != null ? token.output : token.value;
				if (token.suffix) state.output += token.suffix;
			}
		}
		return state;
	};
	/**
	* Fast paths for creating regular expressions for common glob patterns.
	* This can significantly speed up processing and has very little downside
	* impact when none of the fast paths match.
	*/
	parse.fastpaths = (input, options) => {
		const opts = { ...options };
		const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
		const len = input.length;
		if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
		input = REPLACEMENTS[input] || input;
		const { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants.globChars(opts.windows);
		const nodot = opts.dot ? NO_DOTS : NO_DOT;
		const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
		const capture = opts.capture ? "" : "?:";
		const state = {
			negated: false,
			prefix: ""
		};
		let star = opts.bash === true ? ".*?" : STAR;
		if (opts.capture) star = `(${star})`;
		const globstar = (opts) => {
			if (opts.noglobstar === true) return star;
			return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
		};
		const create = (str) => {
			switch (str) {
				case "*": return `${nodot}${ONE_CHAR}${star}`;
				case ".*": return `${DOT_LITERAL}${ONE_CHAR}${star}`;
				case "*.*": return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
				case "*/*": return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
				case "**": return nodot + globstar(opts);
				case "**/*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
				case "**/*.*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
				case "**/.*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
				default: {
					const match = /^(.*?)\.(\w+)$/.exec(str);
					if (!match) return;
					const source = create(match[1]);
					if (!source) return;
					return source + DOT_LITERAL + match[2];
				}
			}
		};
		let source = create(utils.removePrefix(input, state));
		if (source && opts.strictSlashes !== true) source += `${SLASH_LITERAL}?`;
		return source;
	};
	module.exports = parse;
}));
// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/picomatch.js
var require_picomatch$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var scan = require_scan();
	var parse = require_parse();
	var utils = require_utils();
	var constants = require_constants();
	var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
	/**
	* Creates a matcher function from one or more glob patterns. The
	* returned function takes a string to match as its first argument,
	* and returns true if the string is a match. The returned matcher
	* function also takes a boolean as the second argument that, when true,
	* returns an object with additional information.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch(glob[, options]);
	*
	* const isMatch = picomatch('*.!(*a)');
	* console.log(isMatch('a.a')); //=> false
	* console.log(isMatch('a.b')); //=> true
	*
	* // For environments without `node.js`, `picomatch/posix` provides you a dependency-free matcher, without automatic OS detection.
	* const picomatch = require('picomatch/posix');
	* // the same API, defaulting to posix paths
	* const isMatch = picomatch('a/*');
	* console.log(isMatch('a\\b')); //=> false
	* console.log(isMatch('a/b')); //=> true
	*
	* // you can still configure the matcher function to accept windows paths
	* const isMatch = picomatch('a/*', { options: windows });
	* console.log(isMatch('a\\b')); //=> true
	* console.log(isMatch('a/b')); //=> true
	* ```
	* @name picomatch
	* @param {String|Array} `globs` One or more glob patterns.
	* @param {Object=} `options`
	* @return {Function=} Returns a matcher function.
	* @api public
	*/
	var picomatch = (glob, options, returnState = false) => {
		if (Array.isArray(glob)) {
			const fns = glob.map((input) => picomatch(input, options, returnState));
			const arrayMatcher = (str) => {
				for (const isMatch of fns) {
					const state = isMatch(str);
					if (state) return state;
				}
				return false;
			};
			return arrayMatcher;
		}
		const isState = isObject(glob) && glob.tokens && glob.input;
		if (glob === "" || typeof glob !== "string" && !isState) throw new TypeError("Expected pattern to be a non-empty string");
		const opts = options || {};
		const posix = opts.windows;
		const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
		const state = regex.state;
		delete regex.state;
		let isIgnored = () => false;
		if (opts.ignore) {
			const ignoreOpts = {
				...options,
				ignore: null,
				onMatch: null,
				onResult: null
			};
			isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
		}
		const matcher = (input, returnObject = false) => {
			const { isMatch, match, output } = picomatch.test(input, regex, options, {
				glob,
				posix
			});
			const result = {
				glob,
				state,
				regex,
				posix,
				input,
				output,
				match,
				isMatch
			};
			if (typeof opts.onResult === "function") opts.onResult(result);
			if (isMatch === false) {
				result.isMatch = false;
				return returnObject ? result : false;
			}
			if (isIgnored(input)) {
				if (typeof opts.onIgnore === "function") opts.onIgnore(result);
				result.isMatch = false;
				return returnObject ? result : false;
			}
			if (typeof opts.onMatch === "function") opts.onMatch(result);
			return returnObject ? result : true;
		};
		if (returnState) matcher.state = state;
		return matcher;
	};
	/**
	* Test `input` with the given `regex`. This is used by the main
	* `picomatch()` function to test the input string.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.test(input, regex[, options]);
	*
	* console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	* // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	* ```
	* @param {String} `input` String to test.
	* @param {RegExp} `regex`
	* @return {Object} Returns an object with matching info.
	* @api public
	*/
	picomatch.test = (input, regex, options, { glob, posix } = {}) => {
		if (typeof input !== "string") throw new TypeError("Expected input to be a string");
		if (input === "") return {
			isMatch: false,
			output: ""
		};
		const opts = options || {};
		const format = opts.format || (posix ? utils.toPosixSlashes : null);
		let match = input === glob;
		let output = match && format ? format(input) : input;
		if (match === false) {
			output = format ? format(input) : input;
			match = output === glob;
		}
		if (match === false || opts.capture === true) {
			if (opts.matchBase === true || opts.basename === true) match = picomatch.matchBase(input, regex, options, posix);
			else match = regex.exec(output);
		}
		return {
			isMatch: Boolean(match),
			match,
			output
		};
	};
	/**
	* Match the basename of a filepath.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.matchBase(input, glob[, options]);
	* console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	* ```
	* @param {String} `input` String to test.
	* @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	* @return {Boolean}
	* @api public
	*/
	picomatch.matchBase = (input, glob, options, posix = options && options.windows) => {
		return (glob instanceof RegExp ? glob : picomatch.makeRe(glob, options)).test(utils.basename(input, { windows: posix }));
	};
	/**
	* Returns true if **any** of the given glob `patterns` match the specified `string`.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.isMatch(string, patterns[, options]);
	*
	* console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	* console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	* ```
	* @param {String|Array} str The string to test.
	* @param {String|Array} patterns One or more glob patterns to use for matching.
	* @param {Object} [options] See available [options](#options).
	* @return {Boolean} Returns true if any patterns match `str`
	* @api public
	*/
	picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
	/**
	* Parse a glob pattern to create the source string for a regular
	* expression.
	*
	* ```js
	* const picomatch = require('picomatch');
	* const result = picomatch.parse(pattern[, options]);
	* ```
	* @param {String} `pattern`
	* @param {Object} `options`
	* @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	* @api public
	*/
	picomatch.parse = (pattern, options) => {
		if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
		return parse(pattern, {
			...options,
			fastpaths: false
		});
	};
	/**
	* Scan a glob pattern to separate the pattern into segments.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.scan(input[, options]);
	*
	* const result = picomatch.scan('!./foo/*.js');
	* console.log(result);
	* { prefix: '!./',
	*   input: '!./foo/*.js',
	*   start: 3,
	*   base: 'foo',
	*   glob: '*.js',
	*   isBrace: false,
	*   isBracket: false,
	*   isGlob: true,
	*   isExtglob: false,
	*   isGlobstar: false,
	*   negated: true }
	* ```
	* @param {String} `input` Glob pattern to scan.
	* @param {Object} `options`
	* @return {Object} Returns an object with
	* @api public
	*/
	picomatch.scan = (input, options) => scan(input, options);
	/**
	* Compile a regular expression from the `state` object returned by the
	* [parse()](#parse) method.
	*
	* ```js
	* const picomatch = require('picomatch');
	* const state = picomatch.parse('*.js');
	* // picomatch.compileRe(state[, options]);
	*
	* console.log(picomatch.compileRe(state));
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {Object} `state`
	* @param {Object} `options`
	* @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	* @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	* @return {RegExp}
	* @api public
	*/
	picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
		if (returnOutput === true) return state.output;
		const opts = options || {};
		const prepend = opts.contains ? "" : "^";
		const append = opts.contains ? "" : "$";
		let source = `${prepend}(?:${state.output})${append}`;
		if (state && state.negated === true) source = `^(?!${source}).*$`;
		const regex = picomatch.toRegex(source, options);
		if (returnState === true) regex.state = state;
		return regex;
	};
	/**
	* Create a regular expression from a parsed glob pattern.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.makeRe(state[, options]);
	*
	* const result = picomatch.makeRe('*.js');
	* console.log(result);
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {String} `state` The object returned from the `.parse` method.
	* @param {Object} `options`
	* @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	* @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	* @return {RegExp} Returns a regex created from the given pattern.
	* @api public
	*/
	picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
		if (!input || typeof input !== "string") throw new TypeError("Expected a non-empty string");
		let parsed = {
			negated: false,
			fastpaths: true
		};
		if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) parsed.output = parse.fastpaths(input, options);
		if (!parsed.output) parsed = parse(input, options);
		return picomatch.compileRe(parsed, options, returnOutput, returnState);
	};
	/**
	* Create a regular expression from the given regex source string.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.toRegex(source[, options]);
	*
	* const { output } = picomatch.parse('*.js');
	* console.log(picomatch.toRegex(output));
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {String} `source` Regular expression source string.
	* @param {Object} `options`
	* @return {RegExp}
	* @api public
	*/
	picomatch.toRegex = (source, options) => {
		try {
			const opts = options || {};
			return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
		} catch (err) {
			if (options && options.debug === true) throw err;
			return /$^/;
		}
	};
	/**
	* Picomatch constants.
	* @return {Object}
	*/
	picomatch.constants = constants;
	/**
	* Expose "picomatch"
	*/
	module.exports = picomatch;
}));
// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/create-filter.js
var import_picomatch = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var pico = require_picomatch$1();
	var utils = require_utils();
	function picomatch(glob, options, returnState = false) {
		if (options && (options.windows === null || options.windows === void 0)) options = {
			...options,
			windows: utils.isWindows()
		};
		return pico(glob, options, returnState);
	}
	Object.assign(picomatch, pico);
	module.exports = picomatch;
})))(), 1);
function ensureArray(thing) {
	if (Array.isArray(thing)) return thing;
	if (thing == null) return [];
	return [thing];
}
function toMatcher(pattern) {
	if (pattern instanceof RegExp) return pattern;
	const normalized = slash(pattern);
	const fn = (0, import_picomatch.default)(normalized, { dot: true });
	return { test: (what) => fn(what) };
}
function createFilter(include, exclude) {
	const includeMatchers = ensureArray(include).map(toMatcher);
	const excludeMatchers = ensureArray(exclude).map(toMatcher);
	if (!includeMatchers.length && !excludeMatchers.length) return (id) => typeof id === "string" && !id.includes("\0");
	return function(id) {
		if (typeof id !== "string") return false;
		if (id.includes("\0")) return false;
		const pathId = slash(id);
		for (const matcher of excludeMatchers) {
			if (matcher instanceof RegExp) matcher.lastIndex = 0;
			if (matcher.test(pathId)) return false;
		}
		for (const matcher of includeMatchers) {
			if (matcher instanceof RegExp) matcher.lastIndex = 0;
			if (matcher.test(pathId)) return true;
		}
		return !includeMatchers.length;
	};
}
// node_modules/.pnpm/@astrojs+react@7.1.4_@types_7066c29ed3aaa9e9101a0f5f7d5eac33/node_modules/@astrojs/react/dist/server.js
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
var reactTypeof = Symbol.for("react.element");
var reactTransitionalTypeof = Symbol.for("react.transitional.element");
var filter = _astro_react_opts_default?.include || _astro_react_opts_default?.exclude ? createFilter(_astro_react_opts_default.include, _astro_react_opts_default.exclude) : null;
async function check(Component, props, children, metadata) {
	if (typeof Component === "object") return Component["$$typeof"]?.toString().slice(7).startsWith("react") ?? false;
	if (typeof Component !== "function") return false;
	if (Component.name === "QwikComponent") return false;
	if (typeof Component === "function" && Component["$$typeof"] === Symbol.for("react.forward_ref")) return false;
	if (Component.prototype != null && typeof Component.prototype.render === "function") return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	if (filter && metadata?.componentUrl && !filter(metadata.componentUrl)) return false;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && (vnode["$$typeof"] === reactTypeof || vnode["$$typeof"] === reactTransitionalTypeof)) isReactComponent = true;
		} catch {}
		return React.createElement("div");
	}
	await renderToStaticMarkup.call(this, Tester, props, children);
	return isReactComponent;
}
async function getNodeWritable() {
	let { Writable } = await import(
		/* @vite-ignore */
		"node:stream"
);
	return Writable;
}
function needsHydration(metadata) {
	return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	let prefix;
	if (this && this.result) prefix = incrementId(this.result);
	const attrs = { prefix };
	delete props["class"];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(static_html_default, {
			hydrate: needsHydration(metadata),
			value,
			name
		});
	}
	const newProps = {
		...props,
		...slots
	};
	const newChildren = children ?? props.children;
	if (children && _astro_react_opts_default.experimentalReactChildren) {
		attrs["data-react-children"] = true;
		newProps.children = (await import("./chunks/vnode-children_DopQllA6.mjs").then((mod) => mod.default))(children);
	} else if (newChildren != null) newProps.children = React.createElement(static_html_default, {
		hydrate: needsHydration(metadata),
		value: newChildren
	});
	const formState = this ? await getFormState(this) : void 0;
	if (formState) {
		attrs["data-action-result"] = JSON.stringify(formState[0]);
		attrs["data-action-key"] = formState[1];
		attrs["data-action-name"] = formState[2];
	}
	const vnode = React.createElement(Component, newProps);
	const renderOptions = {
		identifierPrefix: prefix,
		formState
	};
	let html;
	if (_astro_react_opts_default.experimentalDisableStreaming) html = ReactDOM.renderToString(vnode, renderOptions);
	else if ("renderToReadableStream" in ReactDOM) html = await renderToReadableStreamAsync(vnode, renderOptions);
	else html = await renderToPipeableStreamAsync(vnode, renderOptions);
	return {
		html,
		attrs
	};
}
async function getFormState({ result }) {
	const { request, actionResult } = result;
	if (!actionResult) return void 0;
	if (!isFormRequest(request.headers.get("content-type"))) return void 0;
	const { searchParams } = new URL(request.url);
	/**
	* The key generated by React to identify each `useActionState()` call.
	* @example "k511f74df5a35d32e7cf266450d85cb6c"
	*/
	const actionKey = (await request.clone().formData()).get("$ACTION_KEY")?.toString();
	/**
	* The action name returned by an action's `toString()` property.
	* This matches the endpoint path.
	* @example "/_actions/blog.like"
	*/
	const actionName = searchParams.get("_action");
	if (!actionKey || !actionName) return void 0;
	return [
		actionResult,
		actionKey,
		actionName
	];
}
async function renderToPipeableStreamAsync(vnode, options) {
	const Writable = await getNodeWritable();
	let html = "";
	return new Promise((resolve, reject) => {
		let error = void 0;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			...options,
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(new Writable({
					write(chunk, _encoding, callback) {
						html += chunk.toString("utf-8");
						callback();
					},
					destroy() {
						resolve(html);
					}
				}));
			}
		});
	});
}
/**
* Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
* See https://github.com/facebook/react/issues/24169
*/
async function readResult(stream) {
	const reader = stream.getReader();
	let result = "";
	const decoder = new TextDecoder("utf-8");
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) result += decoder.decode(value);
			else decoder.decode(/* @__PURE__ */ new Uint8Array());
			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}
async function renderToReadableStreamAsync(vnode, options) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode, options));
}
var formContentTypes$1 = ["application/x-www-form-urlencoded", "multipart/form-data"];
function isFormRequest(contentType) {
	const type = contentType?.split(";")[0].toLowerCase();
	return formContentTypes$1.some((t) => type === t);
}
// \0virtual:astro:renderers
var renderers = [Object.assign({
	"name": "@astrojs/react",
	"clientEntrypoint": "@astrojs/react/client.js",
	"serverEntrypoint": "@astrojs/react/server.js"
}, { ssr: {
	name: "@astrojs/react",
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true
} })];
[
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"type": "page",
			"component": "_server-islands.astro",
			"params": ["name"],
			"segments": [[{
				"content": "_server-islands",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "name",
				"dynamic": true,
				"spread": false
			}]],
			"pattern": "^\\/_server-islands\\/([^/]+?)\\/?$",
			"prerender": false,
			"isIndex": false,
			"fallbackRoutes": [],
			"route": "/_server-islands/[name]",
			"origin": "internal",
			"distURL": [],
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/_image",
			"component": "node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/endpoint/generic.js",
			"params": [],
			"pathname": "/_image",
			"pattern": "^\\/_image\\/?$",
			"segments": [[{
				"content": "_image",
				"dynamic": false,
				"spread": false
			}]],
			"type": "endpoint",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"isIndex": false,
			"origin": "internal",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/api/currency-converter",
			"isIndex": false,
			"type": "endpoint",
			"pattern": "^\\/api\\/currency-converter\\/?$",
			"segments": [[{
				"content": "api",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "currency-converter",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "src/pages/api/currency-converter.ts",
			"pathname": "/api/currency-converter",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/pokemon-card/[pokemonCardId]",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/pokemon-card\\/([^/]+?)\\/?$",
			"segments": [[{
				"content": "pokemon-card",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "pokemonCardId",
				"dynamic": true,
				"spread": false
			}]],
			"params": ["pokemonCardId"],
			"component": "src/pages/pokemon-card/[pokemonCardId].astro",
			"prerender": false,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	}
].map(deserializeRouteInfo);
// \0virtual:astro:pages
var _page0 = () => import("./chunks/generic_n_3EWmT3.mjs");
var _page1 = () => import("./chunks/currency-converter_DR4CxVM2.mjs");
var _page2 = () => import("./chunks/_pokemonCardId__B3VHbiZk.mjs");
var pageMap = /* @__PURE__ */ new Map([
	["node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
	["src/pages/api/currency-converter.ts", _page1],
	["src/pages/pokemon-card/[pokemonCardId].astro", _page2]
]);
// \0virtual:astro:manifest
var _manifest = deserializeManifest({"rootDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/","cacheDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.astro/","outDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/dist/","srcDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/src/","publicDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/public/","buildClientDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/dist/client/","buildServerDir":"file:///C:/Users/IAnge/Desktop/dev/pokemon-universe/.vercel/output/server/","adapterName":"@astrojs/vercel","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/_image","component":"node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/endpoint/generic.js","params":[],"pathname":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"type":"endpoint","prerender":false,"fallbackRoutes":[],"distURL":[],"isIndex":false,"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/currency-converter","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/currency-converter\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"currency-converter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/currency-converter.ts","pathname":"/api/currency-converter","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/expansions/[expansionId]","isIndex":false,"type":"page","pattern":"^\\/expansions\\/([^/]+?)\\/?$","segments":[[{"content":"expansions","dynamic":false,"spread":false}],[{"content":"expansionId","dynamic":true,"spread":false}]],"params":["expansionId"],"component":"src/pages/expansions/[expansionId].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"_astro/_pokemonCardId_.C0D0h5Wy.css"}],"routeData":{"route":"/pokemon-card/[pokemonCardId]","isIndex":false,"type":"page","pattern":"^\\/pokemon-card\\/([^/]+?)\\/?$","segments":[[{"content":"pokemon-card","dynamic":false,"spread":false}],[{"content":"pokemonCardId","dynamic":true,"spread":false}]],"params":["pokemonCardId"],"component":"src/pages/pokemon-card/[pokemonCardId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/[page]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/[page].astro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"serverLike":true,"middlewareMode":"classic","base":"/","trailingSlash":"ignore","compressHTML":"jsx","componentMetadata":[["C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/[page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/expansions/[expansionId].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000virtual:astro:page:src/pages/expansions/[expansionId]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:pages",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:manifest",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/manifest/ambient.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/fetch/default-handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/base.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/app.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/entrypoints/index.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/build/app.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/entrypoints/prerender.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/index.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/astro-middleware.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/default-handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/build-handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/dev-handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/not-found.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/pages/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/rewrites/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/fetch/fetch-state.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/runtime/server.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/utils.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/redirect-page.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/index.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/fallback.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/i18n/handler.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/middleware.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/utils.js",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/pokemon-tcg/PokemonGrid.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro:page:src/pages/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/pokemon-card/[pokemonCardId].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(function(){let e=(e,t)=>{let n=async()=>{await(await e())()},r=typeof t.value==`object`?t.value:void 0,i={timeout:r==null?void 0:r.timeout};`requestIdleCallback`in window?window.requestIdleCallback(n,i):setTimeout(n,i.timeout||200)};(self.Astro||(self.Astro={})).idle=e,window.dispatchEvent(new Event(`astro:idle`))})();"],["load","(function(){let e=async e=>{await(await e())()};(self.Astro||(self.Astro={})).load=e,window.dispatchEvent(new Event(`astro:load`))})();"],["media","(function(){let e=(e,t)=>{let n=async()=>{await(await e())()};if(t.value){let e=matchMedia(t.value);e.matches?n():e.addEventListener(`change`,n,{once:!0})}};(self.Astro||(self.Astro={})).media=e,window.dispatchEvent(new Event(`astro:media`))})();"],["only","(function(){let e=async e=>{await(await e())()};(self.Astro||(self.Astro={})).only=e,window.dispatchEvent(new Event(`astro:only`))})();"],["visible","(function(){let e=(e,t,n)=>{let r=async()=>{await(await e())()},i=typeof t.value==`object`?t.value:void 0,a={rootMargin:i==null?void 0:i.rootMargin},o=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){o.disconnect(),r();break}},a);for(let e of n.children)o.observe(e)};(self.Astro||(self.Astro={})).visible=e,window.dispatchEvent(new Event(`astro:visible`))})();"]],"entryModules":{"\u0000noop-middleware":"virtual_astro_middleware.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_BhTW5IeR.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_BWWe3pKI.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_CxXy0p4B.mjs","C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cv-5FuK2.mjs","C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/@astrojs+react@7.1.4_@types_7066c29ed3aaa9e9101a0f5f7d5eac33/node_modules/@astrojs/react/dist/vnode-children.js":"chunks/vnode-children_DopQllA6.mjs","@astrojs/vercel/entrypoint":"entry.mjs","\u0000virtual:astro:page:src/pages/pokemon-card/[pokemonCardId]@_@astro":"chunks/_pokemonCardId__B3VHbiZk.mjs","\u0000virtual:astro:page:src/pages/api/currency-converter@_@ts":"chunks/currency-converter_DR4CxVM2.mjs","C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/sharp@0.35.5_@types+node@22.15.21/node_modules/sharp/dist/index.mjs":"chunks/dist_CPw8C-xH.mjs","\u0000virtual:astro:page:node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_n_3EWmT3.mjs","C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CnDxeVtR.js","C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/home-page/HomePageHero.astro?astro&type=script&index=0&lang.ts":"_astro/HomePageHero.astro_astro_type_script_index_0_lang.C0NFstKJ.js","C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/ModeToggle.tsx":"_astro/ModeToggle.Cmb4PoAn.js","@/components/pokemon-card-data/PokemonCardDataMain":"_astro/PokemonCardDataMain.B2yTwK--.js","C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/pokemon-card/PokemonInfoCard.astro?astro&type=script&index=0&lang.ts":"_astro/PokemonInfoCard.astro_astro_type_script_index_0_lang.D8r-8HeW.js","@/components/ui/SelectComponent":"_astro/SelectComponent.CGLUcKQd.js","@astrojs/react/client.js":"_astro/client.FasGtEyh.js","@/components/magicui/meteors":"_astro/meteors.CwKwpRiC.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CnDxeVtR.js","/_astro/Combination.Drd6LMMZ.js","/_astro/HomePageHero.astro_astro_type_script_index_0_lang.C0NFstKJ.js","/_astro/Layout.DlEshu-d.css","/_astro/ModeToggle.Cmb4PoAn.js","/_astro/PokemonCardDataMain.B2yTwK--.js","/_astro/PokemonInfoCard.astro_astro_type_script_index_0_lang.D8r-8HeW.js","/_astro/SelectComponent.CGLUcKQd.js","/_astro/_pokemonCardId_.C0D0h5Wy.css","/_astro/button.xZt6PtRE.js","/_astro/chevron-down.3bfVQnTN.js","/_astro/client.FasGtEyh.js","/_astro/createLucideIcon.BCQZHfSm.js","/_astro/jsx-runtime.Bq5om5Lv.js","/_astro/logo.He_f36kN.webp","/_astro/meteors.CwKwpRiC.js","/_astro/not-found-card.CNjm9xBK.jpg","/_astro/react-dom.c_sf7UW_.js","/_astro/react.B54jxNxs.js","/_astro/rolldown-runtime.XKyaHtl9.js","/assets/fonts/PassionOne.woff2","/assets/fonts/Quicksand-VariableFont.woff2","/assets/img/black-noise.png","/assets/img/charmander-animation/0000.webp","/assets/img/charmander-animation/0001.webp","/assets/img/charmander-animation/0002.webp","/assets/img/charmander-animation/0003.webp","/assets/img/charmander-animation/0004.webp","/assets/img/charmander-animation/0005.webp","/assets/img/charmander-animation/0006.webp","/assets/img/charmander-animation/0007.webp","/assets/img/charmander-animation/0008.webp","/assets/img/charmander-animation/0009.webp","/assets/img/charmander-animation/0010.webp","/assets/img/charmander-animation/0011.webp","/assets/img/charmander-animation/0012.webp","/assets/img/charmander-animation/0013.webp","/assets/img/charmander-animation/0014.webp","/assets/img/charmander-animation/0015.webp","/assets/img/charmander-animation/0016.webp","/assets/img/charmander-animation/0017.webp","/assets/img/charmander-animation/0018.webp","/assets/img/charmander-animation/0019.webp","/assets/img/charmander-animation/0020.webp","/assets/img/charmander-animation/0021.webp","/assets/img/charmander-animation/0022.webp","/assets/img/charmander-animation/0023.webp","/assets/img/charmander-animation/0024.webp","/assets/img/charmander-animation/0025.webp","/assets/img/charmander-animation/0026.webp","/assets/img/charmander-animation/0027.webp","/assets/img/charmander-animation/0028.webp","/assets/img/charmander-animation/0029.webp","/assets/img/charmander-animation/0030.webp","/assets/img/charmander-animation/0031.webp","/assets/img/charmander-animation/0032.webp","/assets/img/charmander-animation/0033.webp","/assets/img/charmander-animation/0034.webp","/assets/img/charmander-animation/0035.webp","/assets/img/charmander-animation/0036.webp","/assets/img/charmander-animation/0037.webp","/assets/img/charmander-animation/0038.webp","/assets/img/charmander-animation/0039.webp","/assets/img/charmander-animation/0040.webp","/assets/img/charmander-animation/0041.webp","/assets/img/charmander-animation/0042.webp","/assets/img/charmander-animation/0043.webp","/assets/img/charmander-animation/0044.webp","/assets/img/charmander-animation/0045.webp","/assets/img/charmander-animation/0046.webp","/assets/img/charmander-animation/0047.webp","/assets/img/charmander-animation/0048.webp","/assets/img/charmander-animation/0049.webp","/assets/img/charmander-animation/0050.webp","/assets/img/charmander-animation/0051.webp","/assets/img/charmander-animation/0052.webp","/assets/img/charmander-animation/0053.webp","/assets/img/charmander-animation/0054.webp","/assets/img/charmander-animation/0055.webp","/assets/img/charmander-animation/0056.webp","/assets/img/charmander-animation/0057.webp","/assets/img/charmander-animation/0058.webp","/assets/img/charmander-animation/0059.webp","/assets/img/charmander-animation/0060.webp","/assets/img/charmander-animation/0061.webp","/assets/img/charmander-animation/0062.webp","/assets/img/charmander-animation/0063.webp","/assets/img/charmander-animation/0064.webp","/assets/img/charmander-animation/0065.webp","/assets/img/charmander-animation/0066.webp","/assets/img/charmander-animation/0067.webp","/assets/img/charmander-animation/0068.webp","/assets/img/charmander-animation/0069.webp","/assets/img/charmander-animation/0070.webp","/assets/img/charmander-animation/0071.webp","/assets/img/charmander-animation/0072.webp","/assets/img/charmander-animation/0073.webp","/assets/img/charmander-animation/0074.webp","/assets/img/charmander-animation/0075.webp","/assets/img/charmander-animation/0076.webp","/assets/img/charmander-animation/0077.webp","/assets/img/charmander-animation/0078.webp","/assets/img/charmander-animation/0079.webp","/assets/img/charmander-animation/0080.webp","/assets/img/charmander-animation/0081.webp","/assets/img/charmander-animation/0082.webp","/assets/img/charmander-animation/0083.webp","/assets/img/charmander-animation/0084.webp","/assets/img/charmander-animation/0085.webp","/assets/img/charmander-animation/0086.webp","/assets/img/charmander-animation/0087.webp","/assets/img/charmander-animation/0088.webp","/assets/img/charmander-animation/0089.webp","/assets/img/charmander-animation/0090.webp","/assets/img/charmander-animation/0091.webp","/assets/img/charmander-animation/0092.webp","/assets/img/charmander-animation/0093.webp","/assets/img/charmander-animation/0094.webp","/assets/img/charmander-animation/0095.webp","/assets/img/charmander-animation/0096.webp","/assets/img/charmander-animation/0097.webp","/assets/img/charmander-animation/0098.webp","/assets/img/charmander-animation/0099.webp","/assets/img/charmander-animation/0100.webp","/assets/img/charmander-animation/0101.webp","/assets/img/charmander-animation/0102.webp","/assets/img/charmander-animation/0103.webp","/assets/img/charmander-animation/0104.webp","/assets/img/charmander-animation/0105.webp","/assets/img/charmander-animation/0106.webp","/assets/img/charmander-animation/0107.webp","/assets/img/charmander-animation/0108.webp","/assets/img/charmander-animation/0109.webp","/assets/img/charmander-animation/0110.webp","/assets/img/charmander-animation/0111.webp","/assets/img/charmander-animation/0112.webp","/assets/img/charmander-animation/0113.webp","/assets/img/charmander-animation/0114.webp","/assets/img/charmander-animation/0115.webp","/assets/img/charmander-animation/0116.webp","/assets/img/charmander-animation/0117.webp","/assets/img/charmander-animation/0118.webp","/assets/img/charmander-animation/0119.webp","/assets/img/charmander-animation/0120.webp","/assets/img/energy-types/colorless.webp","/assets/img/energy-types/darkness.webp","/assets/img/energy-types/dragon.webp","/assets/img/energy-types/fighting.webp","/assets/img/energy-types/fire.webp","/assets/img/energy-types/grass.webp","/assets/img/energy-types/lightning.webp","/assets/img/energy-types/metal.webp","/assets/img/energy-types/psychic.webp","/assets/img/energy-types/water.webp","/assets/img/hero.webp","/assets/img/logo.webp","/assets/img/noise.png","/favicon.svg","/index.html"],"buildFormat":"directory","checkOrigin":true,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"GSZ5j63Jpd1n3uyrsJToum4H7M0NfQl7b3apr1nJrP0=","image":{},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
	renderers,
	actions: () => import("./chunks/noop-entrypoint_CxXy0p4B.mjs"),
	middleware: () => import("./virtual_astro_middleware.mjs"),
	sessionDriver: () => import("./chunks/_virtual_astro_session-driver_BWWe3pKI.mjs"),
	serverIslandMappings: () => import("./chunks/_virtual_astro_server-island-manifest_BhTW5IeR.mjs"),
	routes: manifestRoutes,
	pageMap
});
/**
* The ambient manifest: the explicitly registered one, else the virtual
* module's. Throws lazily when neither is available, so merely importing a
* module that uses this never fails — only actually handling a request does.
*/
function getAmbientManifest() {
	const manifest$1 = manifest;
	if (!manifest$1) throw new AstroError(NoManifestAvailable);
	return manifest$1;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/render-options.js
/**
* Symbol used to attach `ResolvedRenderOptions` to a `Request` object so
* that they can flow through the `FetchHandler` signature (which only takes
* a request) into the request handler chain. This is an internal implementation
* detail between `BaseApp` and the default handler pipeline.
*/
var renderOptionsSymbol = Symbol.for("astro.renderOptions");
/**
* Reads `ResolvedRenderOptions` that were attached to a request via
* `renderOptionsSymbol`. Returns `undefined` if no options are attached.
*/
function getRenderOptions(request) {
	return Reflect.get(request, renderOptionsSymbol);
}
/**
* Attaches `ResolvedRenderOptions` to a request via `renderOptionsSymbol` so
* that downstream handlers can read them.
*/
function setRenderOptions(request, options) {
	Reflect.set(request, renderOptionsSymbol, options);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/defineMiddleware.js
function defineMiddleware(fn) {
	return fn;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/origin-check.js
/**
* Content types that can be passed when sending a request via a form
*
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype
* @private
*/
var FORM_CONTENT_TYPES = [
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
];
var SAFE_METHODS = [
	"GET",
	"HEAD",
	"OPTIONS"
];
/**
* Determines whether a request should be rejected because it is a cross-site
* submission for a route rendered on demand.
*
* This encapsulates the shared logic used by both the origin-check middleware
* and the Astro Actions dispatch, so the check is applied consistently
* regardless of where the request is handled.
*
* @private
*/
function isForbiddenCrossOriginRequest(request, url, isPrerendered) {
	if (isPrerendered) return false;
	if (SAFE_METHODS.includes(request.method)) return false;
	const contentType = request.headers.get("content-type");
	if (contentType && !hasFormLikeHeader(contentType)) return false;
	switch (request.headers.get("sec-fetch-site")) {
		case "":
		case null: break;
		case "same-origin":
		case "none": return false;
		default: return true;
	}
	const origin = request.headers.get("origin");
	if (!origin) return false;
	return origin !== url.origin;
}
/**
* Builds the 403 response returned when a cross-site submission is rejected.
*
* @private
*/
function createCrossOriginForbiddenResponse(request) {
	return new Response(`Cross-site ${request.method} form submissions are forbidden`, { status: 403 });
}
/**
* Returns middleware that rejects cross-origin form submissions.
*
* @private
*/
function createOriginCheckMiddleware() {
	return defineMiddleware((context, next) => {
		const { request, url, isPrerendered } = context;
		if (isForbiddenCrossOriginRequest(request, url, isPrerendered)) return createCrossOriginForbiddenResponse(request);
		return next();
	});
}
function hasFormLikeHeader(contentType) {
	if (contentType) {
		for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) return true;
	}
	return false;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/fetch/features.js
/**
* Bit flags for features that handler functions register as "used" when a
* custom `src/fetch.ts` fetch handler is in play. After the first request
* (dev) or at runtime (prod SSR), we compare against the manifest to warn
* about features the user configured but forgot to include in their custom
* fetch handler.
*/
var FetchFeatures = {
	redirects: 1,
	sessions: 2,
	actions: 4,
	middleware: 8,
	i18n: 16,
	cache: 32
};
/** All feature bits ORed together. Keep next to `FetchFeatures` so
*  new flags are hard to forget. */
var ALL_FETCH_FEATURES = FetchFeatures.redirects | FetchFeatures.sessions | FetchFeatures.actions | FetchFeatures.middleware | FetchFeatures.i18n | FetchFeatures.cache;
var usedFeatures = /* @__PURE__ */ new WeakMap();
/** ORs a feature bit into the manifest's used-features bitmask. */
function markFeatureUsed(manifest, feature) {
	const entry = usedFeatures.get(manifest);
	if (entry) entry.bits |= feature;
	else usedFeatures.set(manifest, { bits: feature });
}
/** The used-features bitmask for a manifest; `0` when nothing was marked. */
function getUsedFeatures(manifest) {
	return usedFeatures.get(manifest)?.bits ?? 0;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/invalid-encoding.js
/**
* Returns an empty `400 Bad Request` response when the request path was
* encoded too many times to fully decode, or is not valid percent-encoded
* UTF-8 (`state.invalidEncoding`), or `undefined` otherwise.
*
* Every entry point that routes the request or runs middleware calls this
* first, so composable pipelines reject the request the same way
* `handleRequest` does regardless of which handlers they include.
*/
function rejectInvalidEncoding(state) {
	if (state.invalidEncoding) return new Response(null, {
		status: 400,
		statusText: "Bad Request"
	});
}
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/constants.js
var MAX_ARRAY_LEN = 2 ** 32 - 1;
var MAX_ARRAY_INDEX = MAX_ARRAY_LEN - 1;
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/utils.js
var DevalueError = class extends Error {
	/**
	* @param {string} message
	* @param {string[]} keys
	* @param {any} [value] - The value that failed to be serialized
	* @param {any} [root] - The root value being serialized
	*/
	constructor(message, keys, value, root) {
		super(message);
		this.name = "DevalueError";
		this.path = keys.join("");
		this.value = value;
		this.root = root;
	}
};
/**
* Marks a Map key on the path being serialized. The key itself is recorded
* right after the marker, so nothing is formatted or allocated per entry.
*/
var MAP_KEY = Symbol();
/**
* Formats the path recorded on the way to the value being serialized — a
* property key, an array index, or `MAP_KEY` followed by a Map key — into
* the segments a `DevalueError` joins. Only runs when an error is raised.
* @param {any[]} keys
* @param {(key: any) => string} format_map_key
* @returns {string[]}
*/
function format_path(keys, format_map_key) {
	/** @type {string[]} */
	const path = [];
	for (let i = 0; i < keys.length; i += 1) {
		const segment = keys[i];
		if (segment === MAP_KEY) path.push(`.get(${format_map_key(keys[++i])})`);
		else if (typeof segment === "number") path.push(`[${segment}]`);
		else path.push(stringify_key(segment));
	}
	return path;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);
	return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}
/** @param {any} thing */
function is_buffer(thing) {
	return typeof Buffer !== "undefined" && Buffer.isBuffer(thing);
}
var needs_escape = /["<\\\u0000-\u001f\u2028\u2029]/;
var json_leaves_raw = /[<\u2028\u2029]/g;
/** @type {Record<string, string>} */
var raw_escapes = {
	"<": "\\u003C",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
};
/** @param {string} char */
function escape_raw(char) {
	return raw_escapes[char];
}
/** @param {string} str */
function stringify_string(str) {
	if (!needs_escape.test(str) && str.isWellFormed()) return `"${str}"`;
	return JSON.stringify(str).replace(json_leaves_raw, escape_raw);
}
var MAX_CACHED_KEY_LENGTH = 64;
/** @type {Map<string, string>} */
var quoted_keys = /* @__PURE__ */ new Map();
/** @param {string} key */
function quote_key(key) {
	if (key.length > MAX_CACHED_KEY_LENGTH) return stringify_string(key);
	let quoted = quoted_keys.get(key);
	if (quoted === void 0) {
		if (quoted_keys.size >= 1024) quoted_keys.clear();
		quoted = stringify_string(key);
		quoted_keys.set(key, quoted);
	}
	return quoted;
}
/** @param {Record<string | symbol, any>} object */
function enumerable_symbols(object) {
	const symbols = Object.getOwnPropertySymbols(object);
	return symbols.length === 0 ? symbols : symbols.filter((symbol) => Object.getOwnPropertyDescriptor(object, symbol)?.enumerable);
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
/** @param {string} key */
function stringify_key(key) {
	return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
/** @param {number} n */
function is_valid_array_index(n) {
	if (!Number.isInteger(n)) return false;
	if (n < 0) return false;
	if (n > MAX_ARRAY_INDEX) return false;
	return true;
}
/** @param {number} n */
function is_valid_array_len(n) {
	if (!Number.isInteger(n)) return false;
	if (n < 0) return false;
	if (n > MAX_ARRAY_LEN) return false;
	return true;
}
/** @param {string} s */
function is_valid_array_index_string(s) {
	if (s.length === 0) return false;
	if (s.length > 1 && s.charCodeAt(0) === 48) return false;
	for (let i = 0; i < s.length; i++) {
		const c = s.charCodeAt(i);
		if (c < 48 || c > 57) return false;
	}
	return is_valid_array_index(+s);
}
/**
* Returns the length of the leading run of valid array indices in `keys`.
* @param {readonly string[]} keys
*/
function array_index_cut(keys) {
	for (var i = keys.length - 1; i >= 0; i--) if (is_valid_array_index_string(keys[i])) break;
	return i + 1;
}
/**
* Finds the populated indices of an array.
* @param {unknown[]} array
*/
function valid_array_indices(array) {
	const keys = Object.keys(array);
	keys.length = array_index_cut(keys);
	return keys;
}
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/base64.js
/**	@type {(array_buffer: ArrayBuffer) => string} */
function encode_native(array_buffer) {
	return new Uint8Array(array_buffer).toBase64();
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_native(base64) {
	return Uint8Array.fromBase64(base64).buffer;
}
/** @type {(array_buffer: ArrayBuffer) => string} */
function encode_buffer(array_buffer) {
	return Buffer.from(array_buffer).toString("base64");
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_buffer(base64) {
	return Uint8Array.from(Buffer.from(base64, "base64")).buffer;
}
/** @type {(array_buffer: ArrayBuffer) => string} */
function encode_legacy(array_buffer) {
	const array = new Uint8Array(array_buffer);
	let binary = "";
	const chunk_size = 32768;
	for (let i = 0; i < array.length; i += chunk_size) {
		const chunk = array.subarray(i, i + chunk_size);
		binary += String.fromCharCode.apply(null, chunk);
	}
	return btoa(binary);
}
/**	@type {(base64: string) => ArrayBuffer} */
function decode_legacy(base64) {
	const binary_string = atob(base64);
	const len = binary_string.length;
	const array = new Uint8Array(len);
	for (let i = 0; i < len; i++) array[i] = binary_string.charCodeAt(i);
	return array.buffer;
}
var native = typeof Uint8Array.fromBase64 === "function";
var buffer = typeof process === "object" && process.versions?.node !== void 0;
var encode64 = native ? encode_native : buffer ? encode_buffer : encode_legacy;
var decode64 = native ? decode_native : buffer ? decode_buffer : decode_legacy;
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/operations.js
/**
* Merges caller-provided operation overrides over the defaults. Iterating the
* default keys (rather than the override's own keys) means nullish members
* fall back to the default, and inherited members — e.g. from a class
* instance — are picked up.
*
* @template {Record<string, any>} T
* @param {T} defaults
* @param {Partial<T> | undefined} overrides
* @returns {T}
*/
function merge_operations(defaults, overrides) {
	if (!overrides) return defaults;
	const merged = {};
	for (const key of Object.keys(defaults)) merged[key] = overrides[key] ?? defaults[key];
	return merged;
}
/** @type {{ kind: 'not-plain' }} */
var NOT_PLAIN = /* @__PURE__ */ Object.freeze({ kind: "not-plain" });
/** @type {{ kind: 'symbol-keys' }} */
var SYMBOL_KEYS = /* @__PURE__ */ Object.freeze({ kind: "symbol-keys" });
var default_stringify_operations = /* @__PURE__ */ Object.freeze({
	identify: (value) => value,
	typeOf: (value) => value === null ? "null" : typeof value,
	toPrimitive: (value) => value,
	tagOf: (value) => get_type(value),
	isThenable: (value) => typeof value.then === "function",
	toPromise: (thenable) => Promise.resolve(thenable),
	unbox: (boxed) => boxed.valueOf(),
	toISOString: (date) => isNaN(date.getDate()) ? "" : date.toISOString(),
	toStringValue: (value) => value.toString(),
	regExpInfo: (regexp) => ({
		source: regexp.source,
		flags: regexp.flags
	}),
	valuesOf: (set) => set,
	entriesOf: (map) => map,
	viewInfo: (view) => {
		if (is_buffer(view)) view = new Uint8Array(view);
		return {
			buffer: view.buffer,
			byteOffset: view.byteOffset,
			byteLength: view.byteLength,
			length: view.length,
			bufferByteLength: view.buffer.byteLength
		};
	},
	toArrayBuffer: (buffer) => buffer,
	lengthOf: (array) => array.length,
	hasOwn: (value, key) => Object.hasOwn(value, key),
	indicesOf: (array) => valid_array_indices(array),
	shapeOf: (value) => {
		if (!is_plain_object(value)) return NOT_PLAIN;
		if (enumerable_symbols(value).length > 0) return SYMBOL_KEYS;
		return {
			kind: Object.getPrototypeOf(value) === null ? "null-proto" : "plain",
			keys: Object.keys(value)
		};
	},
	get: (value, key) => value[key]
});
var array_buffer_byte_length = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength")?.get;
var shared_array_buffer_byte_length = typeof SharedArrayBuffer === "undefined" ? void 0 : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength")?.get;
var default_parse_operations = /* @__PURE__ */ Object.freeze({
	fromPrimitive: (primitive) => primitive,
	fromISOString: (iso) => new Date(iso),
	fromStringValue: (tag, text) => {
		if (tag === "URL") return new URL(text);
		if (tag === "URLSearchParams") return new URLSearchParams(text);
		return Temporal[tag.slice(9)].from(text);
	},
	fromArrayBuffer: (buffer) => buffer,
	fromRegExpInfo: (source, flags) => new RegExp(source, flags),
	fromViewInfo: (tag, buffer, byteOffset, length) => {
		try {
			array_buffer_byte_length.call(buffer);
		} catch (error) {
			if (!shared_array_buffer_byte_length) throw error;
			shared_array_buffer_byte_length.call(buffer);
		}
		const Constructor = globalThis[tag];
		return byteOffset !== void 0 ? new Constructor(buffer, byteOffset, length) : new Constructor(buffer);
	},
	box: (value) => Object(value),
	createArray: (length) => new Array(length),
	createSparseArray: (length) => {
		/** @type {any[]} */
		const array = [];
		array[MAX_ARRAY_INDEX] = void 0;
		delete array[MAX_ARRAY_INDEX];
		array.length = length;
		return array;
	},
	createObject: () => ({}),
	createNullPrototypeObject: () => Object.create(null),
	createSet: () => /* @__PURE__ */ new Set(),
	createMap: () => /* @__PURE__ */ new Map(),
	set: (target, key, value) => {
		target[key] = value;
	},
	addValue: (set, value) => {
		set.add(value);
	},
	addEntry: (map, key, value) => {
		map.set(key, value);
	}
});
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/parse.js
function invalid() {
	throw new Error("Invalid input");
}
/**
* Revive a value serialized with `devalue.stringify`
* @param {string} serialized
* @param {Record<string, (value: any) => any>} [revivers]
* @param {import('./types.js').ParseOptions} [options]
*/
function parse(serialized, revivers, options) {
	return unflatten(JSON.parse(serialized), revivers, options);
}
/**
* Revive a value flattened with `devalue.stringify`
* @param {number | any[]} parsed
* @param {Record<string, (value: any) => any>} [revivers]
* @param {import('./types.js').ParseOptions} [options]
*/
function unflatten(parsed, revivers, options) {
	/** @type {import('./types.js').ParseOperations} */
	const ops = merge_operations(default_parse_operations, options?.operations);
	if (typeof parsed === "number") return hydrate(parsed, true);
	if (!Array.isArray(parsed) || parsed.length === 0) invalid();
	const values = parsed;
	const hydrated = Array(values.length);
	/**
	* A set of values currently being hydrated with custom revivers,
	* used to detect invalid cyclical dependencies
	* @type {Set<number> | null}
	*/
	let hydrating = null;
	/**
	* @param {number} index
	* @returns {any}
	*/
	function get_raw(index) {
		if (!is_valid_array_index(index) || index >= values.length) invalid();
		return values[index];
	}
	/**
	* @param {number} index
	* @returns {any}
	*/
	function hydrate(index, standalone = false) {
		if (index === -1) return ops.fromPrimitive(void 0);
		if (index === -3) return ops.fromPrimitive(NaN);
		if (index === -4) return ops.fromPrimitive(Infinity);
		if (index === -5) return ops.fromPrimitive(-Infinity);
		if (index === -6) return ops.fromPrimitive(-0);
		if (standalone || typeof index !== "number") invalid();
		if (index in hydrated) return hydrated[index];
		if (index >= values.length) invalid();
		const value = values[index];
		if (!value || typeof value !== "object") hydrated[index] = ops.fromPrimitive(value);
		else if (Array.isArray(value)) {
			if (typeof value[0] === "string") {
				const type = value[0];
				const reviver = revivers && Object.hasOwn(revivers, type) ? revivers[type] : void 0;
				if (reviver) {
					let i = value[1];
					if (typeof i !== "number") i = values.push(value[1]) - 1;
					if (Object.hasOwn(hydrated, i)) return hydrated[index] = reviver(hydrated[i]);
					hydrating ??= /* @__PURE__ */ new Set();
					if (hydrating.has(i)) throw new Error("Invalid circular reference");
					hydrating.add(i);
					hydrated[index] = reviver(hydrate(i));
					hydrating.delete(i);
					return hydrated[index];
				}
				switch (type) {
					case "Date":
						hydrated[index] = ops.fromISOString(value[1]);
						break;
					case "Set":
						const set = ops.createSet();
						hydrated[index] = set;
						for (let i = 1; i < value.length; i += 1) ops.addValue(set, hydrate(value[i]));
						break;
					case "Map":
						const map = ops.createMap();
						hydrated[index] = map;
						for (let i = 1; i < value.length; i += 2) ops.addEntry(map, hydrate(value[i]), hydrate(value[i + 1]));
						break;
					case "RegExp":
						hydrated[index] = ops.fromRegExpInfo(value[1], value[2]);
						break;
					case "Object": {
						const wrapped_index = value[1];
						if (!(wrapped_index === -3 || wrapped_index === -4 || wrapped_index === -5 || wrapped_index === -6)) {
							const wrapped = get_raw(wrapped_index);
							const is_bigint = Array.isArray(wrapped) && wrapped[0] === "BigInt";
							if ((wrapped === void 0 || typeof wrapped === "object") && !is_bigint) invalid();
						}
						hydrated[index] = ops.box(hydrate(wrapped_index));
						break;
					}
					case "BigInt":
						hydrated[index] = ops.fromPrimitive(BigInt(value[1]));
						break;
					case "null":
						const obj = ops.createNullPrototypeObject();
						hydrated[index] = obj;
						for (let i = 1; i < value.length; i += 2) {
							const key = value[i];
							if (typeof key !== "string") throw new Error("Cannot parse an object with a non-string key");
							if (key === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
							ops.set(obj, key, hydrate(value[i + 1]));
						}
						break;
					case "Int8Array":
					case "Uint8Array":
					case "Uint8ClampedArray":
					case "Int16Array":
					case "Uint16Array":
					case "Float16Array":
					case "Int32Array":
					case "Uint32Array":
					case "Float32Array":
					case "Float64Array":
					case "BigInt64Array":
					case "BigUint64Array":
					case "DataView": {
						const buffer_index = value[1];
						const raw = get_raw(buffer_index);
						if (!Array.isArray(raw) || raw[0] !== "ArrayBuffer") invalid();
						const buffer = hydrate(buffer_index);
						hydrated[index] = ops.fromViewInfo(type, buffer, value[2], value[3]);
						break;
					}
					case "ArrayBuffer": {
						const base64 = value[1];
						if (typeof base64 !== "string") throw new Error("Invalid ArrayBuffer encoding");
						hydrated[index] = ops.fromArrayBuffer(decode64(base64));
						break;
					}
					case "URL":
					case "URLSearchParams":
					case "Temporal.Duration":
					case "Temporal.Instant":
					case "Temporal.PlainDate":
					case "Temporal.PlainTime":
					case "Temporal.PlainDateTime":
					case "Temporal.PlainMonthDay":
					case "Temporal.PlainYearMonth":
					case "Temporal.ZonedDateTime":
						hydrated[index] = ops.fromStringValue(type, value[1]);
						break;
					default: throw new Error(`Unknown type ${type}`);
				}
			} else if (value[0] === -7) {
				const len = value[1];
				if (!is_valid_array_len(len)) invalid();
				const array = ops.createSparseArray(len);
				hydrated[index] = array;
				for (let i = 2; i < value.length; i += 2) {
					const idx = value[i];
					if (!is_valid_array_index(idx) || idx >= len) invalid();
					ops.set(array, idx, hydrate(value[i + 1]));
				}
			} else {
				const array = ops.createArray(value.length);
				hydrated[index] = array;
				for (let i = 0; i < value.length; i += 1) {
					const n = value[i];
					if (n === -2) continue;
					ops.set(array, i, hydrate(n));
				}
			}
		} else {
			const object = ops.createObject();
			hydrated[index] = object;
			for (const key of Object.keys(value)) {
				if (key === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
				ops.set(object, key, hydrate(value[key]));
			}
		}
		return hydrated[index];
	}
	return hydrate(0);
}
// node_modules/.pnpm/devalue@6.0.3/node_modules/devalue/src/stringify.js
/**
* Turn a value into a JSON string that can be parsed with `devalue.parse`
* @param {any} value
* @param {Record<string, (value: any) => any>} [reducers]
* @param {import('./types.js').StringifyOptions} [options]
*/
function stringify(value, reducers, options) {
	const stringified = run(false, value, reducers, options);
	return typeof stringified === "string" ? stringified : `[${stringified.join(",")}]`;
}
/**
* @param {boolean} async
* @param {any} value
* @param {Record<string, (value: any) => any>} [reducers]
* @param {import('./types.js').StringifyOptions} [options]
*/
function run(async, value, reducers, options) {
	const ops = merge_operations(default_stringify_operations, options?.operations);
	/** @type {any[]} */
	const stringified = [];
	/** @type {Map<any, number>} */
	const indexes = /* @__PURE__ */ new Map();
	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	if (reducers) for (const key of Object.getOwnPropertyNames(reducers)) custom.push({
		key,
		fn: reducers[key]
	});
	/** @type {any[]} */
	let keys = [];
	let p = 0;
	/**
	* @param {string} message
	* @param {any} thing
	* @returns {never}
	*/
	function error(message, thing) {
		throw new DevalueError(message, format_path(keys, (key) => {
			const key_type = ops.typeOf(key);
			return key_type !== "object" && key_type !== "function" && key_type !== "symbol" ? stringify_primitive(ops.toPrimitive(key)) : "...";
		}), thing, value);
	}
	/**
	* @param {any} thing
	* @param {number} [index]
	*/
	function flatten(thing, index) {
		const type = ops.typeOf(thing);
		if (type === "undefined") return -1;
		/** @type {number | undefined} */
		let number;
		if (type === "number") {
			number = ops.toPrimitive(thing);
			if (Number.isNaN(number)) return -3;
			if (number === Infinity) return -4;
			if (number === -Infinity) return -5;
			if (number === 0 && 1 / number < 0) return -6;
		}
		const id = ops.identify(thing);
		if (indexes.has(id)) return indexes.get(id);
		index ??= p++;
		indexes.set(id, index);
		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}
		if (type === "function") error(`Cannot stringify a function`, thing);
		else if (type === "symbol") error(`Cannot stringify a Symbol primitive`, thing);
		/** @type {string | Promise<any>} */
		let str = "";
		if (type !== "object") str = stringify_primitive(type === "number" ? number : ops.toPrimitive(thing));
		else if (ops.isThenable(thing)) {
			if (!async) error(`Cannot stringify a Promise or thenable — use stringifyAsync instead`, thing);
			const prev_keys = keys.slice();
			str = ops.toPromise(thing).then((value) => {
				keys = prev_keys;
				const i = flatten(value, index);
				if (i < 0) stringified[index] = i;
			});
			str.catch(() => {});
		} else {
			const tag = ops.tagOf(thing);
			switch (tag) {
				case "Number":
				case "String":
				case "Boolean":
				case "BigInt":
					str = `["Object",${flatten(ops.unbox(thing))}]`;
					break;
				case "Date":
					str = `["Date","${ops.toISOString(thing)}"]`;
					break;
				case "URL":
					str = `["URL",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				case "URLSearchParams":
					str = `["URLSearchParams",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				case "RegExp":
					const { source, flags } = ops.regExpInfo(thing);
					str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
					break;
				case "Array": {
					let mostly_dense = false;
					const length = ops.lengthOf(thing);
					str = "[";
					for (let i = 0; i < length; i += 1) {
						if (i > 0) str += ",";
						if (ops.hasOwn(thing, i)) {
							keys.push(i);
							str += flatten(ops.get(thing, i));
							keys.pop();
						} else if (mostly_dense) str += -2;
						else {
							const populated_keys = ops.indicesOf(thing);
							const population = populated_keys.length;
							const d = String(length).length;
							if ((length - population) * 3 > 4 + d + population * (d + 1)) {
								str = "[-7," + length;
								for (let j = 0; j < populated_keys.length; j++) {
									const key = populated_keys[j];
									keys.push(+key);
									str += "," + key + "," + flatten(ops.get(thing, key));
									keys.pop();
								}
								break;
							} else {
								mostly_dense = true;
								str += -2;
							}
						}
					}
					str += "]";
					break;
				}
				case "Set":
					str = "[\"Set\"";
					for (const value of ops.valuesOf(thing)) str += `,${flatten(value)}`;
					str += "]";
					break;
				case "Map":
					str = "[\"Map\"";
					for (const [key, value] of ops.entriesOf(thing)) {
						keys.push(MAP_KEY, key);
						str += `,${flatten(key)},${flatten(value)}`;
						keys.pop();
						keys.pop();
					}
					str += "]";
					break;
				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Float16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array": {
					const info = ops.viewInfo(thing);
					str = "[\"" + tag + "\"," + flatten(info.buffer);
					if (info.byteLength !== info.bufferByteLength) str += `,${info.byteOffset},${info.length}`;
					str += "]";
					break;
				}
				case "DataView": {
					const info = ops.viewInfo(thing);
					str = "[\"" + tag + "\"," + flatten(info.buffer);
					if (info.byteLength !== info.bufferByteLength) str += `,${info.byteOffset},${info.byteLength}`;
					str += "]";
					break;
				}
				case "ArrayBuffer":
					str = `["ArrayBuffer","${encode64(ops.toArrayBuffer(thing))}"]`;
					break;
				case "Temporal.Duration":
				case "Temporal.Instant":
				case "Temporal.PlainDate":
				case "Temporal.PlainTime":
				case "Temporal.PlainDateTime":
				case "Temporal.PlainMonthDay":
				case "Temporal.PlainYearMonth":
				case "Temporal.ZonedDateTime":
					str = `["${tag}",${stringify_string(ops.toStringValue(thing))}]`;
					break;
				default: {
					const shape = ops.shapeOf(thing);
					if (shape.kind === "not-plain") error(`Cannot stringify arbitrary non-POJOs`, thing);
					if (shape.kind === "symbol-keys") error(`Cannot stringify POJOs with symbolic keys`, thing);
					if (shape.kind === "null-proto") {
						str = "[\"null\"";
						for (const key of shape.keys) {
							if (key === "__proto__") error(`Cannot stringify objects with __proto__ keys`, thing);
							keys.push(key);
							str += `,${quote_key(key)},${flatten(ops.get(thing, key))}`;
							keys.pop();
						}
						str += "]";
					} else {
						str = "{";
						let started = false;
						for (const key of shape.keys) {
							if (key === "__proto__") error(`Cannot stringify objects with __proto__ keys`, thing);
							if (started) str += ",";
							started = true;
							keys.push(key);
							str += `${quote_key(key)}:${flatten(ops.get(thing, key))}`;
							keys.pop();
						}
						str += "}";
					}
				}
			}
		}
		stringified[index] = str;
		return index;
	}
	const index = flatten(value);
	if (index < 0) return `${index}`;
	return stringified;
}
/**
* @param {any} thing
* @returns {string}
*/
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === "string") return stringify_string(thing);
	if (thing === void 0) return (-1).toString();
	if (thing === 0 && 1 / thing < 0) return (-6).toString();
	if (type === "bigint") return `["BigInt","${thing}"]`;
	return String(thing);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/build/util.js
/**
* Given the Astro configuration, it tells if a slash should be appended or not
*/
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
	switch (trailingSlash) {
		case "always": return true;
		case "never": return false;
		case "ignore": switch (buildFormat) {
			case "directory": return true;
			case "preserve":
			case "file": return false;
		}
	}
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/consts.js
var ACTION_QUERY_PARAMS = {
	actionName: "_action",
	actionPayload: "_astroActionPayload"
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/runtime/client.js
var codeToStatusMap = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	CONTENT_TOO_LARGE: 413,
	URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	MISDIRECTED_REQUEST: 421,
	UNPROCESSABLE_CONTENT: 422,
	LOCKED: 423,
	FAILED_DEPENDENCY: 424,
	TOO_EARLY: 425,
	UPGRADE_REQUIRED: 426,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505,
	VARIANT_ALSO_NEGOTIATES: 506,
	INSUFFICIENT_STORAGE: 507,
	LOOP_DETECTED: 508,
	NETWORK_AUTHENTICATION_REQUIRED: 511
};
var statusToCodeMap = Object.fromEntries(Object.entries(codeToStatusMap).map(([key, value]) => [value, key]));
var ActionError = class ActionError extends Error {
	type = "AstroActionError";
	code = "INTERNAL_SERVER_ERROR";
	status = 500;
	constructor(params) {
		super(params.message);
		this.code = params.code;
		this.status = ActionError.codeToStatus(params.code);
		if (params.stack) this.stack = params.stack;
	}
	static codeToStatus(code) {
		return codeToStatusMap[code];
	}
	static statusToCode(status) {
		return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
	}
	static fromJson(body) {
		if (isInputError(body)) return new ActionInputError(body.issues);
		if (isActionError(body)) return new ActionError(body);
		return new ActionError({ code: "INTERNAL_SERVER_ERROR" });
	}
};
function isActionError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
var ActionInputError = class extends ActionError {
	type = "AstroActionInputError";
	issues;
	fields;
	constructor(issues) {
		super({
			message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
			code: "BAD_REQUEST"
		});
		this.issues = issues;
		this.fields = {};
		for (const issue of issues) if (issue.path.length > 0) {
			const key = issue.path[0].toString();
			this.fields[key] ??= [];
			this.fields[key]?.push(issue.message);
		}
	}
};
function deserializeActionResult(res) {
	if (res.type === "error") {
		let json;
		try {
			json = JSON.parse(res.body);
		} catch {
			return {
				data: void 0,
				error: new ActionError({
					message: res.body,
					code: "INTERNAL_SERVER_ERROR"
				})
			};
		}
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": void 0,
			"SSR": true
		}, { OS: "Windows_NT" })?.PROD) return {
			error: ActionError.fromJson(json),
			data: void 0
		};
		else {
			const error = ActionError.fromJson(json);
			error.stack = actionResultErrorStack.get();
			return {
				error,
				data: void 0
			};
		}
	}
	if (res.type === "empty") return {
		data: void 0,
		error: void 0
	};
	return {
		data: parse(res.body, { URL: (href) => new URL(href) }),
		error: void 0
	};
}
var actionResultErrorStack = (function actionResultErrorStackFn() {
	let errorStack;
	return {
		set(stack) {
			errorStack = stack;
		},
		get() {
			return errorStack;
		}
	};
})();
function getActionQueryString(name) {
	return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name }).toString()}`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/utils.js
function hasActionPayload(locals) {
	return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
	return (actionFn) => {
		if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) return;
		return deserializeActionResult(locals._actionPayload.actionResult);
	};
}
function createCallAction(context) {
	return (baseAction, input) => {
		Reflect.set(context, ACTION_API_CONTEXT_SYMBOL, true);
		return baseAction.bind(context)(input);
	};
}
// node_modules/.pnpm/cookie@2.0.2/node_modules/cookie/dist/index.js
/**
* RegExp to match cookie-name in RFC 6265 sec 4.1.1
* This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
* which has been replaced by the token definition in RFC 7230 appendix B.
*
* cookie-name       = token
* token             = 1*tchar
* tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
*                     "*" / "+" / "-" / "." / "^" / "_" /
*                     "`" / "|" / "~" / DIGIT / ALPHA
*
* Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
* Allow same range as cookie value, except `=`, which delimits end of name.
*/
var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
* RegExp to match cookie-value in RFC 6265 sec 4.1.1
*
* cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
* cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
*                     ; US-ASCII characters excluding CTLs,
*                     ; whitespace DQUOTE, comma, semicolon,
*                     ; and backslash
*
* Allowing more characters: https://github.com/jshttp/cookie/issues/191
* Comma, backslash, and DQUOTE are not part of the parsing algorithm.
*/
var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
* RegExp to match invalid cookie values to be encoded, including `%` for roundtrip safety.
*/
var cookieOctetInvalidRegExp = /[\u0000-\u0020\u007F-\uFFFF",;\\%]/;
/**
* RegExp to match domain-value in RFC 6265 sec 4.1.1
*
* domain-value      = <subdomain>
*                     ; defined in [RFC1034], Section 3.5, as
*                     ; enhanced by [RFC1123], Section 2.1
* <subdomain>       = <label> | <subdomain> "." <label>
* <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
*                     Labels must be 63 characters or less.
*                     'let-dig' not 'letter' in the first char, per RFC1123
* <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
* <let-dig-hyp>     = <let-dig> | "-"
* <let-dig>         = <letter> | <digit>
* <letter>          = any one of the 52 alphabetic characters A through Z in
*                     upper case and a through z in lower case
* <digit>           = any one of the ten digits 0 through 9
*
* Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
*
* > (Note that a leading %x2E ("."), if present, is ignored even though that
* character is not permitted, but a trailing %x2E ("."), if present, will
* cause the user agent to ignore the attribute.)
*/
var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
* RegExp to match path-value in RFC 6265 sec 4.1.1
*
* path-value        = <any CHAR except CTLs or ";">
* CHAR              = %x01-7F
*                     ; defined in RFC 5234 appendix B.1
*/
var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
var NullObject = /* @__PURE__ */ (() => {
	const C = function() {};
	C.prototype = Object.create(null);
	return C;
})();
/**
* Parse a `Cookie` header.
*
* Parse the given cookie header string into an object
* The object has the various cookies as keys(names) => values
*/
function parseCookie(str, options) {
	const obj = new NullObject();
	const len = str.length;
	if (len < 2) return obj;
	const dec = options?.decode ?? defaultDecode;
	let index = 0;
	do {
		const eqIdx = eqIndex(str, index, len);
		if (eqIdx === len) break;
		const endIdx = endIndex(str, index, len);
		if (eqIdx > endIdx) {
			index = str.lastIndexOf(";", eqIdx - 1) + 1;
			continue;
		}
		const key = valueSlice(str, index, eqIdx);
		if (obj[key] === void 0) obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
		index = endIdx + 1;
	} while (index < len);
	return obj;
}
/**
* Serialize data into a cookie header.
*
* Serialize a name value pair into a cookie string suitable for
* http headers. An optional options object specifies cookie parameters.
*
* stringifySetCookie({ name: 'foo', value: 'bar', httpOnly: true })
*   => "foo=bar; HttpOnly"
*/
function stringifySetCookie(cookie, options) {
	const enc = options?.encode ?? defaultEncode;
	if (!cookieNameRegExp.test(cookie.name)) throw new TypeError(`cookie name is invalid: ${cookie.name}`);
	const value = cookie.value == null ? "" : enc(cookie.value);
	if (enc !== defaultEncode && !cookieValueRegExp.test(value)) throw new TypeError(`cookie value is invalid: ${cookie.value}`);
	let str = cookie.name + "=" + value;
	if (cookie.maxAge !== void 0) {
		if (!Number.isSafeInteger(cookie.maxAge)) throw new TypeError(`cookie maxAge is invalid: ${cookie.maxAge}`);
		str += "; Max-Age=" + cookie.maxAge;
	}
	if (cookie.domain) {
		if (!domainValueRegExp.test(cookie.domain)) throw new TypeError(`cookie domain is invalid: ${cookie.domain}`);
		str += "; Domain=" + cookie.domain;
	}
	if (cookie.path) {
		if (!pathValueRegExp.test(cookie.path)) throw new TypeError(`cookie path is invalid: ${cookie.path}`);
		str += "; Path=" + cookie.path;
	}
	if (cookie.expires) {
		const year = cookie.expires.getUTCFullYear();
		if (!(year >= 1601 && year <= 9999)) throw new TypeError(`cookie expires is invalid: ${cookie.expires}`);
		str += "; Expires=" + cookie.expires.toUTCString();
	}
	if (cookie.httpOnly) str += "; HttpOnly";
	if (cookie.secure) str += "; Secure";
	if (cookie.partitioned) str += "; Partitioned";
	if (cookie.priority) switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
		case "low":
			str += "; Priority=Low";
			break;
		case "medium":
			str += "; Priority=Medium";
			break;
		case "high":
			str += "; Priority=High";
			break;
		default: throw new TypeError(`cookie priority is invalid: ${cookie.priority}`);
	}
	if (cookie.sameSite) switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
		case true:
		case "strict":
			str += "; SameSite=Strict";
			break;
		case "lax":
			str += "; SameSite=Lax";
			break;
		case "none":
			str += "; SameSite=None";
			break;
		default: throw new TypeError(`cookie sameSite is invalid: ${cookie.sameSite}`);
	}
	return str;
}
/**
* Find the next `;` character, or return `len`.
*/
function endIndex(str, min, len) {
	const index = str.indexOf(";", min);
	return index === -1 ? len : index;
}
/**
* Find the next `=` character, or return `len`.
*/
function eqIndex(str, min, len) {
	const index = str.indexOf("=", min);
	return index === -1 ? len : index;
}
/**
* Slice out a value between startPod to max.
*/
function valueSlice(str, min, max) {
	if (min === max) return "";
	let start = min;
	let end = max;
	do {
		const code = str.charCodeAt(start);
		if (code !== 32 && code !== 9) break;
	} while (++start < end);
	while (end > start) {
		const code = str.charCodeAt(end - 1);
		if (code !== 32 && code !== 9) break;
		end--;
	}
	return str.slice(start, end);
}
/**
* URL-decode string value. Optimized to skip native call when no %.
*/
function defaultDecode(str) {
	if (str.indexOf("%") === -1) return str;
	try {
		return decodeURIComponent(str);
	} catch (e) {
		return str;
	}
}
/**
* URL-encode string value. Optimized to skip native call for roundtrip-safe cookie-octet values.
*/
function defaultEncode(str) {
	return cookieOctetInvalidRegExp.test(str) ? encodeURIComponent(str) : str;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cookies/cookies.js
var DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
var DELETED_VALUE = "deleted";
var responseSentSymbol = Symbol.for("astro.responseSent");
var identity = (value) => value;
var AstroCookie = class {
	value;
	constructor(value) {
		this.value = value;
	}
	json() {
		if (this.value === void 0) throw new Error(`Cannot convert undefined to an object.`);
		return JSON.parse(this.value);
	}
	number() {
		return Number(this.value);
	}
	boolean() {
		if (this.value === "false") return false;
		if (this.value === "0") return false;
		return Boolean(this.value);
	}
};
var AstroCookies = class {
	#request;
	#requestValues;
	#outgoing;
	#consumed;
	#logger;
	constructor(request, logger) {
		this.#request = request;
		this.#requestValues = null;
		this.#outgoing = null;
		this.#consumed = false;
		this.#logger = logger;
	}
	/**
	* Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
	* in a Set-Cookie header added to the response.
	* @param key The cookie to delete
	* @param options Options related to this deletion, such as the path of the cookie.
	*/
	delete(key, options) {
		this.#ensureOutgoingMap().set(key, [
			DELETED_VALUE,
			stringifySetCookie({
				...options,
				name: key,
				value: DELETED_VALUE,
				expires: DELETED_EXPIRATION,
				maxAge: void 0
			}),
			false
		]);
	}
	/**
	* Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
	* request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
	* from that set call, overriding any values already part of the request.
	* @param key The cookie to get.
	* @returns An object containing the cookie value as well as convenience methods for converting its value.
	*/
	get(key, options = void 0) {
		if (this.#outgoing?.has(key)) {
			let [serializedValue, , isSetValue] = this.#outgoing.get(key);
			if (isSetValue) return new AstroCookie(serializedValue);
			else return;
		}
		const decode = options?.decode ?? decodeURIComponent;
		const values = this.#ensureParsed();
		if (key in values) {
			const value = values[key];
			if (value !== void 0) {
				let decodedValue;
				try {
					decodedValue = decode(value);
				} catch (_error) {
					decodedValue = value;
				}
				return new AstroCookie(decodedValue);
			}
		}
	}
	/**
	* Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
	* part of the initial request or set via Astro.cookies.set(key)
	* @param key The cookie to check for.
	* @param _options This parameter is no longer used.
	* @returns
	*/
	has(key, _options) {
		if (this.#outgoing?.has(key)) {
			let [, , isSetValue] = this.#outgoing.get(key);
			return isSetValue;
		}
		return this.#ensureParsed()[key] !== void 0;
	}
	/**
	* Astro.cookies.set(key, value) is used to set a cookie's value. If provided
	* an object it will be stringified via JSON.stringify(value). Additionally you
	* can provide options customizing how this cookie will be set, such as setting httpOnly
	* in order to prevent the cookie from being read in client-side JavaScript.
	* @param key The name of the cookie to set.
	* @param value A value, either a string or other primitive or an object.
	* @param options Options for the cookie, such as the path and security settings.
	*/
	set(key, value, options) {
		if (this.#consumed) this.#logger.warn("SKIP_FORMAT", "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page.");
		let serializedValue;
		if (typeof value === "string") serializedValue = value;
		else {
			let toStringValue = value.toString();
			if (toStringValue === Object.prototype.toString.call(value)) serializedValue = JSON.stringify(value);
			else serializedValue = toStringValue;
		}
		const { encode, ...attributes } = options ?? {};
		this.#ensureOutgoingMap().set(key, [
			serializedValue,
			stringifySetCookie({
				...attributes,
				name: key,
				value: serializedValue
			}, { encode }),
			true
		]);
		if (this.#request[responseSentSymbol]) throw new AstroError({ ...ResponseSentError });
	}
	/**
	* Merges a new AstroCookies instance into the current instance. Any new cookies
	* will be added to the current instance, overwriting any existing cookies with the same name.
	*/
	merge(cookies) {
		const outgoing = cookies.#outgoing;
		if (outgoing) for (const [key, value] of outgoing) this.#ensureOutgoingMap().set(key, value);
	}
	/**
	* Astro.cookies.header() returns an iterator for the cookies that have previously
	* been set by either Astro.cookies.set() or Astro.cookies.delete().
	* This method is primarily used by adapters to set the header on outgoing responses.
	* @returns
	*/
	*headers() {
		if (this.#outgoing == null) return;
		for (const [, value] of this.#outgoing) yield value[1];
	}
	/**
	* Marks the cookies as consumed and returns the header values.
	* After consumption, any subsequent `set()` calls will warn.
	*/
	consume() {
		this.#consumed = true;
		return this.headers();
	}
	/**
	* @deprecated Use the instance method `cookies.consume()` instead.
	* Kept for backward compatibility with adapters.
	*/
	static consume(cookies) {
		return cookies.consume();
	}
	#ensureParsed() {
		if (!this.#requestValues) this.#parse();
		if (!this.#requestValues) this.#requestValues = Object.create(null);
		return this.#requestValues;
	}
	#ensureOutgoingMap() {
		if (!this.#outgoing) this.#outgoing = /* @__PURE__ */ new Map();
		return this.#outgoing;
	}
	#parse() {
		const raw = this.#request.headers.get("cookie");
		if (!raw) return;
		this.#requestValues = parseCookie(raw, { decode: identity });
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cookies/response.js
var astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
	Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
	let cookies = Reflect.get(response, astroCookiesSymbol);
	if (cookies != null) return cookies;
	else return;
}
function* getSetCookiesFromResponse(response) {
	const cookies = getCookiesFromResponse(response);
	if (!cookies) return [];
	for (const headerValue of cookies.consume()) yield headerValue;
	return [];
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/path.js
function pathHasLocale(path, locales) {
	const segments = path.split("/").map(normalizeThePath);
	for (const segment of segments) for (const locale of locales) if (typeof locale === "string") {
		if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) return true;
	} else if (segment === locale.path) return true;
	return false;
}
/**
*
* Given a locale, this function:
* - replaces the `_` with a `-`;
* - transforms all letters to be lowercase;
*/
function normalizeTheLocale(locale) {
	return locale.replaceAll("_", "-").toLowerCase();
}
/**
*
* Given a path or path segment, this function:
* - removes the `.html` extension if it exists
*/
function normalizeThePath(path) {
	return path.endsWith(".html") ? path.slice(0, -5) : path;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/error-routes.js
function isLocalizedErrorRoute(route, status, locales) {
	if (!locales) return false;
	const suffix = `/${status}`;
	if (!route.endsWith(suffix)) return false;
	const localeSegment = route.slice(0, -suffix.length);
	if (!localeSegment || localeSegment.includes("/", 1)) return false;
	return pathHasLocale(localeSegment, locales);
}
function getErrorRoutePath(pathname, status, routes, locales, appendTrailingSlash = false) {
	const suffix = appendTrailingSlash ? "/" : "";
	if (locales) {
		const firstSegment = pathname.split("/").find(Boolean);
		if (firstSegment && pathHasLocale(`/${firstSegment}`, locales)) {
			const localized = `/${firstSegment}/${status}`;
			if (routes.some((route) => route.route === localized)) return `${localized}${suffix}`;
		}
	}
	return `/${status}${suffix}`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/helpers.js
/**
* Function guard that checks if a route is redirect. If so, `RouteData.redirectRoute` and
* `RouteData.redirect` aren't `undefined` anymore
* @param route
*/
function routeIsRedirect(route) {
	return route?.type === "redirect";
}
/**
* True if the route represents a fallback entry.
*/
function routeIsFallback(route) {
	return route?.type === "fallback";
}
/**
* Give a route, it returns its fallback routes from a `list` of `RouteInfo[]`.
*
* It throws an error if no fallback routes were found. This means there's an error
* when we construct the list of routes
* @param route
* @param routeList
*/
function getFallbackRoute(route, routeList) {
	const fallbackRoute = routeList.find((r) => {
		if (route.route === "/" && r.routeData.route === "/") return true;
		return r.routeData.fallbackRoutes.find((f) => {
			return f.route === route.route;
		});
	});
	if (!fallbackRoute) throw new Error(`No fallback route found for route ${route.route}`);
	return fallbackRoute.routeData;
}
/**
* Return a user-provided 404 route if one exists.
*/
function getCustom404Route(manifestData) {
	return manifestData.routes.find((r) => isRoute404(r.route));
}
/**
* Return a user-provided 500 route if one exists.
*/
function getCustom500Route(manifestData) {
	return manifestData.routes.find((r) => isRoute500(r.route));
}
/**
* Whether `pathname` reached `routeData` through one of its i18n fallback
* routes rather than through the route's own pattern.
*/
function isFallbackRouteMatch(routeData, pathname) {
	if (routeData.pattern.test(pathname)) return false;
	return routeData.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
}
/**
* Computes the default HTTP status code a route renders with:
* `302` for i18n fallback matches, `404`/`500` for (possibly localized)
* error routes, `200` otherwise.
*/
function getDefaultStatusCode(manifest, routeData, pathname) {
	if (isFallbackRouteMatch(routeData, pathname)) return 302;
	const route = removeTrailingForwardSlash(routeData.route);
	const locales = manifest.i18n?.locales;
	if (isRoute404(route) || isLocalizedErrorRoute(route, 404, locales)) return 404;
	if (isRoute500(route) || isLocalizedErrorRoute(route, 500, locales)) return 500;
	return 200;
}
/**
* Returns true if the route definition contains `.html` as a static segment part,
* as is the case for routes like `[slug].html.astro`. Used to avoid stripping the
* `.html` suffix from pathnames that intentionally include it.
*/
function routeHasHtmlExtension(route) {
	return route.segments.some((segment) => segment.some((part) => !part.dynamic && part.content.includes(".html")));
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/redirects/component.js
var RedirectComponentInstance = { default() {
	return new Response(null, { status: 301 });
} };
var RedirectSinglePageBuiltModule = {
	page: () => Promise.resolve(RedirectComponentInstance),
	onRequest: (_, next) => next()
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render/ssr-element.js
var URL_PARSE_BASE = "https://astro.build";
function splitAssetPath(path) {
	const parsed = new URL(path, URL_PARSE_BASE);
	return {
		pathname: !URL.canParse(path) && !path.startsWith("/") ? parsed.pathname.slice(1) : parsed.pathname,
		suffix: `${parsed.search}${parsed.hash}`
	};
}
function appendQueryParams(path, queryParams) {
	const queryString = queryParams.toString();
	if (!queryString) return path;
	const hashIndex = path.indexOf("#");
	const basePath = hashIndex === -1 ? path : path.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
	return `${basePath}${basePath.includes("?") ? "&" : "?"}${queryString}${hash}`;
}
function createAssetLink(href, base, assetsPrefix, queryParams) {
	const { pathname, suffix } = splitAssetPath(href);
	let url = "";
	if (assetsPrefix) {
		const pf = getAssetsPrefix(fileExtension(pathname), assetsPrefix);
		url = joinPaths(pf, slash(pathname)) + suffix;
	} else if (base) url = prependForwardSlash(joinPaths(base, slash(pathname))) + suffix;
	else url = href;
	if (queryParams) url = appendQueryParams(url, queryParams);
	return url;
}
function createStylesheetElement(stylesheet, base, assetsPrefix, queryParams) {
	if (stylesheet.type === "inline") return {
		props: {},
		children: stylesheet.content
	};
	else return {
		props: {
			rel: "stylesheet",
			href: createAssetLink(stylesheet.src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix, queryParams) {
	return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix, queryParams)));
}
function createModuleScriptElement(script, base, assetsPrefix, queryParams) {
	if (script.type === "external") return createModuleScriptElementWithSrc(script.value, base, assetsPrefix, queryParams);
	else return {
		props: { type: "module" },
		children: script.value
	};
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix, queryParams) {
	return {
		props: {
			type: "module",
			src: createAssetLink(src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/manifest/memo.js
function createManifestMemo(derive) {
	const cache = /* @__PURE__ */ new WeakMap();
	return {
		get(manifest) {
			if (cache.has(manifest)) return cache.get(manifest);
			const value = derive(manifest);
			cache.set(manifest, value);
			return value;
		},
		has(manifest) {
			return cache.has(manifest);
		},
		set(manifest, value) {
			cache.set(manifest, value);
		},
		invalidate(manifest) {
			cache.delete(manifest);
		}
	};
}
/**
* Caches the PROMISE (single-flight: concurrent callers share one derivation).
* On rejection the entry is DELETED so the next call retries a failed lazy
* resolve instead of caching the failure forever.
*/
function createAsyncManifestMemo(derive) {
	const cache = /* @__PURE__ */ new WeakMap();
	return {
		get(manifest) {
			let promise = cache.get(manifest);
			if (!promise) {
				promise = derive(manifest);
				cache.set(manifest, promise);
				promise.catch(() => {
					if (cache.get(manifest) === promise) cache.delete(manifest);
				});
			}
			return promise;
		},
		invalidate(manifest) {
			cache.delete(manifest);
		}
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/request-body.js
/**
* Shared utility for reading request bodies with a size limit.
* Used by both Actions and Server Islands to enforce `security.actionBodySizeLimit`
* and `security.serverIslandBodySizeLimit` respectively.
*/
/**
* Read the request body as a `Uint8Array`, enforcing a maximum size limit.
* Checks the `Content-Length` header for early rejection, then streams the body
* and tracks bytes received.
*
* @throws {BodySizeLimitError} if the body exceeds the configured limit
*/
async function readBodyWithLimit(request, limit) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number.parseInt(contentLengthHeader, 10);
		if (Number.isFinite(contentLength) && contentLength > limit) throw new BodySizeLimitError(limit);
	}
	if (!request.body) return /* @__PURE__ */ new Uint8Array();
	const reader = request.body.getReader();
	const chunks = [];
	let received = 0;
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		if (value) {
			received += value.byteLength;
			if (received > limit) throw new BodySizeLimitError(limit);
			chunks.push(value);
		}
	}
	const buffer = new Uint8Array(received);
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return buffer;
}
var BodySizeLimitError = class extends Error {
	limit;
	constructor(limit) {
		super(`Request body exceeds the configured limit of ${limit} bytes`);
		this.name = "BodySizeLimitError";
		this.limit = limit;
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/pattern.js
function getPattern(segments, base, addTrailingSlash) {
	const pathname = segments.map((segment) => {
		if (segment.length === 1 && segment[0].spread) return "(?:\\/(.*?))?";
		else return "\\/" + segment.map((part) => {
			if (part.spread) return "(.*?)";
			else if (part.dynamic) return "([^/]+?)";
			else return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}).join("");
	}).join("");
	const trailing = addTrailingSlash && segments.length ? getTrailingSlashPattern(addTrailingSlash) : "$";
	let initial = "\\/";
	if (addTrailingSlash === "never" && base !== "/" && pathname !== "") initial = "";
	return new RegExp(`^${pathname || initial}${trailing}`);
}
function getTrailingSlashPattern(addTrailingSlash) {
	if (addTrailingSlash === "always") return "\\/$";
	if (addTrailingSlash === "never") return "$";
	return "\\/?$";
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/server-islands/endpoint.js
var SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
var SERVER_ISLAND_COMPONENT = "_server-islands.astro";
function badRequest(reason) {
	return new Response(null, {
		status: 400,
		statusText: "Bad request: " + reason
	});
}
var DEFAULT_BODY_SIZE_LIMIT = 1048576;
async function getRequestData(request, bodySizeLimit = DEFAULT_BODY_SIZE_LIMIT) {
	switch (request.method) {
		case "GET": {
			const params = new URL(request.url).searchParams;
			if (!params.has("s") || !params.has("e") || !params.has("p")) return badRequest("Missing required query parameters.");
			const encryptedSlots = params.get("s");
			return {
				encryptedComponentExport: params.get("e"),
				encryptedProps: params.get("p"),
				encryptedSlots
			};
		}
		case "POST": try {
			const body = await readBodyWithLimit(request, bodySizeLimit);
			const raw = new TextDecoder().decode(body);
			const data = JSON.parse(raw);
			if (Object.hasOwn(data, "slots") && typeof data.slots === "object") return badRequest("Plaintext slots are not allowed. Slots must be encrypted.");
			if (Object.hasOwn(data, "componentExport") && typeof data.componentExport === "string") return badRequest("Plaintext componentExport is not allowed. componentExport must be encrypted.");
			return data;
		} catch (e) {
			if (e instanceof BodySizeLimitError) return new Response(null, {
				status: 413,
				statusText: e.message
			});
			if (e instanceof SyntaxError) return badRequest("Request format is invalid.");
			throw e;
		}
		default: return new Response(null, { status: 405 });
	}
}
function createEndpoint(manifest) {
	const page = async (result) => {
		const params = result.params;
		if (!params.name) return new Response(null, {
			status: 400,
			statusText: "Bad request"
		});
		const componentId = params.name;
		const data = await getRequestData(result.request, manifest.serverIslandBodySizeLimit);
		if (data instanceof Response) return data;
		let imp = (await (await manifest.serverIslandMappings?.())?.serverIslandMap)?.get(componentId);
		if (!imp) return new Response(null, {
			status: 404,
			statusText: "Not found"
		});
		const key = await manifest.key;
		let componentExport;
		try {
			componentExport = await decryptString(key, data.encryptedComponentExport, `export:${componentId}`);
		} catch (_e) {
			return badRequest("Encrypted componentExport value is invalid.");
		}
		const encryptedProps = data.encryptedProps;
		let props = {};
		if (encryptedProps !== "") try {
			const propString = await decryptString(key, encryptedProps, `props:${componentId}`);
			props = JSON.parse(propString);
		} catch (_e) {
			return badRequest("Encrypted props value is invalid.");
		}
		let decryptedSlots = {};
		const encryptedSlots = data.encryptedSlots;
		if (encryptedSlots !== "") try {
			const slotsString = await decryptString(key, encryptedSlots, `slots:${componentId}`);
			decryptedSlots = JSON.parse(slotsString);
		} catch (_e) {
			return badRequest("Encrypted slots value is invalid.");
		}
		let Component = (await imp())[componentExport];
		const slots = {};
		for (const prop in decryptedSlots) slots[prop] = createSlotValueFromString(decryptedSlots[prop]);
		result.response.headers.set("X-Robots-Tag", "noindex");
		if (isAstroComponentFactory(Component)) {
			const ServerIsland = Component;
			Component = function(...args) {
				return ServerIsland.apply(this, args);
			};
			Object.assign(Component, ServerIsland);
			Component.propagation = "self";
		}
		result._metadata.routeHasPropagation = true;
		const renderPropagatedHead = () => markHTMLString(result._metadata.extraHead.join(""));
		return renderTemplate`${renderPropagatedHead}${renderComponent(result, "Component", Component, props, slots)}`;
	};
	page.isAstroComponentFactory = true;
	return {
		default: page,
		partial: true
	};
}
// node_modules/.pnpm/html-escaper@3.0.3/node_modules/html-escaper/esm/index.js
/**
* Copyright (C) 2017-present by Andrea Giammarchi - @WebReflection
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
};
var pe = (m) => esca[m];
/**
* Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
* @param {string} es the input to safely escape
* @returns {string} the escaped input, and it **throws** an error if
*  the input type is unexpected, except for boolean and numbers,
*  converted as string.
*/
var escape = (es) => replace.call(es, ca, pe);
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/template/4xx.js
/** Display all errors */
function template({ title, pathname, statusCode = 404, tabTitle, body }) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/internal/astro-designed-error-pages.js
var DEFAULT_404_ROUTE = {
	component: DEFAULT_404_COMPONENT,
	params: [],
	pattern: /^\/404\/?$/,
	prerender: false,
	pathname: "/404",
	segments: [[{
		content: "404",
		dynamic: false,
		spread: false
	}]],
	type: "page",
	route: "/404",
	fallbackRoutes: [],
	isIndex: false,
	origin: "internal",
	distURL: []
};
async function default404Page({ pathname }) {
	return new Response(template({
		statusCode: 404,
		title: "Not found",
		tabTitle: "404: Not Found",
		pathname
	}), {
		status: 404,
		headers: { "Content-Type": "text/html" }
	});
}
default404Page.isAstroComponentFactory = true;
var default404Instance = { default: default404Page };
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/default.js
function createDefaultRoutes(manifest) {
	const root = new URL(manifest.rootDir);
	return [{
		instance: default404Instance,
		matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
		route: DEFAULT_404_ROUTE.route,
		component: DEFAULT_404_COMPONENT
	}, {
		instance: createEndpoint(manifest),
		matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
		route: SERVER_ISLAND_ROUTE,
		component: SERVER_ISLAND_COMPONENT
	}];
}
var defaultRoutesMemo = createManifestMemo(createDefaultRoutes);
/** The built-in internal routes for a manifest, derived once per manifest. */
function getDefaultRoutes(manifest) {
	return defaultRoutesMemo.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/logger/manifest-logger.js
var loggers = /* @__PURE__ */ new WeakMap();
/**
* One identity-stable logger per manifest. Created on first access as a
* console logger at `manifest.logLevel`.
*
* The instance is never replaced: `getResolvedLogger` swaps the
* destination in place via `AstroLogger.setDestination`, so every holder
* (state-captured logger, adapterLogger's retained options) writes to the
* new destination immediately.
*/
function getLogger(manifest) {
	let logger = loggers.get(manifest);
	if (!logger) {
		logger = createConsoleLogger({ level: manifest.logLevel });
		loggers.set(manifest, logger);
	}
	return logger;
}
var resolvedLogger = createAsyncManifestMemo(async (manifest) => {
	const logger = getLogger(manifest);
	try {
		const destination = (await manifest.logger?.())?.default;
		if (destination) logger.setDestination(destination);
	} catch (error) {
		logger.error("config", "Failed to load the configured logger destination; continuing with the console logger.\n" + (error instanceof Error ? error.stack ?? error.message : String(error)));
	}
	return logger;
});
/**
* The manifest's logger with the user-configured destination (the
* `manifest.logger` thunk) resolved and applied via `setDestination` on the
* identity-stable logger. Memoized single-flight; awaited at request entry.
*
* Never rejects: a destination that fails to load is reported through the
* unswapped (console) logger, which stays in place — a broken custom
* destination cannot fail a request. Because the derivation always resolves,
* the memo's delete-on-rejection retry path never triggers: the thunk runs
* at most once per manifest.
*/
function getResolvedLogger(manifest) {
	return resolvedLogger.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/rewrite-validate.js
/**
* Creates the check `findRouteToRewrite` runs on a dynamic route whose
* `distURL` is empty. Returns `true` when `getStaticPaths()` produces the
* pathname, `false` when it throws `NoMatchingStaticPathFound`, and rethrows
* any other error so a broken `getStaticPaths()` is not hidden as a 404.
*/
function createRewriteRouteValidator(manifest, getComponentByRoute) {
	return async (route, pathname) => {
		try {
			await getProps({
				mod: await getComponentByRoute(manifest, route),
				routeData: route,
				routeCache: getRouteCache(manifest),
				pathname,
				logger: getLogger(manifest),
				serverLike: manifest.serverLike,
				base: manifest.base,
				trailingSlash: manifest.trailingSlash
			});
			return true;
		} catch (e) {
			if (isAstroError(e) && e.title === NoMatchingStaticPathFound.title) return false;
			throw e;
		}
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/request.js
/**
* Used by astro internals to create a web standard request object.
*
* The user of this function may provide the data in a runtime-agnostic way.
*
* This is used by the static build to create fake requests for prerendering, and by the dev server to convert node requests into the standard request object.
*/
function createRequest({ url, headers, method = "GET", body = void 0, logger, isPrerendered = false, routePattern, init }) {
	const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(Object.entries(headers).filter(([name]) => !name.startsWith(":")));
	if (typeof url === "string") url = new URL(url);
	if (isPrerendered) url.search = "";
	const request = new Request(url, {
		method,
		headers: headersObj,
		body: isPrerendered ? null : body,
		...init
	});
	if (isPrerendered) {
		let _headers = request.headers;
		const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
		Object.defineProperty(request, "headers", {
			...headersDesc,
			get() {
				logger.warn(null, `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`);
				return _headers;
			},
			set(newHeaders) {
				_headers = newHeaders;
			}
		});
	}
	return request;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/util/pathname.js
/**
* Thrown when a URL path is encoded so many times that we give up decoding it
* (see {@link validateAndDecodePathname}). When this happens we reject the
* request with a `400` instead of guessing the path. If we let a half-decoded
* path through, your middleware might check one path while Astro routes to a
* different one.
*/
var MultiLevelEncodingError = class extends Error {
	constructor() {
		super("URL encoding depth exceeded the maximum number of decode iterations");
		this.name = "MultiLevelEncodingError";
	}
};
/**
* How many times {@link validateAndDecodePathname} will decode a path before
* giving up. A normal URL is encoded once, or at most twice — for example a
* `[` (`%5B`) can arrive as `%255B` when a link is built from a value that was
* already encoded. A path that is still encoded after this many tries is
* almost certainly an attack, so we reject it instead of decoding again.
*/
var MAX_DECODE_ITERATIONS = 10;
/**
* Decodes a URL path over and over until it stops changing, so a path that was
* encoded several times ends up as a single, final path. This stops someone
* from sneaking a path like `/admin` past middleware by encoding it multiple
* times — middleware always sees the real, decoded path.
*
* @param pathname - The path to decode
* @returns The final, fully decoded path
* @throws Error if the path has broken encoding that can't be decoded at all
*   (for example a lone `%` that isn't followed by two hex digits)
* @throws MultiLevelEncodingError if the path is still changing after
*   {@link MAX_DECODE_ITERATIONS} tries (it was encoded too many times).
*   Handing back a half-decoded path here would bring back the security hole
*   this function exists to close.
*/
function validateAndDecodePathname(pathname) {
	let decoded;
	try {
		decoded = decodeURI(pathname);
	} catch (_e) {
		throw new Error("Invalid URL encoding");
	}
	let iterations = 0;
	while (decoded !== pathname) {
		if (iterations >= MAX_DECODE_ITERATIONS) throw new MultiLevelEncodingError();
		pathname = decoded;
		try {
			decoded = decodeURI(pathname);
		} catch {
			break;
		}
		iterations++;
	}
	return decoded;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/rewrite.js
/**
* Shared logic to retrieve the rewritten route. It returns a tuple that represents:
* 1. The new `Request` object. It contains `base`
* 2.
*/
async function findRouteToRewrite({ payload, routes, request, trailingSlash, buildFormat, base, outDir, validate }) {
	let newUrl = void 0;
	if (payload instanceof URL) newUrl = payload;
	else if (payload instanceof Request) newUrl = new URL(payload.url);
	else newUrl = new URL(collapseDuplicateSlashes(payload), new URL(request.url).origin);
	const { pathname, resolvedUrlPathname } = normalizeRewritePathname(newUrl.pathname, base, trailingSlash, buildFormat);
	newUrl.pathname = resolvedUrlPathname;
	const decodedPathname = validateAndDecodePathname(pathname);
	if (isRoute404(decodedPathname)) {
		const errorRoute = routes.find((route) => isRoute404(route.route));
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	if (isRoute500(decodedPathname)) {
		const errorRoute = routes.find((route) => isRoute500(route.route));
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	let foundRoute;
	let firstValidationError = null;
	for (const route of routes) if (route.pattern.test(decodedPathname)) {
		if (route.params && route.params.length !== 0) {
			if (route.distURL && route.distURL.length !== 0) {
				if (!route.distURL.find((url) => url.href.replace(outDir.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") === trimSlashes(pathname))) continue;
			} else {
				let ownsPathname;
				try {
					ownsPathname = await validate(route, decodedPathname);
				} catch (error) {
					firstValidationError ??= error;
					continue;
				}
				if (!ownsPathname) continue;
			}
		}
		foundRoute = route;
		break;
	}
	if (foundRoute) return {
		routeData: foundRoute,
		newUrl,
		pathname: decodedPathname
	};
	else if (firstValidationError) throw firstValidationError;
	else {
		const custom404 = routes.find((route) => isRoute404(route.route));
		if (custom404) return {
			routeData: custom404,
			newUrl,
			pathname
		};
		else return {
			routeData: DEFAULT_404_ROUTE,
			newUrl,
			pathname
		};
	}
}
/**
* Utility function that creates a new `Request` with a new URL from an old `Request`.
*
* @param newUrl The new `URL`
* @param oldRequest The old `Request`
* @param isPrerendered It needs to be the flag of the previous routeData, before the rewrite
* @param logger
* @param routePattern
*/
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
	const canHaveBody = oldRequest.method !== "GET" && oldRequest.method !== "HEAD";
	if (canHaveBody && oldRequest.bodyUsed) throw new AstroError(RewriteWithBodyUsed);
	return createRequest({
		url: newUrl,
		method: oldRequest.method,
		body: canHaveBody ? oldRequest.body : void 0,
		isPrerendered,
		logger,
		headers: isPrerendered ? {} : oldRequest.headers,
		routePattern,
		init: {
			referrer: oldRequest.referrer,
			referrerPolicy: oldRequest.referrerPolicy,
			mode: oldRequest.mode,
			credentials: oldRequest.credentials,
			cache: oldRequest.cache,
			redirect: oldRequest.redirect,
			integrity: oldRequest.integrity,
			signal: oldRequest.signal,
			keepalive: oldRequest.keepalive,
			duplex: "half"
		}
	});
}
function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
	if (!pathname) pathname = "/";
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	let finalPathname;
	if (pathname === "/") finalPathname = "/";
	else if (shouldAppendSlash) finalPathname = appendForwardSlash(pathname);
	else finalPathname = removeTrailingForwardSlash(pathname);
	Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}
function getOriginPathname(request) {
	const origin = Reflect.get(request, originPathnameSymbol);
	if (origin) return decodeURIComponent(origin);
	return new URL(request.url).pathname;
}
/**
* Pure function that normalizes a rewrite target pathname by stripping the base,
* handling trailing slashes, removing `.html` suffixes, and computing the final
* full URL pathname (with base re-prepended).
*/
function normalizeRewritePathname(urlPathname, base, trailingSlash, buildFormat) {
	let pathname = collapseDuplicateSlashes(urlPathname);
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	if (base !== "/") {
		if (urlPathname === base || urlPathname === removeTrailingForwardSlash(base)) pathname = "/";
		else if (urlPathname.startsWith(base)) {
			pathname = shouldAppendSlash ? appendForwardSlash(urlPathname) : removeTrailingForwardSlash(urlPathname);
			pathname = pathname.slice(base.length);
		}
	}
	pathname = prependForwardSlash(pathname);
	if (buildFormat === "file") pathname = pathname.replace(/\.html$/, "");
	let resolvedUrlPathname;
	if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) resolvedUrlPathname = removeTrailingForwardSlash(base);
	else resolvedUrlPathname = joinPaths(...[base, pathname].filter(Boolean));
	return {
		pathname,
		resolvedUrlPathname
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/environment/production.js
async function getModuleForRoute(manifest, route) {
	for (const defaultRoute of getDefaultRoutes(manifest)) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
	let routeToProcess = route;
	if (routeIsRedirect(route)) {
		if (route.redirectRoute) routeToProcess = route.redirectRoute;
		else return RedirectSinglePageBuiltModule;
	} else if (routeIsFallback(route)) routeToProcess = getFallbackRoute(route, manifest.routes);
	if (manifest.pageMap) {
		const importComponentInstance = manifest.pageMap.get(routeToProcess.component);
		if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
		return await importComponentInstance();
	} else if (manifest.pageModule) return manifest.pageModule;
	throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
}
async function getComponentByRoute(manifest, routeData) {
	return (await getModuleForRoute(manifest, routeData)).page();
}
/**
* The production / bundled environment — the default when nothing is
* registered. A stateless module constant derived from the manifest alone.
*/
var productionEnvironment = {
	name: "production",
	runtimeMode: "production",
	defaultStreaming: () => true,
	async resolve(manifest, specifier) {
		if (!(specifier in manifest.entryModules)) throw new Error(`Unable to resolve [${specifier}]`);
		const bundlePath = manifest.entryModules[specifier];
		if (bundlePath.startsWith("data:") || bundlePath.length === 0) return bundlePath;
		else return createAssetLink(bundlePath, manifest.base, manifest.assetsPrefix);
	},
	async headElements(manifest, routeData) {
		const { assetsPrefix, base } = manifest;
		const routeInfo = manifest.routes.find((route) => route.routeData.route === routeData.route);
		const links = /* @__PURE__ */ new Set();
		const scripts = /* @__PURE__ */ new Set();
		const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
		for (const script of routeInfo?.scripts ?? []) if ("stage" in script) {
			if (script.stage === "head-inline") scripts.add({
				props: {},
				children: script.children
			});
		} else scripts.add(createModuleScriptElement(script, base, assetsPrefix));
		return {
			links,
			styles,
			scripts
		};
	},
	componentMetadata() {},
	getComponentByRoute,
	getModuleForRoute,
	async tryRewrite(manifest, payload, request) {
		const { newUrl, pathname, routeData } = await findRouteToRewrite({
			payload,
			request,
			routes: manifest.routes.map((r) => r.routeData),
			trailingSlash: manifest.trailingSlash,
			buildFormat: manifest.buildFormat,
			base: manifest.base,
			outDir: manifest.serverLike ? manifest.buildClientDir : manifest.outDir,
			validate: createRewriteRouteValidator(manifest, getComponentByRoute)
		});
		return {
			newUrl,
			pathname,
			componentInstance: await getComponentByRoute(manifest, routeData),
			routeData
		};
	},
	getRenderers(manifest) {
		return manifest.renderers;
	},
	errorStrategy: "default",
	rendersRedirectPage: () => false,
	injectCspMetaTagsOnErrorPages: false,
	logRequest() {}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/environment/index.js
var environments = /* @__PURE__ */ new WeakMap();
/**
* The environment for a manifest. Defaults to the production (bundled)
* implementation, which is derivable from the manifest alone — so a bare
* `new FetchState(request)` in a bundled worker needs no registration.
*/
function getEnvironment(manifest) {
	return environments.get(manifest) ?? productionEnvironment;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/generator.js
/**
* Sanitizes the parameters object by normalizing string values and replacing certain characters with their URL-encoded equivalents.
* @param {Record<string, string | number>} params - The parameters object to be sanitized.
* @returns {Record<string, string | number>} The sanitized parameters object.
*/
function sanitizeParams(params) {
	return Object.fromEntries(Object.entries(params).map(([key, value]) => {
		if (typeof value === "string") return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
		return [key, value];
	}));
}
function getParameter(part, params) {
	if (part.spread) return params[part.content.slice(3)] ?? "";
	if (part.dynamic) {
		if (params[part.content] === void 0) throw new TypeError(`Missing parameter: ${part.content}`);
		return params[part.content];
	}
	return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
	const segmentPath = segment.map((part) => getParameter(part, params)).join("");
	return segmentPath ? collapseDuplicateLeadingSlashes("/" + segmentPath) : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
	return (params = {}) => {
		const sanitizedParams = sanitizeParams(params ?? {});
		let trailing = "";
		if (addTrailingSlash === "always" && segments.length) trailing = "/";
		return segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing || "/";
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/internal/validation.js
var VALID_PARAM_TYPES = ["string", "undefined"];
/** Throws error for invalid parameter in getStaticPaths() response */
function validateGetStaticPathsParameter([key, value], route) {
	if (!VALID_PARAM_TYPES.includes(typeof value)) throw new AstroError({
		...GetStaticPathsInvalidRouteParam,
		message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
		location: { file: route }
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/params.js
/**
* given a route's Params object, validate parameter
* values and create a stringified key for the route
* that can be used to match request routes
*/
function stringifyParams(params, route, trailingSlash) {
	if (route.type === "endpoint" && hasFileExtension(route.route)) trailingSlash = "never";
	const validatedParams = {};
	for (const [key, value] of Object.entries(params)) {
		validateGetStaticPathsParameter([key, value], route.component);
		if (value !== void 0) validatedParams[key] = trimSlashes(value);
	}
	return getRouteGenerator(route.segments, trailingSlash)(validatedParams);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/validation.js
/** Error for deprecated or malformed route components */
function validateDynamicRouteModule(mod, { ssr, route }) {
	if ((!ssr || route.prerender) && route.origin !== "internal" && !mod.getStaticPaths) throw new AstroError({
		...GetStaticPathsRequired,
		location: { file: route.component }
	});
}
/** Throw error and log warnings for malformed getStaticPaths() response */
function validateGetStaticPathsResult(result, route) {
	if (!Array.isArray(result)) throw new AstroError({
		...InvalidGetStaticPathsReturn,
		message: InvalidGetStaticPathsReturn.message(typeof result),
		location: { file: route.component }
	});
	result.forEach((pathObject) => {
		if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) throw new AstroError({
			...InvalidGetStaticPathsEntry,
			message: InvalidGetStaticPathsEntry.message(Array.isArray(pathObject) ? "array" : typeof pathObject)
		});
		if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) throw new AstroError({
			...GetStaticPathsExpectedParams,
			location: { file: route.component }
		});
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render/paginate.js
function generatePaginateFunction(routeMatch, base, trailingSlash) {
	return function paginateUtility(data, args = {}) {
		const generate = getRouteGenerator(routeMatch.segments, trailingSlash);
		let { pageSize: _pageSize, params: _params, props: _props, format: _format } = args;
		const pageSize = _pageSize || 10;
		const paramName = "page";
		const additionalParams = _params || {};
		const additionalProps = _props || {};
		const formatUrl = _format || ((url) => url);
		let includesFirstPageNumber;
		if (routeMatch.params.includes(`...${paramName}`)) includesFirstPageNumber = false;
		else if (routeMatch.params.includes(`${paramName}`)) includesFirstPageNumber = true;
		else throw new AstroError({
			...PageNumberParamNotFound,
			message: PageNumberParamNotFound.message(paramName)
		});
		const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
		return [...Array(lastPage).keys()].map((num) => {
			const pageNum = num + 1;
			const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
			const end = Math.min(start + pageSize, data.length);
			const params = {
				...additionalParams,
				[paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
			};
			const current = formatUrl(addRouteBase(generate({ ...params }), base));
			const next = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: String(pageNum + 1)
			}), base));
			const prev = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
			}), base));
			const first = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: includesFirstPageNumber ? "1" : void 0
			}), base));
			const last = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: String(lastPage)
			}), base));
			return {
				params,
				props: {
					...additionalProps,
					page: {
						data: data.slice(start, end),
						start,
						end: end - 1,
						size: pageSize,
						total: data.length,
						currentPage: pageNum,
						lastPage,
						url: {
							current,
							next,
							prev,
							first,
							last
						}
					}
				}
			};
		});
	};
}
function addRouteBase(route, base) {
	let routeWithBase = joinPaths(base, route);
	if (routeWithBase === "") routeWithBase = "/";
	return routeWithBase;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render/route-cache.js
async function callGetStaticPaths({ mod, route, routeCache, ssr, base, trailingSlash }) {
	const cached = routeCache.get(route);
	if (!mod) throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
	if (cached?.staticPaths && cached.mod === mod) return cached.staticPaths;
	validateDynamicRouteModule(mod, {
		ssr,
		route
	});
	if (ssr && !route.prerender || route.origin === "internal") {
		const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
		routeCache.set(route, {
			...cached,
			mod,
			staticPaths: entry
		});
		return entry;
	}
	const keyedStaticPaths = await computeStaticPaths(mod, route, base, trailingSlash);
	routeCache.set(route, {
		mod,
		staticPaths: keyedStaticPaths
	});
	return keyedStaticPaths;
}
/** Replaces a partial entry with the full result, sharing one `getStaticPaths()` call between concurrent misses. */
function completeStaticPaths({ route, routeCache, base, trailingSlash }) {
	const cached = routeCache.get(route);
	if (!cached?.partial) return void 0;
	cached.complete ??= computeStaticPaths(cached.mod, route, base, trailingSlash).then((staticPaths) => {
		routeCache.set(route, {
			mod: cached.mod,
			staticPaths
		});
		return staticPaths;
	});
	return cached.complete;
}
async function computeStaticPaths(mod, route, base, trailingSlash) {
	let staticPaths = [];
	if (!mod.getStaticPaths) throw new Error("Unexpected Error.");
	staticPaths = await mod.getStaticPaths({
		paginate: generatePaginateFunction(route, base, trailingSlash),
		routePattern: route.route
	});
	validateGetStaticPathsResult(staticPaths, route);
	const keyedStaticPaths = staticPaths;
	keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
	for (const sp of keyedStaticPaths) {
		const paramsKey = stringifyParams(sp.params, route, trailingSlash);
		keyedStaticPaths.keyed.set(paramsKey, sp);
	}
	return keyedStaticPaths;
}
/**
* Manage the route cache, responsible for caching data related to each route,
* including the result of calling getStaticPaths(). This gives route matching,
* params/props resolution, and prerender generation a shared static-path table.
*
* In dev, this cache intentionally survives requests. It is invalidated by route
* module identity changes after HMR or by explicit cache clears from content data
* changes, not by each request. Dev route matching can call getStaticPaths()
* before rendering, and render-time props resolution may ask for it again.
*/
var RouteCache = class {
	logger;
	cache = {};
	runtimeMode;
	constructor(logger, runtimeMode = "production") {
		this.logger = logger;
		this.runtimeMode = runtimeMode;
	}
	/** Clear the cache. */
	clearAll() {
		this.cache = {};
	}
	set(route, entry) {
		const key = this.key(route);
		const existing = this.cache[key];
		if (this.runtimeMode === "production" && existing?.staticPaths && !existing.partial) this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
		this.cache[key] = entry;
	}
	get(route) {
		return this.cache[this.key(route)];
	}
	key(route) {
		return `${route.route}_${route.component}`;
	}
};
var routeCaches = createManifestMemo((manifest) => new RouteCache(getLogger(manifest), getEnvironment(manifest).runtimeMode));
/**
* The `RouteCache` for a manifest. Cleared via
* `getRouteCache(manifest).clearAll()` on dev `astro:content-changed`.
*/
function getRouteCache(manifest) {
	return routeCaches.get(manifest);
}
function findPathItemByKey(staticPaths, params, route, logger, trailingSlash) {
	const paramsKey = stringifyParams(params, route, trailingSlash);
	const matchedStaticPath = staticPaths.keyed.get(paramsKey);
	if (matchedStaticPath) return matchedStaticPath;
	logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render/params-and-props.js
async function getProps(opts) {
	const { logger, mod, routeData: route, routeCache, pathname, serverLike, base, trailingSlash } = opts;
	if (!route || route.pathname) return {};
	if (routeIsRedirect(route) || routeIsFallback(route) || route.component === "astro-default-404.astro") return {};
	const getStaticPathsOptions = {
		mod,
		route,
		routeCache,
		ssr: serverLike,
		base,
		trailingSlash
	};
	const staticPaths = await callGetStaticPaths(getStaticPathsOptions);
	const params = getParams(route, pathname);
	let matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger, trailingSlash);
	if (!matchedStaticPath) {
		const allStaticPaths = await completeStaticPaths(getStaticPathsOptions);
		if (allStaticPaths) matchedStaticPath = findPathItemByKey(allStaticPaths, params, route, logger, trailingSlash);
	}
	if (!matchedStaticPath && route.origin !== "internal" && (serverLike ? route.prerender : true)) throw new AstroError({
		...NoMatchingStaticPathFound,
		message: NoMatchingStaticPathFound.message(pathname),
		hint: NoMatchingStaticPathFound.hint([route.component])
	});
	if (mod) validatePrerenderEndpointCollision(route, mod, params);
	return matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
}
/**
* When given a route with the pattern `/[x]/[y]/[z]/svelte`, and a pathname `/a/b/c/svelte`,
* returns the params object: { x: "a", y: "b", z: "c" }.
*/
function getParams(route, pathname) {
	if (!route.params.length) return {};
	const hasHtmlSuffix = pathname.endsWith(".html") && !routeHasHtmlExtension(route);
	const path = hasHtmlSuffix && route.type === "page" ? pathname.slice(0, -5) : pathname;
	const allPatterns = [route, ...route.fallbackRoutes].map((r) => r.pattern);
	let paramsMatch = allPatterns.map((pattern) => pattern.exec(path)).find((x) => x);
	if (!paramsMatch && hasHtmlSuffix && route.type !== "page") {
		const strippedPath = pathname.endsWith("/index.html") ? pathname.slice(0, -11) || "/" : pathname.slice(0, -5);
		paramsMatch = allPatterns.map((pattern) => pattern.exec(strippedPath)).find((x) => x);
	}
	if (!paramsMatch) return {};
	const params = {};
	route.params.forEach((key, i) => {
		if (key.startsWith("...")) params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
		else params[key] = paramsMatch[i + 1];
	});
	return params;
}
/**
* If we have an endpoint at `src/pages/api/[slug].ts` that's prerendered, and the `slug`
* is `undefined`, throw an error as we can't generate the `/api` file and `/api` directory
* at the same time. Using something like `[slug].json.ts` instead will work.
*/
function validatePrerenderEndpointCollision(route, mod, params) {
	if (route.type === "endpoint" && mod.getStaticPaths) {
		const lastSegment = route.segments[route.segments.length - 1];
		const paramValues = Object.values(params);
		const lastParam = paramValues[paramValues.length - 1];
		if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) throw new AstroError({
			...PrerenderDynamicEndpointPathCollide,
			message: PrerenderDynamicEndpointPathCollide.message(route.route),
			hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
			location: { file: route.component }
		});
	}
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render/slots.js
function getFunctionExpression(slot) {
	if (!slot) return;
	const expressions = slot?.expressions?.filter((e) => isRenderInstruction(e) === false || isRenderTemplateResult(e));
	if (expressions?.length !== 1) return;
	const expression = expressions[0];
	if (isRenderTemplateResult(expression)) return getFunctionExpression(expression);
	return expression;
}
var Slots = class {
	#result;
	#slots;
	#logger;
	constructor(result, slots, logger) {
		this.#result = result;
		this.#slots = slots;
		this.#logger = logger;
		if (slots) for (const key of Object.keys(slots)) {
			if (this[key] !== void 0) throw new AstroError({
				...ReservedSlotName,
				message: ReservedSlotName.message(key)
			});
			Object.defineProperty(this, key, {
				get() {
					return true;
				},
				enumerable: true
			});
		}
	}
	has(name) {
		if (!this.#slots) return false;
		return Boolean(this.#slots[name]);
	}
	async render(name, args = []) {
		if (!this.#slots || !this.has(name)) return;
		const result = this.#result;
		if (!Array.isArray(args)) this.#logger.warn(null, `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as an item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
		else if (args.length > 0) {
			const slotValue = this.#slots[name];
			const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
			const expression = getFunctionExpression(component);
			if (expression) {
				const slot = async () => typeof expression === "function" ? expression(...args) : expression;
				return await renderSlotToString(result, slot).then((res) => {
					return res;
				});
			}
			if (typeof component === "function") return await renderJSX(result, component(...args)).then((res) => res != null ? String(res) : res);
		}
		const content = await renderSlotToString(result, this.#slots[name]);
		return chunkToString(result, content);
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/fallback.js
/**
* Compute fallback route for failed responses.
* Pure function - no APIContext, no Response objects, no URL objects.
*
* This function determines whether a failed request should be redirected or rewritten
* to a fallback locale based on the i18n configuration.
*/
function computeFallbackRoute(options) {
	const { pathname, responseStatus, fallback, fallbackType, locales, defaultLocale, strategy } = options;
	if (responseStatus !== 404) return { type: "none" };
	if (!fallback || Object.keys(fallback).length === 0) return { type: "none" };
	const segments = pathname.split("/");
	const urlLocale = segments.find((segment) => {
		for (const locale of locales) if (typeof locale === "string") {
			if (locale === segment) return true;
		} else if (locale.path === segment) return true;
		return false;
	});
	if (!urlLocale) return { type: "none" };
	if (!Object.keys(fallback).includes(urlLocale)) return { type: "none" };
	const fallbackLocale = fallback[urlLocale];
	const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
	const localeIndex = segments.indexOf(urlLocale);
	let newPathname;
	if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
		segments.splice(localeIndex, 1);
		newPathname = segments.join("/") || "/";
	} else {
		segments[localeIndex] = pathFallbackLocale;
		newPathname = segments.join("/");
	}
	return {
		type: fallbackType,
		pathname: newPathname
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/router.js
/**
* Router for i18n routing strategy decisions.
* Determines whether to continue, redirect, or return 404 based on pathname and locale.
*
* This is a pure class that returns decision objects (not HTTP Responses).
* The middleware layer is responsible for converting decisions to HTTP responses.
*/
var I18nRouter = class {
	#strategy;
	#defaultLocale;
	#locales;
	#base;
	#domains;
	constructor(options) {
		this.#strategy = options.strategy;
		this.#defaultLocale = options.defaultLocale;
		this.#locales = options.locales;
		this.#base = options.base === "/" ? "/" : removeTrailingForwardSlash(options.base || "");
		this.#domains = options.domains;
	}
	/**
	* Evaluate routing strategy for a pathname.
	* Returns decision object (not HTTP Response).
	*/
	match(pathname, context) {
		if (this.shouldSkipProcessing(pathname, context)) return { type: "continue" };
		switch (this.#strategy) {
			case "manual": return { type: "continue" };
			case "pathname-prefix-always": return this.matchPrefixAlways(pathname, context);
			case "domains-prefix-always":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlways(pathname, context);
			case "pathname-prefix-other-locales": return this.matchPrefixOtherLocales(pathname, context);
			case "domains-prefix-other-locales":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixOtherLocales(pathname, context);
			case "pathname-prefix-always-no-redirect": return this.matchPrefixAlwaysNoRedirect(pathname, context);
			case "domains-prefix-always-no-redirect":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlwaysNoRedirect(pathname, context);
			default: return { type: "continue" };
		}
	}
	/**
	* Check if i18n processing should be skipped for this request
	*/
	shouldSkipProcessing(pathname, context) {
		for (const page of STATUS_CODE_PAGES) if (pathname.includes(page)) return true;
		if (pathname.includes("/_server-islands/")) return true;
		if (context.isReroute) return true;
		if (context.routeType && context.routeType !== "page" && context.routeType !== "fallback") return true;
		return false;
	}
	/**
	* Strategy: pathname-prefix-always
	* All locales must have a prefix, including the default locale.
	*/
	matchPrefixAlways(pathname, context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return {
			type: "redirect",
			location: `${this.#base === "/" ? "" : this.#base}/${this.#defaultLocale}`
		};
		if (!context.allowUnprefixedPath && !pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-other-locales
	* Default locale has no prefix, other locales must have a prefix.
	*/
	matchPrefixOtherLocales(pathname, _context) {
		let pathnameContainsDefaultLocale = false;
		for (const segment of pathname.split("/")) if (normalizeTheLocale(segment) === normalizeTheLocale(this.#defaultLocale)) {
			pathnameContainsDefaultLocale = true;
			break;
		}
		if (pathnameContainsDefaultLocale) return {
			type: "notFound",
			location: pathname.replace(`/${this.#defaultLocale}`, "")
		};
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-always-no-redirect
	* Like prefix-always but allows root to serve instead of redirecting
	*/
	matchPrefixAlwaysNoRedirect(pathname, context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return { type: "continue" };
		if (!context.allowUnprefixedPath && !pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Check if the current locale doesn't belong to the configured domain.
	* Used for domain-based routing strategies.
	*/
	localeHasntDomain(currentLocale, currentDomain) {
		if (!this.#domains || !currentDomain) return false;
		if (!currentLocale) return false;
		const localesForDomain = this.#domains[currentDomain];
		if (!localesForDomain) return true;
		return !localesForDomain.includes(currentLocale);
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/i18n/handler.js
/**
* Pure compile from explicit values — used by `astro:i18n`'s manual-mode
* middleware wrapper (`src/i18n/middleware.ts`), which receives the values as
* arguments rather than reading a manifest.
*/
function compileI18n(i18n, base, trailingSlash, format) {
	return {
		config: i18n,
		base,
		trailingSlash,
		format,
		router: new I18nRouter({
			strategy: i18n.strategy,
			defaultLocale: i18n.defaultLocale,
			locales: i18n.locales,
			base,
			domains: i18n.domainLookupTable ? Object.keys(i18n.domainLookupTable).reduce((acc, domain) => {
				const locale = i18n.domainLookupTable[domain];
				if (!acc[domain]) acc[domain] = [];
				acc[domain].push(locale);
				return acc;
			}, {}) : void 0
		})
	};
}
var i18nMemo = createManifestMemo((manifest) => {
	const config = manifest.i18n;
	return config && config.strategy !== "manual" ? compileI18n(config, manifest.base, manifest.trailingSlash, manifest.buildFormat) : null;
});
/**
* The compiled i18n post-processor for a manifest, or `null` when i18n is
* unset or the routing strategy is `manual`.
*/
function getI18n(manifest) {
	return i18nMemo.get(manifest);
}
/**
* Post-processes a rendered `Response` against the compiled i18n
* configuration, as an explicit step in `handleRequest` after the middleware
* chain returns. The manual-strategy public API (`astro:i18n.middleware(...)`)
* wraps this in a middleware-shaped closure.
*/
async function finalizeI18n(compiled, state, response) {
	markFeatureUsed(state.manifest, FetchFeatures.i18n);
	const i18n = compiled.config;
	if (state.skipErrorReroute && typeof i18n.fallback === "undefined") return response;
	if (state.responseRouteType !== "page" && state.responseRouteType !== "fallback") return response;
	const url = state.url;
	const currentLocale = state.computeCurrentLocale();
	const routeData = state.routeData;
	const isPrerendered = routeData.prerender;
	const routerContext = {
		currentLocale,
		currentDomain: url.hostname,
		routeType: state.responseRouteType,
		isReroute: false,
		allowUnprefixedPath: routeData.origin === "external" && !routeData.segments?.[0]?.some((part) => part.dynamic)
	};
	const routeDecision = compiled.router.match(url.pathname, routerContext);
	switch (routeDecision.type) {
		case "redirect": {
			let location = routeDecision.location;
			if (shouldAppendForwardSlash(compiled.trailingSlash, compiled.format)) location = appendForwardSlash(location);
			return new Response(null, {
				status: routeDecision.status ?? 302,
				headers: { Location: location }
			});
		}
		case "notFound": {
			if (isPrerendered) {
				const prerenderedRes = new Response(response.body, {
					status: 404,
					headers: response.headers
				});
				state.skipErrorReroute = true;
				if (routeDecision.location) prerenderedRes.headers.set("Location", routeDecision.location);
				return prerenderedRes;
			}
			const headers = new Headers();
			if (routeDecision.location) headers.set("Location", routeDecision.location);
			return new Response(null, {
				status: 404,
				headers
			});
		}
	}
	if (i18n.fallback && i18n.fallbackType) {
		const effectiveStatus = isMissingLocalePage(state, routeData, response) ? 404 : response.status;
		const fallbackDecision = computeFallbackRoute({
			pathname: url.pathname,
			responseStatus: effectiveStatus,
			currentLocale,
			fallback: i18n.fallback,
			fallbackType: i18n.fallbackType,
			locales: i18n.locales,
			defaultLocale: i18n.defaultLocale,
			strategy: i18n.strategy,
			base: compiled.base
		});
		switch (fallbackDecision.type) {
			case "redirect": return new Response(null, {
				status: 302,
				headers: { Location: fallbackDecision.pathname + url.search }
			});
			case "rewrite": try {
				return await state.rewrite(fallbackDecision.pathname + url.search);
			} catch {
				break;
			}
		}
	}
	return response;
}
/**
* Whether the render pipeline signals that the page does not exist in the
* requested locale. Two signals exist:
*
* - the fallback sentinel (`X-Astro-Route-Type: fallback`, status 500) for
*   routes of type `fallback`;
* - an on-demand page reached through one of its `fallbackRoutes`, which
*   renders with the `302` that `getDefaultStatusCode` assigns to such
*   matches and no `Location` (#18473; the status stopped being consumed
*   in #15704). A page that took over the response (an explicit redirect or
*   status) is not a missing page and is served as is.
*/
function isMissingLocalePage(state, routeData, response) {
	if (state.responseRouteType === "fallback") return true;
	return isFallbackRouteMatch(routeData, state.pathname) && response.status === 302 && !response.headers.has("Location");
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/index.js
/**
* Given a locale (code), it returns its corresponding path
* @param locale
* @param locales
*/
function getPathByLocale(locale, locales) {
	for (const loopLocale of locales) if (typeof loopLocale === "string") {
		if (loopLocale === locale) return loopLocale;
	} else for (const code of loopLocale.codes) if (code === locale) return loopLocale.path;
	throw new AstroError(i18nNoLocaleFoundInPath);
}
/**
* Returns an array of only locales, by picking the `code`
* @param locales
*/
function getAllCodes(locales) {
	const result = [];
	for (const loopLocale of locales) if (typeof loopLocale === "string") result.push(loopLocale);
	else result.push(...loopLocale.codes);
	return result;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/i18n/utils.js
/**
* Parses the value of the `Accept-Language` header:
*
* More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
*
* Complex example: `fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5`
*
*/
function parseLocale(header) {
	if (header === "*") return [{
		locale: header,
		qualityValue: void 0
	}];
	const result = [];
	const localeValues = header.split(",").map((str) => str.trim());
	for (const localeValue of localeValues) {
		const split = localeValue.split(";").map((str) => str.trim());
		const localeName = split[0];
		const qualityValue = split[1];
		if (!split) continue;
		if (qualityValue && qualityValue.startsWith("q=")) {
			const qualityValueAsFloat = Number.parseFloat(qualityValue.slice(2));
			if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) result.push({
				locale: localeName,
				qualityValue: void 0
			});
			else result.push({
				locale: localeName,
				qualityValue: qualityValueAsFloat
			});
		} else result.push({
			locale: localeName,
			qualityValue: void 0
		});
	}
	return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
	const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
	return browserLocaleList.filter((browserLocale) => {
		if (browserLocale.locale !== "*") return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
		return true;
	}).sort((a, b) => {
		const qa = a.locale === "*" ? a.qualityValue ?? 0 : a.qualityValue ?? 1;
		return (b.locale === "*" ? b.qualityValue ?? 0 : b.qualityValue ?? 1) - qa;
	});
}
/**
* Set the current locale by parsing the value passed from the `Accept-Header`.
*
* If multiple locales are present in the header, they are sorted by their quality value and the highest is selected as current locale.
*
*/
function computePreferredLocale(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = void 0;
	if (acceptHeader) {
		const firstResult = sortAndFilterLocales(parseLocale(acceptHeader), locales).at(0);
		if (firstResult && firstResult.locale !== "*") {
			outer: for (const currentLocale of locales) if (typeof currentLocale === "string") {
				if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
					result = currentLocale;
					break;
				}
			} else for (const currentCode of currentLocale.codes) if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
				result = currentCode;
				break outer;
			}
		}
	}
	return result;
}
function computePreferredLocaleList(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = [];
	if (acceptHeader) {
		const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
		if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") return getAllCodes(locales);
		else if (browserLocaleList.length > 0) {
			for (const browserLocale of browserLocaleList) for (const loopLocale of locales) if (typeof loopLocale === "string") {
				if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) result.push(loopLocale);
			} else for (const code of loopLocale.codes) if (normalizeTheLocale(code) === normalizeTheLocale(browserLocale.locale)) result.push(code);
		}
	}
	return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
	for (const segment of pathname.split("/").map(normalizeThePath)) for (const locale of locales) if (typeof locale === "string") {
		if (!segment.includes(locale)) continue;
		if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) return locale;
	} else if (locale.path === segment) return locale.codes.at(0);
	else for (const code of locale.codes) if (normalizeTheLocale(code) === normalizeTheLocale(segment)) return code;
	for (const locale of locales) if (typeof locale === "string") {
		if (locale === defaultLocale) return locale;
	} else if (locale.path === defaultLocale) return locale.codes.at(0);
}
/**
* Check if any of the route's resolved param values match a configured locale.
* This handles dynamic routes like `[locale]` or `[...path]` where the locale
* isn't in a static segment of the route pathname.
*/
function computeCurrentLocaleFromParams(params, locales) {
	const byNormalizedCode = /* @__PURE__ */ new Map();
	const byPath = /* @__PURE__ */ new Map();
	for (const locale of locales) if (typeof locale === "string") byNormalizedCode.set(normalizeTheLocale(locale), locale);
	else {
		byPath.set(locale.path, locale.codes[0]);
		for (const code of locale.codes) byNormalizedCode.set(normalizeTheLocale(code), code);
	}
	for (const value of Object.values(params)) {
		if (!value) continue;
		const pathMatch = byPath.get(value);
		if (pathMatch) return pathMatch;
		const codeMatch = byNormalizedCode.get(normalizeTheLocale(value));
		if (codeMatch) return codeMatch;
	}
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/prepare-response.js
/**
* Appends cookies written via `Astro.cookie.set()` to the `Set-Cookie` header
* and marks the response as sent.
*
* This is a pure function with no dependencies on the app; it is shared by
* `handleRequest` and the various error handlers.
*/
function prepareResponse(response, { addCookieHeader }) {
	if (addCookieHeader) for (const setCookieHeaderValue of getSetCookiesFromResponse(response)) response.headers.append("set-cookie", setCookieHeaderValue);
	Reflect.set(response, responseSentSymbol$1, true);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/pages/handler.js
var EMPTY_SLOTS = Object.freeze({});
/**
* Handles dispatch of a matched route (endpoint / redirect / page / fallback)
* at the bottom of the middleware chain. This is a pure dispatch layer — it
* renders whatever route the `FetchState` currently points to without any
* rewrite logic. Rewrites are handled upstream: `executeRewrite()` for
* `Astro.rewrite()` and `handleMiddleware` for `next(payload)`.
*
* `handlePages` is the `next` callback that `handleMiddleware` invokes at
* the end of the middleware chain. Error handlers and the container also
* use it directly for the same dispatch behavior.
*/
async function handlePages(state, ctx) {
	const { logger, streaming } = state;
	state.resetResponseMetadata();
	let response;
	const componentInstance = await state.loadComponentInstance();
	switch (state.routeData.type) {
		case "endpoint":
			response = await renderEndpoint(componentInstance, ctx, state.routeData.prerender, logger, state);
			break;
		case "page": {
			const props = await state.getProps();
			const actionApiContext = state.getActionAPIContext();
			const result = await state.createResult(componentInstance, actionApiContext);
			try {
				response = await renderPage(result, componentInstance?.default, props, state.slots ?? EMPTY_SLOTS, streaming, state.routeData);
			} catch (e) {
				result.cancelled = true;
				throw e;
			}
			state.responseRouteType = "page";
			if (isRoute404(state.routeData.route) || isRoute500(state.routeData.route)) state.skipErrorReroute = true;
			break;
		}
		case "redirect": return new Response(null, {
			status: 404,
			headers: { [ASTRO_ERROR_HEADER]: "true" }
		});
		case "fallback":
			state.responseRouteType = "fallback";
			return new Response(null, { status: 500 });
	}
	const responseCookies = getCookiesFromResponse(response);
	if (responseCookies) state.cookies.merge(responseCookies);
	state.response = response;
	return response;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/match.js
/** Find matching route from pathname */
function matchRoute$1(pathname, manifest) {
	if (isRoute404(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute404(route.route));
		if (errorRoute) return errorRoute;
	}
	if (isRoute500(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute500(route.route));
		if (errorRoute) return errorRoute;
	}
	return manifest.routes.find((route) => {
		return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
	});
}
/**
* Determines if the given route matches a 404 or 500 error page.
*
* @param {RouteData} route - The route data to check.
* @returns {boolean} `true` if the route matches a 404 or 500 error page; otherwise, `false`.
*/
function isRoute404or500(route) {
	return isRoute404(route.route) || isRoute500(route.route);
}
/**
* Determines if a given route is associated with the server island component.
*
* @param {RouteData} route - The route data object to evaluate.
* @return {boolean} Returns true if the route's component is the server island component; otherwise, false.
*/
function isRouteServerIsland(route) {
	return route.component === SERVER_ISLAND_COMPONENT;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/astro-designed-error-pages.js
function ensure404Route(manifest) {
	if (!manifest.routes.some((route) => isRoute404(route.route))) manifest.routes.push(DEFAULT_404_ROUTE);
	return manifest;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/priority.js
/**
* Comparator for sorting routes in resolution order.
*
* The routes are sorted in by the following rules in order, following the first rule that
* applies:
* - More specific routes are sorted before less specific routes. Here, "specific" means
*   the number of segments in the route, so a parent route is always sorted after its children.
*   For example, `/foo/bar` is sorted before `/foo`.
*   Index routes, originating from a file named `index.astro`, are considered to have one more
*   segment than the URL they represent.
* - Static routes are sorted before dynamic routes.
*   For example, `/foo/bar` is sorted before `/foo/[bar]`.
* - Dynamic routes with single parameters are sorted before dynamic routes with rest parameters.
*   For example, `/foo/[bar]` is sorted before `/foo/[...bar]`.
* - Prerendered routes are sorted before non-prerendered routes.
* - Endpoints are sorted before pages.
*   For example, a file `/foo.ts` is sorted before `/bar.astro`.
* - If both routes are equal regarding all previous conditions, they are sorted alphabetically.
*   For example, `/bar` is sorted before `/foo`.
*   The definition of "alphabetically" is dependent on the default locale of the running system.
*/
function routeComparator(a, b) {
	const commonLength = Math.min(a.segments.length, b.segments.length);
	for (let index = 0; index < commonLength; index++) {
		const aSegment = a.segments[index];
		const bSegment = b.segments[index];
		const aIsStatic = aSegment.every((part) => !part.dynamic && !part.spread);
		const bIsStatic = bSegment.every((part) => !part.dynamic && !part.spread);
		if (aIsStatic && bIsStatic) {
			const aContent = aSegment.map((part) => part.content).join("");
			const bContent = bSegment.map((part) => part.content).join("");
			if (aContent !== bContent) return aContent.localeCompare(bContent);
		}
		if (aIsStatic !== bIsStatic) return aIsStatic ? -1 : 1;
		const aAllDynamic = aSegment.every((part) => part.dynamic);
		if (aAllDynamic !== bSegment.every((part) => part.dynamic)) return aAllDynamic ? 1 : -1;
		const aHasSpread = aSegment.some((part) => part.spread);
		if (aHasSpread !== bSegment.some((part) => part.spread)) return aHasSpread ? 1 : -1;
	}
	const aLength = a.segments.length;
	const bLength = b.segments.length;
	if (aLength !== bLength) {
		const aEndsInRest = a.segments.at(-1)?.some((part) => part.spread);
		const bEndsInRest = b.segments.at(-1)?.some((part) => part.spread);
		if (aEndsInRest !== bEndsInRest && Math.abs(aLength - bLength) === 1) {
			if (aLength > bLength && aEndsInRest) return 1;
			if (bLength > aLength && bEndsInRest) return -1;
		}
		return aLength > bLength ? -1 : 1;
	}
	if (a.type === "endpoint" !== (b.type === "endpoint")) return a.type === "endpoint" ? -1 : 1;
	return a.route.localeCompare(b.route);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/router.js
/**
* Matches request pathnames against a route list with base and trailing slash rules.
*/
var Router = class {
	#routes;
	#base;
	#baseWithoutTrailingSlash;
	#buildFormat;
	#trailingSlash;
	constructor(routes, options) {
		this.#routes = [...routes].sort(routeComparator);
		this.#base = normalizeBase(options.base);
		this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#base);
		this.#buildFormat = options.buildFormat;
		this.#trailingSlash = options.trailingSlash;
	}
	/**
	* Match an input pathname against the route list.
	* If allowWithoutBase is true, a non-base-prefixed path is still considered.
	*/
	match(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return {
			type: "redirect",
			location: normalized.redirect,
			status: 301
		};
		if (this.#base !== "/") {
			const baseWithSlash = `${this.#baseWithoutTrailingSlash}/`;
			if (this.#trailingSlash === "always" && (normalized.pathname === this.#baseWithoutTrailingSlash || normalized.pathname === this.#base)) return {
				type: "redirect",
				location: baseWithSlash,
				status: 301
			};
			if (this.#trailingSlash === "never" && normalized.pathname === baseWithSlash) return {
				type: "redirect",
				location: this.#baseWithoutTrailingSlash,
				status: 301
			};
		}
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult) {
			if (!allowWithoutBase) return {
				type: "none",
				reason: "outside-base"
			};
		}
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		const route = this.#routes.find((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
		if (!route) return {
			type: "none",
			reason: "no-match"
		};
		return {
			type: "match",
			route,
			params: getParams(route, pathname),
			pathname
		};
	}
	/**
	* Returns all routes that match the given pathname, in priority order.
	* Used when the first match (e.g. a prerendered route) cannot serve
	* the request and subsequent matches need to be tried.
	*/
	matchAll(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return [];
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult && !allowWithoutBase) return [];
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		return this.#routes.filter((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
	}
};
/**
* Normalize a base path to a leading-slash form.
*/
function normalizeBase(base) {
	if (!base) return "/";
	if (base === "/") return base;
	return prependForwardSlash(base);
}
/**
* Provide a redirect target for pathnames that need correction.
* - Ensures a leading slash.
* - Collapses multiple leading slashes into a single slash redirect.
*/
function getRedirectForPathname(pathname) {
	let value = prependForwardSlash(pathname);
	if (value.startsWith("//")) return {
		pathname: value,
		redirect: `/${value.replace(/^\/+/, "")}`
	};
	return { pathname: value };
}
/**
* Strip the configured base from the pathname and account for trailing slash policies.
* Returns null if the pathname is outside the base or should be redirected elsewhere.
*/
function stripBase(pathname, base, baseWithoutTrailingSlash, trailingSlash) {
	if (base === "/") return pathname;
	const baseWithSlash = `${baseWithoutTrailingSlash}/`;
	if (pathname === baseWithoutTrailingSlash || pathname === base) return trailingSlash === "always" ? null : "/";
	if (pathname === baseWithSlash) return trailingSlash === "never" ? null : "/";
	if (pathname.startsWith(baseWithSlash)) return pathname.slice(baseWithoutTrailingSlash.length);
	return null;
}
/**
* Normalize file-format pathnames by removing .html and /index.html suffixes.
*/
function normalizeFileFormatPathname(pathname) {
	if (pathname.endsWith("/index.html")) {
		const trimmed = pathname.slice(0, -11);
		return trimmed === "" ? "/" : trimmed;
	}
	if (pathname.endsWith(".html")) {
		const trimmed = pathname.slice(0, -5);
		return trimmed === "" ? "/" : trimmed;
	}
	return pathname;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/route-table.js
function compileRouteTable(manifest, routes) {
	const routesList = ensure404Route({ routes });
	const router = new Router(routesList.routes, {
		base: manifest.base,
		trailingSlash: manifest.trailingSlash,
		buildFormat: manifest.buildFormat
	});
	return {
		routes: routesList.routes,
		router
	};
}
var routeTables = createManifestMemo((manifest) => compileRouteTable(manifest, (manifest.routes ?? []).map((route) => route.routeData)));
/**
* The route table for a manifest: the derived route list (with the default
* 404 ensured) and the compiled router. All route reads — matching, rewrites,
* custom-404 fallbacks, `manifestData` accessors — go through this single
* entry so dev HMR updates are visible to every consumer at once.
*/
function getRouteTable(manifest) {
	return routeTables.get(manifest);
}
/**
* Atomically replaces the route table for a manifest (dev `astro:routes-updated`).
* Runs `ensure404Route` on the new list, compiles a fresh `Router`, and swaps
* the memo entry in one step, so no consumer can observe a half-updated table.
*/
function updateRouteTable(manifest, routes) {
	routeTables.set(manifest, compileRouteTable(manifest, [...routes]));
}
/**
* Low-level route matching against the manifest routes. Returns the matched
* `RouteData` or `undefined`. Does not filter prerendered routes or check
* public assets — use the app-level match for that.
*/
function matchRoute(manifest, pathname) {
	const match = getRouteTable(manifest).router.match(pathname, { allowWithoutBase: true });
	if (match.type !== "match") return void 0;
	return match.route;
}
/**
* Returns all routes matching the given pathname, in priority order. Used when
* the first match cannot serve the request (e.g. a prerendered dynamic route
* that doesn't cover this specific path) and the caller needs to try
* subsequent matches.
*/
function matchAllRoutes(manifest, pathname) {
	return getRouteTable(manifest).router.matchAll(pathname, { allowWithoutBase: true });
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/provider.js
var cacheProviderMemo = createAsyncManifestMemo(async (manifest) => {
	if (manifest.cacheProvider) {
		const factory = (await manifest.cacheProvider())?.default || null;
		return factory ? factory(manifest.cacheConfig?.options) : null;
	}
	return null;
});
/** Resolves the cache provider from the manifest, `null` when none. */
function getCacheProvider(manifest) {
	return cacheProviderMemo.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/runtime/utils.js
/**
* Generate default cache response headers from CacheOptions.
* Used when the provider doesn't supply its own `setHeaders()`.
*/
function defaultSetHeaders(options) {
	const headers = new Headers();
	const directives = [];
	if (options.maxAge !== void 0) directives.push(`max-age=${options.maxAge}`);
	if (options.swr !== void 0) directives.push(`stale-while-revalidate=${options.swr}`);
	if (directives.length > 0) headers.set("CDN-Cache-Control", directives.join(", "));
	if (options.tags && options.tags.length > 0) headers.set("Cache-Tag", options.tags.join(", "));
	if (options.lastModified) headers.set("Last-Modified", options.lastModified.toUTCString());
	if (options.etag) headers.set("ETag", options.etag);
	return headers;
}
function isLiveDataEntry(value) {
	return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/runtime/cache.js
var APPLY_HEADERS = Symbol.for("astro:cache:apply");
var IS_ACTIVE = Symbol.for("astro:cache:active");
var AstroCache = class {
	#options = {};
	#tags = /* @__PURE__ */ new Set();
	#disabled = false;
	#provider;
	enabled = true;
	constructor(provider) {
		this.#provider = provider;
	}
	set(input) {
		if (input === false) {
			this.#disabled = true;
			this.#tags.clear();
			this.#options = {};
			return;
		}
		this.#disabled = false;
		let options;
		if (isLiveDataEntry(input)) {
			if (!input.cacheHint) return;
			options = input.cacheHint;
		} else options = input;
		if ("maxAge" in options && options.maxAge !== void 0) this.#options.maxAge = options.maxAge;
		if ("swr" in options && options.swr !== void 0) this.#options.swr = options.swr;
		if ("etag" in options && options.etag !== void 0) this.#options.etag = options.etag;
		if (options.lastModified !== void 0) {
			if (!this.#options.lastModified || options.lastModified > this.#options.lastModified) this.#options.lastModified = options.lastModified;
		}
		if (options.tags) for (const tag of options.tags) this.#tags.add(tag);
	}
	get tags() {
		return [...this.#tags];
	}
	/**
	* Get the current cache options (read-only snapshot).
	* Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
	*/
	get options() {
		return {
			...this.#options,
			tags: this.tags
		};
	}
	async invalidate(input) {
		if (!this.#provider) throw new AstroError(CacheNotEnabled);
		let options;
		if (isLiveDataEntry(input)) options = { tags: input.cacheHint?.tags ?? [] };
		else options = input;
		return this.#provider.invalidate(options);
	}
	/** @internal */
	[APPLY_HEADERS](response, request) {
		if (this.#disabled) return;
		const finalOptions = {
			...this.#options,
			tags: this.tags
		};
		if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length) return;
		const headers = this.#provider?.setHeaders?.(finalOptions, request) ?? defaultSetHeaders(finalOptions);
		for (const [key, value] of headers) response.headers.set(key, value);
		if (!response.headers.has("Cache-Control") && !response.headers.has("Expires") && (response.headers.has("Last-Modified") || response.headers.has("ETag"))) response.headers.set("Cache-Control", "no-cache");
	}
	/** @internal */
	get [IS_ACTIVE]() {
		return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
	}
};
/**
* Apply cache headers to a response.
*/
function applyCacheHeaders(cache, response, request) {
	if (APPLY_HEADERS in cache) cache[APPLY_HEADERS](response, request);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/runtime/noop.js
/**
* A no-op cache implementation used in dev mode when cache is configured.
* The API is available so user code doesn't need conditional checks,
* but nothing is actually cached.
*/
var EMPTY_OPTIONS = Object.freeze({ tags: [] });
var NoopAstroCache = class {
	enabled = false;
	set() {}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {}
};
var hasWarned = false;
/**
* A no-op cache used when cache is not configured.
* Logs a warning on first use instead of throwing, so libraries
* can call cache methods without needing try/catch.
* `invalidate()` still throws since it implies the caller
* expects purging to actually work.
*/
var DisabledAstroCache = class {
	enabled = false;
	#logger;
	constructor(logger) {
		this.#logger = logger;
	}
	#warn() {
		if (!hasWarned) {
			hasWarned = true;
			this.#logger?.warn("cache", "`cache.set()` was called but caching is not enabled. Configure a cache provider in your Astro config under `cache` to enable caching.");
		}
	}
	set() {
		this.#warn();
	}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {
		throw new AstroError(CacheNotEnabled);
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/parts.js
var ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
var ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
	const result = [];
	part.split(ROUTE_DYNAMIC_SPLIT).map((str, i) => {
		if (!str) return;
		const dynamic = i % 2 === 1;
		const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
		if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content)) throw new Error(`Invalid route ${file} — parameter name must match /^[a-zA-Z0-9_$]+$/`);
		result.push({
			content,
			dynamic,
			spread: dynamic && ROUTE_SPREAD.test(content)
		});
	});
	return result;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/runtime/route-matching.js
/**
* Compile config-level cache route patterns into RegExps.
* The result is memoized on the pipeline — this function is only called once,
* on the first request that needs route matching.
* Returns compiled patterns sorted by Astro's standard route priority (most specific first).
*/
function compileCacheRoutes(routes, base, trailingSlash) {
	const compiled = Object.entries(routes).map(([path, options]) => {
		const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s) => getParts(s, path));
		return {
			pattern: getPattern(segments, base, trailingSlash),
			options,
			segments,
			route: path
		};
	});
	compiled.sort((a, b) => routeComparator({
		segments: a.segments,
		route: a.route,
		type: "page"
	}, {
		segments: b.segments,
		route: b.route,
		type: "page"
	}));
	return compiled;
}
/**
* Called per-request to find the first matching cache rule for a given pathname.
*/
function matchCacheRoute(pathname, compiledRoutes) {
	for (const route of compiledRoutes) if (route.pattern.test(pathname)) return route.options;
	return null;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/cache/handler.js
var CACHE_KEY = "cache";
/**
* Registers a cache provider on the given `FetchState`. When
* `state.resolve('cache')` is first called, the appropriate cache
* implementation is created (disabled, noop for dev, or real).
*
* Returns synchronously when cache is not configured or in dev mode.
*/
function provideCache(state) {
	const manifest = state.manifest;
	if (!manifest.cacheConfig) {
		state.provide(CACHE_KEY, { create: () => new DisabledAstroCache(state.logger) });
		return;
	}
	if (getEnvironment(manifest).runtimeMode === "development") {
		state.provide(CACHE_KEY, { create: () => new NoopAstroCache() });
		return;
	}
	return provideCacheAsync(state, manifest);
}
async function provideCacheAsync(state, manifest) {
	const cacheProvider = await getCacheProvider(manifest);
	state.provide(CACHE_KEY, { create() {
		const cache = new AstroCache(cacheProvider);
		if (manifest.cacheConfig?.routes) {
			const matched = matchCacheRoute(state.pathname, getCompiledCacheRoutes(manifest));
			if (matched) cache.set(matched);
		}
		return cache;
	} });
}
/**
* Wraps a render callback with cache provider logic. Handles both
* runtime caching (onRequest) and CDN-based providers (headers only).
*
* - When a cache provider with `onRequest` is configured, the callback
*   is wrapped so the provider can serve from cache or fall through.
* - When only CDN headers are needed, the callback runs directly and
*   cache headers are applied to the response.
* - When no cache provider is configured, the callback runs as-is.
*
* Cache headers (`CDN-Cache-Control`, `Cache-Tag`) are stripped from
* the final response after the runtime provider has read them.
*/
async function handleCache(state, next) {
	markFeatureUsed(state.manifest, FetchFeatures.cache);
	if (!state.manifest.cacheProvider) return next();
	const cache = state.resolve(CACHE_KEY);
	const cacheProvider = await getCacheProvider(state.manifest);
	if (cacheProvider?.onRequest) {
		const response = await cacheProvider.onRequest({
			request: state.request,
			url: new URL(state.request.url),
			waitUntil: state.renderOptions.waitUntil,
			logger: {
				info(msg) {
					state.logger.info("cache", msg);
				},
				warn(msg) {
					state.logger.warn("cache", msg);
				},
				error(msg) {
					state.logger.error("cache", msg);
				}
			}
		}, async () => {
			const res = await next();
			applyCacheHeaders(cache, res, state.request);
			return res;
		});
		response.headers.delete("CDN-Cache-Control");
		response.headers.delete("Cache-Tag");
		return response;
	}
	const response = await next();
	applyCacheHeaders(cache, response, state.request);
	return response;
}
var compiledCacheRoutesMemo = createManifestMemo((manifest) => manifest.cacheConfig?.routes ? compileCacheRoutes(manifest.cacheConfig.routes, manifest.base, manifest.trailingSlash) : []);
/**
* Config-level cache routes compiled from `manifest.cacheConfig`, derived
* lazily on the first cache-seeded request.
*/
function getCompiledCacheRoutes(manifest) {
	return compiledCacheRoutesMemo.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/session/provider-disabled.js
function provideSession(state) {
	markFeatureUsed(state.manifest, FetchFeatures.sessions);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/validate-headers.js
/**
* Parses a potentially comma-separated multi-value header (as produced by
* proxy chains) and returns the first value, trimmed of whitespace.
* Returns `undefined` when the header is absent or empty.
*/
function getFirstForwardedValue$1(multiValueHeader) {
	return multiValueHeader?.toString().split(",").map((e) => e.trim())[0];
}
/**
* Sanitize a hostname by rejecting any with path separators.
* Prevents path injection attacks. Invalid hostnames return undefined.
*/
function sanitizeHost(hostname) {
	if (!hostname) return void 0;
	if (/[/\\]/.test(hostname)) return void 0;
	return hostname;
}
/**
* Parse a host string into hostname and port components. Returns `undefined`
* for a host that carries more than a single `hostname:port` pair (e.g.
* `example.com:8080:8080`), which is not a valid host and would otherwise be
* accepted by inspecting only the first two segments.
*/
function parseHost(host) {
	const parts = host.split(":");
	if (parts.length > 2) return void 0;
	return {
		hostname: parts[0],
		port: parts[1]
	};
}
/**
* Check if a host matches any of the allowed domain patterns.
* Assumes hostname and port are already sanitized/parsed.
*/
function matchesAllowedDomains(hostname, protocol, port, allowedDomains) {
	const urlString = `${protocol}://${port ? `${hostname}:${port}` : hostname}`;
	if (!URL.canParse(urlString)) return false;
	const testUrl = new URL(urlString);
	return allowedDomains.some((pattern) => matchPattern(testUrl, pattern));
}
/**
* Validate a host against allowedDomains.
* Returns the host only if it matches an allowed pattern; otherwise, undefined.
* This prevents SSRF attacks by ensuring the Host header is trusted.
*/
function validateHost(host, protocol, allowedDomains) {
	if (!host || host.length === 0) return void 0;
	if (!allowedDomains || allowedDomains.length === 0) return void 0;
	const sanitized = sanitizeHost(host);
	if (!sanitized) return void 0;
	const parsed = parseHost(sanitized);
	if (!parsed) return void 0;
	const { hostname, port } = parsed;
	if (matchesAllowedDomains(hostname, protocol, port, allowedDomains)) return sanitized;
}
/**
* Validate forwarded headers (proto, host, port) against allowedDomains.
* Returns validated values or undefined for rejected headers.
* Uses strict defaults: http/https only for proto, rejects port if not in allowedDomains.
*/
function validateForwardedHeaders(forwardedProtocol, forwardedHost, forwardedPort, allowedDomains) {
	const result = {};
	if (forwardedProtocol) {
		if (allowedDomains && allowedDomains.length > 0) {
			if (allowedDomains.some((pattern) => pattern.protocol !== void 0)) try {
				const testUrl = new URL(`${forwardedProtocol}://example.com`);
				if (allowedDomains.some((pattern) => matchPattern(testUrl, { protocol: pattern.protocol }))) result.protocol = forwardedProtocol;
			} catch {}
			else if (/^https?$/.test(forwardedProtocol)) result.protocol = forwardedProtocol;
		}
	}
	if (forwardedPort && allowedDomains && allowedDomains.length > 0) {
		if (allowedDomains.some((pattern) => pattern.port !== void 0)) {
			if (allowedDomains.some((pattern) => pattern.port === forwardedPort)) result.port = forwardedPort;
		}
	}
	if (forwardedHost && forwardedHost.length > 0 && allowedDomains && allowedDomains.length > 0) {
		const protoForValidation = result.protocol || "https";
		const sanitized = sanitizeHost(forwardedHost);
		const parsed = sanitized ? parseHost(sanitized) : void 0;
		if (sanitized && parsed) {
			const { hostname, port: portFromHost } = parsed;
			if (matchesAllowedDomains(hostname, protoForValidation, result.port || portFromHost, allowedDomains)) result.host = sanitized;
		}
	}
	return result;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/output-filename.js
function getOutputFilename(buildFormat, name, routeData) {
	if (routeData.type === "endpoint") return name;
	if (name === "/" || name === "") return name === "" ? "index.html" : "/index.html";
	if (buildFormat === "file" || STATUS_CODE_PAGES.has(name)) return `${removeTrailingForwardSlash(name || "index")}.html`;
	if (buildFormat === "preserve" && !routeData.isIndex) return `${removeTrailingForwardSlash(name || "index")}.html`;
	return `${removeTrailingForwardSlash(name)}/index.html`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/default-handler.js
/**
* The default error strategy used in production SSR. Attempts to render the
* matching error route (404.astro / 500.astro), falling back to a plain
* response with the given status. Handles prerendered error pages via
* `prerenderedErrorPageFetch`.
*/
async function renderDefaultError(manifest, request, { status, response: originalResponse, skipMiddleware = false, error, pathname, ...resolvedRenderOptions }) {
	const resolvedPathname = pathname ?? new FetchState(manifest, request).pathname;
	const routeTable = getRouteTable(manifest);
	const errorRouteData = matchRoute$1(getErrorRoutePath(resolvedPathname, status, routeTable.routes, manifest.i18n?.locales, manifest.trailingSlash === "always"), routeTable);
	const url = new URL(request.url);
	if (errorRouteData) {
		if (errorRouteData.prerender) {
			const allowedDomains = manifest.allowedDomains;
			const safeOrigin = validateHost(url.host, url.protocol.replace(":", ""), allowedDomains) ? url.origin : `${url.protocol}//localhost`;
			const statusURL = new URL(`${removeTrailingForwardSlash(manifest.base)}${getOutputFilename(manifest.buildFormat, errorRouteData.route, errorRouteData)}`, safeOrigin);
			if (statusURL.toString() !== request.url && resolvedRenderOptions.prerenderedErrorPageFetch) try {
				const newResponse = mergeResponses(await resolvedRenderOptions.prerenderedErrorPageFetch(statusURL.toString()), originalResponse, {
					status,
					removeContentEncodingHeaders: true
				});
				prepareResponse(newResponse, resolvedRenderOptions);
				return newResponse;
			} catch {
				const response = mergeResponses(new Response(null, { status }), originalResponse);
				prepareResponse(response, resolvedRenderOptions);
				return response;
			}
		}
		const mod = await getEnvironment(manifest).getComponentByRoute(manifest, errorRouteData);
		const errorState = new FetchState(manifest, request);
		errorState.skipMiddleware = skipMiddleware;
		errorState.clientAddress = resolvedRenderOptions.clientAddress;
		errorState.routeData = errorRouteData;
		errorState.pathname = resolvedPathname;
		errorState.status = status;
		errorState.componentInstance = mod;
		errorState.locals = resolvedRenderOptions.locals ?? {};
		errorState.initialProps = { error };
		try {
			await provideSession(errorState);
			await provideCache(errorState);
			const response = await handleMiddleware(errorState, handlePages);
			if (rewroteToEmptyErrorResponse(skipMiddleware, errorRouteData, errorState.routeData, response)) return renderDefaultError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				response: originalResponse,
				skipMiddleware: true,
				pathname: resolvedPathname
			});
			const newResponse = mergeResponses(response, originalResponse);
			prepareResponse(newResponse, resolvedRenderOptions);
			return newResponse;
		} catch {
			if (skipMiddleware === false) return renderDefaultError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				response: originalResponse,
				skipMiddleware: true,
				pathname: resolvedPathname
			});
		} finally {
			await errorState.finalizeAll();
		}
	}
	const response = mergeResponses(new Response(null, { status }), originalResponse);
	prepareResponse(response, resolvedRenderOptions);
	return response;
}
function mergeResponses(newResponse, originalResponse, override) {
	let newResponseHeaders = newResponse.headers;
	if (override?.removeContentEncodingHeaders) {
		newResponseHeaders = new Headers(newResponseHeaders);
		newResponseHeaders.delete("Content-Encoding");
		newResponseHeaders.delete("Content-Length");
	}
	if (!originalResponse) {
		if (override !== void 0) return new Response(newResponse.body, {
			status: override.status,
			statusText: newResponse.statusText,
			headers: newResponseHeaders
		});
		return newResponse;
	}
	const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
	try {
		originalResponse.headers.delete("Content-type");
		originalResponse.headers.delete("Content-Length");
		originalResponse.headers.delete("Transfer-Encoding");
	} catch {}
	const newHeaders = new Headers();
	const seen = /* @__PURE__ */ new Set();
	for (const [name, value] of originalResponse.headers) {
		newHeaders.append(name, value);
		seen.add(name.toLowerCase());
	}
	for (const [name, value] of newResponseHeaders) {
		const lower = name.toLowerCase();
		if (!seen.has(lower) || lower === "set-cookie") newHeaders.append(name, value);
	}
	const mergedResponse = new Response(newResponse.body, {
		status,
		statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
		headers: newHeaders
	});
	const originalCookies = getCookiesFromResponse(originalResponse);
	const newCookies = getCookiesFromResponse(newResponse);
	if (originalCookies) {
		if (newCookies) originalCookies.merge(newCookies);
		attachCookiesToResponse(mergedResponse, originalCookies);
	} else if (newCookies) attachCookiesToResponse(mergedResponse, newCookies);
	return mergedResponse;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/build-handler.js
/**
* The error strategy used during static build / prerendering.
*
* - For 500 errors, returns the original response if present, otherwise
*   throws so the build surfaces the underlying error to the developer.
* - For other errors (e.g. 404), delegates to `renderDefaultError` with
*   `prerenderedErrorPageFetch` cleared (the build pipeline can't fetch
*   prerendered pages the way production SSR can).
*/
async function renderBuildError(manifest, request, options) {
	if (options.status === 500) {
		if (options.response) return options.response;
		throw options.error;
	}
	return renderDefaultError(manifest, request, {
		...options,
		prerenderedErrorPageFetch: void 0
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/dev-handler.js
/**
* The dev-server error strategy. Renders custom 404/500 routes if the user
* has them, otherwise throws so Vite's dev overlay is shown. Shared between
* the Vite dev server and the non-runnable dev pipeline; only
* `shouldInjectCspMetaTags` differs between them (carried by the
* environment record's `injectCspMetaTagsOnErrorPages` static).
*/
async function renderDevError(manifest, request, { skipMiddleware = false, error, status, response: _response, pathname, ...resolvedRenderOptions }, { shouldInjectCspMetaTags }) {
	if (isAstroError(error) && [MiddlewareNoDataOrNextCalled.name, MiddlewareNotAResponse.name].includes(error.name)) throw error;
	const resolvedPathname = pathname ?? new FetchState(manifest, request).pathname;
	const renderRoute = async (routeData) => {
		try {
			const preloadedComponent = await getEnvironment(manifest).getComponentByRoute(manifest, routeData);
			const errorState = new FetchState(manifest, request);
			errorState.skipMiddleware = skipMiddleware;
			errorState.clientAddress = resolvedRenderOptions.clientAddress;
			errorState.shouldInjectCspMetaTags = shouldInjectCspMetaTags ? !!manifest.csp : false;
			errorState.routeData = routeData;
			errorState.pathname = resolvedPathname;
			errorState.status = status;
			errorState.componentInstance = preloadedComponent;
			errorState.locals = resolvedRenderOptions.locals ?? {};
			errorState.initialProps = { error };
			await provideCache(errorState);
			const response = await handleMiddleware(errorState, handlePages);
			if (rewroteToEmptyErrorResponse(skipMiddleware, routeData, errorState.routeData, response)) return renderDevError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				skipMiddleware: true,
				pathname: resolvedPathname
			}, { shouldInjectCspMetaTags });
			if (error) getLogger(manifest).error("router", error.stack || error.message);
			return response;
		} catch (_err) {
			if (skipMiddleware === false) return renderDevError(manifest, request, {
				...resolvedRenderOptions,
				status: 500,
				skipMiddleware: true,
				error: _err,
				pathname: resolvedPathname
			}, { shouldInjectCspMetaTags });
			throw _err;
		}
	};
	if (status === 404) {
		const custom404 = getCustom404Route(getRouteTable(manifest));
		if (custom404) return renderRoute(custom404);
	}
	const custom500 = getCustom500Route(getRouteTable(manifest));
	if (!custom500) throw error;
	else return renderRoute(custom500);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/handler.js
/**
* Renders the error page (404.astro / 500.astro or a plain response) for a
* request, dispatching to the strategy the manifest's environment selects:
* production/container default, dev (overlay + custom error routes, with or
* without CSP meta-tag injection), or build (500s throw so the build fails).
*/
function renderErrorPage(manifest, request, options) {
	const env = getEnvironment(manifest);
	switch (env.errorStrategy) {
		case "dev": return renderDevError(manifest, request, options, { shouldInjectCspMetaTags: env.injectCspMetaTagsOnErrorPages });
		case "build": return renderBuildError(manifest, request, options);
		case "default": return renderDefaultError(manifest, request, options);
	}
}
/**
* Dispatches an internal error render for a request flowing through the
* handler chain: through the facade's late-bound `renderError` hook when the
* state was built by `BaseApp.render`'s fast path (preserving instance
* overrides/reassignments, e.g. cloudflare's prerender-error propagation),
* else through the environment's strategy via {@link renderErrorPage}.
*/
function renderErrorFromState(state, request, options) {
	if (state.renderError) return state.renderError(request, options);
	return renderErrorPage(state.manifest, request, options);
}
/**
* Whether a middleware rewrite (`ctx.rewrite()` / `next(payload)`) issued while
* rendering the error page dead-ended in another empty reroutable (404/500)
* response. The rewrite swaps the state's routeData away from the error route,
* so returning that render as-is would produce a blank page; the error handler
* should instead retry rendering the error page without middleware.
*
* @param skipMiddleware Whether middleware was already skipped for this render.
* @param errorRouteData The error route matched before middleware ran.
* @param renderedRouteData The route data on the state after middleware ran.
* @param response The response produced by the middleware-driven render.
*/
function rewroteToEmptyErrorResponse(skipMiddleware, errorRouteData, renderedRouteData, response) {
	return skipMiddleware === false && renderedRouteData !== errorRouteData && response.body === null && REROUTABLE_STATUS_CODES.includes(response.status);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/callMiddleware.js
/**
* Utility function that is in charge of calling the middleware.
*
* It accepts a `R` generic, which usually is the `Response` returned.
* It is a generic because endpoints can return a different payload.
*
* When calling a middleware, we provide a `next` function, this function might or
* might not be called.
*
* A middleware, to behave correctly, can:
* - return a `Response`;
* - call `next`;
*
* Failing doing so will result an error. A middleware can call `next` and do not return a
* response. A middleware cannot call `next` and return a new `Response` from scratch (maybe with a redirect).
*
* ```js
* const onRequest = async (context, next) => {
*   const response = await next(context);
*   return response;
* }
* ```
*
* ```js
* const onRequest = async (context, next) => {
*   context.locals = "foo";
*   next();
* }
* ```
*
* @param onRequest The function called which accepts a `context` and a `resolve` function
* @param apiContext The API context
* @param responseFunction A callback function that should return a promise with the response
*/
async function callMiddleware(onRequest, apiContext, responseFunction) {
	let nextCalled = false;
	let responseFunctionPromise = void 0;
	const next = async (payload) => {
		nextCalled = true;
		responseFunctionPromise = responseFunction(apiContext, payload);
		return responseFunctionPromise;
	};
	const middlewarePromise = onRequest(apiContext, next);
	return await Promise.resolve(middlewarePromise).then(async (value) => {
		if (nextCalled) {
			/**
			* Then we check if a value is returned. If so, we need to return the value returned by the
			* middleware.
			* e.g.
			* ```js
			* 	const response = await next();
			* 	const new Response(null, { status: 500, headers: response.headers });
			* ```
			*/
			if (typeof value !== "undefined") {
				if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
				return value;
			} else if (responseFunctionPromise) return responseFunctionPromise;
			else throw new AstroError(MiddlewareNotAResponse);
		} else if (typeof value === "undefined")
 /**
		* There might be cases where `next` isn't called and the middleware **must** return
		* something.
		*
		* If not thing is returned, then we raise an Astro error.
		*/
		throw new AstroError(MiddlewareNoDataOrNextCalled);
		else if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
		else return value;
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/sequence.js
/**
*
* It accepts one or more middleware handlers and makes sure that they are run in sequence.
*/
function sequence(...handlers) {
	const filtered = handlers.filter((h) => !!h);
	const length = filtered.length;
	if (!length) return defineMiddleware((_context, next) => {
		return next();
	});
	return defineMiddleware((context, next) => {
		/**
		* This variable is used to carry the rerouting payload across middleware functions.
		*/
		let carriedPayload = void 0;
		return applyHandle(0, context);
		function applyHandle(i, handleContext) {
			const handle = filtered[i];
			return handle(handleContext, async (payload) => {
				if (i < length - 1) {
					if (payload) {
						const oldPathname = handleContext.url.pathname;
						const state = Reflect.get(handleContext, fetchStateSymbol);
						if (!state) throw new Error("FetchState not found on APIContext. `next(payload)` rewrites require a context created through Astro's request pipeline.");
						const manifest = state.manifest;
						const { routeData, pathname } = await getEnvironment(manifest).tryRewrite(manifest, payload, handleContext.request);
						let newRequest;
						if (payload instanceof Request) newRequest = payload;
						else {
							const request = handleContext.request.method === "GET" || handleContext.request.method === "HEAD" ? handleContext.request : handleContext.request.clone();
							newRequest = copyRequest(payload instanceof URL ? payload : new URL(payload, handleContext.url.origin), request, false, state.logger, routeData.route);
						}
						if (manifest.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) throw new AstroError({
							...ForbiddenRewrite,
							message: ForbiddenRewrite.message(handleContext.url.pathname, pathname, routeData.component),
							hint: ForbiddenRewrite.hint(routeData.component)
						});
						carriedPayload = payload;
						handleContext.request = newRequest;
						handleContext.url = new URL(newRequest.url);
						handleContext.params = getParams(routeData, pathname);
						handleContext.routePattern = routeData.route;
						setOriginPathname(handleContext.request, oldPathname, manifest.trailingSlash, manifest.buildFormat);
					}
					return applyHandle(i + 1, handleContext);
				} else return next(payload ?? carriedPayload);
			});
		}
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/load.js
var resolvedMiddleware = /* @__PURE__ */ new WeakMap();
var middlewareMemo = createAsyncManifestMemo(async (manifest) => {
	let handler;
	if (manifest.middleware) {
		const internalMiddlewares = [(await manifest.middleware()).onRequest ?? NOOP_MIDDLEWARE_FN];
		if (manifest.checkOrigin) internalMiddlewares.unshift(createOriginCheckMiddleware());
		handler = sequence(...internalMiddlewares);
	} else handler = NOOP_MIDDLEWARE_FN;
	resolvedMiddleware.set(manifest, handler);
	return handler;
});
/**
* Resolves the middleware from the manifest and returns the `onRequest`
* function (prefixed with the origin-check middleware when configured). If
* `onRequest` isn't there, it returns a no-op function.
*/
function getMiddleware(manifest) {
	return middlewareMemo.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/middleware/astro-middleware.js
/**
* Runs Astro's middleware chain (origin check + user `onRequest`) for a
* single render, reading the composed middleware from the manifest and
* per-request data (componentInstance, slots, props, API contexts) off the
* supplied `FetchState`. The actual route dispatch (endpoint / redirect /
* page / fallback) is supplied by the caller as `renderRouteCallback` —
* typically `handlePages`.
*/
async function handleMiddleware(state, renderRouteCallback) {
	markFeatureUsed(state.manifest, FetchFeatures.middleware);
	await state.getProps();
	const apiContext = state.getAPIContext();
	state.counter++;
	if (state.counter === 4) return new Response("Loop Detected", {
		status: 508,
		statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
	});
	const next = async (ctx, payload) => {
		if (payload) {
			state.logger.debug("router", "Called rewriting to:", payload);
			applyRewriteToState(state, payload, await getEnvironment(state.manifest).tryRewrite(state.manifest, payload, state.request));
		}
		return renderRouteCallback(state, ctx);
	};
	let response;
	if (state.skipMiddleware) response = await next(apiContext);
	else response = await callMiddleware(sequence(await getMiddleware(state.manifest)), apiContext, next);
	attachCookiesToResponse(response, state.cookies);
	state.response = response;
	return response;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/util/normalized-url.js
/**
* Creates a normalized URL from a request URL string.
* Decodes and validates the pathname, collapses duplicate slashes.
*/
function createNormalizedUrl(requestUrl) {
	return normalizeUrl(new URL(requestUrl));
}
/**
* Assigns `url.pathname` only when the value differs.
* The setter re-parses the whole URL, so a no-op write is still expensive.
*/
function setPathname(url, pathname) {
	if (url.pathname !== pathname) url.pathname = pathname;
}
/**
* Normalizes an already-parsed URL in place: decodes and validates the
* pathname, collapses duplicate slashes. Returns the same URL object.
*
* Collapse runs after the decode is written back: the pathname setter
* rewrites `\` to `/`, so a decoded backslash only becomes `//` once assigned.
*/
function normalizeUrl(url) {
	try {
		setPathname(url, validateAndDecodePathname(url.pathname));
	} catch {
		try {
			setPathname(url, decodeURI(url.pathname));
		} catch {}
	}
	setPathname(url, collapseDuplicateSlashes(url.pathname));
	return url;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/rewrites/handler.js
/**
* Validates and applies a rewrite target to the given `FetchState`.
*
* - Validates that SSR→prerender rewrites are not attempted (except
*   for i18n fallback routes).
* - Mutates `state` to reflect the new route: request, URL, cookies,
*   params, pathname, component instance, etc.
* - Invalidates cached API contexts so they're re-derived from the
*   new route.
*
* Called by both `executeRewrite()` (user-triggered `Astro.rewrite`)
* and `handleMiddleware` (middleware `next(payload)`).
*/
function applyRewriteToState(state, payload, { routeData, componentInstance, newUrl, pathname }, { mergeCookies = false } = {}) {
	const oldPathname = state.pathname;
	const isI18nFallback = routeData.fallbackRoutes && routeData.fallbackRoutes.length > 0;
	if (state.manifest.serverLike && !state.routeData.prerender && routeData.prerender && !isI18nFallback) throw new AstroError({
		...ForbiddenRewrite,
		message: ForbiddenRewrite.message(state.pathname, pathname, routeData.component),
		hint: ForbiddenRewrite.hint(routeData.component)
	});
	state.routeData = routeData;
	state.componentInstance = componentInstance;
	if (payload instanceof Request) state.request = payload;
	else state.request = copyRequest(newUrl, state.request, routeData.prerender, state.logger, state.routeData.route);
	state.url = createNormalizedUrl(state.request.url);
	if (mergeCookies) {
		const newCookies = new AstroCookies(state.request, state.logger);
		if (state.cookies) newCookies.merge(state.cookies);
		state.cookies = newCookies;
	}
	state.params = getParams(routeData, pathname);
	state.pathname = pathname;
	state.isRewriting = true;
	state.status = 200;
	setOriginPathname(state.request, oldPathname, state.manifest.trailingSlash, state.manifest.buildFormat);
	state.invalidateContexts();
}
/**
* Executes a user-triggered rewrite (`Astro.rewrite(...)` /
* `ctx.rewrite(...)`) against a `FetchState`. Resolves the rewrite
* target via the environment's `tryRewrite`, validates it, mutates the
* `FetchState` to reflect the new route, and re-runs the middleware
* and page dispatch to produce the new response.
*/
async function executeRewrite(state, payload) {
	state.logger.debug("router", "Calling rewrite: ", payload);
	applyRewriteToState(state, payload, await getEnvironment(state.manifest).tryRewrite(state.manifest, payload, state.request), { mergeCookies: true });
	return handleMiddleware(state, handlePages);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/i18n/domain.js
/**
* For domain-based i18n routing strategies, derives the locale-prefixed
* pathname from the request's `Host` header rather than its URL. For example,
* a request for `/foo` served from `https://example.fr` resolves to `/fr/foo`.
*
* Returns `undefined` when the strategy isn't domain-based or the host isn't
* mapped to a locale — in which case normal pathname routing applies.
*
*/
function computePathnameFromDomain(request, url, i18n, base, trailingSlash, allowedDomains, logger, pathnameFromRequest) {
	let pathname = void 0;
	if (i18n && (i18n.strategy === "domains-prefix-always" || i18n.strategy === "domains-prefix-other-locales" || i18n.strategy === "domains-prefix-always-no-redirect")) {
		const validated = validateForwardedHeaders(getFirstForwardedValue$1(request.headers.get("X-Forwarded-Proto") ?? void 0), getFirstForwardedValue$1(request.headers.get("X-Forwarded-Host") ?? void 0), getFirstForwardedValue$1(request.headers.get("X-Forwarded-Port") ?? void 0), allowedDomains);
		const protocol = validated.protocol ? `${validated.protocol}:` : url.protocol;
		const requestHost = request.headers.get("Host") ?? void 0;
		const validatedRequestHost = allowedDomains?.length ? validateHost(requestHost, protocol.slice(0, -1), allowedDomains) : requestHost;
		let host = validated.host ?? validatedRequestHost;
		if (host && protocol) {
			host = host.split(":")[0];
			try {
				let locale;
				const hostAsUrl = new URL(`${protocol}//${host}`);
				for (const [domainKey, localeValue] of Object.entries(i18n.domainLookupTable)) {
					const domainKeyAsUrl = new URL(domainKey);
					if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
						locale = localeValue;
						break;
					}
				}
				if (locale) {
					const requestPathname = pathnameFromRequest ?? stripRequestBase(url.pathname, base);
					pathname = prependForwardSlash(joinPaths(normalizeTheLocale(locale), requestPathname));
					if (trailingSlash === "always") pathname = appendForwardSlash(pathname);
					else if (trailingSlash === "never") pathname = removeTrailingForwardSlash(pathname);
					else if (url.pathname.endsWith("/")) pathname = appendForwardSlash(pathname);
				}
			} catch (e) {
				logger.error("router", `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`);
				logger.error("router", `Error: ${e}`);
			}
		}
	}
	return pathname;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/manifest/derived.js
var sites = createManifestMemo((manifest) => manifest.site ? new URL(manifest.site) : void 0);
/** The manifest's `site` as a `URL` (used for `Astro.site`). */
function getSite(manifest) {
	return sites.get(manifest);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/server-islands/mappings.js
/**
* The server-island mappings for a manifest. Deliberately NOT memoized: the
* manifest thunk is a module import, which is cheap.
*/
async function getServerIslands(manifest) {
	if (manifest.serverIslandMappings) return manifest.serverIslandMappings();
	return {
		serverIslandMap: /* @__PURE__ */ new Map(),
		serverIslandNameMap: /* @__PURE__ */ new Map()
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/fetch/fetch-state.js
var slotValuesSymbol = Symbol("astro.slotValues");
/**
* Retrieves the `FetchState` stashed on an `APIContext` by
* `FetchState.getAPIContext()`. Throws if not found — this indicates
* the context was not created through Astro's request pipeline.
*/
function getFetchStateFromAPIContext(context) {
	const state = context[fetchStateSymbol];
	if (!state) throw new Error("FetchState not found on APIContext. This is an internal error — the context was not created through Astro's request pipeline.");
	return state;
}
/**
* External `<link href>` / `<script src>` entries are stored with empty
* `children`. Hashing that empty string puts the SHA of `''` in CSP and
* disables `'unsafe-inline'` for that directive.
*/
function isInlineCspHeadContent(element) {
	if (!element.children) return false;
	const props = element.props ?? {};
	return props.href == null && props.src == null;
}
/**
* Holds per-request state as it flows through the handler pipeline.
*
* **This class is user-facing** via `astro/fetch` and `astro/hono`.
* The {@link AstroFetchState} interface defines the stable public
* surface. Members not on that interface are internal and
* may change without notice.
*
* Performance note: fields on this class are plain properties — ES
* private fields (`#foo`) have a non-zero per-access cost in V8
* which is measurable on the hot render path, so `#` is used only
* for rarely-accessed memoized caches and Maps.
*/
var FetchState = class {
	/** The manifest — the single ambient source of static, build-time data. */
	manifest;
	/** The manifest's identity-stable logger, captured once at construction. */
	logger;
	/**
	* Whether page renders stream. From the facade hooks on the fast path,
	* else the environment's default.
	*/
	streaming;
	/**
	* Internal facade hook: late-bound `app.renderError` dispatch. Undefined on
	* bare and custom-handler paths — those fall through to the environment's
	* error strategy (`renderErrorPage`).
	*/
	renderError;
	/**
	* Internal facade hook: late-bound `app.logThisRequest` dispatch. Undefined
	* on bare and custom-handler paths — those fall through to the
	* environment's `logRequest` behavior.
	*/
	logRequest;
	/**
	* The request to render. Mutated during rewrites so subsequent renders
	* see the rewritten URL.
	*/
	request;
	routeData;
	/**
	* The pathname to use for routing and rendering. Starts out as the raw,
	* base-stripped, decoded pathname from the request. May be further
	* normalized by `handleRequest` after routeData is known (in dev, when
	* the matched route has no `.html` extension, `.html` / `/index.html`
	* suffixes are stripped).
	*/
	pathname;
	/** Resolved render options (addCookieHeader, clientAddress, locals, etc.). */
	renderOptions;
	/** When the request started, used to log duration. */
	timeStart;
	/**
	* The route's loaded component module. Set before middleware runs; may
	* be swapped during in-flight rewrites from inside the middleware chain.
	*/
	componentInstance;
	/**
	* Slot overrides supplied by the container API. `undefined` for HTTP
	* requests — `PagesHandler` coalesces to `{}` on read so we don't
	* allocate an empty object per request.
	*/
	slots;
	/**
	* The `Response` produced by handlers, if any. Set after page
	* rendering or middleware completes.
	*/
	response;
	/** Explicitly assigned status; `undefined` until a caller sets one. */
	#status;
	/**
	* Default HTTP status for the rendered response. Callers override
	* before rendering runs (e.g. `handleRequest` sets this from
	* `BaseApp.getDefaultStatusCode`; error handlers set `404` / `500`).
	* Reads `200` until assigned.
	*/
	get status() {
		return this.#status ?? 200;
	}
	set status(value) {
		this.#status = value;
	}
	/**
	* Sets `status` from the matched route (see `getDefaultStatusCode`)
	* unless a caller already assigned one.
	*/
	applyDefaultStatus() {
		if (this.#status === void 0 && this.routeData) this.#status = getDefaultStatusCode(this.manifest, this.routeData, this.pathname);
	}
	/** Whether user middleware should be skipped for this request. */
	skipMiddleware = false;
	/**
	* Set to `true` when the request path was encoded too many times to fully
	* decode, or is not valid percent-encoded UTF-8 (see
	* {@link validateAndDecodePathname}). These requests are rejected with a
	* `400` before middleware or routing run.
	*/
	invalidEncoding = false;
	/** A flag that tells the render content if the rewriting was triggered. */
	isRewriting = false;
	/** A safety net in case of loops (rewrite counter). */
	counter = 0;
	/** Cookies for this request. Created lazily on first access. */
	cookies;
	/** Route params derived from routeData + pathname. Computed lazily. */
	#params;
	get params() {
		if (!this.#params && this.routeData) this.#params = getParams(this.routeData, this.pathname);
		return this.#params;
	}
	set params(value) {
		this.#params = value;
	}
	/** Normalized URL for this request. */
	url;
	/** Client address for this request. */
	clientAddress;
	/** Whether this is a partial render (container API). */
	partial;
	/** Internal metadata about the current response route type. */
	responseRouteType;
	/** Internal flag to prevent rerouting this response to an error page. */
	skipErrorReroute = false;
	/** Whether to inject CSP meta tags. */
	shouldInjectCspMetaTags;
	/** Request-scoped locals object, shared with user middleware. */
	locals = {};
	/**
	* Memoized `props` (see `getProps`). `null` means "not yet computed"
	* — using `null` (rather than `undefined`) keeps the hidden class
	* stable and distinct from a valid-but-empty result.
	*/
	props = null;
	/** Memoized `ActionAPIContext` (see `getActionAPIContext`). */
	actionApiContext = null;
	/** Memoized `APIContext` (see `getAPIContext`). */
	apiContext = null;
	/** Registered context providers keyed by name. Lazy-initialized on first provide(). */
	#providers;
	/** Cached values from resolved providers. Lazy-initialized on first resolve(). */
	#providersResolvedValues;
	/** Cached promise for lazy component instance loading. */
	#componentInstancePromise;
	/** SSR result for the current page render. */
	result;
	/** Initial props (from container/error handler). */
	initialProps = {};
	/** Memoized Astro page partial. */
	#astroPagePartial;
	/**
	* Locale-prefixed pathname derived from the Host header for domain-based
	* i18n routing (e.g. `/en/boats/1/foo`), or `undefined` when the request
	* isn't served from a locale-mapped domain. When set, `this.pathname` is
	* derived from it so locale/param resolution match the route pattern.
	*/
	#domainPathname;
	/** Memoized current locale. */
	#currentLocale;
	/** Memoized preferred locale. */
	#preferredLocale;
	/** Memoized preferred locale list. */
	#preferredLocaleList;
	constructor(manifest, request, options, hooks) {
		this.manifest = manifest;
		this.logger = getLogger(manifest);
		this.streaming = hooks?.streaming ?? getEnvironment(manifest).defaultStreaming(manifest);
		this.renderError = hooks?.renderError;
		this.logRequest = hooks?.logRequest;
		this.request = request;
		options ??= getRenderOptions(request);
		this.routeData = options?.routeData;
		const self = this;
		this.renderOptions = {
			...options ?? {
				addCookieHeader: false,
				clientAddress: void 0,
				prerenderedErrorPageFetch: fetch,
				routeData: void 0,
				waitUntil: void 0
			},
			get locals() {
				return self.locals;
			}
		};
		this.componentInstance = void 0;
		this.slots = void 0;
		const url = new URL(request.url);
		const publicPathname = this.#normalizePathname(url.pathname);
		const pathname = this.#computePathname(publicPathname);
		setPathname(url, publicPathname);
		setPathname(url, collapseDuplicateSlashes(url.pathname));
		const domainPathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, manifest.allowedDomains, this.logger, pathname);
		if (domainPathname) {
			this.#domainPathname = domainPathname;
			this.pathname = domainPathname;
		} else this.pathname = pathname;
		this.timeStart = performance.now();
		this.clientAddress = options?.clientAddress;
		this.locals = options?.locals ?? {};
		this.url = url;
		this.cookies = new AstroCookies(request, this.logger);
		if (manifest.allowedDomains && manifest.allowedDomains.length > 0 && !this.routeData?.prerender) this.#applyForwardedHeaders();
		if (!Reflect.get(this.request, originPathnameSymbol)) setOriginPathname(this.request, this.pathname, manifest.trailingSlash, manifest.buildFormat);
		this.#resolveRouteData();
	}
	/**
	* Triggers a rewrite. Delegates to the rewrites handler module.
	*/
	rewrite(payload) {
		return executeRewrite(this, payload);
	}
	/**
	* Creates the SSR result for the current page render.
	*/
	async createResult(mod, ctx) {
		const manifest = this.manifest;
		const env = getEnvironment(manifest);
		const { clientDirectives, inlinedScripts, compressHTML } = manifest;
		const renderers = env.getRenderers(manifest);
		const resolve = (specifier) => env.resolve(manifest, specifier);
		const routeData = this.routeData;
		const { links, scripts, styles } = await env.headElements(manifest, routeData);
		const extraStyleHashes = [];
		const extraScriptHashes = [];
		const shouldInjectCspMetaTags = this.shouldInjectCspMetaTags ?? manifest.shouldInjectCspMetaTags;
		const cspAlgorithm = manifest.csp?.algorithm ?? "SHA-256";
		if (shouldInjectCspMetaTags) {
			for (const style of styles) {
				if (!isInlineCspHeadContent(style)) continue;
				extraStyleHashes.push(await generateCspDigest(style.children, cspAlgorithm));
			}
			for (const script of scripts) {
				if (!isInlineCspHeadContent(script)) continue;
				extraScriptHashes.push(await generateCspDigest(script.children, cspAlgorithm));
			}
		}
		const componentMetadata = await env.componentMetadata(manifest, routeData) ?? manifest.componentMetadata;
		const headers = new Headers({ "Content-Type": "text/html" });
		const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
		const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
		const status = this.status;
		const response = {
			status: actionResult?.error ? actionResult?.error.status : status,
			statusText: actionResult?.error ? actionResult?.error.type : "OK",
			get headers() {
				return headers;
			},
			set headers(_) {
				throw new AstroError(AstroResponseHeadersReassigned);
			}
		};
		const state = this;
		const result = {
			base: manifest.base,
			userAssetsBase: manifest.userAssetsBase,
			cancelled: false,
			clientDirectives,
			inlinedScripts,
			componentMetadata,
			compressHTML,
			cookies: this.cookies,
			createAstro: (props, slots) => state.createAstro(result, props, slots, ctx),
			links,
			params: this.params,
			partial,
			pathname: this.pathname,
			renderers,
			resolve,
			response,
			request: this.request,
			scripts,
			styles,
			actionResult,
			async getServerIslandNameMap() {
				return (await getServerIslands(manifest)).serverIslandNameMap ?? /* @__PURE__ */ new Map();
			},
			key: manifest.key,
			trailingSlash: manifest.trailingSlash,
			_metadata: {
				hasHydrationScript: false,
				rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
				hasRenderedHead: false,
				renderedScripts: /* @__PURE__ */ new Set(),
				hasDirectives: /* @__PURE__ */ new Set(),
				hasRenderedServerIslandRuntime: false,
				headInTree: false,
				extraHead: [],
				extraStyleHashes,
				extraScriptHashes,
				propagators: /* @__PURE__ */ new Set(),
				routeHasPropagation: false,
				pendingSlotEvaluations: [],
				templateDepth: 0
			},
			cspDestination: manifest.csp?.cspDestination ?? (routeData.prerender ? "meta" : "header"),
			shouldInjectCspMetaTags,
			cspAlgorithm,
			directives: manifest.csp?.directives ? [...manifest.csp.directives] : [],
			scriptHashes: manifest.csp?.scriptHashes ? [...manifest.csp.scriptHashes] : [],
			scriptResources: manifest.csp?.scriptResources ? [...manifest.csp.scriptResources] : [],
			styleHashes: manifest.csp?.styleHashes ? [...manifest.csp.styleHashes] : [],
			styleResources: manifest.csp?.styleResources ? [...manifest.csp.styleResources] : [],
			isStrictDynamic: manifest.csp?.isStrictDynamic ?? false,
			scriptDirective: {
				resources: manifest.csp?.scriptDirective ? [...manifest.csp.scriptDirective.resources] : [],
				hashes: manifest.csp?.scriptDirective ? [...manifest.csp.scriptDirective.hashes] : [],
				strictDynamic: manifest.csp?.scriptDirective?.strictDynamic ?? false
			},
			styleDirective: {
				resources: manifest.csp?.styleDirective ? [...manifest.csp.styleDirective.resources] : [],
				hashes: manifest.csp?.styleDirective ? [...manifest.csp.styleDirective.hashes] : []
			},
			speculationRulesContent: manifest.csp?.speculationRulesContent,
			internalFetchHeaders: manifest.internalFetchHeaders
		};
		this.result = result;
		return result;
	}
	/**
	* Creates the Astro global object for a component render.
	*/
	createAstro(result, props, slotValues, apiContext) {
		let astroPagePartial;
		if (this.isRewriting) this.#astroPagePartial = this.createAstroPagePartial(result, apiContext);
		this.#astroPagePartial ??= this.createAstroPagePartial(result, apiContext);
		astroPagePartial = this.#astroPagePartial;
		const Astro = Object.assign(Object.create(astroPagePartial), {
			props,
			self: null
		});
		Object.defineProperty(Astro, slotValuesSymbol, {
			value: slotValues,
			writable: true,
			configurable: true,
			enumerable: false
		});
		return Astro;
	}
	/**
	* Creates the Astro page-level partial (prototype for Astro global).
	*/
	createAstroPagePartial(result, apiContext) {
		const state = this;
		const { cookies, locals, params, logger, url } = this;
		const { response } = result;
		const redirect = (path, status = 302) => {
			if (state.request[responseSentSymbol$1]) throw new AstroError({ ...ResponseSentError });
			return new Response(null, {
				status,
				headers: { Location: path }
			});
		};
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		const callAction = createCallAction(apiContext);
		const partial = {
			generator: ASTRO_GENERATOR,
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			cookies,
			get slots() {
				const slotsByAstro = result._metadata.slotsByAstro ??= /* @__PURE__ */ new WeakMap();
				let slots = slotsByAstro.get(this);
				if (slots === void 0) {
					slots = new Slots(result, this[slotValuesSymbol] ?? null, logger);
					slotsByAstro.set(this, slots);
				}
				return slots;
			},
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			locals,
			redirect,
			rewrite,
			request: this.request,
			response,
			site: getSite(this.manifest),
			getActionResult: createGetActionResult(locals),
			get callAction() {
				return callAction;
			},
			url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return astroToRuntimeLogger(logger);
			}
		};
		this.defineProviderGetters(partial);
		return partial;
	}
	getClientAddress() {
		const { clientAddress } = this;
		const routeData = this.routeData;
		if (routeData.prerender) throw new AstroError({
			...PrerenderClientAddressNotAvailable,
			message: PrerenderClientAddressNotAvailable.message(routeData.component)
		});
		if (clientAddress) return clientAddress;
		if (this.manifest.adapterName) throw new AstroError({
			...ClientAddressNotAvailable,
			message: ClientAddressNotAvailable.message(this.manifest.adapterName)
		});
		throw new AstroError(StaticClientAddressNotAvailable);
	}
	getCookies() {
		return this.cookies;
	}
	getCsp() {
		const state = this;
		if (!this.manifest.csp) {
			if (getEnvironment(this.manifest).runtimeMode === "production") this.logger.warn("csp", `context.csp was used when rendering the route ${s.green(state.routeData.route)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/configuration-reference/#securitycsp`);
			return;
		}
		const warnedFallback = /* @__PURE__ */ new Set();
		const warnFallback = (family, kind) => {
			if (kind === "default" || !state.result) return;
			const defaultResources = (family === "script" ? state.result.scriptDirective : state.result.styleDirective).resources.map(normalizeCspResourceEntry).filter((entry) => entry.kind === "default").map((entry) => entry.resource);
			if (defaultResources.length === 0) return;
			const key = `${family}:${kind}`;
			if (warnedFallback.has(key)) return;
			warnedFallback.add(key);
			const general = `${family}-src`;
			const specific = `${general}-${kind === "element" ? "elem" : "attr"}`;
			state.logger.warn("csp", `A resource was added to \`${specific}\`, but \`${general}\` also defines custom resources (${defaultResources.join(" ")}). Because \`${specific}\` overrides \`${general}\` for its scope (browsers do not fall back), those resources will not apply there. Add them to \`${specific}\` as well if needed.`);
		};
		return {
			insertDirective(payload) {
				if (state.result) state.result.directives = pushDirective(state.result.directives, payload);
			},
			insertScriptResource(payload) {
				if (!state.result) return;
				warnFallback("script", normalizeCspResourceEntry(payload).kind);
				state.result.scriptDirective.resources.push(payload);
			},
			insertStyleResource(payload) {
				if (!state.result) return;
				warnFallback("style", normalizeCspResourceEntry(payload).kind);
				state.result.styleDirective.resources.push(payload);
			},
			insertStyleHash(payload) {
				state.result?.styleDirective.hashes.push(payload);
			},
			insertScriptHash(payload) {
				state.result?.scriptDirective.hashes.push(payload);
			}
		};
	}
	computeCurrentLocale() {
		const { url, manifest: { i18n }, routeData } = this;
		if (!i18n || !routeData) return;
		const { defaultLocale, locales, strategy } = i18n;
		const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
		if (this.#currentLocale) return this.#currentLocale;
		let computedLocale;
		if (isRouteServerIsland(routeData)) {
			let referer = this.request.headers.get("referer");
			if (referer) {
				if (URL.canParse(referer)) referer = new URL(referer).pathname;
				computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
			}
		} else {
			let pathname = routeData.pathname;
			if (this.#domainPathname) pathname = this.pathname;
			else if (url && !routeData.pattern.test(url.pathname)) {
				for (const fallbackRoute of routeData.fallbackRoutes) if (fallbackRoute.pattern.test(url.pathname)) {
					pathname = fallbackRoute.pathname;
					break;
				}
			}
			pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname ?? this.pathname;
			computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
			if (routeData.params.length > 0) {
				const localeFromParams = computeCurrentLocaleFromParams(this.params, locales);
				if (localeFromParams) computedLocale = localeFromParams;
			}
		}
		this.#currentLocale = computedLocale ?? fallbackTo;
		return this.#currentLocale;
	}
	computePreferredLocale() {
		const { manifest: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
	}
	computePreferredLocaleList() {
		const { manifest: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
	}
	/**
	* Lazily loads the route's component module. Returns the cached
	* instance if already loaded. The promise is cached so concurrent
	* callers share the same load.
	*/
	async loadComponentInstance() {
		if (this.componentInstance) return this.componentInstance;
		if (this.#componentInstancePromise) return this.#componentInstancePromise;
		this.#componentInstancePromise = getEnvironment(this.manifest).getComponentByRoute(this.manifest, this.routeData).then((mod) => {
			this.componentInstance = mod;
			return mod;
		});
		return this.#componentInstancePromise;
	}
	/**
	* Registers a context provider under the given key. Handlers call
	* this to contribute values to the request context (e.g. sessions).
	* The `create` factory is called lazily on the first `resolve(key)`.
	*/
	provide(key, provider) {
		(this.#providers ??= /* @__PURE__ */ new Map()).set(key, provider);
	}
	/**
	* Lazily resolves a provider registered under `key`. Calls
	* `provider.create()` on first access and caches the result.
	* Returns `undefined` if no provider was registered for the key.
	*/
	resolve(key) {
		if (this.#providersResolvedValues?.has(key)) return this.#providersResolvedValues.get(key);
		const provider = this.#providers?.get(key);
		if (!provider) return void 0;
		const value = provider.create();
		(this.#providersResolvedValues ??= /* @__PURE__ */ new Map()).set(key, value);
		return value;
	}
	/**
	* Runs all registered `finalize` callbacks. Should be called after
	* the response is produced, typically in a `finally` block.
	*
	* Returns synchronously (no promise allocation) when nothing needs
	* finalizing — important for the hot path where sessions are not used.
	*/
	finalizeAll() {
		if (!this.#providersResolvedValues || this.#providersResolvedValues.size === 0) return;
		let chain;
		for (const [key, provider] of this.#providers) if (provider.finalize && this.#providersResolvedValues.has(key)) {
			const result = provider.finalize(this.#providersResolvedValues.get(key));
			if (result) chain = chain ? chain.then(() => result) : result;
		}
		return chain;
	}
	/**
	* Adds lazy getters to `target` for each registered provider key.
	* Used by context creation (APIContext, Astro global) so that
	* provider values like `session` and `cache` appear as properties
	* without hard-coding the keys.
	*
	* Always defines a `session` getter (returning `undefined` when no
	* provider is registered) so `ctx.session` / `Astro.session` is a
	* present property regardless of whether the sessions handler was
	* included in the pipeline.
	*/
	defineProviderGetters(target) {
		const state = this;
		if (this.#providers) for (const key of this.#providers.keys()) Object.defineProperty(target, key, {
			get: () => state.resolve(key),
			enumerable: true,
			configurable: true
		});
		if (!this.#providers?.has("session")) {
			let warned = false;
			Object.defineProperty(target, "session", {
				get() {
					if (!warned) {
						warned = true;
						state.logger.warn("session", "`Astro.session` was accessed but no session storage is configured. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/");
					}
				},
				enumerable: true,
				configurable: true
			});
		}
	}
	/**
	* Resolves the route to use for this request and stores it on
	* `this.routeData`. If the adapter (or the dev server) provided a
	* `routeData` via render options it's already set and this is a
	* no-op. Otherwise we use the app's synchronous route matcher and
	* fall back to a `404.astro` route so middleware can still run.
	*
	* Called eagerly from the constructor so individual handlers
	* (actions, pages, middleware, etc.) always see a resolved route
	* without the caller needing an extra setup step.
	*
	* Once routeData is known, finalizes `this.pathname`: in dev, if the
	* matched route has no `.html` extension, strip `.html` / `/index.html`
	* suffixes so the rendering pipeline sees the canonical pathname.
	*/
	/**
	* Strip `.html` / `/index.html` suffixes from the pathname so the
	* rendering pipeline sees the canonical route path. Only applies to
	* page routes where `.html` is framework-injected. Endpoint routes
	* preserve `.html` because any such suffix is user-provided (e.g.
	* from `getStaticPaths` params). Skipped when the matched route
	* itself has an `.html` extension in its definition.
	*/
	#stripHtmlExtension() {
		if (this.routeData && this.routeData.type === "page" && !routeHasHtmlExtension(this.routeData)) {
			const original = this.pathname;
			this.pathname = this.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
			if (this.manifest.trailingSlash === "always" && this.pathname !== "" && !this.pathname.endsWith("/")) this.pathname += "/";
			if (this.pathname !== original && this.routeData.pattern.test(original) && !this.routeData.pattern.test(this.pathname)) this.pathname = original;
		}
	}
	#resolveRouteData() {
		if (this.routeData) {
			this.#stripHtmlExtension();
			return;
		}
		const matched = matchRoute(this.manifest, this.pathname);
		if (matched && matched.prerender && this.manifest.serverLike) {
			if (matched.params.length > 0) {
				const allMatches = matchAllRoutes(this.manifest, this.pathname);
				this.routeData = allMatches.find((r) => !r.prerender);
			} else this.routeData = void 0;
		} else this.routeData = matched;
		this.logger.debug("router", "Astro matched the following route for " + this.request.url);
		this.logger.debug("router", "RouteData:\n" + this.routeData);
		if (!this.routeData) {
			const custom404 = getCustom404Route(getRouteTable(this.manifest));
			if (custom404 && !custom404.prerender) this.routeData = custom404;
		}
		if (!this.routeData) {
			this.logger.debug("router", "Astro hasn't found routes that match " + this.request.url);
			this.logger.debug("router", "Here's the available routes:\n", getRouteTable(this.manifest));
			return;
		}
		this.#stripHtmlExtension();
	}
	/**
	* Strips the manifest's base from a normalized request pathname and prepends
	* a forward slash.
	*
	* Mirrors `BaseApp.removeBase`: the router matches against this stripped path
	* while middleware reads the un-stripped `context.url.pathname`, so both must
	* strip the base identically.
	*/
	#computePathname(normalizedPathname) {
		return prependForwardSlash(stripRequestBase(normalizedPathname, this.manifest.base));
	}
	/**
	* Decodes and normalizes the public request pathname before deriving the
	* separate pathname used for route matching.
	*/
	#normalizePathname(pathname) {
		try {
			pathname = validateAndDecodePathname(pathname);
		} catch {
			this.invalidEncoding = true;
		}
		return collapseDuplicateSlashes(pathname);
	}
	/**
	* Reads X-Forwarded-Proto, X-Forwarded-Host, and X-Forwarded-Port
	* from the request headers, validates them against the manifest's
	* `allowedDomains`, and updates `this.url` accordingly. Also resolves
	* `clientAddress` from X-Forwarded-For when the host is trusted.
	*
	* Only called when `allowedDomains` is configured — without it,
	* forwarded headers are never trusted.
	*/
	#applyForwardedHeaders() {
		const headers = this.request.headers;
		const allowedDomains = this.manifest.allowedDomains;
		const validated = validateForwardedHeaders(getFirstForwardedValue$1(headers.get("x-forwarded-proto") ?? void 0), getFirstForwardedValue$1(headers.get("x-forwarded-host") ?? void 0), getFirstForwardedValue$1(headers.get("x-forwarded-port") ?? void 0), allowedDomains);
		if (!validated.protocol && !validated.host && !validated.port) return;
		if (validated.protocol) this.url.protocol = validated.protocol + ":";
		if (validated.host) {
			const colonIdx = validated.host.indexOf(":");
			if (colonIdx !== -1) {
				this.url.hostname = validated.host.slice(0, colonIdx);
				this.url.port = validated.host.slice(colonIdx + 1);
			} else {
				this.url.hostname = validated.host;
				this.url.port = "";
			}
		}
		if (validated.port) this.url.port = validated.port;
		if (validated.host !== void 0 && !this.clientAddress) {
			const forwardedFor = getFirstForwardedValue$1(this.request.headers.get("x-forwarded-for") ?? void 0);
			if (forwardedFor) this.clientAddress = forwardedFor;
		}
		this.request = new Request(this.url, this.request);
	}
	/**
	* Returns the resolved `props` for this render, computing them lazily
	* from the route + component module on first access. If the
	* `initialProps` already carries user-supplied props (e.g. the
	* container API) those are used verbatim.
	*/
	async getProps() {
		if (this.props !== null) return this.props;
		if (Object.keys(this.initialProps).length > 0) {
			this.props = this.initialProps;
			return this.props;
		}
		const mod = await this.loadComponentInstance();
		this.props = await getProps({
			mod,
			routeData: this.routeData,
			routeCache: getRouteCache(this.manifest),
			pathname: this.pathname,
			logger: this.logger,
			serverLike: this.manifest.serverLike,
			base: this.manifest.base,
			trailingSlash: this.manifest.trailingSlash
		});
		return this.props;
	}
	/**
	* Returns the `ActionAPIContext` for this render, creating it lazily.
	* Used by middleware, actions, and page dispatch.
	*/
	getActionAPIContext() {
		if (this.actionApiContext !== null) return this.actionApiContext;
		const state = this;
		const ctx = {
			get cookies() {
				return state.cookies;
			},
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			generator: ASTRO_GENERATOR,
			get locals() {
				return state.locals;
			},
			set locals(_) {
				throw new AstroError(LocalsReassigned);
			},
			params: this.params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			request: this.request,
			site: getSite(this.manifest),
			url: this.url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return astroToRuntimeLogger(state.logger);
			}
		};
		this.defineProviderGetters(ctx);
		this.actionApiContext = ctx;
		return this.actionApiContext;
	}
	/**
	* Returns the `APIContext` for this render, creating it lazily from
	* the memoized props + action context.
	*
	* Called before `getProps()` has resolved, the context carries
	* `props: null` and is not memoized; the next call after `getProps()`
	* fills in `props` on the same object. Callers that read `props`
	* must await `getProps()` first.
	*/
	getAPIContext() {
		if (this.apiContext !== null) return this.apiContext;
		const actionApiContext = this.getActionAPIContext();
		const state = this;
		const redirect = (path, status = 302) => new Response(null, {
			status,
			headers: { Location: path }
		});
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		actionApiContext[fetchStateSymbol] = this;
		const apiContext = Object.assign(actionApiContext, {
			props: this.props,
			redirect,
			rewrite,
			getActionResult: createGetActionResult(actionApiContext.locals),
			callAction: createCallAction(actionApiContext)
		});
		if (this.props !== null) this.apiContext = apiContext;
		return apiContext;
	}
	/**
	* Invalidates the cached `APIContext` so the next `getAPIContext()`
	* call re-derives it from the (possibly mutated) state. Used
	* after an in-flight rewrite swaps the route / request / params.
	*/
	invalidateContexts() {
		this.props = null;
		this.actionApiContext = null;
		this.apiContext = null;
	}
	resetResponseMetadata() {
		this.responseRouteType = void 0;
		this.skipErrorReroute = false;
	}
};
// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/object.js
/**
* Keys that must be rejected when traversing object paths (e.g. dot-separated
* property lookups) to prevent prototype-pollution attacks.
*/
var FORBIDDEN_PATH_KEYS = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/noop-actions.js
var NOOP_ACTIONS_MOD = { server: {} };
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/load.js
var actionsMemo = createAsyncManifestMemo(async (manifest) => manifest.actions ? await manifest.actions() : NOOP_ACTIONS_MOD);
/** Resolves the actions module from the manifest (a no-op module when none). */
function getActions(manifest) {
	return actionsMemo.get(manifest);
}
/** Looks up a single action handler by its dot-separated path. */
async function getAction(manifest, path) {
	const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
	let { server } = await getActions(manifest);
	if (!server || !(typeof server === "object")) throw new TypeError(`Expected \`server\` export in actions file to be an object. Received ${typeof server}.`);
	for (const key of pathKeys) {
		if (typeof server === "function") throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		if (FORBIDDEN_PATH_KEYS.has(key)) throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		if (!Object.hasOwn(server, key)) throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		server = server[key];
	}
	if (typeof server !== "function") throw new TypeError(`Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server}.`);
	return server;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/runtime/server.js
/**
* Access information about Action requests from middleware.
*/
function getActionContext(context) {
	const callerInfo = getCallerInfo(context);
	const actionResultAlreadySet = Boolean(context.locals._actionPayload);
	let action = void 0;
	if (callerInfo && context.request.method === "POST" && !actionResultAlreadySet) action = {
		calledFrom: callerInfo.from,
		name: callerInfo.name,
		handler: async () => {
			const { manifest } = getFetchStateFromAPIContext(context);
			const callerInfoName = shouldAppendForwardSlash(manifest.trailingSlash, manifest.buildFormat) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
			let baseAction;
			try {
				baseAction = await getAction(manifest, callerInfoName);
			} catch (error) {
				if (error instanceof Error && "name" in error && typeof error.name === "string" && error.name === ActionNotFoundError.name) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				if (error instanceof URIError) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				throw error;
			}
			const bodySizeLimit = manifest.actionBodySizeLimit;
			let input;
			try {
				input = await parseRequestBody(context.request, bodySizeLimit);
			} catch (e) {
				if (e instanceof ActionError) return {
					data: void 0,
					error: e
				};
				if (e instanceof TypeError) return {
					data: void 0,
					error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" })
				};
				if (e instanceof SyntaxError) return {
					data: void 0,
					error: new ActionError({
						code: "BAD_REQUEST",
						message: "Invalid JSON request body"
					})
				};
				throw e;
			}
			const omitKeys = [
				"props",
				"getActionResult",
				"callAction",
				"redirect"
			];
			const actionAPIContext = Object.create(Object.getPrototypeOf(context), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(context)).filter(([key]) => !omitKeys.includes(key))));
			Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
			return baseAction.bind(actionAPIContext)(input);
		}
	};
	function setActionResult(actionName, actionResult) {
		context.locals._actionPayload = {
			actionResult,
			actionName
		};
	}
	return {
		action,
		setActionResult,
		serializeActionResult,
		deserializeActionResult
	};
}
function getCallerInfo(ctx) {
	if (ctx.routePattern === "/_actions/[...path]") return {
		from: "rpc",
		name: ctx.url.pathname.replace(/^.*\/_actions\//, "")
	};
	const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
	if (queryParam) return {
		from: "form",
		name: queryParam
	};
}
async function parseRequestBody(request, bodySizeLimit) {
	const contentType = request.headers.get("content-type");
	const contentLengthHeader = request.headers.get("content-length");
	const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
	const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
	if (!contentType) return void 0;
	if (hasContentLength && contentLength > bodySizeLimit) throw new ActionError({
		code: "CONTENT_TOO_LARGE",
		message: `Request body exceeds ${bodySizeLimit} bytes`
	});
	try {
		if (hasContentType(contentType, formContentTypes)) {
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				return await new Request(request.url, {
					method: request.method,
					headers: request.headers,
					body: toArrayBuffer(body)
				}).formData();
			}
			return await request.clone().formData();
		}
		if (hasContentType(contentType, ["application/json"])) {
			if (contentLength === 0) return void 0;
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				if (body.byteLength === 0) return void 0;
				return JSON.parse(new TextDecoder().decode(body));
			}
			return await request.clone().json();
		}
	} catch (e) {
		if (e instanceof BodySizeLimitError) throw new ActionError({
			code: "CONTENT_TOO_LARGE",
			message: `Request body exceeds ${bodySizeLimit} bytes`
		});
		throw e;
	}
	throw new TypeError("Unsupported content type");
}
var ACTION_API_CONTEXT_SYMBOL = Symbol.for("astro.actionAPIContext");
var formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
	const type = contentType.split(";")[0].toLowerCase();
	return expected.some((t) => type === t);
}
function serializeActionResult(res) {
	if (res.error) {
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": void 0,
			"SSR": true
		}, { OS: "Windows_NT" })?.DEV) actionResultErrorStack.set(res.error.stack);
		let body;
		if (res.error instanceof ActionInputError) body = {
			type: res.error.type,
			issues: res.error.issues,
			fields: res.error.fields
		};
		else body = {
			...res.error,
			message: res.error.message
		};
		return {
			type: "error",
			status: res.error.status,
			contentType: "application/json",
			body: JSON.stringify(body)
		};
	}
	if (res.data === void 0) return {
		type: "empty",
		status: 204
	};
	let body;
	try {
		body = stringify(res.data, { URL: (value) => value instanceof URL && value.href });
	} catch (e) {
		let hint = ActionsReturnedInvalidDataError.hint;
		if (res.data instanceof Response) hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
		throw new AstroError({
			...ActionsReturnedInvalidDataError,
			message: ActionsReturnedInvalidDataError.message(String(e)),
			hint
		});
	}
	return {
		type: "data",
		status: 200,
		contentType: "application/json+devalue",
		body
	};
}
function toArrayBuffer(buffer) {
	const copy = new Uint8Array(buffer.byteLength);
	copy.set(buffer);
	return copy.buffer;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/actions/handler.js
/**
* Handles Astro Action requests in both modes:
*
* - **RPC**: POST requests to `/_actions/<name>` (originating from the
*   generated JS client). Runs the action and returns the serialized result
*   as the response, so the caller can short-circuit rendering.
* - **Form**: POST requests with `?_action=<name>` targeting a page route
*   (originating from an HTML `<form action={actions.foo}>`). Runs the
*   action, stashes the result into `locals._actionPayload`, and returns
*   `undefined` so the caller continues to render the page.
*
* Non-action requests are a no-op (`undefined`).
*
* This handler is invoked at the bottom of the middleware chain, before
* page dispatch. That placement preserves the existing behavior where
* user middleware sees action requests and response finalization (cookies,
* sessions, etc.) runs around the action response.
*
* Expects the APIContext that is already being used by the render pipeline.
* Returns a `Response` when the action fully handles the request (RPC),
* or `undefined` when the caller should continue processing the request
* (form actions or non-action requests).
*/
function handleAction(apiContext, state) {
	markFeatureUsed(state.manifest, FetchFeatures.actions);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return Promise.resolve(invalidEncodingResponse);
	if (apiContext.isPrerendered) return;
	const { action, setActionResult } = getActionContext(apiContext);
	if (!action) return;
	if (state.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered)) return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
	return executeAction(action, setActionResult);
}
async function executeAction(action, setActionResult) {
	const serialized = serializeActionResult(await action.handler());
	if (action.calledFrom === "rpc") {
		if (serialized.type === "empty") return new Response(null, { status: serialized.status });
		return new Response(serialized.body, {
			status: serialized.status,
			headers: { "Content-Type": serialized.contentType }
		});
	}
	setActionResult(action.name, serialized);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/3xx.js
/**
* Generates a minimal HTML redirect page used for SSR redirects.
*/
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
	const delay = status === 302 ? 2 : 0;
	const rel = escape(String(relativeLocation));
	return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/trailing-slash-handler.js
/**
* Handles trailing-slash normalization for incoming requests. If the
* request's pathname does not match the manifest's configured
* `trailingSlash` policy, a redirect `Response` is returned. Otherwise,
* returns `undefined` so the caller can continue processing the request.
* Paths encoded too many times to decode get a 400 instead of a redirect.
*/
function handleTrailingSlash(state) {
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const url = new URL(state.request.url);
	const redirect = redirectTrailingSlash(state.manifest.trailingSlash, url.pathname);
	if (redirect === url.pathname) return;
	const addCookieHeader = state.renderOptions.addCookieHeader;
	const status = state.request.method === "GET" ? 301 : 308;
	const location = redirect + url.search;
	const response = new Response(redirectTemplate({
		status,
		relativeLocation: location,
		absoluteLocation: location,
		from: state.request.url
	}), {
		status,
		headers: { location }
	});
	prepareResponse(response, { addCookieHeader });
	return response;
}
function redirectTrailingSlash(trailingSlash, pathname) {
	if (pathname === "/" || isInternalPath(pathname)) return pathname;
	const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
	if (path !== pathname) return path;
	if (trailingSlash === "ignore") return pathname;
	if (trailingSlash === "always" && !hasFileExtension(pathname)) return appendForwardSlash(pathname);
	if (trailingSlash === "never") return removeTrailingForwardSlash(pathname);
	return pathname;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/errors/not-found.js
/**
* Renders the 404 error page when no route matched the request, or returns
* `undefined` when a route matched. Returns an empty `400` when the request
* path is over-encoded.
*
* `FetchState` only falls back to an SSR `404.astro`, so this renders a
* prerendered (or absent) custom 404 page: through
* `renderOptions.prerenderedErrorPageFetch` in production, or by rendering
* the page source in dev.
*/
function handleNotFound(state) {
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return Promise.resolve(invalidEncodingResponse);
	if (state.routeData) return;
	return renderErrorFromState(state, state.request, {
		...state.renderOptions,
		status: 404,
		pathname: state.pathname
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/redirects/render.js
function isExternalURL(url) {
	return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
	if (typeof redirect === "string") return isExternalURL(redirect);
	else return isExternalURL(redirect.destination);
}
/**
* Computes the HTTP status code for a redirect response.
*
* - If the route has a `redirectRoute` and an explicit numeric status, that status is used.
* - Otherwise: GET → 301, non-GET (e.g. POST) → 308.
*/
function computeRedirectStatus(method, redirect, redirectRoute) {
	return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
/**
* Resolves the final redirect target URL by substituting dynamic params into
* the redirect string (e.g. `/[slug]/page` → `/hello/page`).
*
* When `redirectRoute` is provided its route generator is used; otherwise params
* are substituted manually into the string redirect target.
*/
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
	if (typeof redirectRoute !== "undefined") return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
	else if (typeof redirect === "string") {
		if (redirectIsExternal(redirect)) return redirect;
		else {
			let target = redirect;
			for (const param of Object.keys(params)) {
				const paramValue = params[param];
				target = target.replace(`[${param}]`, () => paramValue).replace(`[...${param}]`, () => paramValue);
			}
			return target;
		}
	} else if (typeof redirect === "undefined") return "/";
	return redirect.destination;
}
async function renderRedirect(state) {
	markFeatureUsed(state.manifest, FetchFeatures.redirects);
	const { redirect, redirectRoute } = state.routeData;
	const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
	const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.manifest.trailingSlash)) };
	if (redirect && redirectIsExternal(redirect)) {
		if (typeof redirect === "string") return Response.redirect(redirect, status);
		else return Response.redirect(redirect.destination, status);
	}
	return new Response(null, {
		status,
		headers
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/redirect-page.js
/** The delay Astro's built-in redirect page uses for `status`. */
function redirectDelayFor(status) {
	return status === 302 ? 2 : 0;
}
/**
* Renders the project's `src/pages/3xx.astro` as the body of a redirect,
* returning its HTML.
*
* Returns `undefined` when the project has no `3xx.astro`, or when rendering it
* fails — the caller falls back to Astro's built-in redirect page so a broken
* custom page degrades to a working redirect instead of failing the build.
*
* Middleware is skipped: it already ran for the request that produced the
* redirect, and re-running it around a template render would let a middleware
* that redirects recurse.
*/
async function renderRedirectPage(manifest, request, props) {
	const route = getRouteTable(manifest).routes.find((candidate) => isRoute3xx(candidate.route));
	if (!route) return;
	const state = new FetchState(manifest, request);
	try {
		state.skipMiddleware = true;
		state.routeData = route;
		state.pathname = route.route;
		state.status = 200;
		state.componentInstance = await getEnvironment(manifest).getComponentByRoute(manifest, route);
		state.initialProps = { ...props };
		return await (await handleMiddleware(state, handlePages)).text();
	} catch (err) {
		state.logger.error("redirects", `Failed to render \`src/pages/3xx.astro\` for the redirect from \`${props.from}\` to \`${props.to}\`. Falling back to the built-in redirect page.\n${err instanceof Error ? err.stack ?? err.message : String(err)}`);
		return;
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			state.logger.error("redirects", `Failed to finalize the \`src/pages/3xx.astro\` render for the redirect from \`${props.from}\` to \`${props.to}\`.\n${err instanceof Error ? err.stack ?? err.message : String(err)}`);
		}
	}
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/handler.js
/**
* Dispatches request logging: through the facade's late-bound
* `logThisRequest` hook when the state was built by `BaseApp.render`'s fast
* path (preserving subclass overrides), else through the environment's
* `logRequest` behavior (dev request lines; prod/build/container no-op).
*/
function logRequestFromState(state, payload) {
	if (state.logRequest) state.logRequest(payload);
	else getEnvironment(state.manifest).logRequest(state.manifest, payload);
}
/**
* Runs actions then pages — the callback at the bottom of the middleware
* chain. A module-level function so passing it by reference costs zero
* per-request allocation.
*/
function actionsAndPages(state, ctx) {
	if (!state.skipMiddleware) {
		const actionResult = handleAction(ctx, state);
		if (actionResult) return actionResult.then((response) => response ?? handlePages(state, ctx));
	}
	return handlePages(state, ctx);
}
/**
* Swaps a bodiless redirect response for one carrying the project's rendered
* `src/pages/3xx.astro`.
*
* Only the build environment opts in (see `RenderEnvironment.rendersRedirectPage`):
* a static site has no `Location` header to follow, so the HTML body is the
* redirect. Responses that already carry a body — the trailing-slash
* normalizer's, or a page that rendered its own — are left alone.
*/
async function withRedirectPageBody(state, response) {
	const status = response.status;
	if (status < 300 || status >= 400 || response.body !== null) return response;
	if (!getEnvironment(state.manifest).rendersRedirectPage()) return response;
	const to = response.headers.get("location");
	if (!to) return response;
	const html = await renderRedirectPage(state.manifest, state.request, {
		from: state.pathname,
		to,
		status,
		delay: redirectDelayFor(status)
	});
	if (html === void 0) return response;
	const headers = new Headers(response.headers);
	if (!headers.has("content-type")) headers.set("content-type", "text/html");
	return new Response(html, {
		status,
		statusText: response.statusText,
		headers
	});
}
/**
* The composite "batteries-included" handler that wires up every request
* feature internally; `astro(state)` (astro/fetch) delegates here, as does
* `BaseApp.render`'s default-handler fast path.
*/
async function handleRequest(state) {
	await getResolvedLogger(state.manifest);
	markFeatureUsed(state.manifest, ALL_FETCH_FEATURES);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const trailingSlashRedirect = handleTrailingSlash(state);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	const notFoundResponse = handleNotFound(state);
	if (notFoundResponse) return notFoundResponse;
	return render(state);
}
/**
* Renders a response for the given `FetchState`. Assumes trailing-slash
* redirects and routeData resolution have already run.
*
* User-triggered rewrites (`Astro.rewrite` / `ctx.rewrite`) go through
* `executeRewrite` on the current `FetchState` — they mutate the existing
* state in place and re-run middleware + page dispatch.
*/
async function render(state) {
	const routeData = state.routeData;
	const pathname = state.pathname;
	const request = state.request;
	const { addCookieHeader } = state.renderOptions;
	state.status = getDefaultStatusCode(state.manifest, routeData, pathname);
	let response;
	let finalizeError;
	try {
		const sessionP = state.manifest.sessionConfig ? provideSession(state) : void 0;
		const cacheP = provideCache(state);
		if (sessionP || cacheP) await Promise.all([sessionP, cacheP]);
		markFeatureUsed(state.manifest, FetchFeatures.sessions);
		if (routeData.type === "redirect") {
			const redirectResponse = await withRedirectPageBody(state, await renderRedirect(state));
			logRequestFromState(state, {
				pathname,
				method: request.method,
				statusCode: redirectResponse.status,
				isRewrite: false,
				timeStart: state.timeStart
			});
			prepareResponse(redirectResponse, { addCookieHeader });
			state.logger.flush();
			return redirectResponse;
		}
		const i18n = getI18n(state.manifest);
		if (!state.manifest.cacheProvider) {
			markFeatureUsed(state.manifest, FetchFeatures.cache);
			response = await handleMiddleware(state, actionsAndPages);
			if (i18n) response = await finalizeI18n(i18n, state, response);
		} else {
			const runPipeline = async () => {
				let res = await handleMiddleware(state, actionsAndPages);
				if (i18n) res = await finalizeI18n(i18n, state, res);
				return res;
			};
			response = await handleCache(state, runPipeline);
		}
		logRequestFromState(state, {
			pathname,
			method: request.method,
			statusCode: response.status,
			isRewrite: state.isRewriting,
			timeStart: state.timeStart
		});
	} catch (err) {
		state.logger.error(null, err.stack || err.message || String(err));
		return renderErrorFromState(state, request, {
			...state.renderOptions,
			status: 500,
			error: err,
			pathname: state.pathname
		});
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			finalizeError = err;
			state.logger.error(null, err.stack || err.message || String(err));
		}
	}
	if (finalizeError) return renderErrorFromState(state, request, {
		...state.renderOptions,
		status: 500,
		error: finalizeError,
		pathname: state.pathname
	});
	if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute) return renderErrorFromState(state, request, {
		...state.renderOptions,
		response,
		status: response.status,
		error: response.status === 500 ? null : void 0,
		pathname: state.pathname
	});
	response = await withRedirectPageBody(state, response);
	prepareResponse(response, { addCookieHeader });
	state.logger.flush();
	return response;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/fetch/default-handler.js
/**
* The default request handler for `BaseApp`. Stateless: builds the
* per-request `FetchState` from the manifest and delegates to
* `handleRequest`.
*
* The export path (`astro/app/fetch/default-handler`), the class name, and
* no-arg constructibility are baked into generated builds
* (`core/fetch/vite-plugin.ts` emits `new DefaultFetchHandler()`), so all
* three survive.
*/
var DefaultFetchHandler = class {
	#manifest;
	/**
	* `BaseApp` passes itself so states resolve that app's manifest ahead of
	* the ambient one; generated builds construct the handler with no
	* arguments and use the ambient manifest.
	*/
	constructor(app) {
		this.#manifest = app?.manifest;
	}
	fetch = (request) => {
		const options = getRenderOptions(request);
		return handleRequest(new FetchState(this.#manifest ?? getAmbientManifest(), request, options));
	};
};
// \0virtual:astro:fetchable
var _virtual_astro_fetchable_default = new DefaultFetchHandler();
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/routing/match-request.js
/**
* Fully decodes a pathname, falling back to a single decode and then the raw pathname
* when validation fails. Matching runs before `render()`, so it must not throw for
* request input that render-time validation handles.
*/
function safeDecodePathname(manifest, pathname) {
	try {
		return validateAndDecodePathname(pathname);
	} catch (e) {
		new AstroIntegrationLogger(getLogger(manifest).options, manifest.adapterName).debug(e.toString());
		try {
			return decodeURI(pathname);
		} catch {
			return pathname;
		}
	}
}
/**
* Given a `Request`, returns the `RouteData` that matches its pathname — the
* appless, purely functional body of `BaseApp.match()`. By default, prerendered
* routes aren't returned, even if they are matched; when
* `allowPrerenderedRoutes` is `true`, matched prerendered routes are returned
* too.
*/
function matchRequest(manifest, request, allowPrerenderedRoutes = false) {
	const url = new URL(request.url);
	if (manifest.assets.has(url.pathname)) return void 0;
	let pathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, manifest.allowedDomains, getLogger(manifest));
	if (!pathname) pathname = prependForwardSlash(stripRequestBase(url.pathname, manifest.base));
	pathname = safeDecodePathname(manifest, pathname);
	const routeData = matchRoute(manifest, pathname);
	if (!routeData) return void 0;
	if (allowPrerenderedRoutes) return routeData;
	if (routeData.prerender) {
		if (routeData.params.length > 0) return matchAllRoutes(manifest, pathname).find((r) => !r.prerender);
		return;
	}
	return routeData;
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/base.js
var BaseApp = class BaseApp {
	manifest;
	#adapterLogger;
	baseWithoutTrailingSlash;
	/**
	* The streaming flag passed to the constructor, surfaced through the
	* protected `resolveStreaming()` hook and fed into the internal
	* `FetchState` facade hooks on the fast path.
	*/
	#streaming;
	/**
	* The handler that turns incoming `Request` objects into `Response`s.
	* Defaults to a `DefaultFetchHandler` pinned to this app and can be
	* overridden via `setFetchHandler` — typically by the bundled
	* entrypoint after importing `virtual:astro:fetchable`.
	*/
	#fetchHandler;
	#errorHandler;
	/**
	* Whether a custom fetch handler (from `src/fetch.ts`) has been set
	* via `setFetchHandler`. When false, the `DefaultFetchHandler` is
	* in use and all features are implicitly active.
	*/
	#hasCustomFetchHandler = false;
	/**
	* Whether the missing-feature check has already run. We only want
	* to warn once — after the first request in dev, or at build end.
	*/
	#featureCheckDone = false;
	get logger() {
		return getLogger(this.manifest);
	}
	/**
	* Route data derived from the manifest, used for route matching. Reads and
	* writes go through the single per-manifest route table, so HMR updates are
	* visible to every consumer at once.
	*/
	get manifestData() {
		return getRouteTable(this.manifest);
	}
	set manifestData(routesList) {
		updateRouteTable(this.manifest, routesList.routes);
	}
	get adapterLogger() {
		const currentOptions = this.logger.options;
		if (!this.#adapterLogger || this.#adapterLogger.options !== currentOptions) this.#adapterLogger = new AstroIntegrationLogger(currentOptions, this.manifest.adapterName);
		return this.#adapterLogger;
	}
	constructor(manifest, streaming = true) {
		this.manifest = manifest;
		this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest.base);
		this.#streaming = streaming;
		getRouteTable(manifest);
		getLogger(manifest);
		this.#fetchHandler = new DefaultFetchHandler(this);
		this.#errorHandler = this.createErrorHandler();
	}
	/**
	* Resolves the user-configured logger destination from the manifest and
	* returns the logger. Lazy and only resolves once; safe to call before
	* the first render (adapters use this to log startup messages through
	* the configured destination).
	*/
	getLogger() {
		return getResolvedLogger(this.manifest);
	}
	/**
	* The streaming flag fed into the internal `FetchState` facade hooks on
	* the fast path. Returns the constructor flag by
	* default; `BuildApp` overrides this to return `undefined` so streaming
	* falls through to the environment default (`manifest.serverLike`).
	*/
	resolveStreaming() {
		return this.#streaming;
	}
	/**
	* Override the fetch handler used to dispatch requests. Entrypoints
	* call this with the default export of `virtual:astro:fetchable` to
	* plug in a user-authored handler from `src/fetch.ts`.
	*/
	setFetchHandler(handler) {
		this.#fetchHandler = handler;
		this.#hasCustomFetchHandler = !(handler instanceof DefaultFetchHandler);
	}
	/**
	* Returns the error handler used by this app. The default is a thin
	* bridge over the functional error API — strategy selection (production
	* default / dev / build) is environment-driven inside `renderErrorPage`.
	* External subclasses can override this to customize error rendering.
	*/
	createErrorHandler() {
		return { renderError: (request, options) => renderErrorPage(this.manifest, request, options) };
	}
	/**
	* Resets the cached adapter logger so it picks up a new logger instance.
	* Used by BuildApp when the logger is replaced via setOptions().
	*/
	resetAdapterLogger() {
		this.#adapterLogger = void 0;
	}
	getAllowedDomains() {
		return this.manifest.allowedDomains;
	}
	matchesAllowedDomains(forwardedHost, protocol) {
		return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
	}
	static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
		if (!allowedDomains || allowedDomains.length === 0) return false;
		try {
			const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
			return allowedDomains.some((pattern) => {
				return matchPattern(testUrl, pattern);
			});
		} catch {
			return false;
		}
	}
	set setManifestData(newManifestData) {
		updateRouteTable(this.manifest, newManifestData.routes);
	}
	removeBase(pathname) {
		return stripRequestBase(pathname, this.manifest.base);
	}
	/**
	* Fully decodes a pathname, falling back to a single decode and then the raw pathname
	* when validation fails. Adapter matching runs before `render()`, so it must not throw
	* for request input that render-time validation handles.
	*/
	safeDecodePathname(pathname) {
		try {
			return validateAndDecodePathname(pathname);
		} catch (e) {
			this.adapterLogger.debug(e.toString());
			try {
				return decodeURI(pathname);
			} catch {
				return pathname;
			}
		}
	}
	/**
	* Extracts the base-stripped, decoded pathname from a request.
	* Used by adapters to compute the pathname for dev-mode route matching.
	*/
	getPathnameFromRequest(request) {
		const url = new URL(request.url);
		const pathname = prependForwardSlash(this.removeBase(url.pathname));
		return this.safeDecodePathname(pathname);
	}
	/**
	* Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
	* routes aren't returned, even if they are matched.
	*
	* When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
	* @param request
	* @param allowPrerenderedRoutes
	*/
	match(request, allowPrerenderedRoutes = false) {
		return matchRequest(this.manifest, request, allowPrerenderedRoutes);
	}
	/**
	* A matching route function to use in the development server.
	* Contrary to the `.match` function, this function resolves props and params, returning the correct
	* route based on the priority, segments. It also returns the correct, resolved pathname.
	* @param pathname
	*/
	devMatch(pathname) {}
	computePathnameFromDomain(request) {
		return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.manifest.allowedDomains, this.logger);
	}
	async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
		await getResolvedLogger(this.manifest);
		if (routeData) {
			this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
			this.logger.debug("router", "RouteData");
			this.logger.debug("router", routeData);
		}
		if (locals) {
			if (typeof locals !== "object") {
				const error = new AstroError(LocalsNotAnObject);
				this.logger.error(null, error.stack);
				return this.renderError(request, {
					addCookieHeader,
					clientAddress,
					prerenderedErrorPageFetch,
					locals: void 0,
					routeData,
					waitUntil,
					status: 500,
					error
				});
			}
		}
		if (!routeData) {
			const domainPathname = this.computePathnameFromDomain(request);
			if (domainPathname) routeData = matchRoute(this.manifest, this.safeDecodePathname(domainPathname));
		}
		const resolvedOptions = {
			addCookieHeader,
			clientAddress,
			prerenderedErrorPageFetch,
			locals,
			routeData,
			waitUntil
		};
		let response;
		if (this.#fetchHandler instanceof DefaultFetchHandler) response = await handleRequest(new FetchState(this.manifest, request, resolvedOptions, {
			streaming: this.resolveStreaming(),
			renderError: (req, opts) => this.renderError(req, opts),
			logRequest: (payload) => this.logThisRequest(payload)
		}));
		else {
			setRenderOptions(request, resolvedOptions);
			response = await this.#fetchHandler.fetch(request);
		}
		this.#warnMissingFeatures();
		if (response.headers.get("X-Astro-Error")) {
			response.headers.delete(ASTRO_ERROR_HEADER);
			return this.renderError(request, {
				addCookieHeader,
				clientAddress,
				prerenderedErrorPageFetch,
				locals,
				routeData,
				waitUntil,
				response,
				status: response.status,
				error: response.status === 500 ? null : void 0
			});
		}
		return response;
	}
	setCookieHeaders(response) {
		return getSetCookiesFromResponse(response);
	}
	/**
	* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
	* For example,
	* ```ts
	* for (const cookie_ of App.getSetCookieFromResponse(response)) {
	*     const cookie: string = cookie_
	* }
	* ```
	* @param response The response to read cookies from.
	* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
	*/
	static getSetCookieFromResponse = getSetCookiesFromResponse;
	/**
	* If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
	* This also handles pre-rendered /404 or /500 routes.
	*
	* Delegates to the app's configured `ErrorHandler`. To customize behavior
	* for a specific environment, override `createErrorHandler()` rather than
	* this method.
	*/
	async renderError(request, options) {
		return this.#errorHandler.renderError(request, options);
	}
	/**
	* One-shot check: after the first request with a custom `src/fetch.ts`,
	* compare `usedFeatures` against the manifest and warn about any
	* configured features the user's pipeline doesn't call.
	*/
	#warnMissingFeatures() {
		if (this.#featureCheckDone || !this.#hasCustomFetchHandler) return;
		this.#featureCheckDone = true;
		const manifest = this.manifest;
		const missing = [];
		const used = getUsedFeatures(this.manifest);
		if (manifest.routes.some((r) => r.routeData.type === "redirect") && !(used & FetchFeatures.redirects)) missing.push("redirects");
		if (manifest.sessionConfig && !(used & FetchFeatures.sessions)) missing.push("sessions");
		if (manifest.actions && !(used & FetchFeatures.actions)) missing.push("actions");
		if (manifest.middleware && !(used & FetchFeatures.middleware)) missing.push("middleware");
		if (manifest.i18n && manifest.i18n.strategy !== "manual" && !(used & FetchFeatures.i18n)) missing.push("i18n");
		if (manifest.cacheConfig && !(used & FetchFeatures.cache)) missing.push("cache");
		for (const feature of missing) this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless your fetch handler calls it.`);
	}
	getDefaultStatusCode(routeData, pathname) {
		return getDefaultStatusCode(this.manifest, routeData, pathname);
	}
	getManifest() {
		return this.manifest;
	}
	logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
		const timeEnd = performance.now();
		this.logRequest({
			pathname,
			method,
			statusCode,
			isRewrite,
			reqTime: timeEnd - timeStart
		});
	}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/app.js
var App = class extends BaseApp {
	isDev() {
		return false;
	}
	logRequest(_options) {}
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/entrypoints/virtual/prod.js
var createApp$1 = ({ streaming } = {}) => {
	const app = new App(manifest, streaming);
	app.setFetchHandler(_virtual_astro_fetchable_default);
	return app;
};
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/app/entrypoints/virtual/index.js
var createApp = createApp$1;
// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/request.js
/**
* Utilities for extracting information from `Request`
*/
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
}
var IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
/**
* Checks whether a string looks like an IP address (contains only characters
* that can appear in IPv4/IPv6 addresses and is within a reasonable length).
*
* This is a permissive allowlist — it won't catch every malformed IP, but it
* reliably rejects injection payloads. Does NOT use Node.js APIs so it works
* in all runtimes (Workers, Deno, etc.).
*/
function isValidIpAddress(value) {
	return IP_RE.test(value);
}
/**
* Extracts the first value from a potentially multi-value header and validates
* that it is a syntactically valid IP address.
*
* Useful for adapters that read client IP from a platform-specific header
*/
function getValidatedIpFromHeader(headerValue) {
	const raw = getFirstForwardedValue(headerValue);
	if (raw && isValidIpAddress(raw)) return raw;
}
/**
* Returns the first value associated to the `x-forwarded-for` header,
* but only if it is a valid IP address. Returns `undefined` otherwise.
*
* @param {Request} request
*/
function getClientIpAddress(request) {
	return getValidatedIpFromHeader(request.headers.get("x-forwarded-for"));
}
var app = createApp();
var entrypoint_default = { async fetch(request) {
	const url = new URL(request.url);
	const hasValidMiddlewareSecret = request.headers.get(ASTRO_MIDDLEWARE_SECRET_HEADER) === middlewareSecret;
	let realPath = null;
	let overrideTrusted = false;
	if (hasValidMiddlewareSecret) {
		overrideTrusted = true;
		realPath = request.headers.get(ASTRO_PATH_HEADER);
	} else if (url.searchParams.get("x_astro_path_token") === "e08fd2cc-dd06-43ec-bc18-690d9db963f2") {
		overrideTrusted = true;
		realPath = url.searchParams.get(ASTRO_PATH_PARAM);
	}
	if (overrideTrusted && (realPath === null || !realPath.startsWith("/"))) return new Response("Not Found", { status: 404 });
	if (typeof realPath === "string") {
		const target = new URL(realPath, url);
		const search = target.search || url.search;
		url.pathname = target.pathname;
		url.search = search;
		url.searchParams.delete(ASTRO_PATH_PARAM);
		url.searchParams.delete(ASTRO_PATH_TOKEN_PARAM);
		request = new Request(url.toString(), {
			method: request.method,
			headers: request.headers,
			...request.body ? {
				body: request.body,
				duplex: "half"
			} : {}
		});
	}
	const routeData = app.match(request);
	let locals = {};
	const astroLocalsHeader = request.headers.get(ASTRO_LOCALS_HEADER);
	if (astroLocalsHeader) {
		if (!hasValidMiddlewareSecret) return new Response("Forbidden", { status: 403 });
		locals = JSON.parse(astroLocalsHeader);
	}
	if (hasValidMiddlewareSecret) request.headers.delete(ASTRO_MIDDLEWARE_SECRET_HEADER);
	const response = await app.render(request, {
		routeData,
		clientAddress: getClientIpAddress(request),
		locals
	});
	if (app.setCookieHeaders) for (const setCookieHeader of app.setCookieHeaders(response)) response.headers.append("Set-Cookie", setCookieHeader);
	return response;
} };
export { entrypoint_default as default };
