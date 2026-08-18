import { Tabs } from "@heroui/react";
import { Plane } from "lucide-react";

export default function FlightType() {
  return (
    <Tabs variant="secondary" className="">
      <Tabs.ListContainer>
        <Tabs.List className="*:aria-selected:text-primary *:p-0 *:text-nowrap *:aria-selected:font-bold md:space-x-10 *:md:w-fit">
          <Tabs.Tab id="international">
            <Plane className="ml-2 hidden -rotate-44 md:block" size={18} />
            پرواز خارجی
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
          <Tabs.Tab id="demostic">
            <Plane className="ml-2 hidden -rotate-44 md:block" size={18} />
            پرواز داخلی
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
}
