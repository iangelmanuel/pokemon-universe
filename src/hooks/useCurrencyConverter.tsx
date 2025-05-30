import type { FrankFurterApiResponse } from "@/types/frank-furter-response"
import { useState, useEffect } from "react"

export function useCurrencyConverter(price: number | null) {
  const [usdFormatted, setUsdFormatted] = useState<number>(0)

  useEffect(() => {
    if (price === null) return

    async function convertAndFormat() {
      try {
        const res = await fetch("/api/currency-converter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(price)
        })
        const data = await res.json()

        setUsdFormatted(data)
      } catch (e) {
        console.error(e)
        if (price === null) return
        setUsdFormatted(price)
      }
    }

    convertAndFormat()
  }, [price])

  return usdFormatted
}
