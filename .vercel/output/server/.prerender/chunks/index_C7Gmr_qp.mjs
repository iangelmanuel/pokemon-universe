import { n as __exportAll } from "./rolldown-runtime_SbdDWaPq.mjs";
import { C as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_B-f1q_Fw.mjs";
import { a as buttonVariants, d as createComponent, l as renderScript, o as cn, t as $$Layout } from "./Layout_PYyO8RIH.mjs";
import { useEffect, useState } from "react";
import { Fragment as Fragment$1, jsx } from "react/jsx-runtime";
// src/components/magicui/meteors.tsx
var Meteors = ({ number = 20, minDelay = .2, maxDelay = 1.2, minDuration = 2, maxDuration = 10, angle = 215, className }) => {
	const [meteorStyles, setMeteorStyles] = useState([]);
	useEffect(() => {
		const styles = [...new Array(number)].map(() => ({
			"--angle": -angle + "deg",
			top: "-5%",
			left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
			animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
			animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s"
		}));
		setMeteorStyles(styles);
	}, [
		number,
		minDelay,
		maxDelay,
		minDuration,
		maxDuration,
		angle
	]);
	return /* @__PURE__ */ jsx(Fragment$1, { children: [...meteorStyles].map((style, idx) => /* @__PURE__ */ jsx("span", {
		style: { ...style },
		className: cn("animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]", className),
		children: /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" })
	}, idx)) });
};
// src/sections/home-page/HomePageHero.astro
var $$HomePageHero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative mx-auto mt-20 flex min-h-screen max-w-screen-xl flex-col items-center justify-between border-b p-5 md:mt-0 md:flex-row md:p-0"><div class="absolute top-0 left-0 z-[-1] h-screen w-full overflow-hidden">${renderComponent($$result, "Meteors", Meteors, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/magicui/meteors",
		"client:component-export": "Meteors"
	})}</div><div class="flex flex-col justify-center"><div class="max-w-2xl"><h1 class="title-animation font-title text-primary text-7xl text-amber-500 sm:text-8xl">Explora. Aprende. Colecciona.</h1><span class="subtitle-animation mt-2 block text-xl">Una experiencia dinámica para fans que quieren ir más allá de la batalla y descubrir todo el universo detrás de cada Pokémon y carta.</span></div><div class="btn-animation mt-8 flex flex-col gap-4 sm:flex-row"><a href="/1"${addAttribute([buttonVariants({ variant: "secondary" }), "bg-blue-700 text-lg"], "class:list")}>Explora la collección TCG</a><a href="/pokedex"${addAttribute([buttonVariants({ variant: "secondary" }), "bg-green-600 text-lg"], "class:list")}>Explora la Pokédex</a></div></div><div class="relative"><div class="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-[60px] bg-amber-500/80 blur-3xl"></div><canvas id="charmander-canvas" class="w-full"></canvas></div></section>${renderScript($$result, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/home-page/HomePageHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/sections/home-page/HomePageHero.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HomePageHero", $$HomePageHero, {})}${maybeRenderHead($$result)}<div class="h-[1000px]"></div>` })}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/index.astro", void 0);
var $$file = "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
