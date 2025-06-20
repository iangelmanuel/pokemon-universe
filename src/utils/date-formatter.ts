type ObjectDateFormatter = {
  locale?: Intl.LocalesArgument
  formatOptions?: Intl.DateTimeFormatOptions
}

const defaultOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
}

export function dateFormatter(
  date: number | string | Date,
  { locale = "en-ES", formatOptions = defaultOptions }: ObjectDateFormatter
) {
  return new Date(date).toLocaleDateString(locale, {
    ...formatOptions
  })
}
