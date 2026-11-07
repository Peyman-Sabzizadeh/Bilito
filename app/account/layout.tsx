import { Metadata } from "next";
import Container from "@/_components/Container";
import AccountSidebar from "./_components/AccountSidebar";

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
    <Container className="py-6">
      <AccountSidebar />
      <main>{children}</main>
    </Container>
  );
}
