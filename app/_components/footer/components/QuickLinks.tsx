import { quickLinks } from "@/_data/quickLinks";
import { Separator } from "@heroui/react";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <nav aria-labelledby="quick-links-title">
      <h3 id="quick-links-title" className="text-gray-7 font-bold">
        لینک های مفید بیلیتو
      </h3>
      <Separator className="mt-1" />
      <ul className="text-gray-7 mt-4 space-y-2">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
