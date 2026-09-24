import RemoveItemButton from "./RemoveItemButton";
import RouteButton from "./RouteButton";

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
      <RemoveItemButton removeItem={removeItem} itemId={item.id} />
      <RouteButton item={item} />
    </div>
  );
}
