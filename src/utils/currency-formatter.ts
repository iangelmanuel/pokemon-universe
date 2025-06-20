type CurrencyFormatterProps = {
  locale?: string
  currency?: string
  noDecimals?: boolean
}

export const currencyFormatter = (
  value: number | string,
  {
    locale = "en-US",
    currency = "EUR",
    noDecimals = false
  }: CurrencyFormatterProps
) => {
  const toNumber = Number(value)

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: noDecimals ? 0 : 2,
    maximumFractionDigits: noDecimals ? 0 : 2
  }).format(toNumber)
}
