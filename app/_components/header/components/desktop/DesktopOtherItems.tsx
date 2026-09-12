import Link from "next/link";
import { ChevronDown, PhoneCall, UserSearch } from "lucide-react";

export default function DesktopOtherItems() {
  return (
    <div className="group relative">
      <div className="text-gray-7 cursor-pointer">
        سایر موارد
        <ChevronDown strokeWidth={1} className="mr-0.5 inline xl:mr-2" />
      </div>
      <div className="invisible absolute top-full right-0 z-50 min-w-max translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="*:text-gray-7 flex flex-col text-sm *:rounded-lg">
          <Link
            href="/"
            className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
          >
            <PhoneCall size={18} />
            تماس با ما
          </Link>
          <Link
            href="/"
            className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
          >
            <UserSearch size={18} />
            درباره ما
          </Link>
        </div>
      </div>
    </div>
  );
}
