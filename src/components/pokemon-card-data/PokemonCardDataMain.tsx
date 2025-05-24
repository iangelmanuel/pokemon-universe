import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs"
import { PokemonAttackData } from "./PokemonAttackData"
import { PokemonStatsData } from "./PokemonStatsData"
import { PokemonMarketData } from "./PokemonMarketData"
import { PokemonSetData } from "./PokemonSetData"
import { energyTypeImage } from "@/constant/energy-types"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonCardDataMain = ({ pokemon }: Props) => {
  return (
    <article>
      <section className="py-20">
        <div className="relative w-full">
          <h2 className="font-title text-4xl font-bold">{pokemon.name}</h2>

          <div className="flex items-center">
            <img
              src={
                energyTypeImage[
                  pokemon.types.join("") as keyof typeof energyTypeImage
                ]
              }
              alt={`${pokemon.types.join("")}`}
              className="mr-3 size-6"
            />

            <p className="border-l-primary border-l-2 pl-4 text-sm">
              National Pokédex #{pokemon.nationalPokedexNumbers}
            </p>
          </div>
        </div>
      </section>

      <Tabs defaultValue="account">
        <TabsList className="mb-4">
          <TabsTrigger
            value="attacks"
            className="cursor-pointer text-lg"
          >
            Ataques
          </TabsTrigger>

          <TabsTrigger
            value="stats"
            className="cursor-pointer text-lg"
          >
            Estadisticas
          </TabsTrigger>

          <TabsTrigger
            value="market"
            className="cursor-pointer text-lg"
          >
            Mercado
          </TabsTrigger>

          <TabsTrigger
            value="set"
            className="cursor-pointer text-lg"
          >
            Colección
          </TabsTrigger>
        </TabsList>

        {/* Pokemon Card Attack Data */}
        <PokemonAttackData pokemon={pokemon} />

        {/* Pokemon Card Stats Data */}
        <PokemonStatsData pokemon={pokemon} />

        {/* Pokemon Card Market Data */}
        <PokemonMarketData pokemon={pokemon} />

        {/* Pokemon Card Collection Data */}
        <PokemonSetData pokemon={pokemon} />
      </Tabs>
    </article>
  )
}
