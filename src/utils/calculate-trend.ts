// Calcular tendencias
export const calculateTrend = (current: number, previous: number) => {
  const change = ((current - previous) / previous) * 100
  return {
    percentage: `${change < 0 ? "-" : ""}${Math.abs(change).toFixed(1)}%`,
    isPositive: change > 0,
    isNeutral: Math.abs(change) < 1
  }
}
