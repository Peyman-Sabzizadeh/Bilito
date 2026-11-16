"use client";

import { useState } from "react";
import TicketSortSelect from "./_components/TicketSortSelect";

export default function TicketsPage() {
  const [sortOrder, setSortOrder] = useState("newest");
  return (
    <div className="flex items-center justify-between gap-4 max-md:flex-col">
      <h2 className="text-gray-8 font-bold md:text-lg">تیکت‌های من</h2>
      <TicketSortSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  );
}
