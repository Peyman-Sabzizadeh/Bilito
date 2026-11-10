"use client";

import UserProfileSummary from "./UserProfileSummary";
import { Separator } from "@heroui/react";
import AccountMenu from "./AccountMenu";

export default function AccountSidebar() {
  return (
    <aside className="border-gray-4 flex w-72 shrink-0 flex-col items-center gap-4 rounded-lg border px-4 py-6 max-md:hidden">
      <UserProfileSummary />
      <Separator />
      <AccountMenu />
    </aside>
  );
}
