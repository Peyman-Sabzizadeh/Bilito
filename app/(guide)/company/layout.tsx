import CompanyBanner from "./_components/CompanyBanner";
import Container from "@/_components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CompanyBanner />
      <Container className="pt-6 md:pt-12 md:pb-8">{children}</Container>
    </div>
  );
}
