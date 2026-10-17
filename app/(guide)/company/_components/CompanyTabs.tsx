import { Tabs } from "@heroui/react";
import AboutUsPanel from "./AboutUsPanel";
import ContactUsPanel from "./ContactUsPanel";

export default function CompanyTabs() {
  return (
    <Tabs variant="secondary">
      <Tabs.ListContainer className="md:w-fit">
        <Tabs.List className="*:aria-selected:text-primary *:md:w-25 *:md:aria-selected:font-bold">
          <Tabs.Tab id="about">
            درباره ما
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
          <Tabs.Tab id="contact">
            تماس با ما
            <Tabs.Indicator className="bg-primary rounded-lg" />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel id="about">
        <AboutUsPanel />
      </Tabs.Panel>
      <Tabs.Panel id="contact">
        <ContactUsPanel />
      </Tabs.Panel>
    </Tabs>
  );
}
