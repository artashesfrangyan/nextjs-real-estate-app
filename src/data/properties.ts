export interface Property {
  id: number;
  title: string;
  image: string;
  priceTHB: number;
  area: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Вилла у моря в Паттайе",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Villa+Pattaya",
    priceTHB: 8500000,
    area: 180,
  },
  {
    id: 2,
    title: "Кондоминиум в центре Бангкока",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Condo+Bangkok",
    priceTHB: 4200000,
    area: 65,
  },
  {
    id: 3,
    title: "Таунхаус на Пхукете",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Townhouse+Phuket",
    priceTHB: 6200000,
    area: 120,
  },
  {
    id: 4,
    title: "Земельный участок на Самуи",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Land+Samui",
    priceTHB: 3200000,
    area: 400,
  },
  {
    id: 5,
    title: "Апартаменты в Чиангмае",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Apartment+Chiangmai",
    priceTHB: 2100000,
    area: 50,
  },
  {
    id: 6,
    title: "Пентхаус с видом на море",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Penthouse+Sea",
    priceTHB: 15000000,
    area: 200,
  },
  {
    id: 7,
    title: "Студия в курортном комплексе",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=Studio+Resort",
    priceTHB: 1800000,
    area: 35,
  },
  {
    id: 8,
    title: "Дом в Хуа Хине",
    image: "https://placehold.co/600x400/1E3A5F/FFFFFF?text=House+Hua+Hin",
    priceTHB: 7300000,
    area: 150,
  },
];