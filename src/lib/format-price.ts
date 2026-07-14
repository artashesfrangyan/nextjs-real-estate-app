export function formatPrice(
  priceTHB: number,
  currencyCode: string,
  exchangeRate: number,
  locale: string
): string {
  const converted = priceTHB * exchangeRate;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: currencyCode === "RUB" ? 0 : 2,
    maximumFractionDigits: currencyCode === "RUB" ? 0 : 2,
  }).format(converted);
}