import { Tabs } from "@heroui/react";
import PopularCities from "./PopularCities";
import CityRoutesWrapper from "./CityRoutesWrapper";

export default function PopularRoutes() {
  return (
    <Tabs>
      <PopularCities />
      <CityRoutesWrapper />
    </Tabs>
  );
}
