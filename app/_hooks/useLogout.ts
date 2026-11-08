import { useRouter } from "next/navigation";
import { createClient } from "@/_utils/supabase/client";
import { toast } from "@heroui/react";

export default function useLogout() {
  const router = useRouter();
  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.danger("خروج ناموفق بود.");
      return;
    }
    router.replace("/");
    router.refresh();
    toast.success("با موفقیت از حساب کاربری خود خارج شدید.");
  };
  return { logout };
}
