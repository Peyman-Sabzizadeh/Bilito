import Container from "@/_components/Container";
import CompanyBanner from "./_components/CompanyBanner";
import CompanyTabs from "./_components/CompanyTabs";

export default function CompanyPage() {
  return (
    <div>
      <CompanyBanner />
      <Container className="pt-6 md:pt-12 md:pb-8">
        <CompanyTabs />
      </Container>
    </div>
  );
}
