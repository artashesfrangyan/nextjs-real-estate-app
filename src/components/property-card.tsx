import type { Property } from "@/data/properties";
import { Card, CardContent } from "@/components/ui/card";
import { PriceDisplay } from "@/components/price-display";
import { getCurrencyConfig } from "@/constants/currencies";

interface PropertyCardProps {
  property: Property;
  currency: string;
}

export function PropertyCard({ property, currency }: PropertyCardProps) {
  const config = getCurrencyConfig(currency);

  return (
    <Card className="overflow-hidden">
      <div
        className="h-48 w-full bg-accent flex items-center justify-center text-surface/80 text-lg font-medium"
        role="img"
        aria-label={property.title}
      >
        {property.title.split(" ").slice(0, 2).join(" ")}
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-medium text-base leading-snug">{property.title}</h3>
        <p className="text-sm text-foreground/60">
          Площадь: {property.area} м²
        </p>
        <p className="text-lg font-semibold text-accent">
          <PriceDisplay
            priceTHB={property.priceTHB}
            currencyCode={config.code}
            exchangeRate={config.rate}
            locale={config.locale}
          />
        </p>
      </CardContent>
    </Card>
  );
}