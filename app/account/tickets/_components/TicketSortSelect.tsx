import { Select, ListBox } from "@heroui/react";
import type { SortOrder } from "../_types/sortOrder";

type TicketSortSelectProps = {
  sortOrder: SortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
};

export default function TicketSortSelect({
  sortOrder,
  setSortOrder,
}: TicketSortSelectProps) {
  return (
    <Select
      aria-label="مرتب سازی تیکت ها"
      className="w-28 max-md:self-start"
      value={sortOrder}
      onChange={(value) => {
        if (value !== null) setSortOrder(value as SortOrder);
      }}
    >
      <Select.Trigger className="*:text-gray-8 border-gray-4 rounded-lg border shadow-none *:text-sm">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className="rounded-xl">
        <ListBox className="text-gray-8 *:rounded-lg">
          <ListBox.Item id="newest" textValue="جدیدترین">
            جدیدترین
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="oldest" textValue="قدیمی‌ترین">
            قدیمی‌ترین
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
