import { createClient } from "@/_utils/supabase/client";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function useUserMenu() {
  const router = useRouter();
  const handleUserMenu = async (key: React.Key) => {
    if (key !== "logout") return;
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.danger("خروج ناموفق بود.");
      return;
    }
    router.push("/");
    router.refresh();
    toast.success("با موفقیت از حساب کاربری خود خارج شدید.");
  };
  return { handleUserMenu };
}
