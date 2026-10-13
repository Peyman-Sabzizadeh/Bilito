import Container from "@/_components/Container";

export default function BuySteps() {
  return (
    <Container className="space-y-5 pt-6 pb-14 md:space-y-10 md:pt-14">
      <h2 className="text-gray-8 font-bold md:text-2xl">
        مراحل خرید آنلاین بلیط هواپیما
      </h2>
      <section>
        <ol className="relative ps-5 md:ps-15">
          <span
            aria-hidden
            className="border-gray-4 absolute inset-s-0.25 top-2.5 bottom-19 border-s-2 border-dashed md:inset-s-1.25 md:bottom-14"
          />
          <span>Steps...</span>
        </ol>
      </section>
    </Container>
  );
}
