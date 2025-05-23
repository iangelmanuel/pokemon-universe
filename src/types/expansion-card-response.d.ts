export interface ExpansionCardResponse {
  data: ExpansionCardDatum[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface ExpansionCardDatum {
  id: string
  name: string
  supertype: Supertype
  subtypes: Subtype[]
  hp?: string
  types?: RetreatCost[]
  rules?: string[]
  attacks?: Attack[]
  weaknesses?: Resistance[]
  retreatCost?: RetreatCost[]
  convertedRetreatCost?: number
  set: Set
  number: string
  artist?: string
  rarity: Rarity
  nationalPokedexNumbers?: number[]
  legalities: DatumLegalities
  regulationMark: RegulationMark
  images: DatumImages
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
  evolvesTo?: string[]
  flavorText?: string
  evolvesFrom?: string
  abilities?: Ability[]
  resistances?: Resistance[]
}

export interface Ability {
  name: string
  text: string
  type: Type
}

export enum Type {
  Ability = "Ability"
}

export interface Attack {
  name: string
  cost: RetreatCost[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export enum RetreatCost {
  Colorless = "Colorless",
  Darkness = "Darkness",
  Fighting = "Fighting",
  Fire = "Fire",
  Grass = "Grass",
  Lightning = "Lightning",
  Metal = "Metal",
  Psychic = "Psychic",
  Water = "Water"
}

export interface Cardmarket {
  url: string
  updatedAt: CardmarketUpdatedAt
  prices: { [key: string]: number }
}

export enum CardmarketUpdatedAt {
  The20250522 = "2025/05/22"
}

export interface DatumImages {
  small: string
  large: string
}

export interface DatumLegalities {
  unlimited: Expanded
  expanded: Expanded
  standard?: Expanded
}

export enum Expanded {
  Legal = "Legal"
}

export enum Rarity {
  Common = "Common",
  Rare = "Rare",
  RareHolo = "Rare Holo",
  RareHoloV = "Rare Holo V",
  RareHoloVMAX = "Rare Holo VMAX",
  RareRainbow = "Rare Rainbow",
  RareSecret = "Rare Secret",
  RareUltra = "Rare Ultra",
  Uncommon = "Uncommon"
}

export enum RegulationMark {
  D = "D"
}

export interface Resistance {
  type: RetreatCost
  value: string
}

export interface Set {
  id: ID
  name: Name
  series: Name
  printedTotal: number
  total: number
  legalities: SetLegalities
  ptcgoCode: PtcgoCode
  releaseDate: ReleaseDate
  updatedAt: SetUpdatedAt
  images: SetImages
}

export enum ID {
  Swsh1 = "swsh1"
}

export interface SetImages {
  symbol: string
  logo: string
}

export interface SetLegalities {
  unlimited: Expanded
  expanded: Expanded
}

export enum Name {
  SwordShield = "Sword & Shield"
}

export enum PtcgoCode {
  SSH = "SSH"
}

export enum ReleaseDate {
  The20200207 = "2020/02/07"
}

export enum SetUpdatedAt {
  The20200814093500 = "2020/08/14 09:35:00"
}

export enum Subtype {
  Basic = "Basic",
  Item = "Item",
  PokémonTool = "Pokémon Tool",
  Special = "Special",
  Stage1 = "Stage 1",
  Stage2 = "Stage 2",
  Supporter = "Supporter",
  V = "V",
  Vmax = "VMAX"
}

export enum Supertype {
  Energy = "Energy",
  Pokémon = "Pokémon",
  Trainer = "Trainer"
}

export interface Tcgplayer {
  url: string
  updatedAt: CardmarketUpdatedAt
  prices: Prices
}

export interface Prices {
  holofoil?: Holofoil
  normal?: Holofoil
  reverseHolofoil?: Holofoil
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number | null
}
