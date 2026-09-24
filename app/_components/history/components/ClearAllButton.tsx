import { Button } from "@heroui/react";
import type { SearchHistoryHeaderProps } from "./SearchHistoryHeader";

export default function ClearAllButton({
  clearAll,
  isEmpty,
}: SearchHistoryHeaderProps) {
  return (
    <Button
      onClick={clearAll}
      className={`${isEmpty && "hidden"} text-primary size-auto bg-transparent p-0 max-md:hidden`}
    >
      پاک کردن همه
    </Button>
  );
}
