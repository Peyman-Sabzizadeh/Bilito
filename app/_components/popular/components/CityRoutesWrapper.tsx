import { popularRoutes } from "@/_data/popularRoutes";
import { Tabs } from "@heroui/react";

export default function CityRoutesWrapper() {
  return (
    <div>
      {popularRoutes.map((item) => (
        <Tabs.Panel key={item.city} id={item.city}>
          محتوای مربوط به {item.city}
        </Tabs.Panel>
      ))}
    </div>
  );
}
