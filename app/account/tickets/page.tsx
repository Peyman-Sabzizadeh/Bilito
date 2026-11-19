"use client";

import { useState } from "react";
import TicketSortSelect from "./_components/TicketSortSelect";
import TicketList from "./_components/TicketList";
import type { SortOrder } from "./_types/sortOrder";

export default function TicketsPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  return (
    <div className="space-y-6 pb-4">
      <div className="flex items-center justify-between gap-4 max-md:flex-col">
        <h2 className="text-gray-8 text-lg font-bold">تیکت‌های من</h2>
        <TicketSortSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <TicketList sortOrder={sortOrder} />
    </div>
  );
}
