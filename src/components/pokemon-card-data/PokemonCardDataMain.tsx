import type { PokemonCardResponse } from "@/types/pokemon-card-response"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonCardDataMain = ({ pokemon }: Props) => {
  return (
    <article className="py-20">
      <div className="relative w-full">
        <h2 className="font-title text-4xl font-bold">{pokemon.name}</h2>

        <div>
          <p className="border-l-primary border-l-2 pl-4 text-sm">
            National Pokédex #{pokemon.nationalPokedexNumbers}
          </p>
        </div>
      </div>
    </article>
  )
}
