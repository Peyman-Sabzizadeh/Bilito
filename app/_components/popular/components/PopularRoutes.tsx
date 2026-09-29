import { Tabs } from "@heroui/react";
import PopularCities from "./PopularCities";
import CityRoutesWrapper from "./CityRoutesWrapper";

export default function PopularRoutes() {
  return (
    <Tabs className="gap-6 md:gap-8">
      <PopularCities />
      <CityRoutesWrapper />
    </Tabs>
  );
}
