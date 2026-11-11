import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ویرایش اطلاعات حساب کاربری",
  description:
    "ویرایش نام، شماره موبایل و سایر اطلاعات شخصی حساب کاربری در بیلیتو.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 md:gap-4 max-md:items-center">
      <h2 className="text-gray-8 font-bold md:text-lg">
        ویرایش اطلاعات حساب کاربری
      </h2>
      {children}
    </div>
  );
}
