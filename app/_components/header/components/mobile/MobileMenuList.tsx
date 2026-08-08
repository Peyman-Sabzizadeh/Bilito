import { menuItems } from "@/_data/menuItems";
import Link from "next/link";

export default function MobileMenuList() {
  return (
    <>
      {menuItems.map((item) => (
        <Link
          href={item.link}
          key={item.label}
          className="flex items-center gap-2 p-2 text-sm"
        >
          <item.icon size={20} />
          {item.label}
        </Link>
      ))}
    </>
  );
}
