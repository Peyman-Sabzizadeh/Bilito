import BrandBanner from "@/_components/BrandBanner";
import Container from "@/_components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قوانین و مقررات",
  description:
    "قوانین و مقررات بیلیتو؛ شرایط خرید و صدور بلیط هواپیما، استرداد و کنسلی، حریم خصوصی و مسئولیت‌های کاربران و ایرلاین‌ها.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BrandBanner />
      <Container className="space-y-5 pt-6 pb-10 md:space-y-10 md:pt-12 md:pb-8">
        {children}
      </Container>
    </div>
  );
}
