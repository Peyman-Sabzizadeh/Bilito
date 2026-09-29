import { Tabs } from "@heroui/react";
import PopularCities from "./PopularCities";

export default function PopularRoutes() {
  return (
    <Tabs>
      <PopularCities />
      <Tabs.Panel id="tehran">محتوای مربوط به تهران</Tabs.Panel>
      <Tabs.Panel id="mashhad">محتوای مربوط به مشهد</Tabs.Panel>
      <Tabs.Panel id="shiraz">محتوای مربوط به شیراز</Tabs.Panel>
      <Tabs.Panel id="kish">محتوای مربوط به کیش</Tabs.Panel>
    </Tabs>
  );
}
