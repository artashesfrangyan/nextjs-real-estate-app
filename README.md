# Недвижимость в Таиланде

Мини-приложение на Next.js 16 для просмотра списка объектов недвижимости с переключением валют.

## Стек

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS 3
- shadcn/ui (Button, Card, Select)
- Radix UI Select

## Запуск

```bash
npm install
npm run dev
```

## Функции

- Список объектов недвижимости с ценами в THB
- Переключение валют: THB, USD, EUR, RUB
- Курсы конвертации — статические
- Выбор валюты сохраняется в cookie, SSR без мерцания
- Форматирование цен через Intl.NumberFormat

## Цветовая схема

- Фон: #F5F3EF
- Карточки: #FFFFFF
- Текст: #1C1C1C
- Акцент: #1E3A5F