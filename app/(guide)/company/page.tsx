import Container from "@/_components/Container";
import CompanyBanner from "./_components/CompanyBanner";
import CompanyTabs from "./_components/CompanyTabs";
import { Suspense } from "react";

export default function CompanyPage() {
  return (
    <div>
      <CompanyBanner />
      <Container className="pt-6 md:pt-12 md:pb-8">
        <Suspense>
          <CompanyTabs />
        </Suspense>
      </Container>
    </div>
  );
}
