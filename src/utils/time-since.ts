export const timeSince = (dateString: string): string => {
  const now = new Date()
  const updated = new Date(dateString)
  const seconds = Math.floor((now.getTime() - updated.getTime()) / 1000)

  const intervals: { [key: string]: number } = {
    año: 31536000,
    mes: 2592000,
    semana: 604800,
    día: 86400,
    hora: 3600,
    minuto: 60,
    segundo: 1
  }

  for (const [name, secondsInUnit] of Object.entries(intervals)) {
    const amount = Math.floor(seconds / secondsInUnit)
    if (amount >= 1) {
      return `Hace ${amount} ${name}${amount > 1 ? "s" : ""}`
    }
  }

  return "Justo ahora"
}
