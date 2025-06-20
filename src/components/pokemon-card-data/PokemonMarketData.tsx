import { BarChart3, Calendar, DollarSign, Eye, TrendingUp } from "lucide-react"
import { Badge } from "../ui-shadcn/badge"
import { Card, CardContent } from "../ui-shadcn/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { Progress } from "../ui-shadcn/progress"
import { TabTrends } from "./market/TabTrends"
import { TabComparison } from "./market/TabComparison"
import { TabAnalytics } from "./market/TabAnalytics"
import { priceEmpty } from "@/constant/price-empty"
import { calculateTrend } from "@/utils/calculate-trend"
import { currencyFormatter } from "@/utils/currency-formatter"
import { HoloTrenDirection } from "./shared/HoloTrenDirection"
import { dateFormatter } from "@/utils/date-formatter"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonMarketData = ({ pokemon }: Props) => {
  const { cardmarket } = pokemon
  const marketData = cardmarket?.prices || priceEmpty

  const holoTrend = calculateTrend(marketData.avg7, marketData.avg30)

  const reverseHoloTrend = calculateTrend(
    marketData.reverseHoloAvg7,
    marketData.reverseHoloAvg30
  )

  // Datos para gráficos
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
  ]

  return (
    <TabsContent value="market">
      <Card>
        <CardContent>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">Precio de Mercado</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-emerald-500 md:text-5xl">
                  {currencyFormatter(marketData.trendPrice, {})}
                </span>

                <div className="flex items-center gap-1">
                  <HoloTrenDirection data={holoTrend} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Badge
                variant="outline"
                className="text-xs"
              >
                <span className="font-semibold">Fecha de actualización:</span>{" "}
                {cardmarket.updatedAt
                  ? dateFormatter(cardmarket.updatedAt, {})
                  : "N/A"}
              </Badge>

              <Badge className="border-emerald-700 bg-transparent text-emerald-700 dark:border-emerald-600 dark:bg-emerald-800/50 dark:text-emerald-300">
                <Eye className="mr-1 h-3 w-3" />
                Precio Promedio:{" "}
                {currencyFormatter(marketData.averageSellPrice, {})}
              </Badge>

              <Badge className="dark:text-gray-200">
                Rango: {currencyFormatter(marketData.lowPrice, {})} -{" "}
                {currencyFormatter(marketData.avg1, {})}
              </Badge>
            </div>
          </div>

          {/* Barra de progreso del precio */}
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-xs">
              <span>Precio Mínimo</span>
              <span>Precio Actual</span>
              <span>Precio Máximo</span>
            </div>

            <Progress
              value={
                ((marketData.trendPrice - marketData.lowPrice) /
                  (marketData.avg1 - marketData.lowPrice)) *
                100
              }
            />

            <div className="mt-1 flex justify-between text-xs">
              <span>{currencyFormatter(marketData.lowPrice, {})}</span>
              <span>{currencyFormatter(marketData.trendPrice, {})}</span>
              <span>{currencyFormatter(marketData.avg1, {})}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs de análisis detallado */}
      <Tabs
        defaultValue="trends"
        className="my-6 w-full"
      >
        <TabsList className="w-full">
          <TabsTrigger
            value="trends"
            className="data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Tendencias
          </TabsTrigger>

          <TabsTrigger
            value="comparison"
            className="data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Comparación
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-black-ivory flex-1 data-[state=active]:text-white"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Análisis
          </TabsTrigger>
        </TabsList>

        <TabTrends
          priceHistory={priceHistory}
          marketData={marketData}
        />

        <TabComparison
          marketData={marketData}
          holoTrend={holoTrend}
          reverseHoloTrend={reverseHoloTrend}
        />

        <TabAnalytics
          marketData={marketData}
          pokemon={pokemon}
        />
      </Tabs>
    </TabsContent>
  )
}
