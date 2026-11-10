import { n as __exportAll } from "./rolldown-runtime_DYf_mQCB.mjs";
import { d as createComponent, i as createImageAsset, n as $$Image, u as createAstro } from "./_astro_assets_LfPHUqmx.mjs";
import { C as addAttribute, _ as createRenderInstruction, c as Fragment$2, d as renderSlot, g as renderHead, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./console_DCWAR3Wv.mjs";
import * as React$1 from "react";
import clsx$1, { clsx } from "clsx";
import { ArrowBigRight, ArrowRight, BarChart3, Calendar, ChartColumnBig, ChevronDownIcon, DollarSign, Eye, Images, Moon, Scale, Store, Sun, Swords, TrendingDown, TrendingUp } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as RechartsPrimitive from "recharts";
import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
// node_modules/.pnpm/astro@7.4.7_@types+node@22._cceaf98c282a54644912a9ddfc0910ca/node_modules/astro/components/ClientRouter.astro
createAstro("https://astro.build");
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
// src/components/shared/Seo.astro
createAstro("https://astro.build");
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
// src/assets/logo.webp
var logo_default = createImageAsset({
	"src": "/_astro/logo.He_f36kN.webp",
	"width": 925,
	"height": 904,
	"format": "webp"
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/assets/logo.webp", false);
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
// src/components/ui-shadcn/tabs.tsx
function Tabs({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsPrimitive.Root, {
		"data-slot": "tabs",
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsPrimitive.List, {
		"data-slot": "tabs-list",
		className: cn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
		"data-slot": "tabs-trigger",
		className: cn("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
function TabsContent$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsPrimitive.Content, {
		"data-slot": "tabs-content",
		className: cn("flex-1 outline-none", className),
		...props
	});
}
// src/components/ui-shadcn/accordion.tsx
function Accordion({ ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Root, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
		"data-slot": "accordion-item",
		className: cn("border-b last:border-b-0", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
		"data-slot": "accordion-content",
		className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("pt-0 pb-4", className),
			children
		})
	});
}
// src/components/ui-shadcn/badge.tsx
var badgeVariants = cva("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-indigo-600 text-primary-foreground [a&]:hover:bg-indigo-600/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		black: "border-transparent bg-black-ivory text-white-cascaron [a&]:hover:bg-black-ivory/90",
		colorless: "border-transparent bg-colorless text-primary-foreground [a&]:hover:bg-colorless/90",
		darkness: "border-transparent bg-darkness text-primary-foreground [a&]:hover:bg-darkness/90",
		dragon: "border-transparent bg-dragon text-primary-foreground [a&]:hover:bg-dragon/90",
		fighting: "border-transparent bg-fighting text-primary-foreground [a&]:hover:bg-fighting/90",
		fire: "border-transparent bg-fire text-primary-foreground [a&]:hover:bg-fire/90",
		grass: "border-transparent bg-grass text-primary-foreground [a&]:hover:bg-grass/90",
		lightning: "border-transparent bg-lightning text-primary-foreground [a&]:hover:bg-lightning/90",
		metal: "border-transparent bg-metal text-primary-foreground [a&]:hover:bg-metal/90",
		psychic: "border-transparent bg-psychic text-primary-foreground [a&]:hover:bg-psychic/90",
		plant: "border-transparent bg-plant text-primary-foreground [a&]:hover:bg-plant/90",
		water: "border-transparent bg-water text-primary-foreground [a&]:hover:bg-water/90"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, asChild = false, ...props }) {
	return /* @__PURE__ */ jsx(asChild ? Slot : "span", {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant }), className, "rounded-full"),
		...props
	});
}
// src/constant/energy-types.ts
var energyTypeImage = {
	"Colorless": "/assets/img/energy-types/colorless.webp",
	"Darkness": "/assets/img/energy-types/darkness.webp",
	"Dragon": "/assets/img/energy-types/dragon.webp",
	"Fighting": "/assets/img/energy-types/fighting.webp",
	"Fire": "/assets/img/energy-types/fire.webp",
	"Grass": "/assets/img/energy-types/grass.webp",
	"Lightning": "/assets/img/energy-types/lightning.webp",
	"Metal": "/assets/img/energy-types/metal.webp",
	"Psychic": "/assets/img/energy-types/psychic.webp",
	"Water": "/assets/img/energy-types/water.webp"
};
// src/components/pokemon-card-data/PokemonAttackData.tsx
var PokemonAttackData = ({ pokemon, isTrainerCard }) => {
	return /* @__PURE__ */ jsx(TabsContent$1, {
		value: "attacks",
		className: "flex flex-col gap-4",
		children: !isTrainerCard ? pokemon.attacks.map((atk, index) => /* @__PURE__ */ jsx(Attack, { atk }, `pokemon-attack-${index}`)) : pokemon.rules.map((rule, index) => /* @__PURE__ */ jsx(Rule, {
			rule,
			index
		}, `pokemon-rule-${index}`))
	});
};
var Attack = ({ atk }) => {
	return /* @__PURE__ */ jsx(Accordion, {
		type: "multiple",
		className: "border-muted rounded-lg border px-5 shadow-lg",
		children: /* @__PURE__ */ jsxs(AccordionItem, {
			value: "item-1",
			children: [/* @__PURE__ */ jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-full items-center justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center",
					children: [
						atk.cost.map((energy, index) => /* @__PURE__ */ jsx("img", {
							src: energyTypeImage[energy] ?? "",
							alt: energy,
							className: "size-6"
						}, `energy-cost-to-attack-${index}`)),
						/* @__PURE__ */ jsx("span", {
							className: "font-title ml-2 text-lg",
							children: atk.name
						}),
						" "
					]
				}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", {
					className: "text-xl",
					children: atk.damage ? ` ${atk.damage}` : " -"
				}) })]
			}) }), /* @__PURE__ */ jsxs(AccordionContent, { children: [/* @__PURE__ */ jsx("p", {
				className: "mb-5 text-lg",
				children: atk.text === "" ? "Sin descripción 😅" : atk.text
			}), /* @__PURE__ */ jsxs(Badge, {
				variant: "colorless",
				className: "font-semibold",
				children: [atk.convertedEnergyCost, " de energía"]
			})] })]
		})
	});
};
var Rule = ({ rule, index }) => {
	return /* @__PURE__ */ jsx(Accordion, {
		type: "multiple",
		className: "border-muted rounded-lg border px-5 shadow-lg",
		children: /* @__PURE__ */ jsxs(AccordionItem, {
			value: "item-1",
			children: [/* @__PURE__ */ jsx(AccordionTrigger, { children: /* @__PURE__ */ jsx("div", {
				className: "flex w-full items-center justify-between",
				children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", {
					className: "text-xl font-bold",
					children: ["Rule ", index + 1]
				}) })
			}) }), /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx("p", {
				className: "mb-5 text-lg",
				children: rule === "" ? "Sin descripción 😅" : rule
			}) })]
		})
	});
};
// src/components/ui-shadcn/card.tsx
function Card({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-header",
		className: cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-title",
		className: cn("leading-none font-semibold", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-content",
		className: cn("px-6", className),
		...props
	});
}
function CardFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card-footer",
		className: cn("flex items-center px-6 [.border-t]:pt-6", className),
		...props
	});
}
// src/components/pokemon-card-data/PokemonStatsData.tsx
var PokemonStatsData = ({ pokemon, isTrainerCard }) => {
	const weaknessesVariant = pokemon.weaknesses?.map((weakness) => weakness.type).join("").toLocaleLowerCase() ?? "default";
	const weaknessesContent = pokemon.weaknesses?.map(({ type, value }) => `${type} ${value}`).join("");
	const resistancesVariant = pokemon.resistances?.map((weakness) => weakness.type).join("").toLocaleLowerCase() ?? "default";
	const resistancesContent = pokemon.resistances?.map(({ type, value }) => `${type} ${value}`).join("");
	return /* @__PURE__ */ jsx(TabsContent$1, {
		value: "stats",
		children: /* @__PURE__ */ jsxs(Card, {
			className: "w-full p-4",
			children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: /* @__PURE__ */ jsx("h3", {
				className: "font-title text-lg",
				children: "Detalles de la carta"
			}) }) }), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsxs("div", {
				className: clsx$1("flex flex-col gap-2", { "border-muted border-b pb-5": !isTrainerCard }),
				children: [
					pokemon.weaknesses && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Debilidad:"
						}), /* @__PURE__ */ jsx(Badge, {
							className: "text-sm font-semibold",
							variant: weaknessesVariant,
							children: weaknessesContent ?? "Ninguna"
						})]
					}),
					pokemon.resistances && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Resistencia:"
						}), /* @__PURE__ */ jsx(Badge, {
							className: "text-sm font-semibold",
							variant: resistancesVariant,
							children: resistancesContent ?? "No tiene"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-between",
						children: pokemon.retreatCost && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Costo de retirada"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex items-center",
							children: pokemon.retreatCost.map((energy, index) => /* @__PURE__ */ jsx("img", {
								src: energyTypeImage[energy] ?? "",
								alt: `${energy} energy`,
								className: "size-6"
							}, index))
						})] })
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: clsx$1("flex flex-col gap-2", { "mt-5": !isTrainerCard }),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Rareza:"
						}), /* @__PURE__ */ jsx(Badge, {
							className: "text-sm font-semibold",
							variant: "default",
							children: pokemon.rarity
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Artista:"
						}), /* @__PURE__ */ jsx("span", { children: pokemon.artist ?? "Desconocido" })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Fecha que salio:"
						}), /* @__PURE__ */ jsx("span", { children: pokemon.set.releaseDate })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Serie:"
						}), /* @__PURE__ */ jsx("span", { children: pokemon.set.series })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: "Legacy:"
						}), /* @__PURE__ */ jsx("span", { children: pokemon.set.legalities ? /* @__PURE__ */ jsx("span", {
							className: "text-green-500",
							children: "Si"
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-red-500",
							children: "No"
						}) })]
					})
				]
			})] })]
		})
	});
};
// src/components/ui-shadcn/progress.tsx
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ jsx(ProgressPrimitive.Root, {
		"data-slot": "progress",
		className: cn("bg-black-ivory/20 dark:bg-white-cascaron/20 relative h-2 w-full overflow-hidden rounded-full", className),
		...props,
		children: /* @__PURE__ */ jsx(ProgressPrimitive.Indicator, {
			"data-slot": "progress-indicator",
			className: "bg-black-ivory dark:bg-white-cascaron h-full w-full flex-1 transition-all",
			style: { transform: `translateX(-${100 - (value || 0)}%)` }
		})
	});
}
// src/components/ui-shadcn/chart.tsx
var THEMES = {
	light: "",
	dark: ".dark"
};
var ChartContext = React$1.createContext(null);
function useChart() {
	const context = React$1.useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a <ChartContainer />");
	return context;
}
function ChartContainer({ id, className, children, config, ...props }) {
	const uniqueId = React$1.useId();
	const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
	return /* @__PURE__ */ jsx(ChartContext.Provider, {
		value: { config },
		children: /* @__PURE__ */ jsxs("div", {
			"data-slot": "chart",
			"data-chart": chartId,
			className: cn("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", className),
			...props,
			children: [/* @__PURE__ */ jsx(ChartStyle, {
				id: chartId,
				config
			}), /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })]
		})
	});
}
var ChartStyle = ({ id, config }) => {
	const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
	if (!colorConfig.length) return null;
	return /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
		const color = itemConfig.theme?.[theme] || itemConfig.color;
		return color ? `  --color-${key}: ${color};` : null;
	}).join("\n")}
}
`).join("\n") } });
};
function ChartTooltipContent({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }) {
	const { config } = useChart();
	const tooltipLabel = React$1.useMemo(() => {
		if (hideLabel || !payload?.length) return null;
		const [item] = payload;
		const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
		const itemConfig = getPayloadConfigFromPayload(config, item, key);
		const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
		if (labelFormatter) return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: labelFormatter(value, payload)
		});
		if (!value) return null;
		return /* @__PURE__ */ jsx("div", {
			className: cn("font-medium", labelClassName),
			children: value
		});
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey
	]);
	if (!active || !payload?.length) return null;
	const nestLabel = payload.length === 1 && indicator !== "dot";
	return /* @__PURE__ */ jsxs("div", {
		className: cn("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className),
		children: [!nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("div", {
			className: "grid gap-1.5",
			children: payload.map((item, index) => {
				const key = `${nameKey || item.name || item.dataKey || "value"}`;
				const itemConfig = getPayloadConfigFromPayload(config, item, key);
				const indicatorColor = color || item.payload.fill || item.color;
				return /* @__PURE__ */ jsx("div", {
					className: cn("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", indicator === "dot" && "items-center"),
					children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment$1, { children: [itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx("div", {
						className: cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": indicator === "dot",
							"w-1": indicator === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
							"my-0.5": nestLabel && indicator === "dashed"
						}),
						style: {
							"--color-bg": indicatorColor,
							"--color-border": indicatorColor
						}
					}), /* @__PURE__ */ jsxs("div", {
						className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid gap-1.5",
							children: [nestLabel ? tooltipLabel : null, /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: itemConfig?.label || item.name
							})]
						}), item.value && /* @__PURE__ */ jsx("span", {
							className: "text-foreground font-mono font-medium tabular-nums",
							children: item.value.toLocaleString()
						})]
					})] })
				}, item.dataKey);
			})
		})]
	});
}
function getPayloadConfigFromPayload(config, payload, key) {
	if (typeof payload !== "object" || payload === null) return;
	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
	let configLabelKey = key;
	if (key in payload && typeof payload[key] === "string") configLabelKey = payload[key];
	else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
	return configLabelKey in config ? config[configLabelKey] : config[key];
}
// src/components/pokemon-card-data/charts/price-distribution-chart.tsx
function PriceDistributionChart({ data }) {
	return /* @__PURE__ */ jsx(ChartContainer, {
		config: { value: {
			label: "Precio",
			color: "hsl(var(--chart-1))"
		} },
		children: /* @__PURE__ */ jsx(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ jsxs(BarChart, {
				data,
				children: [
					/* @__PURE__ */ jsx(XAxis, {
						dataKey: "name",
						stroke: "rgba(255,255,255,0.5)",
						fontSize: 12,
						tickLine: false
					}),
					/* @__PURE__ */ jsx(YAxis, {
						stroke: "rgba(255,255,255,0.5)",
						fontSize: 12,
						tickLine: false,
						tickFormatter: (value) => `€${value}`
					}),
					/* @__PURE__ */ jsx(Tooltip, {
						content: /* @__PURE__ */ jsx(ChartTooltipContent, {}),
						cursor: { fill: "rgba(255,255,255,0.05)" }
					}),
					/* @__PURE__ */ jsx(Bar, {
						dataKey: "value",
						radius: [
							4,
							4,
							0,
							0
						],
						stroke: "rgba(255,255,255,0.2)",
						strokeWidth: 1
					})
				]
			})
		})
	});
}
// src/components/pokemon-card-data/charts/price-trend-chart.tsx
function PriceTrendChart({ data, hasReverseHolo }) {
	return /* @__PURE__ */ jsx(ChartContainer, {
		config: {
			holo: {
				label: "Normal",
				color: "hsl(var(--chart-3))"
			},
			reverseHolo: {
				label: `${hasReverseHolo ? "Reverse Holo" : "N/A"}`,
				color: "hsl(var(--chart-5))"
			}
		},
		children: /* @__PURE__ */ jsx(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ jsxs(LineChart, {
				data,
				children: [
					/* @__PURE__ */ jsx(XAxis, {
						dataKey: "period",
						stroke: "rgba(255,255,255,0.5)",
						fontSize: 12,
						tickLine: false
					}),
					/* @__PURE__ */ jsx(YAxis, {
						stroke: "rgba(255,255,255,0.5)",
						fontSize: 12,
						tickLine: false,
						tickFormatter: (value) => `€${value}`
					}),
					/* @__PURE__ */ jsx(Tooltip, {
						content: /* @__PURE__ */ jsx(ChartTooltipContent, {}),
						cursor: { stroke: "rgba(255,255,255,0.1)" }
					}),
					/* @__PURE__ */ jsx(Legend, {}),
					/* @__PURE__ */ jsx(Line, {
						type: "monotone",
						dataKey: "holo",
						stroke: "var(--color-holo)",
						strokeWidth: 3,
						dot: {
							fill: "var(--color-holo)",
							strokeWidth: 2,
							r: 4
						},
						activeDot: {
							r: 6,
							stroke: "var(--color-holo)",
							strokeWidth: 2
						}
					}),
					/* @__PURE__ */ jsx(Line, {
						type: "monotone",
						dataKey: "reverseHolo",
						stroke: "var(--color-reverseHolo)",
						strokeWidth: 3,
						dot: {
							fill: "var(--color-reverseHolo)",
							strokeWidth: 2,
							r: 4
						},
						activeDot: {
							r: 6,
							stroke: "var(--color-reverseHolo)",
							strokeWidth: 2
						}
					})
				]
			})
		})
	});
}
// src/components/pokemon-card-data/market/TabTrends.tsx
var TabTrends = ({ priceHistory, marketData }) => {
	const hasReverseHolo = priceHistory.some((entry) => entry.reverseHolo > 0);
	return /* @__PURE__ */ jsx(TabsContent, {
		value: "trends",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h3", {
				className: "mb-4 text-lg font-medium",
				children: "Evolución de Precios"
			}) }), /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsx(PriceTrendChart, {
				data: priceHistory,
				hasReverseHolo
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-xs",
				children: "Datos basados en promedios de mercado de los últimos 30 días"
			})] })] }), /* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h3", {
				className: "mb-4 text-lg font-medium",
				children: "Distribución de Precios"
			}) }), /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(PriceDistributionChart, { data: [
				{
					name: "Mínimo",
					value: marketData.lowPrice,
					color: "#ef4444"
				},
				{
					name: "Promedio",
					value: marketData.averageSellPrice,
					color: "#3b82f6"
				},
				{
					name: "Tendencia",
					value: marketData.trendPrice,
					color: "#10b981"
				},
				{
					name: "Máximo",
					value: marketData.avg1,
					color: "#f59e0b"
				}
			] }) })] })]
		})
	});
};
// src/components/pokemon-card-data/shared/HoloTrenDirection.tsx
var HoloTrenDirection = ({ data, isSmall = false }) => {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [data.isPositive ? /* @__PURE__ */ jsx(TrendingUp, { className: clsx("text-emerald-500", isSmall ? "size-3" : "size-4") }) : /* @__PURE__ */ jsx(TrendingDown, { className: clsx("text-red-500", isSmall ? "size-3" : "size-4") }), /* @__PURE__ */ jsx("span", {
		className: cn("font-medium", data.isPositive ? "text-emerald-500" : "text-red-500", isSmall ? "text-xs" : "text-sm"),
		children: data.percentage
	})] });
};
// src/components/pokemon-card-data/shared/ReverseHoloDirection.tsx
var ReverseHoloDirection = ({ data, isSmall = false }) => {
	const isPositive = data < 0;
	const percentage = Math.abs(data).toFixed(2) + "%";
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [isPositive ? /* @__PURE__ */ jsx(TrendingUp, { className: clsx$1("text-green-500", isSmall ? "size-3" : "size-4") }) : /* @__PURE__ */ jsx(TrendingDown, { className: clsx$1("text-red-500", isSmall ? "size-3" : "size-4") }), /* @__PURE__ */ jsx("span", {
		className: cn("font-medium", isPositive ? "text-emerald-500" : "text-red-500", isSmall ? "text-xs" : "text-sm"),
		children: percentage
	})] });
};
// src/utils/currency-formatter.ts
var currencyFormatter = (value, { locale = "en-US", currency = "EUR", noDecimals = false }) => {
	const toNumber = Number(value);
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		minimumFractionDigits: noDecimals ? 0 : 2,
		maximumFractionDigits: noDecimals ? 0 : 2
	}).format(toNumber);
};
// src/components/pokemon-card-data/market/TabComparison.tsx
var TabComparison = ({ marketData, holoTrend, reverseHoloTrend }) => {
	return /* @__PURE__ */ jsx(TabsContent, {
		value: "comparison",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(Card, { children: [
				/* @__PURE__ */ jsxs(CardHeader, {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-medium",
						children: "Versión Normal"
					}), /* @__PURE__ */ jsx(Badge, {
						className: "bg-blue-900/50",
						children: "Holofoil"
					})]
				}),
				/* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						children: "Precio Actual"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xl font-bold",
						children: currencyFormatter(marketData.trendPrice, {})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "1 día"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "",
									children: currencyFormatter(marketData.avg1, {})
								}), /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1",
									children: /* @__PURE__ */ jsx(ReverseHoloDirection, {
										data: Number((marketData.avg1 - marketData.avg7) / marketData.avg7 * 100),
										isSmall: true
									})
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "7 días"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: currencyFormatter(marketData.avg7, {})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "30 días"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "",
									children: currencyFormatter(marketData.avg30, {})
								}), /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1",
									children: /* @__PURE__ */ jsx(HoloTrenDirection, {
										data: holoTrend,
										isSmall: true
									})
								})]
							})]
						})
					]
				})] }),
				/* @__PURE__ */ jsx(CardFooter, {
					className: "px-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "border-muted flex w-full flex-col items-center border-t",
						children: [/* @__PURE__ */ jsx("span", {
							className: "pt-3 text-sm font-semibold",
							children: "Rango de Precio"
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-sm",
							children: [
								currencyFormatter(marketData.lowPrice, {}),
								" -",
								" ",
								currencyFormatter(marketData.avg1, {})
							]
						})]
					})
				})
			] }), marketData.reverseHoloTrend ? /* @__PURE__ */ jsxs(Card, { children: [
				/* @__PURE__ */ jsxs(CardHeader, {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-medium",
						children: "Reverse Holo"
					}), /* @__PURE__ */ jsx(Badge, {
						className: "bg-purple-900/50",
						children: "Reverse"
					})]
				}),
				/* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-semibold",
						children: "Precio Actual"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xl font-bold",
						children: currencyFormatter(marketData.reverseHoloTrend, {})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "1 día"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "",
									children: currencyFormatter(marketData.reverseHoloAvg1, {})
								}), /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1",
									children: /* @__PURE__ */ jsx(ReverseHoloDirection, {
										data: Number((marketData.reverseHoloAvg1 - marketData.reverseHoloAvg7) / marketData.reverseHoloAvg7 * 100),
										isSmall: true
									})
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "7 días"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: currencyFormatter(marketData.reverseHoloAvg7, {})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "30 días"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "",
									children: currencyFormatter(marketData.reverseHoloAvg30, {})
								}), /* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-1",
									children: /* @__PURE__ */ jsx(HoloTrenDirection, {
										data: reverseHoloTrend,
										isSmall: true
									})
								})]
							})]
						})
					]
				})] }),
				/* @__PURE__ */ jsx(CardFooter, {
					className: "px-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "border-muted flex w-full flex-col items-center border-t",
						children: [/* @__PURE__ */ jsx("span", {
							className: "pt-3 text-sm font-semibold",
							children: "Diferencia vs Normal"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm",
							children: currencyFormatter(marketData.trendPrice - marketData.reverseHoloTrend, {})
						})]
					})
				})
			] }) : /* @__PURE__ */ jsx("div", {
				className: "col-span-1 flex items-center justify-center p-6",
				children: /* @__PURE__ */ jsx("span", {
					className: "text-sm text-gray-500 dark:text-gray-400",
					children: "No hay datos para la versión Reverse Holo"
				})
			})]
		})
	});
};
// src/utils/time-since.ts
var timeSince = (dateString) => {
	const now = /* @__PURE__ */ new Date();
	const updated = new Date(dateString);
	const seconds = Math.floor((now.getTime() - updated.getTime()) / 1e3);
	for (const [name, secondsInUnit] of Object.entries({
		año: 31536e3,
		mes: 2592e3,
		semana: 604800,
		día: 86400,
		hora: 3600,
		minuto: 60,
		segundo: 1
	})) {
		const amount = Math.floor(seconds / secondsInUnit);
		if (amount >= 1) return `Hace ${amount} ${name}${amount > 1 ? "s" : ""}`;
	}
	return "Justo ahora";
};
// src/components/pokemon-card-data/market/TabAnalytics.tsx
var TabAnalytics = ({ marketData, pokemon }) => {
	return /* @__PURE__ */ jsx(TabsContent$1, {
		value: "analytics",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 gap-6",
			children: [
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h3", {
					className: "text-lg font-medium",
					children: "Métricas de Mercado"
				}) }), /* @__PURE__ */ jsxs(CardContent, {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-zinc-200 p-2 dark:bg-zinc-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "Volatilidad"
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xl font-medium",
								children: [((Math.max(marketData.avg1, marketData.avg7, marketData.avg30) - Math.min(marketData.avg1, marketData.avg7, marketData.avg30)) / marketData.averageSellPrice * 100).toFixed(1), "%"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-zinc-200 p-2 dark:bg-zinc-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "Liquidez"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xl font-medium",
								children: "Alta"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-zinc-200 p-2 dark:bg-zinc-800",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm",
								children: "Tendencia 30d"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-emerald-500" }), /* @__PURE__ */ jsx("span", {
									className: "text-xl font-medium text-emerald-500",
									children: "Alcista"
								})]
							})]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h3", {
					className: "text-lg font-medium",
					children: "Recomendaciones"
				}) }), /* @__PURE__ */ jsxs(CardContent, {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 rounded-lg border border-emerald-800/30 bg-emerald-900/20 p-3",
							children: [/* @__PURE__ */ jsx(TrendingUp, { className: "mt-0.5 h-4 w-4 text-emerald-500" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-medium text-emerald-300",
								children: "Buen momento para vender"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-emerald-500/80",
								children: "Precio por encima del promedio"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 rounded-lg border border-blue-800/30 bg-blue-900/20 p-3",
							children: [/* @__PURE__ */ jsx(BarChart3, { className: "mt-0.5 h-4 w-4 text-blue-400" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-medium text-blue-300",
								children: "Demanda estable"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-blue-400/80",
								children: "Carta popular en el mercado"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3 rounded-lg border border-yellow-800/30 bg-yellow-900/20 p-3",
							children: [/* @__PURE__ */ jsx(Eye, { className: "mt-0.5 h-4 w-4 text-yellow-400" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-medium text-yellow-300",
								children: "Monitorear precio"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-yellow-400/80",
								children: "Posible fluctuación próxima"
							})] })]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs(Card, { children: [/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("h3", {
					className: "text-lg font-medium",
					children: "Información del Mercado"
				}) }), /* @__PURE__ */ jsxs(CardContent, {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "",
								children: "Última actualización"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: timeSince(pokemon.cardmarket.updatedAt)
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "",
								children: "Fuente de datos"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: "Cardmarket"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "",
								children: "Moneda"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: "EUR (€)"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "",
								children: "Región"
							}), /* @__PURE__ */ jsx("span", {
								className: "",
								children: "America"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "border-t border-zinc-700 pt-4",
							children: /* @__PURE__ */ jsxs("a", {
								href: pokemon.cardmarket?.url || "#",
								target: "_blank",
								rel: "noopener noreferrer",
								className: clsx$1(buttonVariants({ variant: "outline" }), "flex items-center gap-2"),
								children: ["Ver en Cardmarket", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})] })
			]
		})
	});
};
// src/constant/price-empty.ts
var priceEmpty = {
	averageSellPrice: 0,
	lowPrice: 0,
	trendPrice: 0,
	germanProLow: 0,
	suggestedPrice: 0,
	reverseHoloSell: 0,
	reverseHoloLow: 0,
	reverseHoloTrend: 0,
	lowPriceExPlus: 0,
	avg1: 0,
	avg7: 0,
	avg30: 0,
	reverseHoloAvg1: 0,
	reverseHoloAvg7: 0,
	reverseHoloAvg30: 0
};
// src/utils/calculate-trend.ts
var calculateTrend = (current, previous) => {
	const change = (current - previous) / previous * 100;
	return {
		percentage: `${change < 0 ? "-" : ""}${Math.abs(change).toFixed(1)}%`,
		isPositive: change > 0,
		isNeutral: Math.abs(change) < 1
	};
};
// src/utils/date-formatter.ts
var defaultOptions = {
	year: "numeric",
	month: "long",
	day: "numeric"
};
function dateFormatter(date, { locale = "en-ES", formatOptions = defaultOptions }) {
	return new Date(date).toLocaleDateString(locale, { ...formatOptions });
}
// src/components/pokemon-card-data/PokemonMarketData.tsx
var PokemonMarketData = ({ pokemon }) => {
	const { cardmarket } = pokemon;
	const marketData = cardmarket?.prices || priceEmpty;
	const holoTrend = calculateTrend(marketData.avg7, marketData.avg30);
	const reverseHoloTrend = calculateTrend(marketData.reverseHoloAvg7, marketData.reverseHoloAvg30);
	const priceHistory = [
		{
			period: "30d",
			holo: marketData.avg30,
			reverseHolo: marketData.reverseHoloAvg30
		},
		{
			period: "7d",
			holo: marketData.avg7,
			reverseHolo: marketData.reverseHoloAvg7
		},
		{
			period: "1d",
			holo: marketData.avg1,
			reverseHolo: marketData.reverseHoloAvg1
		}
	];
	return /* @__PURE__ */ jsxs(TabsContent$1, {
		value: "market",
		children: [/* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-2 flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(DollarSign, { className: "h-5 w-5 text-emerald-500" }), /* @__PURE__ */ jsx("span", {
					className: "text-sm",
					children: "Precio de Mercado"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-baseline gap-3",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-4xl font-bold text-emerald-500 md:text-5xl",
					children: currencyFormatter(marketData.trendPrice, {})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-1",
					children: /* @__PURE__ */ jsx(HoloTrenDirection, { data: holoTrend })
				})]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-end gap-2",
				children: [
					/* @__PURE__ */ jsxs(Badge, {
						variant: "outline",
						className: "text-xs",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-semibold",
								children: "Fecha de actualización:"
							}),
							" ",
							cardmarket.updatedAt ? dateFormatter(cardmarket.updatedAt, {}) : "N/A"
						]
					}),
					/* @__PURE__ */ jsxs(Badge, {
						className: "border-emerald-700 bg-transparent text-emerald-700 dark:border-emerald-600 dark:bg-emerald-800/50 dark:text-emerald-300",
						children: [
							/* @__PURE__ */ jsx(Eye, { className: "mr-1 h-3 w-3" }),
							"Precio Promedio:",
							" ",
							currencyFormatter(marketData.averageSellPrice, {})
						]
					}),
					/* @__PURE__ */ jsxs(Badge, {
						className: "dark:text-gray-200",
						children: [
							"Rango: ",
							currencyFormatter(marketData.lowPrice, {}),
							" -",
							" ",
							currencyFormatter(marketData.avg1, {})
						]
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-1 flex justify-between text-xs",
					children: [
						/* @__PURE__ */ jsx("span", { children: "Precio Mínimo" }),
						/* @__PURE__ */ jsx("span", { children: "Precio Actual" }),
						/* @__PURE__ */ jsx("span", { children: "Precio Máximo" })
					]
				}),
				/* @__PURE__ */ jsx(Progress, { value: (marketData.trendPrice - marketData.lowPrice) / (marketData.avg1 - marketData.lowPrice) * 100 }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-1 flex justify-between text-xs",
					children: [
						/* @__PURE__ */ jsx("span", { children: currencyFormatter(marketData.lowPrice, {}) }),
						/* @__PURE__ */ jsx("span", { children: currencyFormatter(marketData.trendPrice, {}) }),
						/* @__PURE__ */ jsx("span", { children: currencyFormatter(marketData.avg1, {}) })
					]
				})
			]
		})] }) }), /* @__PURE__ */ jsxs(Tabs, {
			defaultValue: "trends",
			className: "my-6 w-full",
			children: [
				/* @__PURE__ */ jsxs(TabsList, {
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "trends",
							className: "data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(BarChart3, { className: "mr-2 h-4 w-4" }), "Tendencias"]
						}),
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "comparison",
							className: "data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(TrendingUp, { className: "mr-2 h-4 w-4" }), "Comparación"]
						}),
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "analytics",
							className: "data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-4 w-4" }), "Análisis"]
						})
					]
				}),
				/* @__PURE__ */ jsx(TabTrends, {
					priceHistory,
					marketData
				}),
				/* @__PURE__ */ jsx(TabComparison, {
					marketData,
					holoTrend,
					reverseHoloTrend
				}),
				/* @__PURE__ */ jsx(TabAnalytics, {
					marketData,
					pokemon
				})
			]
		})]
	});
};
// src/components/pokemon-card-data/PokemonSetData.tsx
var PokemonSetData = ({ pokemon }) => {
	return /* @__PURE__ */ jsx(TabsContent$1, {
		value: "set",
		children: /* @__PURE__ */ jsxs(Card, {
			className: "border-zinc-700 bg-zinc-800/50",
			children: [
				/* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", {
					className: "mb-6 flex items-center gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative size-16",
						children: /* @__PURE__ */ jsx("img", {
							src: pokemon.set.images.symbol || "/placeholder.svg",
							alt: `${pokemon.set.name} symbol`,
							className: "absolute inset-0 h-full w-full object-contain"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-zinc-200",
						children: pokemon.set.name
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-zinc-400",
						children: [pokemon.set.series, " Series"]
					})] })]
				}) }),
				/* @__PURE__ */ jsxs(CardContent, {
					className: "flex flex-col items-center justify-between md:flex-row",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-zinc-400",
							children: "Release Date"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-zinc-200",
							children: pokemon.set.releaseDate
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-zinc-400",
							children: "Total Cards"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-zinc-200",
							children: pokemon.set.total
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-zinc-400",
							children: "Card Number"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-zinc-200",
							children: [
								pokemon.number,
								"/",
								pokemon.set.total
							]
						})] })
					]
				}),
				/* @__PURE__ */ jsxs(CardFooter, {
					className: "flex-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative mb-6 h-24 w-full",
						children: /* @__PURE__ */ jsx("img", {
							src: pokemon.set.images.logo || "/placeholder.svg",
							alt: `${pokemon.set.name} logo`,
							className: "absolute inset-0 h-full w-full object-contain"
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ jsxs(Badge, {
							variant: "outline",
							className: "border-emerald-700 text-sm text-emerald-400",
							children: [pokemon.set.legalities.unlimited, " in Unlimited Format"]
						})
					})]
				})
			]
		})
	});
};
// src/components/pokemon-card-data/PokemonCardDataMain.tsx
var PokemonCardDataMain = ({ pokemon, isTrainerCard }) => {
	return /* @__PURE__ */ jsxs("article", {
		className: "py-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-6 w-full",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-title text-4xl font-bold",
				children: pokemon.name
			}), !isTrainerCard ? /* @__PURE__ */ jsxs("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ jsx("img", {
					src: energyTypeImage[pokemon.types.join("")],
					alt: `${pokemon.subtypes.join("")}`,
					className: "mr-3 size-6"
				}), /* @__PURE__ */ jsxs("p", {
					className: "border-l-primary border-l-2 pl-4 text-sm",
					children: ["National Pokédex #", pokemon.nationalPokedexNumbers]
				})]
			}) : /* @__PURE__ */ jsxs("p", {
				className: "border-l-primary border-l-2 pl-4 text-sm",
				children: [
					"Tipo de carta:",
					" ",
					pokemon.subtypes ? pokemon.subtypes.join(", ") : "N/A"
				]
			})]
		}), /* @__PURE__ */ jsxs(Tabs, {
			defaultValue: "market",
			className: "w-full",
			children: [
				/* @__PURE__ */ jsxs(TabsList, {
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "market",
							className: "data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(Store, { className: "mr-2 h-4 w-4" }), "Mercado"]
						}),
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "attacks",
							className: "data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white",
							children: [isTrainerCard ? /* @__PURE__ */ jsx(Scale, { className: "mr-2 h-4 w-4" }) : /* @__PURE__ */ jsx(Swords, { className: "mr-2 h-4 w-4" }), isTrainerCard ? "Regla" : "Ataques"]
						}),
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "stats",
							className: "data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(ChartColumnBig, { className: "mr-2 h-4 w-4" }), "Estadisticas"]
						}),
						/* @__PURE__ */ jsxs(TabsTrigger, {
							value: "set",
							className: "data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white",
							children: [/* @__PURE__ */ jsx(Images, { className: "mr-2 h-4 w-4" }), "Colección"]
						})
					]
				}),
				/* @__PURE__ */ jsx(PokemonMarketData, { pokemon }),
				/* @__PURE__ */ jsx(PokemonAttackData, {
					pokemon,
					isTrainerCard
				}),
				/* @__PURE__ */ jsx(PokemonStatsData, {
					pokemon,
					isTrainerCard
				}),
				/* @__PURE__ */ jsx(PokemonSetData, { pokemon })
			]
		})]
	});
};
// src/assets/not-found-card.jpg
var not_found_card_default = createImageAsset({
	"src": "/_astro/not-found-card.CNjm9xBK.jpg",
	"width": 373,
	"height": 521,
	"format": "jpg"
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/assets/not-found-card.jpg", false);
// src/sections/pokemon-card/PokemonInfoCard.astro
createAstro("https://astro.build");
var $$PokemonInfoCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PokemonInfoCard;
	const { pokemon, isTrainerCard, badgeVariant } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto grid min-h-screen max-w-7xl grid-cols-1 justify-center gap-6 p-5 sm:p-0 md:grid-cols-2"><article class="sticky top-10 flex flex-col items-center self-start overflow-y-auto pt-10">${renderComponent($$result, "Card", Card, { "className": "w-full" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardHeader", CardHeader, { "className": "flex items-center justify-between gap-2" }, { "default": ($$result) => renderTemplate`<h2 class="font-title text-2xl font-bold">${pokemon.name}</h2>${!isTrainerCard && renderTemplate`<span class="font-medium text-green-500">${pokemon.hp} HP</span>`}` })}${renderComponent($$result, "CardContent", CardContent, { "className": "atropos my-atropos mx-auto w-[400px] p-5" }, { "default": ($$result) => renderTemplate`<div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner">${renderComponent($$result, "Image", $$Image, {
		"src": pokemon.images.large ?? not_found_card_default,
		"alt": pokemon.name,
		"width": 200,
		"height": 300,
		"loading": "lazy",
		"class": "mx-auto h-auto w-[400px] rounded-lg shadow-lg"
	})}</div></div></div>` })}${renderComponent($$result, "CardFooter", CardFooter, { "className": "flex items-center justify-between gap-2" }, { "default": ($$result) => renderTemplate`<div class="flex gap-2">${renderComponent($$result, "Badge", Badge, { "className": "bg-black-ivory text-white" }, { "default": ($$result) => renderTemplate`${pokemon.supertype}` })}${renderComponent($$result, "Badge", Badge, { "className": "bg-black-ivory text-white" }, { "default": ($$result) => renderTemplate`${pokemon.subtypes ? pokemon.subtypes.join(", ") : "N/A"}` })}</div><div class="flex gap-2"><p class="text-xs capitalize"><span class="font-semibold">Expansión:</span>${pokemon.set.name}</p><span class="text-xs capitalize">${pokemon.number}/${pokemon.set.printedTotal}</span></div>` })}` })}<div class="mt-5 flex items-center justify-center gap-2">${pokemon.evolvesFrom && renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result) => renderTemplate`<span>Evolución de</span>${renderComponent($$result, "Badge", Badge, { "variant": "black" }, { "default": ($$result) => renderTemplate`${pokemon.evolvesFrom}` })}${renderComponent($$result, "ArrowBigRight", ArrowBigRight, { "className": "h-4 w-4" })}` })}`}${(pokemon.evolvesFrom || pokemon.evolvesTo) && renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Badge", Badge, { "variant": isTrainerCard ? badgeVariant : "default" }, { "default": ($$result) => renderTemplate`${pokemon.name}` })}` })}`}${pokemon.evolvesTo && renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result) => renderTemplate`<span>Que evoluciona a</span>${renderComponent($$result, "ArrowBigRight", ArrowBigRight, { "className": "h-4 w-4" })}${renderComponent($$result, "Badge", Badge, { "variant": "black" }, { "default": ($$result) => renderTemplate`${pokemon.evolvesTo}` })}` })}`}</div></article>${renderComponent($$result, "PokemonCardDataMain", PokemonCardDataMain, {
		"pokemon": pokemon,
		"isTrainerCard": isTrainerCard,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/pokemon-card-data/PokemonCardDataMain",
		"client:component-export": "PokemonCardDataMain"
	})}</section>${renderScript($$result, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/pokemon-card/PokemonInfoCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/pokemon-card/PokemonInfoCard.astro", void 0);
// src/pages/pokemon-card/[pokemonCardId].astro
var _pokemonCardId__exports = /* @__PURE__ */ __exportAll({
	default: () => $$PokemonCardId,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$PokemonCardId = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PokemonCardId;
	const { pokemonCardId } = Astro.params;
	const { data: pokemon } = await (await fetch(`https://api.pokemontcg.io/v2/cards/${pokemonCardId}`)).json();
	const isTrainerCard = pokemon.supertype === "Trainer";
	const badgeVariant = pokemon.types?.at(0)?.toLocaleLowerCase() ?? "default";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PokemonInfoCard", $$PokemonInfoCard, {
		"pokemon": pokemon,
		"isTrainerCard": isTrainerCard,
		"badgeVariant": badgeVariant
	})}` })}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/pokemon-card/[pokemonCardId].astro", void 0);
var $$file = "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/pokemon-card/[pokemonCardId].astro";
var $$url = "/pokemon-card/[pokemonCardId]";
// \0virtual:astro:page:src/pages/pokemon-card/[pokemonCardId]@_@astro
var page = () => _pokemonCardId__exports;
export { page };
