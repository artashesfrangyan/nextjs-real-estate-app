"use client";

import { currencies } from "@/constants/currencies";
import { useCurrency } from "@/hooks/use-currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="currency-select" className="text-sm text-foreground/70">
        Валюта
      </label>
      <Select value={currency} onValueChange={setCurrency}>
        <SelectTrigger
          id="currency-select"
          className="w-24"
          aria-label="Выбор валюты"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((c) => (
            <SelectItem key={c.code} value={c.code}>
              {c.code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}