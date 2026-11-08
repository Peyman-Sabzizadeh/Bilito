"use client";

import { userMenuItems } from "@/_data/userMenuItems";
import useLogout from "@/_hooks/useLogout";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountMenu() {
  const { logout } = useLogout();
  const pathname = usePathname();

  return (
    <nav aria-label="منوی حساب کاربری" className="flex w-full flex-col gap-2">
      {userMenuItems.map(({ id, link, variant, Icon, label }) => (
        <Link
          key={id}
          href={link || "#"}
          onClick={() => id === "logout" && logout()}
          aria-current={pathname === link ? "page" : undefined}
          className={`flex h-10 items-center gap-2 rounded-lg px-2 text-sm transition ${
            variant === "danger"
              ? "text-error-1 hover:bg-red-100"
              : pathname === link
                ? "bg-tint-2 text-primary font-semibold"
                : "text-gray-8 hover:bg-gray-3"
          }`}
        >
          <Icon className="size-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
}
