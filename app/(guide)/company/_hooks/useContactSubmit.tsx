"use client";

import { createClient } from "@/_utils/supabase/client";
import { useAuth } from "@/_providers/AuthProvider";
import { toast } from "@heroui/react";
import { useState } from "react";

export default function useContactSubmit(
  setMessageValue: (value: string) => void,
) {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();
  const { user } = useAuth();

  const handleContactSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!user) {
      toast.danger("برای ارسال پیام ابتدا وارد حساب کاربری شوید.");
      return;
    }
    setIsLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
    };
    const { error } = await supabase.from("support_tickets").insert(data);
    if (error) {
      toast.danger("ارسال پیام ناموفق بود.");
      return;
    }
    toast.success("پیام شما با موفقیت ثبت شد.");
    form.reset();
    setMessageValue("");
    setIsLoading(false);
  };

  return { handleContactSubmit, isLoading };
}
