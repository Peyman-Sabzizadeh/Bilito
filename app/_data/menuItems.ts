import {
  House,
  PhoneCall,
  Plane,
  ReceiptText,
  ShoppingCart,
  UserSearch,
} from "lucide-react";

export const menuItems = [
  { link: "/", icon: House, label: "صفحه اصلی" },
  { link: "#", icon: ReceiptText, label: "بیمه مسافرتی" },
  { link: "#", icon: Plane, label: "سفرهای من" },
  { link: "/how-to-buy", icon: ShoppingCart, label: "نحوه خرید بلیط" },
  { link: "/company?tab=contact", icon: PhoneCall, label: "تماس با ما" },
  { link: "/company?tab=about", icon: UserSearch, label: "درباره ما" },
];

export type menuItemProps = (typeof menuItems)[number];
