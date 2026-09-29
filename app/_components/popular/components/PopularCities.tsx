import { Tabs } from "@heroui/react";
import { popularRoutes } from "@/_data/popularRoutes";

export default function PopularCities() {
  return (
    <Tabs.ListContainer>
      <Tabs.List className="*:border-gray-3 *:text-gray-7 *:data-[selected=true]:bg-tint-1 *:data-[selected=true]:text-primary gap-4 bg-transparent p-0 *:rounded-lg *:border *:data-[selected=true]:border-none **:data-[slot=tabs-indicator]:hidden md:w-fit md:gap-3 *:md:text-base">
        {popularRoutes.map((item) => (
          <Tabs.Tab key={item.city} id={item.city}>
            {item.city}
            <Tabs.Indicator />
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.ListContainer>
  );
}
