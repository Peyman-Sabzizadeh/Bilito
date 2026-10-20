import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { desktopOtherItems } from "@/_data/desktopOtherItems";

export default function DesktopOtherItems() {
  return (
    <li className="group relative">
      <button className="text-gray-7 cursor-pointer">
        سایر موارد
        <ChevronDown strokeWidth={1} className="mr-0.5 inline xl:mr-2" />
      </button>
      <ul className="invisible absolute top-full right-0 z-50 min-w-max translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {desktopOtherItems.map(({ link, Icon, label }) => (
          <li
            key={label}
            className="*:text-gray-7 flex flex-col text-sm *:rounded-lg"
          >
            <Link
              href={link}
              className="hover:bg-gray-3 flex items-center gap-2 px-3 py-2"
            >
              <Icon size={18} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
