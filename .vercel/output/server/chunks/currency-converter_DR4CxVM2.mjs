import { n as __exportAll } from "./rolldown-runtime_DYf_mQCB.mjs";
// src/pages/api/currency-converter.ts
var currency_converter_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const dataRequest = await request.json();
		const currencyInUSD = (await (await fetch(`https://api.frankfurter.app/latest?amount=${dataRequest}&from=EUR&to=USD`)).json()).rates.USD;
		const currencyFormatted = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(currencyInUSD);
		return new Response(JSON.stringify(currencyFormatted), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	}
	return new Response(JSON.stringify({ error: "Invalid request" }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
};
// \0virtual:astro:page:src/pages/api/currency-converter@_@ts
var page = () => currency_converter_exports;
export { page };
