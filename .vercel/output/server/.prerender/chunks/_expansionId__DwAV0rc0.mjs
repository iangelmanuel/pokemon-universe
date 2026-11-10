import { n as __exportAll } from "./rolldown-runtime_SbdDWaPq.mjs";
import { C as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate, n as renderTransition } from "./server_B-f1q_Fw.mjs";
import { d as createComponent, n as createImageAsset, t as $$Layout, u as createAstro } from "./Layout_PYyO8RIH.mjs";
import { n as $$Image, t as $$TitleGradient } from "./TitleGradient_C7nP5s-O.mjs";
// src/assets/not-found-card.jpg
var not_found_card_default = createImageAsset({
	"src": "/_astro/not-found-card.CNjm9xBK.jpg",
	"width": 373,
	"height": 521,
	"format": "jpg"
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/assets/not-found-card.jpg", true);
// src/components/pokemon-tcg/PokemonCards.astro
createAstro("https://astro.build");
var $$PokemonCards = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PokemonCards;
	const { card } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/pokemon-card/${card.id}`, "href")} class="group"><div class="mt-4">${renderComponent($$result, "Image", $$Image, {
		"src": card.images.small ?? not_found_card_default,
		"alt": card.name,
		"width": 200,
		"height": 300,
		"loading": "lazy",
		"class": "h-auto w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
	})}<h2 class="text-2xl font-bold">${card.name}</h2></div></a>`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/components/pokemon-tcg/PokemonCards.astro", void 0);
// src/pages/expansions/[expansionId].astro
var _expansionId__exports = /* @__PURE__ */ __exportAll({
	default: () => $$ExpansionId,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
var getStaticPaths = (async () => {
	return (await (await fetch("https://api.pokemontcg.io/v2/sets")).json()).data.map((expansion) => ({
		params: { expansionId: expansion.id },
		props: { expansion }
	}));
});
var $$ExpansionId = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExpansionId;
	const { expansion } = Astro.props;
	const expansionCards = await (await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${expansion.id}`)).json();
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto mt-10 max-w-screen-lg p-5 sm:p-0"><article>${renderComponent($$result, "Image", $$Image, {
		"src": expansion.images.logo ?? not_found_card_default,
		"alt": expansion.name,
		"width": 200,
		"height": 300,
		"loading": "lazy",
		"class": "mx-auto h-auto w-[500px]",
		"data-astro-transition-scope": renderTransition($$result, "v7fojpil", "", `pokeimage-${expansion.id}`)
	})}<button onclick="history.back()" class="mb-5 cursor-pointer text-blue-500 hover:text-blue-600 hover:underline">Ir atras</button>${renderComponent($$result, "TitleGradient", $$TitleGradient, { "className": "font-title text-6xl" }, { "default": ($$result) => renderTemplate`
        Expansión ${expansion.name}` })}</article></section><section class="mx-auto mt-10 max-w-screen-lg p-5 pb-0 sm:p-0 sm:pb-10"><article class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">${expansionCards.data.map((card) => renderTemplate`${renderComponent($$result, "PokemonCards", $$PokemonCards, { "card": card })}`)}</article></section>` })}`;
}, "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/expansions/[expansionId].astro", "self");
var $$file = "C:/Users/IAnge/Desktop/dev/pokemon-universe/src/pages/expansions/[expansionId].astro";
var $$url = "/expansions/[expansionId]";
// \0virtual:astro:page:src/pages/expansions/[expansionId]@_@astro
var page = () => _expansionId__exports;
export { page };
