import Container from "@/_components/Container";
import { buySteps } from "../_data/buySteps";
import BuyStep from "./BuyStep";

export default function BuySteps() {
  return (
    <Container className="space-y-5 pt-7 pb-10 md:space-y-10 md:pt-14 md:pb-14">
      <h2 className="text-gray-8 font-bold md:text-2xl">
        مراحل خرید آنلاین بلیط هواپیما
      </h2>
      <section>
        <ol className="relative ps-5 md:ps-15">
          <span
            aria-hidden
            className="border-gray-4 absolute inset-s-0.25 top-2.5 bottom-19 border-s-2 border-dashed md:inset-s-1.25 md:bottom-14"
          />
          {buySteps.map(({ title, description, Icon }) => (
            <BuyStep
              key={title}
              title={title}
              description={description}
              Icon={Icon}
            />
          ))}
        </ol>
      </section>
    </Container>
  );
}
