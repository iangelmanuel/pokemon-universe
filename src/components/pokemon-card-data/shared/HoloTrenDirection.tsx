import { cn } from "@/lib/utils"
import type { MarketData } from "@/types/holo-trend"
import { clsx } from "clsx"
import { TrendingDown, TrendingUp } from "lucide-react"

type Props = {
  data: MarketData
  isSmall?: boolean
}

export const HoloTrenDirection = ({ data, isSmall = false }: Props) => {
  return (
    <>
      {data.isPositive ? (
        <TrendingUp
          className={clsx("text-emerald-500", isSmall ? "size-3" : "size-4")}
        />
      ) : (
        <TrendingDown
          className={clsx("text-red-500", isSmall ? "size-3" : "size-4")}
        />
      )}
      <span
        className={cn(
          "font-medium",
          data.isPositive ? "text-emerald-500" : "text-red-500",
          isSmall ? "text-xs" : "text-sm"
        )}
      >
        {data.percentage}
      </span>
    </>
  )
}
