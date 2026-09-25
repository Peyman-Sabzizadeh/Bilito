import Image from "next/image";
import { Button } from "@heroui/react";

export default function MobileDestinationCard() {
  return (
    <>
      <Image
        src="/destinations/mobile/kish.png"
        alt="Kish"
        width={236}
        height={156}
      />
      <span>Destination info</span>
    </>
  );
}
