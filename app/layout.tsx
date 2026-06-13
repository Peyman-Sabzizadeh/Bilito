import type { Metadata } from "next";
import "./globals.css";
import { iranSans } from "@/_fonts";

export const metadata: Metadata = {
  title: "بیلیتو",
  description:
    "سریعترین راه ممکن برای رزرو بلیط هواپیما، با بیلیتو سفر خود را آسان و سریع برنامه ریزی کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${iranSans.className} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
