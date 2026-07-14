import { formatPrice } from "@/lib/format-price";

interface PriceDisplayProps {
  priceTHB: number;
  currencyCode: string;
  exchangeRate: number;
  locale: string;
}

export function PriceDisplay({
  priceTHB,
  currencyCode,
  exchangeRate,
  locale,
}: PriceDisplayProps) {
  return <span>{formatPrice(priceTHB, currencyCode, exchangeRate, locale)}</span>;
}
