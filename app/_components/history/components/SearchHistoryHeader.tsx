import { Button } from "@heroui/react";
import { HistoryIcon } from "lucide-react";

type SearchHistoryHeaderProps = {
  clearAll: () => void;
};

export default function SearchHistoryHeader({
  clearAll,
}: SearchHistoryHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-8 flex gap-2">
        <HistoryIcon strokeWidth={1.5} />
        <h2>تاریخچه جستجو</h2>
      </div>
      <Button
        onClick={clearAll}
        className="text-primary size-auto bg-transparent p-0 max-md:hidden"
      >
        پاک کردن همه
      </Button>
    </div>
  );
}
