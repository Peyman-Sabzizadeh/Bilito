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
  {
    id: "account",
    label: "اطلاعات حساب کاربری",
    link: "/",
    Icon: UserRound,
  },
  { id: "trips", label: "سفرهای من", link: "/", Icon: Plane },
  { id: "tickets", label: "تیکت‌های من", link: "/", Icon: Ticket },
  { id: "wallet", label: "کیف پول", link: "/", Icon: Wallet },
  {
    id: "logout",
    label: "خروج از حساب کاربری",
    Icon: LogOut,
    variant: "danger",
  },
];
