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
  return (
    <div className="flex flex-col gap-8 md:gap-4">
      <h2 className="text-gray-8 text-lg font-bold max-md:hidden">کیف پول</h2>
      {children}
    </div>
  );
}
