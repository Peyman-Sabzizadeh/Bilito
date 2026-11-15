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
  return (
    <div>
      <h2 className="text-gray-8 font-bold md:text-lg">تیکت‌های من</h2>
      {children}
    </div>
  );
}
