"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/_utils/supabase/client";
import { toJalaali } from "jalaali-js";
import {
  contactSubjects,
  type ContactSubjectId,
} from "@/(guide)/company/_data/contactSubjects";
import { toast } from "@heroui/react";
import type { SortOrder } from "../_types/sortOrder";

export type Ticket = {
  id: string;
  subject: string;
  message: string;
  date: string;
  time: string;
};

const subjectTitles = Object.fromEntries(
  contactSubjects.map(({ id, title }) => [id, title]),
) as Record<ContactSubjectId, string>;

export default function useTickets(sortOrder: SortOrder) {
  const supabase = createClient();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTickets = async () => {
      const { data, error } = await supabase
        .from("support_tickets")
        .select("id, subject, message, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching tickets:", error);
        toast.danger(
          "متأسفانه تیکت‌ها بارگذاری نشدند. لطفاً دوباره تلاش کنید.",
        );
        setIsLoading(false);
        return;
      }
      const formattedTickets: Ticket[] = data.map((ticket) => {
        const createdAt = new Date(ticket.created_at);
        const { jy, jm, jd } = toJalaali(
          createdAt.getFullYear(),
          createdAt.getMonth() + 1,
          createdAt.getDate(),
        );
        const date = `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
        const time = `${String(createdAt.getHours()).padStart(2, "0")}:${String(createdAt.getMinutes()).padStart(2, "0")}`;
        return {
          id: ticket.id,
          subject: subjectTitles[ticket.subject as ContactSubjectId],
          message: ticket.message,
          date,
          time,
        };
      });
      setTickets(formattedTickets);
      setIsLoading(false);
    };
    getTickets();
  }, [supabase]);

  const removeTicket = (ticketId: string) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== ticketId));
  };

  const sortedTickets =
    sortOrder === "newest" ? tickets : [...tickets].reverse();

  return { tickets: sortedTickets, isLoading, removeTicket };
}
