type FlightRoute = {
  id: number;
  from: string;
  to: string;
};

export const flightRoutes: FlightRoute[] = [
  { id: 1, from: "نیویورک", to: "لندن" },
  { id: 2, from: "سائو پائولو", to: "توکیو" },
  { id: 3, from: "تورنتو", to: "دبی" },
  { id: 4, from: "پاریس", to: "سنگاپور" },
  { id: 5, from: "سیدنی", to: "لس‌آنجلس" },
  { id: 6, from: "قاهره", to: "پکن" },
  { id: 7, from: "استانبول", to: "نیویورک" },
  { id: 8, from: "بوئنوس آیرس", to: "مادرید" },
  { id: 9, from: "نایروبی", to: "آمستردام" },
  { id: 10, from: "دهلی نو", to: "فرانکفورت" },
  { id: 11, from: "مکزیکوسیتی", to: "سئول" },
  { id: 12, from: "اوکلند", to: "دوحه" },
];
