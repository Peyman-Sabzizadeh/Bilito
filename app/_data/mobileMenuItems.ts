import {
  House,
  PhoneCall,
  Plane,
  ReceiptText,
  ShoppingCart,
  User,
  UserSearch,
} from "lucide-react";

export const mobileMenuItems = [
  { link: "/", icon: House, label: "صفحه اصلی" },
  { link: "#", icon: ReceiptText, label: "بیمه مسافرتی" },
  { link: "#", icon: Plane, label: "سفرهای من" },
  { link: "#", icon: User, label: "حساب کاربری" },
  { link: "/how-to-buy", icon: ShoppingCart, label: "راهنمای خرید بلیط" },
  { link: "/company?tab=contact", icon: PhoneCall, label: "تماس با ما" },
  { link: "/company?tab=about", icon: UserSearch, label: "درباره ما" },
];

export type mobileMenuItemProps = (typeof mobileMenuItems)[number];
