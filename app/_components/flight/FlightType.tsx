import { Tabs } from "@heroui/react";
import { Plane } from "lucide-react";

export default function FlightType() {
  return (
    <Tabs variant="secondary" className="w-full max-w-xs">
      <Tabs.ListContainer>
        <Tabs.List>
          <Tabs.Tab id="international">
            <Plane />
            پرواز خارجی
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="demostic">
            <Plane />
            پرواز داخلی
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel id="international">International Flight</Tabs.Panel>
      <Tabs.Panel id="demostic">Demostic Flight</Tabs.Panel>
    </Tabs>
  );
}
