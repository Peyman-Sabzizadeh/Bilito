"use client";

import { Pencil } from "lucide-react";
import Link from "next/link";
import { useProfileItems } from "../_hooks/useProfileItems";

export default function UserProfileCard() {
  const profileItems = useProfileItems();
  return (
    <section className="border-gray-4 flex w-full gap-8 rounded-lg border px-2 py-4 max-md:flex-col max-md:text-sm md:justify-between md:p-6">
      <dl className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-8">
        {profileItems.map(({ label, value }) => (
          <div key={label} className="flex gap-3 md:flex-col md:gap-1">
            <dt className="text-gray-6 flex-1">{label}</dt>
            <dd className="text-gray-8 flex-2 font-medium md:font-semibold">
              {value || "—"}
            </dd>
          </div>
        ))}
      </dl>
      <Link
        href="/account/edit"
        className="text-primary flex items-center gap-2 self-center text-sm md:self-start"
      >
        <Pencil className="size-4" />
        <span>ویرایش اطلاعات</span>
      </Link>
    </section>
  );
}
