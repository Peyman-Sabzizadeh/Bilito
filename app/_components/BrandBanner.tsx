import Image from "next/image";
import MobileBrandBanner from "../_assets/brand/mobile-brand-banner.svg";
import DesktopBrandBanner from "../_assets/brand/desktop-brand-banner.svg";

export default function BrandBanner() {
  return (
    <>
      <Image
        src={MobileBrandBanner}
        alt="Mobile brand banner"
        className="w-full md:hidden"
      />
      <Image
        src={DesktopBrandBanner}
        alt="Desktop brand banner"
        className="w-full max-md:hidden"
      />
    </>
  );
}
