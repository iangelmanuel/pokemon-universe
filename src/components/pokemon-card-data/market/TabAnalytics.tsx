import { buttonVariants } from "@/components/ui-shadcn/button"
import { Card, CardContent, CardHeader } from "@/components/ui-shadcn/card"
import { TabsContent } from "@/components/ui-shadcn/tabs"
import type { Data } from "@/types/pokemon-card-response"
import clsx from "clsx"
import { timeSince } from "@/utils/time-since"
import { TrendingUp, BarChart3, Eye, ArrowRight } from "lucide-react"

type Props = {
  marketData: {
    [key: string]: number
  }
  pokemon: Data
}

export const TabAnalytics = ({ marketData, pokemon }: Props) => {
  return (
    <TabsContent value="analytics">
      <div className="grid grid-cols-1 gap-6">
        {/* Métricas de mercado */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Métricas de Mercado</h3>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="bg-zinc-200 p-2 dark:bg-zinc-800">
              <span className="text-sm">Volatilidad</span>
              <div className="text-xl font-medium">
                {(
                  ((Math.max(
                    marketData.avg1,
                    marketData.avg7,
                    marketData.avg30
                  ) -
                    Math.min(
                      marketData.avg1,
                      marketData.avg7,
                      marketData.avg30
                    )) /
                    marketData.averageSellPrice) *
                  100
                ).toFixed(1)}
                %
              </div>
            </div>

            <div className="bg-zinc-200 p-2 dark:bg-zinc-800">
              <span className="text-sm">Liquidez</span>
              <div className="text-xl font-medium">Alta</div>
            </div>

            <div className="bg-zinc-200 p-2 dark:bg-zinc-800">
              <span className="text-sm">Tendencia 30d</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span className="text-xl font-medium text-emerald-500">
                  Alcista
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recomendaciones */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Recomendaciones</h3>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="flex items-start gap-3 rounded-lg border border-emerald-800/30 bg-emerald-900/20 p-3">
              <TrendingUp className="mt-0.5 h-4 w-4 text-emerald-500" />
              <div>
                <div className="text-sm font-medium text-emerald-300">
                  Buen momento para vender
                </div>
                <div className="text-xs text-emerald-500/80">
                  Precio por encima del promedio
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-blue-800/30 bg-blue-900/20 p-3">
              <BarChart3 className="mt-0.5 h-4 w-4 text-blue-400" />
              <div>
                <div className="text-sm font-medium text-blue-300">
                  Demanda estable
                </div>
                <div className="text-xs text-blue-400/80">
                  Carta popular en el mercado
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-yellow-800/30 bg-yellow-900/20 p-3">
              <Eye className="mt-0.5 h-4 w-4 text-yellow-400" />
              <div>
                <div className="text-sm font-medium text-yellow-300">
                  Monitorear precio
                </div>
                <div className="text-xs text-yellow-400/80">
                  Posible fluctuación próxima
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información adicional */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Información del Mercado</h3>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="">Última actualización</span>
              <span className="">
                {timeSince(pokemon.cardmarket.updatedAt)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="">Fuente de datos</span>
              <span className="">Cardmarket</span>
            </div>

            <div className="flex justify-between">
              <span className="">Moneda</span>
              <span className="">EUR (€)</span>
            </div>

            <div className="flex justify-between">
              <span className="">Región</span>
              <span className="">America</span>
            </div>

            <div className="border-t border-zinc-700 pt-4">
              <a
                href={pokemon.cardmarket?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2"
                )}
              >
                Ver en Cardmarket
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  )
}
