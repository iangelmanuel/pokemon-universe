import { n as __exportAll } from "./rolldown-runtime_SbdDWaPq.mjs";
import { C as addAttribute, c as renderComponent, d as renderSlot, h as maybeRenderHead, m as renderTemplate, n as renderTransition } from "./server_B-f1q_Fw.mjs";
import { d as createComponent, i as Button, o as cn, t as $$Layout, u as createAstro } from "./Layout_PYyO8RIH.mjs";
import { n as $$Image, t as $$TitleGradient } from "./TitleGradient_C7nP5s-O.mjs";
import "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import * as SelectPrimitive from "@radix-ui/react-select";
// src/components/ui-shadcn/card.tsx
function Card({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "card",
		className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
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
// src/components/pokemon-tcg/PokemonGrid.astro
createAstro("https://astro.build");
var $$PokemonGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PokemonGrid;
	const { expansion } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/expansions/${expansion.id}`, "href")} class="group block">${renderComponent($$result, "Card", Card, { "className": "relative flex h-[300px] flex-col items-center justify-center overflow-hidden transition-shadow duration-300 ease-in-out" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "CardContent", CardContent, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": expansion.images.logo,
		"alt": `Set ${expansion.name} logo`,
		"width": 128,
		"height": 128,
		"loading": "lazy",
		"class": "mx-auto mb-4 w-40 rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110",
		"data-astro-transition-scope": renderTransition($$result, "2b6teyzq", "", `pokeimage-${expansion.id}`)
	})}` })}${renderComponent($$result, "CardFooter", CardFooter, {}, { "default": ($$result) => renderTemplate`<h2 class="font-title absolute bottom-5 left-3 text-2xl capitalize">${expansion.name}</h2>` })}` })}</a>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/pokemon-tcg/PokemonGrid.astro", "self");
// src/components/ui/PaginationButtons.astro
createAstro("https://astro.build");
var $$PaginationButtons = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PaginationButtons;
	const { next = void 0, prev = void 0 } = Astro.props;
	const isNext = next !== void 0;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(isNext ? next : prev, "href")} class="bg-black-ivory dark:bg-white-cascaron text-white-cascaron dark:text-black-ivory hover:bg-black-ivory/80 dark:hover:bg-white-cascaron/80 rounded-lg px-3 py-1.5 text-center font-bold shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl active:scale-95 disabled:pointer-events-none disabled:opacity-50">${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/ui/PaginationButtons.astro", void 0);
// src/components/shared/Pagination.astro
createAstro("https://astro.build");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { page, className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["p-5", className], "class:list")}>${page.url.prev && renderTemplate`${renderComponent($$result, "PaginationButtons", $$PaginationButtons, { "prev": page.url.prev }, { "default": ($$result) => renderTemplate`Anterior` })}`}${page.url.last ? renderTemplate`<p class="font-bold">${page.url.current[1]}${"de "}${page.url.last?.at(1)}</p>` : null}${page.url.next && renderTemplate`${renderComponent($$result, "PaginationButtons", $$PaginationButtons, { "next": page.url.next }, { "default": ($$result) => renderTemplate`Siguiente` })}`}</div>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/shared/Pagination.astro", void 0);
// src/components/ui-shadcn/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		className: cn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
		...props
	});
}
// src/components/ui-shadcn/select.tsx
function Select({ ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Root, {
		"data-slot": "select",
		...props
	});
}
function SelectGroup({ ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Group, {
		"data-slot": "select-group",
		...props
	});
}
function SelectValue({ ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Value, {
		"data-slot": "select-value",
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Trigger, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(SelectPrimitive.Icon, {
			asChild: true,
			children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className, children, position = "popper", ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(SelectPrimitive.Content, {
		"data-slot": "select-content",
		className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
		position,
		...props,
		children: [
			/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
			/* @__PURE__ */ jsx(SelectPrimitive.Viewport, {
				className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children
			}),
			/* @__PURE__ */ jsx(SelectScrollDownButton, {})
		]
	}) });
}
function SelectLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.Label, {
		"data-slot": "select-label",
		className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
		...props
	});
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(SelectPrimitive.Item, {
		"data-slot": "select-item",
		className: cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) })
		}), /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })]
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(SelectPrimitive.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
	});
}
// src/components/ui/SelectComponent.tsx
function SelectComponent({ data }) {
	return /* @__PURE__ */ jsxs(Select, { children: [/* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Filtrar por..." }) }), /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, { children: "Filtros" }), data.map((item) => /* @__PURE__ */ jsx(SelectItem, {
		value: item.value,
		children: item.label
	}, item.value))] }) })] });
}
// src/pages/[page].astro
var _page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Page,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
var getStaticPaths = (async ({ paginate }) => {
	return paginate(await PokemonTCG.getAllSets(), { pageSize: 20 });
});
var $$Page = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Page;
	const { page } = Astro.props;
	const selectContent = [
		{
			value: "0",
			label: "Ordenar por"
		},
		{
			value: "1",
			label: "Nombre A-Z"
		},
		{
			value: "2",
			label: "Nombre Z-A"
		},
		{
			value: "3",
			label: "Más recientes"
		},
		{
			value: "4",
			label: "Más antiguos"
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="container mx-auto mt-10 border-b border-gray-300 p-5 sm:p-0"><div class="p-40">${renderComponent($$result, "TitleGradient", $$TitleGradient, { "className": "font-title mb-5 text-center text-7xl" }, { "default": ($$result) => renderTemplate`
        Colecciones de Cartas Pokémon
      ` })}<p class="mx-auto max-w-2xl text-center text-2xl">Explora nuestra extensa colección de cartas Pokémon TCG de todas las expansiones.</p></div></section><section class="container mx-auto mt-10 p-5 sm:p-0"><div class="flex items-center justify-center gap-1"><div class="w-full">${renderComponent($$result, "Input", Input, {
		"type": "text",
		"placeholder": "Buscar expansión"
	})}</div><div>${renderComponent($$result, "Button", Button, { "variant": "outline" }, { "default": ($$result) => renderTemplate`Buscar` })}</div><div>${renderComponent($$result, "SelectComponent", SelectComponent, {
		"data": selectContent,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/ui/SelectComponent",
		"client:component-export": "SelectComponent"
	})}</div></div></section><section class="container mx-auto mt-10 p-5 sm:p-0"><div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">${page.data.map((expansion) => renderTemplate`${renderComponent($$result, "PokemonGrid", $$PokemonGrid, { "expansion": expansion })}`)}</div>${renderComponent($$result, "Pagination", $$Pagination, {
		"page": page,
		"className": "mt-10 flex items-center justify-center gap-5"
	})}</section>` })}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/[page].astro", void 0);
var $$file = "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/[page].astro";
var $$url = "/[page]";
// \0virtual:astro:page:src/pages/[page]@_@astro
var page = () => _page__exports;
export { page };
