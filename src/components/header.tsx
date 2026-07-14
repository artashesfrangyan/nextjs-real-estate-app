"use client";

import { CurrencySwitcher } from "@/components/currency-switcher";

export function Header() {
  return (
    <header className="border-b border-accent/10 bg-surface">
      <div className="mx-auto max-w-6xl flex h-14 items-center justify-between px-4">
        <h1 className="text-lg font-semibold text-foreground">
          Недвижимость в Таиланде
        </h1>
        <CurrencySwitcher />
      </div>
    </header>
  );
}