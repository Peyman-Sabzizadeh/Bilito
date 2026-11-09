import type { Metadata } from "next";
import "@/globals.css";
import { iranSans } from "@/_fonts";
import Header from "@/_components/header/Header";
import Footer from "@/_components/footer/Footer";
import AppToast from "./_components/AppToast";
import AuthProvider from "@/_providers/AuthProvider";
import getInitialAuthData from "./_lib/getInitialAuthData";

export const metadata: Metadata = {
  title: {
    default: "بیلیتو | خرید آنلاین بلیط هواپیما",
    template: "%s | بیلیتو",
  },
  description:
    "سریعترین راه ممکن برای رزرو بلیط هواپیما، با بیلیتو سفر خود را آسان و سریع برنامه ریزی کنید.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, profile } = await getInitialAuthData();

  return (
    <html lang="fa" dir="rtl" className={`${iranSans.className} h-full`}>
      <body className="min-h-full">
        <AuthProvider initialUser={user} initialProfile={profile}>
          <AppToast />
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
