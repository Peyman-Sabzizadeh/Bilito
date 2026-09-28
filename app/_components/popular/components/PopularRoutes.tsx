import { Tabs } from "@heroui/react";

export default function PopularRoutes() {
  return (
    <Tabs>
      <Tabs.ListContainer>
        <Tabs.List className="*:border-gray-3 *:text-gray-7 *:data-[selected=true]:bg-tint-1 *:data-[selected=true]:text-primary gap-4 bg-transparent p-0 *:rounded-lg *:border *:data-[selected=true]:border-none **:data-[slot=tabs-indicator]:hidden md:w-fit md:gap-3 *:md:text-base">
          <Tabs.Tab id="tehran">
            تهران
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="mashhad">
            مشهد
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="shiraz">
            شیراز
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="kish">
            کیش
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel id="tehran">محتوای مربوط به تهران</Tabs.Panel>
      <Tabs.Panel id="mashhad">محتوای مربوط به مشهد</Tabs.Panel>
      <Tabs.Panel id="shiraz">محتوای مربوط به شیراز</Tabs.Panel>
      <Tabs.Panel id="kish">محتوای مربوط به کیش</Tabs.Panel>
    </Tabs>
  );
}
