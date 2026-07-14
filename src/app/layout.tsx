import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/context/currency-context";
import { Header } from "@/components/header";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Недвижимость в Таиланде",
  description: "Каталог объектов недвижимости в Таиланде",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const currency = cookieStore.get("currency")?.value ?? "THB";

  return (
    <html lang="ru">
      <body className={inter.className}>
        <CurrencyProvider initialCurrency={currency}>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        </CurrencyProvider>
      </body>
    </html>
  );
}