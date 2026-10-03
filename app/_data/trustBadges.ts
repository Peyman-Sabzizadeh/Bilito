import { StaticImageData } from "next/image";

import iranianAirlinesAssociation from "@/_assets/badges/iranian-airlines-association.svg";
import caoiri from "@/_assets/badges/caoiri.svg";
import aira from "@/_assets/badges/aira.svg";
import inamad from "@/_assets/badges/inamad.svg";
import passengerRights from "@/_assets/badges/passenger-rights.svg";

type TrustBadge = {
  src: StaticImageData;
  alt: string;
};

export const trustBadges: TrustBadge[] = [
  {
    src: iranianAirlinesAssociation,
    alt: "انجمن شرکت های هواپیمایی",
  },
  {
    src: caoiri,
    alt: "سازمان هواپیمایی کشوری",
  },
  {
    src: aira,
    alt: "دامنه نرخ بلیط شرکت های هواپیمایی",
  },
  {
    src: inamad,
    alt: "نماد اعتماد الکترونیکی",
  },
  {
    src: passengerRights,
    alt: "حقوق مسافر",
  },
];
