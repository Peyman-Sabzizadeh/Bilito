import ContactInfo from "../ContactInfo";
import QuickLinks from "../QuickLinks";
import StoreLink from "../StoreLink";
import TrustBadges from "../TrustBadges";
import SocialLinks from "../SocialLinks";
import ScrollToTopButton from "../ScrollToTopButton";

export default function MobileFooter() {
  return (
    <footer className="flex flex-col gap-8 md:hidden">
      <ContactInfo />
      <div className="flex justify-between gap-6">
        <QuickLinks />
        <div className="flex flex-col gap-3">
          <StoreLink store="Play Store" />
          <StoreLink store="Apple Store" />
        </div>
      </div>
      <TrustBadges />
      <SocialLinks />
      <ScrollToTopButton />
    </footer>
  );
}
