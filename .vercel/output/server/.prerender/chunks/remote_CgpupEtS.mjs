// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/path.js
function appendForwardSlash(path) {
	return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
	return path[0] === "/" ? path : "/" + path;
}
var MANY_LEADING_SLASHES = /^\/{2,}/;
function collapseDuplicateLeadingSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_LEADING_SLASHES, "/");
}
var MANY_SLASHES = /\/{2,}/g;
function collapseDuplicateSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_SLASHES, "/");
}
var MANY_TRAILING_SLASHES = /\/{2,}$/g;
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
	if (!path) return path;
	return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
	return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
	return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
	return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
	return typeof path === "string" || path instanceof String;
}
var INTERNAL_PREFIXES = /* @__PURE__ */ new Set([
	"/_",
	"/@",
	"/.",
	"//"
]);
var JUST_SLASHES = /^\/{2,}$/;
function isInternalPath(path) {
	const prefix = path.slice(0, 2).replace(/\\/g, "/");
	return INTERNAL_PREFIXES.has(prefix) && !JUST_SLASHES.test(path);
}
function joinPaths(...paths) {
	return paths.filter(isString).map((path, i) => {
		if (i === 0) return removeTrailingForwardSlash(path);
		else if (i === paths.length - 1) return removeLeadingForwardSlash(path);
		else return trimSlashes(path);
	}).join("/");
}
function removeQueryString(path) {
	const index = path.lastIndexOf("?");
	return index > 0 ? path.substring(0, index) : path;
}
/**
* Checks whether the path is considered a remote path.
* Remote means untrusted in this context, so anything that isn't a straightforward
* local path is considered remote.
*
* @param src
*/
function isRemotePath(src) {
	if (!src) return false;
	const trimmed = src.trim();
	if (!trimmed) return false;
	let decoded = trimmed;
	let previousDecoded = "";
	let maxIterations = 10;
	while (decoded !== previousDecoded && maxIterations > 0) {
		previousDecoded = decoded;
		try {
			decoded = decodeURIComponent(decoded);
		} catch {
			break;
		}
		maxIterations--;
	}
	if (/^[a-zA-Z]:/.test(decoded)) return false;
	if (decoded[0] === "/" && /^\/[\w.@-]/.test(decoded)) return false;
	if (decoded[0] === "\\") return true;
	if (decoded.startsWith("//")) return true;
	try {
		const url = new URL(decoded, "http://n");
		if (url.username || url.password) return true;
		if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) return true;
		if (url.origin !== "http://n") {
			if (url.protocol.toLowerCase() === "file:") return false;
			return true;
		}
		if (URL.canParse(decoded)) return true;
		return false;
	} catch {
		return true;
	}
}
function slash(path) {
	return path.replace(/\\/g, "/");
}
function fileExtension(path) {
	const ext = path.split(".").pop();
	return ext !== path ? `.${ext}` : "";
}
function removeBase(path, base) {
	if (path.startsWith(base)) return path.slice(removeTrailingForwardSlash(base).length);
	return path;
}
/**
* Strips a configured request `base` from a pathname, only when the pathname is
* the base itself or lies under it at a path-segment boundary. `stripRequestBase('/appX/admin', '/app')`
* leaves the pathname untouched, whereas `stripRequestBase('/app/admin', '/app')` returns `/admin`.
*
* Leading slashes are collapsed first so `//admin` cannot pose as being under a
* `/` base. Route matching and `context.url.pathname` derive from separate
* copies of the request path, so a mismatch here lets a request reach a route
* whose base-prefixed pathname middleware never observes.
*/
function stripRequestBase(pathname, base) {
	pathname = collapseDuplicateLeadingSlashes(pathname);
	const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
	if (pathname === baseWithoutTrailingSlash) return "/";
	if (pathname.startsWith(baseWithoutTrailingSlash + "/")) return pathname.slice(baseWithoutTrailingSlash.length);
	return pathname;
}
var WITH_FILE_EXT = /\/[^/]+\.\w+$/;
function hasFileExtension(path) {
	return WITH_FILE_EXT.test(path);
}
// node_modules/.pnpm/@astrojs+internal-helpers@0.13.1/node_modules/@astrojs/internal-helpers/dist/remote.js
/**
* Evaluates whether a given URL matches the specified remote pattern based on protocol, hostname, port, and pathname.
*
* @param {URL} url - The URL object to be matched against the remote pattern.
* @param {RemotePattern} remotePattern - The remote pattern object containing the protocol, hostname, port, and pathname to match.
* @return {boolean} Returns `true` if the URL matches the given remote pattern; otherwise, `false`.
*/
function matchPattern(url, remotePattern) {
	return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
/**
* Checks if the given URL's port matches the specified port. If no port is provided, it returns `true`.
*
* @param {URL} url - The URL object whose port will be checked.
* @param {string} [port=] - The port to match against the URL's port. Optional.
* @return {boolean} Returns `true` if the URL's port matches the specified port or if no port is provided; otherwise, `false`.
*/
function matchPort(url, port) {
	return !port || port === url.port;
}
/**
* Compares the protocol of the provided URL with a specified protocol.
*
* @param {URL} url - The URL object whose protocol needs to be checked.
* @param {string} [protocol] - The protocol to compare against, without the trailing colon. If not provided, the method will always return `true`.
* @return {boolean} Returns `true` if the protocol matches or if no protocol is specified; otherwise, `false`.
*/
function matchProtocol(url, protocol) {
	return !protocol || protocol === url.protocol.slice(0, -1);
}
/**
* Matches a given URL's hostname against a specified hostname, with optional support for wildcard patterns.
*
* @param {URL} url - The URL object whose hostname is to be matched.
* @param {string} [hostname] - The hostname to match against. Supports wildcard patterns if `allowWildcard` is `true`.
* @param {boolean} [allowWildcard=false] - Indicates whether wildcard patterns in the `hostname` parameter are allowed.
* @return {boolean} - Returns `true` if the URL's hostname matches the given hostname criteria; otherwise, `false`.
*/
function matchHostname(url, hostname, allowWildcard = false) {
	if (!hostname) return true;
	else if (!allowWildcard || !hostname.startsWith("*")) return hostname === url.hostname;
	else if (hostname.startsWith("**.")) {
		const slicedHostname = hostname.slice(2);
		return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
	} else if (hostname.startsWith("*.")) {
		const slicedHostname = hostname.slice(1);
		if (!url.hostname.endsWith(slicedHostname)) return false;
		const subdomainWithDot = url.hostname.slice(0, -(slicedHostname.length - 1));
		return subdomainWithDot.endsWith(".") && !subdomainWithDot.slice(0, -1).includes(".");
	}
	return false;
}
/**
* Matches a given URL's pathname against a specified pattern, with optional support for wildcards.
*
* @param {URL} url - The URL object containing the pathname to be matched.
* @param {string} [pathname] - The pathname pattern to match the URL against.
* @param {boolean} [allowWildcard=false] - Determines whether wildcard matching is allowed.
* @return {boolean} - Returns `true` if the URL's pathname matches the specified pattern; otherwise, `false`.
*/
function matchPathname(url, pathname, allowWildcard = false) {
	if (!pathname) return true;
	else if (!allowWildcard || !pathname.endsWith("*")) return pathname === url.pathname;
	else if (pathname.endsWith("/**")) {
		const slicedPathname = pathname.slice(0, -2);
		return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
	} else if (pathname.endsWith("/*")) {
		const slicedPathname = pathname.slice(0, -1);
		if (!url.pathname.startsWith(slicedPathname)) return false;
		return url.pathname.slice(slicedPathname.length).split("/").filter(Boolean).length === 1;
	}
	return false;
}
/**
* Determines whether a given remote resource, identified by its source URL,
* is allowed based on specified domains and remote patterns.
*
* @param {string} src - The source URL of the remote resource to be validated.
* @param {Object} options - The configuration options for domain and pattern matching.
* @param {string[]} options.domains - A list of allowed domain names.
* @param {RemotePattern[]} options.remotePatterns - A list of allowed remote patterns for matching.
* @return {boolean} Returns `true` if the source URL matches any of the specified domains or remote patterns; otherwise, `false`.
*/
function isRemoteAllowed(src, { domains, remotePatterns }) {
	if (!URL.canParse(src)) return false;
	const url = new URL(src);
	if (![
		"http:",
		"https:",
		"data:"
	].includes(url.protocol)) return false;
	return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
export { slash as _, collapseDuplicateSlashes as a, hasFileExtension as c, joinPaths as d, prependForwardSlash as f, removeTrailingForwardSlash as g, removeQueryString as h, collapseDuplicateLeadingSlashes as i, isInternalPath as l, removeLeadingForwardSlash as m, matchPattern as n, collapseDuplicateTrailingSlashes as o, removeBase as p, appendForwardSlash as r, fileExtension as s, isRemoteAllowed as t, isRemotePath as u, stripRequestBase as v, trimSlashes as y };
