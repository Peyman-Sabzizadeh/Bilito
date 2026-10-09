import Link from "next/link";
import DesktopOtherItems from "./DesktopOtherItems";

export default function DesktopMenuItems() {
  return (
    <nav>
      <ul className="flex items-center gap-3 xl:gap-8">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/">بیمه مسافرتی</Link>
        </li>
        <li>
          <Link href="/">سفرهای من</Link>
        </li>
        <DesktopOtherItems />
      </ul>
    </nav>
  );
}
