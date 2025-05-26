import { Card, CardContent, CardHeader, CardTitle } from "../ui-shadcn/card"
import { TabsContent } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { energyTypeImage } from "@/constant/energy-types"
import { Badge } from "../ui-shadcn/badge"
import clsx from "clsx"

type Props = {
  pokemon: PokemonCardResponse["data"]
  isTrainerCard: boolean
}

export const PokemonStatsData = ({ pokemon, isTrainerCard }: Props) => {
  const weaknessesVariant =
    (pokemon.weaknesses
      ?.map((weakness) => weakness.type)
      .join("")
      .toLocaleLowerCase() as any) ?? "default"

  const weaknessesContent = pokemon.weaknesses
    ?.map(({ type, value }) => `${type} ${value}`)
    .join("")

  const resistancesVariant =
    (pokemon.resistances
      ?.map((weakness) => weakness.type)
      .join("")
      .toLocaleLowerCase() as any) ?? "default"

  const resistancesContent = pokemon.resistances
    ?.map(({ type, value }) => `${type} ${value}`)
    .join("")

  return (
    <TabsContent value="stats">
      <Card className="w-full rounded-lg bg-white p-4 shadow-lg">
        <CardHeader>
          <CardTitle>
            <h3 className="font-title text-lg">Detalles de la carta</h3>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div
            className={clsx("flex flex-col gap-2", {
              "border-muted border-b pb-5": !isTrainerCard
            })}
          >
            {pokemon.weaknesses && (
              <div className="flex items-center justify-between">
                <span className="font-semibold">Debilidad:</span>

                <Badge
                  className="text-sm font-semibold"
                  variant={weaknessesVariant}
                >
                  {weaknessesContent ?? "Ninguna"}
                </Badge>
              </div>
            )}

            {pokemon.resistances && (
              <div className="flex items-center justify-between">
                <span className="font-semibold">Resistencia:</span>

                <Badge
                  className="text-sm font-semibold"
                  variant={resistancesVariant}
                >
                  {resistancesContent ?? "No tiene"}
                </Badge>
              </div>
            )}

            <div className="flex items-center justify-between">
              {pokemon.retreatCost && (
                <>
                  <span className="font-semibold">Costo de retirada</span>
                  <div className="flex items-center">
                    {pokemon.retreatCost.map((energy, index) => (
                      <img
                        key={index}
                        src={
                          energyTypeImage[
                            energy as keyof typeof energyTypeImage
                          ] ?? ""
                        }
                        alt={`${energy} energy`}
                        className="h-6 w-6"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div
            className={clsx("flex flex-col gap-2", {
              "mt-5": !isTrainerCard
            })}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Rareza:</span>

              <Badge
                className="text-sm font-semibold"
                variant="default"
              >
                {pokemon.rarity}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">Artista:</span>

              <span>{pokemon.artist ?? "Desconocido"}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">Fecha que salio:</span>

              <span>{pokemon.set.releaseDate}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">Serie:</span>

              <span>{pokemon.set.series}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">Legacy:</span>

              <span>
                {pokemon.set.legalities ? (
                  <span className="text-green-500">Si</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}
