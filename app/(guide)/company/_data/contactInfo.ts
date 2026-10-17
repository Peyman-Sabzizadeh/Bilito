import { Mail, MapPin, Phone } from "lucide-react";

type ContactInfo = {
  title: string;
  info: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const contactInfo: ContactInfo[] = [
  {
    title: "آدرس: ",
    info: "تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی",
    Icon: MapPin,
  },
  {
    title: "شماره تماس: ",
    info: "021-4045",
    Icon: Phone,
  },
  {
    title: "ایمیل: ",
    info: "peyman.front.developer@gmail.com",
    Icon: Mail,
  },
];
