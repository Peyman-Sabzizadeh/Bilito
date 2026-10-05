import { Separator } from "@heroui/react";
import StoreLink from "../StoreLink";
import ApplicationInfo from "./ApplicationInfo";
import ContactInfo from "../ContactInfo";
import QuickLinks from "../QuickLinks";
import SocialLinks from "../SocialLinks";
import TrustBadges from "../TrustBadges";
import ScrollToTopButton from "../ScrollToTopButton";

export default function DesktopFooter() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <ApplicationInfo />
        <div className="flex gap-6">
          <StoreLink store="Play Store" />
          <StoreLink store="Apple Store" />
        </div>
      </div>
      <Separator />
      <div className="space-y-6">
        <div className="flex items-start gap-58">
          <ContactInfo />
          <QuickLinks />
        </div>
        <div className="flex items-center justify-between">
          <SocialLinks />
          <TrustBadges />
        </div>
      </div>
      <Separator />
      <ScrollToTopButton />
    </div>
  );
} 
