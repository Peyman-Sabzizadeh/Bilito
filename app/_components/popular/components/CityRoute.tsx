import { RouteProp } from "@/_data/popularRoutes";
import { useFlightSearch } from "@/_store/flightSearchStore";
import { scrollToTop } from "@/_utils/scrollToTop";
import { Separator } from "@heroui/react";
import { PlaneIcon } from "lucide-react";
import Image from "next/image";

type CityRouteProps = {
  city: string;
  route: RouteProp;
};

export default function CityRoute({ city, route }: CityRouteProps) {
  const setOrigin = useFlightSearch((state) => state.setOrigin);
  const setDestination = useFlightSearch((state) => state.setDestination);
  return (
    <div
      className="border-gray-2 flex cursor-pointer overflow-hidden rounded-lg border"
      onClick={() => {
        setOrigin(route.from);
        setDestination(route.to);
        scrollToTop();
      }}
    >
      <Image
        src={`/popular/${route.srcName}.png`}
        alt={`${route.from} به ${route.to}`}
        width={80}
        height={88}
        loading="lazy"
      />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 p-2">
          <span
            className={`${route.from === city ? "text-primary" : "text-gray-9"}`}
          >
            {route.from}
          </span>
          <PlaneIcon
            className="fill-gray-7 text-gray-7 size-4.5 -rotate-135"
            strokeWidth={1}
          />
          <span
            className={`${route.to === city ? "text-primary" : "text-gray-9"}`}
          >
            {route.to}
          </span>
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-4 p-2">
          <span className="text-gray-7 text-sm">شروع قیمت از:</span>
          <span>{route.startingPrice.toLocaleString("fa-IR")} تومان</span>
        </div>
      </div>
    </div>
  );
}
