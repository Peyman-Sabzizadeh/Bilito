import { trustBadges } from "@/_data/trustBadges";
import Image from "next/image";

export default function TrustBadges() {
  return (
    <div className="flex items-center justify-between md:gap-5">
      {trustBadges.map((badge) => (
        <Image
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          className="h-16 w-auto md:h-14"
        />
      ))}
    </div>
  );
}
