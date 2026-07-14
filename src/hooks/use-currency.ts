"use client";

import { useContext, useCallback } from "react";
import { CurrencyContext } from "@/context/currency-context";
import { getCurrencyConfig } from "@/constants/currencies";

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }

  const { currency, setCurrency } = context;

  const formatPrice = useCallback(
    (priceTHB: number): string => {
      const config = getCurrencyConfig(currency);
      const converted = priceTHB * config.rate;

      return new Intl.NumberFormat(config.locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: currency === "RUB" ? 0 : 2,
        maximumFractionDigits: currency === "RUB" ? 0 : 2,
      }).format(converted);
    },
    [currency]
  );

  return { currency, setCurrency, formatPrice };
}