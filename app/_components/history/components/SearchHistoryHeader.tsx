import { HistoryIcon } from "lucide-react";
import ClearAllButton from "./ClearAllButton";

export type SearchHistoryHeaderProps = {
  clearAll: () => void;
  isEmpty: boolean;
};

export default function SearchHistoryHeader({
  clearAll,
  isEmpty,
}: SearchHistoryHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-8 flex gap-2">
        <HistoryIcon strokeWidth={1.5} />
        <h2>تاریخچه جستجو</h2>
      </div>
      <ClearAllButton clearAll={clearAll} isEmpty={isEmpty} />
    </div>
  );
}
