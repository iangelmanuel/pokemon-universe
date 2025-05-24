import { TabsContent } from "../ui-shadcn/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui-shadcn/accordion"
import type { PokemonCardResponse } from "@/types/pokemon-card-response"
import { Badge } from "../ui-shadcn/badge"
import { energyTypeImage } from "@/constant/energy-types"

type Props = {
  pokemon: PokemonCardResponse["data"]
}

export const PokemonAttackData = ({ pokemon }: Props) => {
  return (
    <TabsContent
      value="attacks"
      className="flex flex-col gap-4"
    >
      {pokemon?.attacks?.map((atk) => (
        <Accordion
          type="multiple"
          className="border-muted rounded-lg border px-5 shadow-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  {atk.cost.map((energy, index) => (
                    <img
                      key={`energy-cost-to-attack-${index}`}
                      src={
                        energyTypeImage[
                          energy as keyof typeof energyTypeImage
                        ] ?? ""
                      }
                      alt={energy}
                      className="h-6 w-6"
                    />
                  ))}
                  <span className="font-title ml-2 text-lg">
                    {atk.name}
                  </span>{" "}
                </div>

                <div>
                  <span className="text-xl">
                    {atk.damage ? ` ${atk.damage}` : " -"}
                  </span>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="mb-5 text-lg">
                {atk.text === "" ? "Sin descripción 😅" : atk.text}
              </p>

              <Badge
                variant="colorless"
                className="font-semibold"
              >
                {atk.convertedEnergyCost} de energía
              </Badge>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </TabsContent>
  )
}
