"use client";

import { useAuth } from "@/_providers/AuthProvider";
import { Separator } from "@heroui/react";

export default function AccountSidebar() {
  const { user } = useAuth();
  const name = user?.user_metadata?.name;
  const initial = name?.charAt(0) || "?";
  const phone = user?.user_metadata?.phone;
  return (
    <aside className="border-gray-4 flex w-72 flex-col items-center gap-4 rounded-lg border px-4 py-6 max-md:hidden">
      <span className="bg-tint-2 text-primary flex size-20 shrink-0 items-center justify-center rounded-full text-4xl font-bold shadow-md ring-4 ring-white select-none">
        {initial}
      </span>
      <span className="text-gray-7 flex flex-col items-center gap-1">
        <span className="font-bold">{name}</span>
        <span className="font-light">{phone}</span>
      </span>
      <Separator />
      <span>User account menu...</span>
    </aside>
  );
}
