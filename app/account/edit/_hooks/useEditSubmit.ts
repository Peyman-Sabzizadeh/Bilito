import { useAuth } from "@/_providers/AuthProvider";
import { createClient } from "@/_utils/supabase/client";
import type { Profile } from "@/_types/profile";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useEditSubmit() {
  const { user, refreshProfile } = useAuth();
  const supabase = createClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleEditSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const data: Profile = {
        name: String(formData.get("name") ?? ""),
        gender: formData.get("gender") as Profile["gender"],
        national_id: String(formData.get("national_id") ?? ""),
        phone: String(formData.get("phone") ?? ""),
      };

      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update(data)
        .eq("id", user.id);

      if (error) {
        toast.danger("ویرایش اطلاعات ناموفق بود.");
        return;
      }

      await refreshProfile();
      toast.success("اطلاعات حساب کاربری با موفقیت ویرایش شد.");
      router.push("/account");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleEditSubmit, isLoading };
}
