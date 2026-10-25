import type { Metadata } from "next";
import { Suspense } from "react";
import CompanyTabs from "./_components/CompanyTabs";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { tab } = await searchParams;
  if (tab === "contact") {
    return {
      title: "تماس با ما",
      description:
        "برای پرسش درباره خرید بلیط هواپیما، پیگیری رزرو یا دریافت راهنمایی، با پشتیبانی بیلیتو در ارتباط باشید. راه‌های تماس با ما اینجاست.",
      alternates: { canonical: "/company?tab=contact" },
    };
  }
  return {
    title: "درباره ما",
    description:
      "با بیلیتو و ماموریت ما برای آسان‌تر کردن خرید آنلاین بلیط هواپیما آشنا شوید. بیلیتو سریع‌ترین راه رزرو بلیط و برنامه‌ریزی سفر شماست.",
    alternates: { canonical: "/company?tab=about" },
  };
}

export default function CompanyPage() {
  return (
    <Suspense>
      <CompanyTabs />
    </Suspense>
  );
}
