import { HistoryIcon } from "lucide-react";

export default function SearchHistoryTitle() {
  return (
    <div className="text-gray-8 flex gap-2">
      <HistoryIcon strokeWidth={1.5} />
      <h2>تاریخچه جستجو</h2>
    </div>
  );
}
