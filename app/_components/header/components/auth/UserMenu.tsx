"use client";

import { Button, Dropdown } from "@heroui/react";
import { ChevronDown, User2 } from "lucide-react";
import { useAuth } from "@/_providers/AuthProvider";
import { userMenuItems } from "@/_data/userMenuItems";
import useLogout from "@/_hooks/useLogout";
import useIsMobile from "@/_hooks/useIsMobile";
import Link from "next/link";

export default function UserMenu() {
  const { profile } = useAuth();
  const { logout } = useLogout();
  const isMobile = useIsMobile();
  const name = profile?.name || "حساب کاربری";

  return (
    <Dropdown>
      {isMobile ? (
        <Dropdown.Trigger className="bg-tint-1 rounded-lg p-1 text-sm">
          <User2 strokeWidth={1.5} size={20} />
        </Dropdown.Trigger>
      ) : (
        <Button
          aria-label="منوی حساب کاربری"
          className="bg-primary hover:bg-shade-2 rounded-lg px-3 py-2 text-sm font-light"
        >
          <User2 size={30} />
          <span className="max-w-40 truncate">{name}</span>
          <ChevronDown size={16} className="shrink-0" />
        </Button>
      )}

      <Dropdown.Popover
        placement="bottom end"
        className="min-w-max rounded-xl bg-white p-2 shadow-lg"
      >
        <Dropdown.Menu
          onAction={(key) => key === "logout" && logout()}
          className="p-0"
        >
          {userMenuItems.map(({ id, label, link, Icon, variant }) => (
            <Dropdown.Item
              key={id}
              id={id}
              textValue={label}
              variant={variant}
              className={`rounded-lg px-3 py-2 text-sm ${
                variant === "danger"
                  ? "text-error-1 hover:bg-red-100"
                  : "text-gray-7 hover:bg-gray-3"
              } `}
            >
              <Link href={link || "#"} className="flex items-center gap-2">
                <Icon size={18} />
                {label}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
