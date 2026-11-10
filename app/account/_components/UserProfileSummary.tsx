"use client";

import { useAuth } from "@/_providers/AuthProvider";

export default function UserProfileSummary({
  className,
}: {
  className?: string;
}) {
  const { profile } = useAuth();
  const name = profile?.name || "—";
  const initial = name?.charAt(0);
  const phone = profile?.phone || "—";
  return (
    <div className={`flex flex-col items-center gap-4 ${className || ""}`}>
      <span className="bg-tint-2 text-primary flex size-15 shrink-0 items-center justify-center rounded-full text-4xl font-bold shadow-md ring-4 ring-white select-none md:size-20">
        {initial}
      </span>
      <span className="text-gray-7 flex flex-col items-center gap-1 max-md:text-sm">
        <span className="font-bold">{name}</span>
        <span className="font-light">{phone}</span>
      </span>
    </div>
  );
}
