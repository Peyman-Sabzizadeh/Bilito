import ContactInfo from "../ContactInfo";
import QuickLinks from "../QuickLinks";
import StoreLink from "../StoreLink";
import TrustBadges from "../TrustBadges";

export default function MobileFooter() {
  return (
    <div className="flex flex-col gap-8">
      <ContactInfo />
      <div className="flex justify-between gap-6">
        <QuickLinks />
        <div className="flex flex-col gap-3">
          <StoreLink store="Play Store" />
          <StoreLink store="Apple Store" />
        </div>
      </div>
      <TrustBadges />
    </div>
  );
}
