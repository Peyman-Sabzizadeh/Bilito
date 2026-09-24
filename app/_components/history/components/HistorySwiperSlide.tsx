import { Button } from "@heroui/react";
import { XSquare } from "lucide-react";

type HistorySwiperSlideProps = {
  item: {
    id: number;
    from: string;
    to: string;
  };
  removeItem: (id: number) => void;
};

export default function HistorySwiperSlide({
  item,
  removeItem,
}: HistorySwiperSlideProps) {
  return (
    <div className="border-gray-3 flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2">
      <Button
        isIconOnly
        onClick={() => removeItem(item.id)}
        className="text-gray-6 size-auto bg-transparent hover:bg-transparent"
      >
        <XSquare />
      </Button>
      <span className="text-gray-7 text-xs font-medium select-none">
        {item.from} به {item.to}
      </span>
    </div>
  );
}
