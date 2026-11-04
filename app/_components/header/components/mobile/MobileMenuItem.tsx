import { mobileMenuItemProps } from "@/_data/mobileMenuItems";
import Link from "next/link";

export default function MobileMenuItem({
  item,
}: {
  item: mobileMenuItemProps;
}) {
  return (
    <Link href={item.link} className="flex items-center gap-2 p-2 text-sm">
      <item.icon size={20} />
      {item.label}
    </Link>
  );
}
