export interface ExpansionsReponse {
  data: ExpansionsDatum[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface ExpansionsDatum {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode?: string
  releaseDate: string
  updatedAt: string
  images: Images
}

export interface Images {
  symbol: string
  logo: string
}

export interface Legalities {
  unlimited: Expanded
  expanded?: Expanded
  standard?: Expanded
}

export enum Expanded {
  Legal = "Legal"
}
