import { Badge } from "../ui-shadcn/badge"
import { Card, CardContent, CardFooter, CardHeader } from "../ui-shadcn/card"
import { TabsContent } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonSetData = ({ pokemon }: Props) => {
  return (
    <TabsContent value="set">
      <Card className="border-zinc-700 bg-zinc-800/50">
        <CardHeader>
          <div className="mb-6 flex items-center gap-4">
            <div className="relative size-16">
              <img
                src={pokemon.set.images.symbol || "/placeholder.svg"}
                alt={`${pokemon.set.name} symbol`}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-zinc-200">
                {pokemon.set.name}
              </h3>
              <p className="text-zinc-400">{pokemon.set.series} Series</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-between md:flex-row">
          <div>
            <p className="text-sm text-zinc-400">Release Date</p>
            <p className="text-zinc-200">{pokemon.set.releaseDate}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Total Cards</p>
            <p className="text-zinc-200">{pokemon.set.total}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Card Number</p>
            <p className="text-zinc-200">
              {pokemon.number}/{pokemon.set.total}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex-col">
          <div className="relative mb-6 h-24 w-full">
            <img
              src={pokemon.set.images.logo || "/placeholder.svg"}
              alt={`${pokemon.set.name} logo`}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <Badge
              variant="outline"
              className="border-emerald-700 text-sm text-emerald-400"
            >
              {pokemon.set.legalities.unlimited} in Unlimited Format
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
