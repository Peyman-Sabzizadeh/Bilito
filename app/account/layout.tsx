import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حساب کاربری",
  description:
    "صفحه حساب کاربری بیلیتو؛ مدیریت اطلاعات شخصی، رزروها، تیکت ها و تنظیمات حساب کاربری.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>Account sidebar</span>
      <main>{children}</main>
    </div>
  );
}
