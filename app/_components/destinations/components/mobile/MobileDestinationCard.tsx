import Image from "next/image";
import DestinationInfo from "../DestinationInfo";

export default function MobileDestinationCard() {
  return (
    <>
      <Image
        src="/destinations/mobile/kish.png"
        alt="Kish"
        width={236}
        height={156}
      />
      <DestinationInfo />
    </>
  );
}
