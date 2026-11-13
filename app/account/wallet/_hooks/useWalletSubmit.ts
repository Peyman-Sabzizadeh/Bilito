import { useState } from "react";
import { useAuth } from "@/_providers/AuthProvider";
import { createClient } from "@/_utils/supabase/client";
import { toast } from "@heroui/react";

export default function useWalletSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, refreshProfile } = useAuth();
  const supabase = createClient();

  const handleWalletSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!user) return;
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const amount = Number(formData.get("amount"));

      const { error } = await supabase.rpc("increase_wallet_balance", {
        amount,
      });

      if (error) {
        toast.danger("افزایش موجودی ناموفق بود.");
        return;
      }

      await refreshProfile();
      toast.success("موجودی کیف پول با موفقیت افزایش یافت.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleWalletSubmit, isLoading };
}
