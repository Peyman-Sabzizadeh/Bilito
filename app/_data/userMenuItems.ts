import {
  LucideIcon,
  LogOut,
  Plane,
  Ticket,
  UserRound,
  Wallet,
} from "lucide-react";

export type UserMenuItem = {
  id: string;
  label: string;
  Icon: LucideIcon;
  link?: string;
  variant?: "danger";
};

export const userMenuItems: UserMenuItem[] = [
  { id: "account", label: "حساب کاربری", link: "/account", Icon: UserRound },
  { id: "trips", label: "سفرهای من", link: "/account/trips", Icon: Plane },
  {
    id: "tickets",
    label: "تیکت‌های من",
    link: "/account/tickets",
    Icon: Ticket,
  },
  { id: "wallet", label: "کیف پول", link: "/account/wallet", Icon: Wallet },
  {
    id: "logout",
    label: "خروج از حساب کاربری",
    Icon: LogOut,
    variant: "danger",
  },
];
