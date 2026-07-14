"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface CurrencyContextValue {
  currency: string;
  setCurrency: (code: string) => void;
}

export const CurrencyContext = createContext<CurrencyContextValue | null>(null);

interface CurrencyProviderProps {
  children: ReactNode;
  initialCurrency: string;
}

export function CurrencyProvider({
  children,
  initialCurrency,
}: CurrencyProviderProps) {
  const [currency, setCurrencyState] = useState(initialCurrency);

  const setCurrency = useCallback((code: string) => {
    setCurrencyState(code);
    document.cookie = `currency=${code};path=/;max-age=31536000`;
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}