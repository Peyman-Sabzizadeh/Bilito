import { featuresData } from "@/_data/featuresData";
import Container from "../Container";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="bg-tint-1 mt-10 pt-8 pb-4">
      <Container className="flex items-center justify-around">
        {featuresData.map((item, index) => (
          <div
            key={index}
            className="flex max-w-19 flex-col items-center gap-2 text-center md:max-w-none md:gap-6"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={48}
              height={48}
              loading="lazy"
              className="md:size-18"
            />
            <span className="text-shade-4 text-sm font-medium md:text-base md:font-semibold">
              {item.title}
            </span>
          </div>
        ))}
      </Container>
    </div>
  );
}
