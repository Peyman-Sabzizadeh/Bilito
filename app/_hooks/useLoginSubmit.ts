import { useAuthModal } from "@/_store/authModalStore";
import { createClient } from "@/_utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLoginSubmit() {
  const supabase = createClient();
  const { onOpenChange } = useAuthModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (
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
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
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

  return { handleLoginSubmit, isLoading };
}
