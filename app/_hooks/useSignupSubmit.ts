import { useAuthModal } from "@/_store/authModalStore";
import { createClient } from "@/_utils/supabase/client";
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
        console.log(error.message);
        return;
      }
      onOpenChange(false);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignupSubmit, isLoading };
}
