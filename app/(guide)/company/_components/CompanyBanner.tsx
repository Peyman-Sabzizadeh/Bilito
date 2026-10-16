import Image from "next/image";
import MobileCompanyBanner from "../_assets/mobile-company-banner.svg";
import DesktopCompanyBanner from "../_assets/desktop-company-banner.svg";

export default function CompanyBanner() {
  return (
    <>
      <Image
        src={MobileCompanyBanner}
        alt="Mobile company banner"
        className="w-full md:hidden"
      />
      <Image
        src={DesktopCompanyBanner}
        alt="Desktop company banner"
        className="w-full max-md:hidden"
      />
    </>
  );
}
