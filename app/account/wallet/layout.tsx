import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کیف پول",
  description:
    "مشاهده موجودی کیف پول، افزایش اعتبار و مدیریت تراکنش‌ها برای خرید سریع‌تر بلیت در بیلیتو.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
