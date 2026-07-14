export interface CurrencyConfig {
  code: string;
  rate: number;
  locale: string;
}

export const currencies: CurrencyConfig[] = [
  { code: "THB", rate: 1, locale: "th-TH" },
  { code: "USD", rate: 0.0286, locale: "en-US" },
  { code: "EUR", rate: 0.0263, locale: "de-DE" },
  { code: "RUB", rate: 2.57, locale: "ru-RU" },
];

export const defaultCurrency = "THB";

export function getCurrencyConfig(code: string): CurrencyConfig {
  const found = currencies.find((c) => c.code === code);
  return found ?? currencies[0];
}