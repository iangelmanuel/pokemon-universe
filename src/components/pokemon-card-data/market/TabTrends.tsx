import { Card, CardHeader, CardContent } from "@/components/ui-shadcn/card"
import { TabsContent } from "@radix-ui/react-tabs"
import { PriceDistributionChart } from "../charts/price-distribution-chart"
import { PriceTrendChart } from "../charts/price-trend-chart"

type Props = {
  priceHistory: {
    period: string
    holo: number
    reverseHolo: number
  }[]
  marketData: {
    [key: string]: number
  }
}

export const TabTrends = ({ priceHistory, marketData }: Props) => {
  const hasReverseHolo = priceHistory.some((entry) => entry.reverseHolo > 0)

  return (
    <TabsContent
      value="trends"
      className="mt-6"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Gráfico de tendencias */}
        <Card>
          <CardHeader>
            <h3 className="mb-4 text-lg font-medium">Evolución de Precios</h3>
          </CardHeader>

          <CardContent>
            <PriceTrendChart
              data={priceHistory}
              hasReverseHolo={hasReverseHolo}
            />

            <p className="mt-4 text-xs">
              Datos basados en promedios de mercado de los últimos 30 días
            </p>
          </CardContent>
        </Card>

        {/* Distribución de precios */}
        <Card>
          <CardHeader>
            <h3 className="mb-4 text-lg font-medium">
              Distribución de Precios
            </h3>
          </CardHeader>

          <CardContent>
            <PriceDistributionChart
              data={[
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
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  )
}
