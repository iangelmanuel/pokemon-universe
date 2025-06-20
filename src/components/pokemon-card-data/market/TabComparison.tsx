import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui-shadcn/card"
import { TabsContent } from "@radix-ui/react-tabs"
import { Badge } from "@/components/ui-shadcn/badge"
import { HoloTrenDirection } from "../shared/HoloTrenDirection"
import { ReverseHoloDirection } from "../shared/ReverseHoloDirection"
import { currencyFormatter } from "@/utils/currency-formatter"

interface MarketData {
  percentage: string
  isPositive: boolean
  isNeutral: boolean
}

type Props = {
  marketData: {
    [key: string]: number
  }
  holoTrend: MarketData
  reverseHoloTrend: MarketData
}

export const TabComparison = ({
  marketData,
  holoTrend,
  reverseHoloTrend
}: Props) => {
  return (
    <TabsContent value="comparison">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Versión Normal */}
        <Card>
          <CardHeader className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Versión Normal</h3>

            <Badge className="bg-blue-900/50">Holofoil</Badge>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Precio Actual</span>

              <span className="text-xl font-bold">
                {currencyFormatter(marketData.trendPrice, {})}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">1 día</span>

                <div className="flex items-center gap-2">
                  <span className="">
                    {currencyFormatter(marketData.avg1, {})}
                  </span>

                  <div className="flex items-center gap-1">
                    <ReverseHoloDirection
                      data={Number(
                        ((marketData.avg1 - marketData.avg7) /
                          marketData.avg7) *
                          100
                      )}
                      isSmall
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-sm">7 días</span>

                <span className="">
                  {currencyFormatter(marketData.avg7, {})}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm">30 días</span>

                <div className="flex items-center gap-2">
                  <span className="">
                    {currencyFormatter(marketData.avg30, {})}
                  </span>

                  <div className="flex items-center gap-1">
                    <HoloTrenDirection
                      data={holoTrend}
                      isSmall
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="px-5">
            <div className="border-muted flex w-full flex-col items-center border-t">
              <span className="pt-3 text-sm font-semibold">
                Rango de Precio
              </span>

              <span className="text-sm">
                {currencyFormatter(marketData.lowPrice, {})} -{" "}
                {currencyFormatter(marketData.avg1, {})}
              </span>
            </div>
          </CardFooter>
        </Card>

        {/* Versión Reverse Holo */}
        {marketData.reverseHoloTrend ? (
          <Card>
            <CardHeader className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Reverse Holo</h3>
              <Badge className="bg-purple-900/50">Reverse</Badge>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Precio Actual</span>
                <span className="text-xl font-bold">
                  {currencyFormatter(marketData.reverseHoloTrend, {})}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">1 día</span>

                  <div className="flex items-center gap-2">
                    <span className="">
                      {currencyFormatter(marketData.reverseHoloAvg1, {})}
                    </span>

                    <div className="flex items-center gap-1">
                      <ReverseHoloDirection
                        data={Number(
                          ((marketData.reverseHoloAvg1 -
                            marketData.reverseHoloAvg7) /
                            marketData.reverseHoloAvg7) *
                            100
                        )}
                        isSmall
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">7 días</span>
                  <span className="">
                    {currencyFormatter(marketData.reverseHoloAvg7, {})}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">30 días</span>

                  <div className="flex items-center gap-2">
                    <span className="">
                      {currencyFormatter(marketData.reverseHoloAvg30, {})}
                    </span>

                    <div className="flex items-center gap-1">
                      <HoloTrenDirection
                        data={reverseHoloTrend}
                        isSmall={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-5">
              <div className="border-muted flex w-full flex-col items-center border-t">
                <span className="pt-3 text-sm font-semibold">
                  Diferencia vs Normal
                </span>

                <span className="text-sm">
                  {currencyFormatter(
                    marketData.trendPrice - marketData.reverseHoloTrend,
                    {}
                  )}
                </span>
              </div>
            </CardFooter>
          </Card>
        ) : (
          <div className="col-span-1 flex items-center justify-center p-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No hay datos para la versión Reverse Holo
            </span>
          </div>
        )}
      </div>
    </TabsContent>
  )
}
