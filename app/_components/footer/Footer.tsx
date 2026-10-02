import Container from "../Container";

export default function Footer() {
  return (
    <Container className="pt-4 pb-8 md:py-6">
      <div className="md:hidden">Mobile Footer</div>
      <div className="max-md:hidden">Desktop Footer</div>
    </Container>
  );
}
