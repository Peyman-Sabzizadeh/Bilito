import type { Metadata } from "next";
import Hero from "@/_components/hero/Hero";

export const metadata: Metadata = {
  title: "نحوه خرید بلیت هواپیما",
  description:
    "با چند مرحله ساده بلیت هواپیمای خودتان را بخرید. راهنمای قدم‌به‌قدم جستجوی پرواز، انتخاب بلیت، ثبت اطلاعات مسافران و پرداخت آنلاین در بیلیتو.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  );
}
