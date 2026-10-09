import { menuItemProps } from "@/_data/menuItems";
import Link from "next/link";

type MobileMenuItemProps = {
  item: menuItemProps;
};

export default function MobileMenuItem({ item }: MobileMenuItemProps) {
  return (
    <Link href={item.link} className="flex items-center gap-2 p-2 text-sm">
      <item.icon size={20} />
      {item.label}
    </Link>
  );
}
