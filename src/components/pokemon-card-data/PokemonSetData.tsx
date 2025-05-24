import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui-shadcn/accordion"
import { TabsContent } from "../ui-shadcn/tabs"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonSetData = ({ pokemon }: Props) => {
  return <TabsContent value="set"></TabsContent>
}
