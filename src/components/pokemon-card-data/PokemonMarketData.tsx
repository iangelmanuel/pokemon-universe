import { TabsContent } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonMarketData = ({ pokemon }: Props) => {
  return (
    <TabsContent value="market">Make changes to your account here.</TabsContent>
  )
}
