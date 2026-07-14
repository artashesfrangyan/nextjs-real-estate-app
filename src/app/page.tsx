import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  const currency = cookieStore.get("currency")?.value ?? "THB";

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} currency={currency} />
      ))}
    </div>
  );
}