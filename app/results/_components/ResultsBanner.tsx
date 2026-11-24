import Image from "next/image";
import MobileResultsBanner from "../_assets/banner/mobile-results-banner.png";
import DesktopResultsBanner from "../_assets/banner/desktop-results-banner.png";

export default function ResultsBanner() {
  return (
    <>
      <Image
        src={MobileResultsBanner}
        alt="Mobile results banner"
        className="w-full md:hidden"
      />
      <Image
        src={DesktopResultsBanner}
        alt="Desktop results banner"
        className="w-full max-md:hidden"
      />
    </>
  );
}
