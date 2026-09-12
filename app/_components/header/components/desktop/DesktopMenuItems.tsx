import Link from "next/link";
import DesktopOtherItems from "./DesktopOtherItems";

export default function DesktopMenuItems() {
  return (
    <div className="flex items-center gap-3 xl:gap-8">
      <Link href="/">صفحه اصلی</Link>
      <Link href="/">بیمه مسافرتی</Link>
      <Link href="/">سفرهای من</Link>
      <DesktopOtherItems />
    </div>
  );
}
