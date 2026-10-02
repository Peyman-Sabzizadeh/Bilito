import ContactInfo from "../ContactInfo";
import QuickLinks from "../QuickLinks";

export default function MobileFooter() {
  return (
    <div className="flex flex-col gap-8">
      <ContactInfo />
      <div className="flex items-center justify-between gap-6">
        <QuickLinks />
      </div>
    </div>
  );
}
