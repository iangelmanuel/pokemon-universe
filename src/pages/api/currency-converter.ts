import type { FrankFurterApiResponse } from "@/types/frank-furter-response"
import type { APIRoute } from "astro"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const dataRequest = await request.json()

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${dataRequest}&from=EUR&to=USD`
    )
    const dataRes = (await res.json()) as FrankFurterApiResponse

    const currencyInUSD = dataRes.rates.USD

    const currencyFormatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(currencyInUSD)

    return new Response(JSON.stringify(currencyFormatted), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  }

  return new Response(JSON.stringify({ error: "Invalid request" }), {
    status: 400,
    headers: { "Content-Type": "application/json" }
  })
}
