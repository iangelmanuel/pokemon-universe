import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from "recharts"

import {
  ChartContainer,
  ChartTooltipContent
} from "@/components/ui-shadcn/chart"

interface Props {
  data: Array<{
    period: string
    holo: number
    reverseHolo: number
  }>
  hasReverseHolo: boolean
}

export function PriceTrendChart({ data, hasReverseHolo }: Props) {
  return (
    <ChartContainer
      config={{
        holo: {
          label: "Normal",
          color: "hsl(var(--chart-3))"
        },
        reverseHolo: {
          label: `${hasReverseHolo ? "Reverse Holo" : "N/A"}`,
          color: "hsl(var(--chart-5))"
        }
      }}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart data={data}>
          <XAxis
            dataKey="period"
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `€${value}`}
          />
          <Tooltip
            content={<ChartTooltipContent />}
            cursor={{ stroke: "rgba(255,255,255,0.1)" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="holo"
            stroke="var(--color-holo)"
            strokeWidth={3}
            dot={{ fill: "var(--color-holo)", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "var(--color-holo)", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="reverseHolo"
            stroke="var(--color-reverseHolo)"
            strokeWidth={3}
            dot={{ fill: "var(--color-reverseHolo)", strokeWidth: 2, r: 4 }}
            activeDot={{
              r: 6,
              stroke: "var(--color-reverseHolo)",
              strokeWidth: 2
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
