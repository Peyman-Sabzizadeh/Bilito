import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { desktopMenuItems } from "@/_data/desktopMenuItems";

export default function DesktopMenuItems() {
  return (
    <nav>
      <ul className="flex items-center gap-3 xl:gap-8">
        {desktopMenuItems.map(({ label, link, children }) =>
          children ? (
            <li key={label} className="group relative">
              <button className="text-gray-7 cursor-pointer">
                {label}
                <ChevronDown
                  strokeWidth={1}
                  className="mr-0.5 inline xl:mr-2"
                />
              </button>
              <ul className="invisible absolute top-full right-0 z-50 min-w-max translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {children.map(({ label, link, Icon }) => (
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
          ) : (
            <li key={label}>
              <Link href={link!}>{label}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
