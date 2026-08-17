import { Tabs } from "@heroui/react";
import { Plane } from "lucide-react";

export default function FlightType() {
  return (
    <Tabs variant="secondary" className="w-full max-w-xs">
      <Tabs.ListContainer>
        <Tabs.List>
          <Tabs.Tab
            id="international"
            className="aria-selected:text-primary aria-selected:font-bold"
          >
            <Plane className="ml-2 -rotate-44" size={18} />
            پرواز خارجی
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
          <Tabs.Tab
            id="demostic"
            className="aria-selected:text-primary aria-selected:font-bold"
          >
            <Plane className="ml-2 -rotate-44" size={18} />
            پرواز داخلی
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
}
