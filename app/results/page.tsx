import { Metadata } from "next";
import { Suspense } from "react";
import FlightResults from "./_components/FlightResults";

type Props = {
  searchParams: Promise<{ from?: string; to?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { from, to } = await searchParams;

  return {
    title: from && to ? `بلیت ${from} به ${to}` : "بلیت هواپیما",
    description:
      from && to
        ? `مقایسه قیمت و خرید آنلاین بلیت هواپیما ${from} به ${to}. ارزان‌ترین پروازها، ساعت‌های حرکت و ایرلاین‌های مختلف را ببینید و در چند دقیقه بلیت خود را رزرو کنید.`
        : "نتایج جستجوی بلیت هواپیما در بیلیتو. قیمت، ساعت پرواز و ایرلاین‌های مختلف را مقایسه کنید و ارزان‌ترین بلیت را رزرو کنید.",
  };
}

export default function ResultsPage() {
  return (
    <Suspense>
      <FlightResults />
    </Suspense>
  );
}
