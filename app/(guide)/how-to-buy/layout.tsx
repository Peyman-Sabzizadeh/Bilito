import type { Metadata } from "next";
import Hero from "@/_components/hero/Hero";

export const metadata: Metadata = {
  title: "نحوه خرید بلیط هواپیما",
  description:
    "با چند مرحله ساده بلیط هواپیمای خودتان را بخرید. راهنمای قدم‌به‌قدم جستجوی پرواز، انتخاب بلیط، ثبت اطلاعات مسافران و پرداخت آنلاین در بیلیتو.",
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
