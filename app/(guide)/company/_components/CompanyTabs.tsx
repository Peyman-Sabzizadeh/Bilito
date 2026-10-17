import { Tabs } from "@heroui/react";

export default function CompanyTabs() {
  return (
    <Tabs variant="secondary">
      <Tabs.ListContainer className="md:w-fit">
        <Tabs.List className="*:aria-selected:text-primary *:md:w-25 *:md:aria-selected:font-bold">
          <Tabs.Tab id="about">
            درباره ما
            <Tabs.Indicator className="rounded-lg" />
          </Tabs.Tab>
          <Tabs.Tab id="contact">
            تماس با ما
            <Tabs.Indicator className="rounded-lg" />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel id="about">توضیحات درباره ما</Tabs.Panel>
      <Tabs.Panel id="contact">توضیحات تماس با ما</Tabs.Panel>
    </Tabs>
  );
}
