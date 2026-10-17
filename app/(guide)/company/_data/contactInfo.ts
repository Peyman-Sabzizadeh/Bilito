import { type LucideIcon, Mail, MapPin, Phone } from "lucide-react";

export type ContactInfo = {
  title: string;
  info: string;
  Icon: LucideIcon;
};

export const contactInfo: ContactInfo[] = [
  {
    title: "آدرس",
    info: "تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.",
    Icon: MapPin,
  },
  {
    title: "شماره تماس",
    info: "021-4045",
    Icon: Phone,
  },
  {
    title: "ایمیل",
    info: "peyman.front.developer@gmail.com",
    Icon: Mail,
  },
];
