import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/_components/icons";
import { ComponentType, SVGProps } from "react";

type SocialLink = {
  name: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialLinks: SocialLink[] = [
  { name: "Telegram", href: "https://t.me/Peyman4s", Icon: TelegramIcon },
  {
    name: "Github",
    href: "https://github.com/Peyman-Sabzizadeh",
    Icon: GithubIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/peyman-sabzizadeh",
    Icon: LinkedinIcon,
  },
];
