import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@/globals.css";
import { iranSans } from "@/_fonts";
import Header from "@/_components/header/Header";
import Footer from "@/_components/footer/Footer";
import AppToast from "./_components/AppToast";
import AuthProvider from "@/_providers/AuthProvider";
import { createClient } from "@/_utils/supabase/server";

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
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Failed to get authenticated user:", userError.message);
  }

  let profile: {
    name: string;
    phone: string;
    gender: "male" | "female";
    national_id: string;
  } | null = null;

  if (user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("name, phone, gender, national_id")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Failed to get user profile:", error.message);
    } else {
      profile = data;
    }
  }

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
