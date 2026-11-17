"use client";

import { createClient } from "@/_utils/supabase/client";
import { toast } from "@heroui/react";

export default function useDeleteTicket(
  removeTicket: (ticketId: string) => void,
) {
  const supabase = createClient();

  const deleteTicket = async (ticketId: string) => {
    const { error } = await supabase
      .from("support_tickets")
      .delete()
      .eq("id", ticketId);

    if (error) {
      console.error("Error deleting ticket:", error);
      toast.danger("حذف تیکت ناموفق بود. لطفاً دوباره تلاش کنید.");
      return;
    }

    removeTicket(ticketId);
    toast.success("تیکت با موفقیت حذف شد.");
  };

  return { deleteTicket };
}
