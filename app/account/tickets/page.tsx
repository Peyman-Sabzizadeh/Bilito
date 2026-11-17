"use client";

import { useState } from "react";
import TicketSortSelect from "./_components/TicketSortSelect";
import TicketList from "./_components/TicketList";

export type SortOrder = "newest" | "oldest";

export default function TicketsPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 max-md:flex-col">
        <h2 className="text-gray-8 text-lg font-bold">تیکت‌های من</h2>
        <TicketSortSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <TicketList sortOrder={sortOrder} />
    </div>
  );
}
