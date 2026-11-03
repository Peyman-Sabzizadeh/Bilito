import { LucideIcon, PhoneCall, ShoppingCart, UserSearch } from "lucide-react";

type MenuChild = {
  label: string;
  link: string;
  Icon: LucideIcon;
};

type MenuItem = {
  label: string;
  link?: string;
  children?: MenuChild[];
};

export const desktopMenuItems: MenuItem[] = [
  { label: "صفحه اصلی", link: "/" },
  { label: "بیمه مسافرتی", link: "/" },
  { label: "سفرهای من", link: "/" },
  {
    label: "سایر موارد",
    children: [
      { label: "راهنمای خرید بلیط", link: "/how-to-buy", Icon: ShoppingCart },
      { label: "تماس با ما", link: "/company?tab=contact", Icon: PhoneCall },
      { label: "درباره ما", link: "/company?tab=about", Icon: UserSearch },
    ],
  },
];
