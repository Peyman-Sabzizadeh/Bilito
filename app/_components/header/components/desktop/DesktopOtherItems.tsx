import Link from "next/link";
import { ChevronDown, PhoneCall, ShoppingCart, UserSearch } from "lucide-react";

export default function DesktopOtherItems() {
  return (
    <li className="group relative">
      <button className="text-gray-7 cursor-pointer">
        سایر موارد
        <ChevronDown strokeWidth={1} className="mr-0.5 inline xl:mr-2" />
      </button>
      <ul className="invisible absolute top-full right-0 z-50 min-w-max translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <li className="*:text-gray-7 flex flex-col text-sm *:rounded-lg">
          <Link
            href="/how-to-buy"
            className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
          >
            <ShoppingCart size={18} />
            نحوه خرید بلیط
          </Link>
        </li>
        <li className="*:text-gray-7 flex flex-col text-sm *:rounded-lg">
          <Link
            href="/company?tab=contact"
            className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
          >
            <PhoneCall size={18} />
            تماس با ما
          </Link>
        </li>
        <li className="*:text-gray-7 flex flex-col text-sm *:rounded-lg">
          <Link
            href="/company?tab=about"
            className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
          >
            <UserSearch size={18} />
            درباره ما
          </Link>
        </li>
      </ul>
    </li>
  );
}
