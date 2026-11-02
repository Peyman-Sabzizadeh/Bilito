import BrandBanner from "@/_components/BrandBanner";
import Container from "@/_components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BrandBanner />
      <Container className="pt-6 md:pt-12 md:pb-8">{children}</Container>
    </div>
  );
}
