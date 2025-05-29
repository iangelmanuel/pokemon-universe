import {
  BarChart3,
  Calendar,
  DollarSign,
  Eye,
  TrendingDown,
  TrendingUp
} from "lucide-react"
import { Badge } from "../ui-shadcn/badge"
import { Card, CardContent } from "../ui-shadcn/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { cn } from "@/lib/utils"
import { Progress } from "../ui-shadcn/progress"
import { TabTrends } from "./market/TabTrends"
import { TabComparison } from "./market/TabComparison"
import { TabAnalytics } from "./market/TabAnalytics"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonMarketData = ({ pokemon }: Props) => {
  const { cardmarket } = pokemon

  const marketData = cardmarket?.prices || {
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
  }

  // Calcular tendencias
  const calculateTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100
    return {
      percentage: Math.abs(change).toFixed(1),
      isPositive: change > 0,
      isNeutral: Math.abs(change) < 1
    }
  }

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
      <section className="space-y-6">
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
                    €{marketData.trendPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-1">
                    {holoTrend.isPositive ? (
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-medium",
                        holoTrend.isPositive
                          ? "text-emerald-500"
                          : "text-red-500"
                      )}
                    >
                      {holoTrend.percentage}%
                    </span>
                  </div>
                </div>

                <p className="mt-1 text-sm">Precio tendencia actual</p>
              </div>

              <div className="flex flex-col gap-2">
                <Badge
                  variant="outline"
                  className="text-xs"
                >
                  <span className="font-semibold">Fecha de actualización:</span>{" "}
                  {cardmarket.updatedAt
                    ? new Date(cardmarket.updatedAt).toLocaleDateString("es-ES")
                    : "N/A"}
                </Badge>

                <Badge className="border-emerald-700 bg-transparent text-emerald-700 dark:border-emerald-600 dark:bg-emerald-800/50 dark:text-emerald-300">
                  <Eye className="mr-1 h-3 w-3" />
                  Precio Promedio: €{marketData.averageSellPrice}
                </Badge>

                <Badge className="dark:text-gray-200">
                  Rango: €{marketData.lowPrice} - €{marketData.avg1}
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
                <span>€{marketData.lowPrice}</span>
                <span>€{marketData.trendPrice}</span>
                <span>€{marketData.avg1}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs de análisis detallado */}
        <Tabs
          defaultValue="trends"
          className="w-full"
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
      </section>
    </TabsContent>
  )
}
