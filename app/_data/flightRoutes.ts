type FlightRoute = {
  id: number;
  from: string;
  to: string;
};

export const flightRoutes: FlightRoute[] = [
  { id: 1, from: "نیویورک", to: "لندن" },
  { id: 2, from: "سائوپائولو", to: "توکیو" },
  { id: 3, from: "شیکاگو", to: "دبی" },
  { id: 4, from: "پاریس", to: "سنگاپور" },
  { id: 5, from: "سیدنی", to: "لس آنجلس" },
  { id: 6, from: "قاهره", to: "پکن" },
  { id: 7, from: "استانبول", to: "نیویورک" },
  { id: 8, from: "رم", to: "مادرید" },
  { id: 9, from: "نایروبی", to: "آمستردام" },
  { id: 10, from: "دهلی", to: "فرانکفورت" },
  { id: 11, from: "بانکوک", to: "توکیو" },
  { id: 12, from: "ملبورن", to: "دوحه" },
];
