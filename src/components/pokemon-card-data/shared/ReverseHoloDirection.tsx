import { cn } from "@/lib/utils"
import clsx from "clsx"
import { TrendingDown, TrendingUp } from "lucide-react"

type Props = {
  data: number
  isSmall?: boolean
}

export const ReverseHoloDirection = ({ data, isSmall = false }: Props) => {
  const isPositive = data < 0

  const percentage = Math.abs(data).toFixed(2) + "%"
  return (
    <>
      {isPositive ? (
        <TrendingUp
          className={clsx("text-green-500", isSmall ? "size-3" : "size-4")}
        />
      ) : (
        <TrendingDown
          className={clsx("text-red-500", isSmall ? "size-3" : "size-4")}
        />
      )}
      <span
        className={cn(
          "font-medium",
          isPositive ? "text-emerald-500" : "text-red-500",
          isSmall ? "text-xs" : "text-sm"
        )}
      >
        {percentage}
      </span>
    </>
  )
}
