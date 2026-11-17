import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تیکت‌های من",
  description: "مشاهده و مدیریت تیکت‌های خود در بیلیتو.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
