import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

import {
  ChartContainer,
  ChartTooltipContent
} from "@/components/ui-shadcn/chart"

interface PriceDistributionChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
}

export function PriceDistributionChart({ data }: PriceDistributionChartProps) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Precio",
          color: "hsl(var(--chart-1))"
        }
      }}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            content={<ChartTooltipContent />}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
          />
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
