import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs"
import { PokemonAttackData } from "./PokemonAttackData"
import { PokemonStatsData } from "./PokemonStatsData"
import { PokemonMarketData } from "./PokemonMarketData"
import { PokemonSetData } from "./PokemonSetData"
import { energyTypeImage } from "@/constant/energy-types"
import { ChartColumnBig, Images, Store, Swords } from "lucide-react"

type Props = {
  pokemon: PokemonCardResponse["data"]
  isTrainerCard: boolean
}

export const PokemonCardDataMain = ({ pokemon, isTrainerCard }: Props) => {
  return (
    <article className="py-20">
      <section className="mb-10 w-full">
        <h2 className="font-title text-4xl font-bold">{pokemon.name}</h2>

        {!isTrainerCard ? (
          <div className="flex items-center">
            <img
              src={
                energyTypeImage[
                  pokemon.types.join("") as keyof typeof energyTypeImage
                ]
              }
              alt={`${pokemon.subtypes.join("")}`}
              className="mr-3 size-6"
            />

            <p className="border-l-primary border-l-2 pl-4 text-sm">
              National Pokédex #{pokemon.nationalPokedexNumbers}
            </p>
          </div>
        ) : (
          <p className="border-l-primary border-l-2 pl-4 text-sm">
            Tipo de carta:{" "}
            {pokemon.subtypes ? pokemon.subtypes.join(", ") : "N/A"}
          </p>
        )}
      </section>

      <Tabs
        defaultValue="market"
        className="w-full"
      >
        <TabsList className="mb-4 w-full">
          <TabsTrigger
            value="market"
            className="data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white"
          >
            <Store className="mr-2 h-4 w-4" />
            Mercado
          </TabsTrigger>

          <TabsTrigger
            value="attacks"
            className="data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white"
          >
            <Swords className="mr-2 h-4 w-4" />
            {isTrainerCard ? "Regla" : "Ataques"}
          </TabsTrigger>

          <TabsTrigger
            value="stats"
            className="data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white"
          >
            <ChartColumnBig className="mr-2 h-4 w-4" />
            Estadisticas
          </TabsTrigger>

          <TabsTrigger
            value="set"
            className="data-[state=active]:bg-black-ivory flex-1 text-lg data-[state=active]:text-white"
          >
            <Images className="mr-2 h-4 w-4" />
            Colección
          </TabsTrigger>
        </TabsList>

        {/* Pokemon Card Market Data */}
        <PokemonMarketData pokemon={pokemon} />

        {/* Pokemon Card Attack Data */}
        <PokemonAttackData
          pokemon={pokemon}
          isTrainerCard={isTrainerCard}
        />

        {/* Pokemon Card Stats Data */}
        <PokemonStatsData
          pokemon={pokemon}
          isTrainerCard={isTrainerCard}
        />

        {/* Pokemon Card Collection Data */}
        <PokemonSetData pokemon={pokemon} />
      </Tabs>
    </article>
  )
}
