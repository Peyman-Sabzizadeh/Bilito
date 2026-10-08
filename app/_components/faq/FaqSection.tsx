import Container from "../Container";
import { Accordion } from "@heroui/react";
import { faqData } from "@/_data/faqData";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  return (
    <Container className="pt-10 md:pt-14">
      <h2 className="text-gray-8 font-bold md:text-xl">سوالات متداول</h2>
      <Accordion className="border-gray-2 mt-4 rounded-lg border md:mt-6">
        {faqData.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Heading>
              <Accordion.Trigger className="group text-gray-8 aria-expanded:text-primary gap-5 text-right transition md:font-semibold">
                {item.title}
                <ChevronDown className="size-4 shrink-0 duration-250 group-aria-expanded:-rotate-180" />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="text-gray-7">
                {item.content}
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
