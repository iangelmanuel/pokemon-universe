import { C as addAttribute, O as ASTRO_GENERATOR, _ as createRenderInstruction, c as renderComponent, d as renderSlot, g as renderHead, h as maybeRenderHead, m as renderTemplate } from "./server_B-f1q_Fw.mjs";
import { G as UnavailableAstroGlobal, Y as AstroError, v as InvalidComponentArgs } from "./errors-data_CarCoONA.mjs";
import * as React$1 from "react";
import { clsx } from "clsx";
import { Moon, Sun } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/runtime/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render-scope/scope.js
/**
* The channel is a write-once immutable *conduit* shared so every compiled copy
* of this module resolves the same AsyncLocalStorage instance (the prerender
* runtime is bundled, so the build orchestrator and the bundled runtime hold
* different module instances of this file); all mutable per-render state lives
* in stores reachable only through async execution context. Never installed in
* dev or production SSR runtimes. It holds no state, so it stays installed across builds.
*/
var SCOPE_KEY = Symbol.for("astro:render-scope");
/** The installed render scope, or `undefined` when none was installed. */
function getInstalledRenderScope() {
	return globalThis[SCOPE_KEY];
}
/** The current render's collectors store, or `undefined` when not collecting. */
function getRenderCollectors() {
	return getInstalledRenderScope()?.getStore();
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/core/render-scope/record.js
function isCollectingStaticImages() {
	return getRenderCollectors()?.staticImages !== void 0;
}
/** Keeps repeats; `collectPrerenderMetadata()` dedupes them. */
function recordStaticImage(image) {
	getRenderCollectors()?.staticImages?.push(image);
}
/** Records an untransformed image reference against the active render. */
function recordReferencedImage(fsPath) {
	getRenderCollectors()?.referencedImages?.add(fsPath);
}
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/components/ClientRouter.astro", void 0);
// src/constant/site-info.ts
var siteInfo = {
	title: "Pokemon Universe",
	description: "Pokeworld es un sitio web dedicado a los fanáticos de Pokémon, donde puedes explorar información detallada sobre pokemons, cartas, sets y más.",
	image: "assets/images/logo.webp",
	url: "https://pokeworld.com.co",
	address: "Calle 88 #49c",
	phone: "+57 317 579 6600",
	email: "iangelmanuel02@gmail.com",
	city: "Barranquilla, Atlántico",
	twitter: "@iangelmanuel"
};
var $$Seo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seo;
	const { title: siteTitle, description: siteDesc, image: siteImage } = siteInfo;
	const { title = siteTitle, description = siteDesc, image = siteImage } = Astro.props;
	return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>
  ${title}
</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload"${addAttribute(image, "href")} as="image" type="image/webp" crossorigin="anonymous"><!-- TODO: Convert to Woff2 --><link rel="preload" as="font" href="/assets/fonts/PassionOne.woff2" type="font/woff2" crossorigin><link rel="preload" as="font" href="/assets/fonts/Quicksand-VariableFont.woff2" type="font/woff2" crossorigin><meta name="description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(siteInfo.url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:locale" content="es_CO"><meta property="og:site_name"${addAttribute(siteInfo.title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"${addAttribute(siteInfo.twitter, "content")}><meta name="twitter:creator"${addAttribute(siteInfo.twitter, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/Seo.astro", void 0);
// src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
// src/components/ui-shadcn/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
			destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
// src/components/ui-shadcn/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset,
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
		...props
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
// src/components/shared/ModeToggle.tsx
function ModeToggle() {
	const [theme, setThemeState] = React$1.useState("theme-light");
	React$1.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setThemeState(isDarkMode ? "dark" : "theme-light");
	}, []);
	React$1.useEffect(() => {
		const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			variant: "outline",
			size: "icon",
			children: [
				/* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
				/* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
				/* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Toggle theme"
				})
			]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setThemeState("theme-light"),
				children: "Light"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setThemeState("dark"),
				children: "Dark"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setThemeState("system"),
				children: "System"
			})
		]
	})] });
}
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/dist/assets/utils/image-asset.js
var RAW_SRC = Symbol.for("astro:image-asset:raw-src");
function createImageAsset(metadata, fsPath, track) {
	const asset = { ...metadata };
	Object.defineProperty(asset, "fsPath", {
		value: fsPath,
		enumerable: false
	});
	if (track) {
		let src = metadata.src;
		Object.defineProperty(asset, RAW_SRC, { get: () => src });
		Object.defineProperty(asset, "src", {
			enumerable: true,
			configurable: true,
			get() {
				recordReferencedImage(fsPath);
				return src;
			},
			set(value) {
				src = value;
			}
		});
	} else Object.defineProperty(asset, RAW_SRC, { get: () => asset.src });
	return asset;
}
function getUntrackedImage(image) {
	if (typeof image !== "object" || image === null || !(RAW_SRC in image)) return image;
	const asset = image;
	const copy = {};
	for (const key of Object.keys(asset)) copy[key] = key === "src" ? asset[RAW_SRC] : asset[key];
	Object.defineProperty(copy, "fsPath", {
		value: asset.fsPath,
		enumerable: false
	});
	return copy;
}
// src/assets/logo.webp
var logo_default = createImageAsset({
	"src": "/_astro/logo.He_f36kN.webp",
	"width": 925,
	"height": 904,
	"format": "webp"
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/assets/logo.webp", true);
// src/components/shared/TopMenu.astro
var $$TopMenu = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="bg-background sticky top-0 left-0 z-50 w-full shadow-lg dark:shadow-none"><section class="container mx-auto flex items-center justify-between"><article class="group"><a href="/" class="flex items-center justify-center gap-3 text-lg font-bold text-gray-900 transition-transform duration-200 group-hover:scale-105 dark:text-white" title="Pokemon Universe"><img${addAttribute(logo_default.src, "src")} alt="Logo de Pokemon Universe" class="h-16 w-auto"><span>Pokemon Universe</span></a></article><article>${renderComponent($$result, "ModeToggle", ModeToggle, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/ModeToggle.tsx",
		"client:component-export": "ModeToggle"
	})}</article></section></header>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/TopMenu.astro", void 0);
// src/components/shared/NoiseEffect.astro
var $$NoiseEffect = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="noise-layer" data-astro-cid-eyd47sxl></div>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/NoiseEffect.astro", void 0);
// src/layouts/Layout.astro
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script>
  document.addEventListener("astro:page-load", () => {
    const getThemePreference = () => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme")
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    const isDark = getThemePreference() === "dark"
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")

    if (typeof localStorage !== "undefined") {
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark")
        localStorage.setItem("theme", isDark ? "dark" : "light")
      })
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      })
    }
  })
<\/script><html lang="es"><head>${renderComponent($$result, "Seo", $$Seo, {})}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead($$result)}</head><body class="font-quicksand text-black-ivory selection:bg-black-ivory dark:selection:bg-white-cascaron selection:text-white-cascaron dark:selection:text-black-ivory dark:text-white">${renderComponent($$result, "NoiseEffect", $$NoiseEffect, {})}${renderComponent($$result, "TopMenu", $$TopMenu, {})}<main>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/layouts/Layout.astro", void 0);
export { buttonVariants as a, recordStaticImage as c, createComponent as d, Button as i, renderScript as l, createImageAsset as n, cn as o, getUntrackedImage as r, isCollectingStaticImages as s, $$Layout as t, createAstro as u };
