import { useAuthModal } from "@/_store/authModalStore";
import { createClient } from "@/_utils/supabase/client";
import { toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignupSubmit() {
  const supabase = createClient();
  const { onOpenChange } = useAuthModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignupSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.fullName,
            national_id: data.nationalId,
            phone: data.phone,
            gender: data.gender,
          },
        },
      });

      if (error) {
        if (error.code === "user_already_exists") {
          toast.danger("این ایمیل قبلاً ثبت نام کرده است.");
        } else if (error.code === "over_email_send_rate_limit") {
          toast.danger("تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.");
        } else {
          toast.danger("ثبت نام انجام نشد. لطفاً دوباره تلاش کنید.");
        }
        return;
      }
      toast.success("ثبت نام با موفقیت انجام شد.");
      onOpenChange(false);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignupSubmit, isLoading };
}
