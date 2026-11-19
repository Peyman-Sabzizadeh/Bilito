import useTickets from "../_hooks/useTickets";
import { Spinner } from "@heroui/react";
import Ticket from "./Ticket";
import NoTickets from "./NoTickets";
import type { SortOrder } from "../_types/sortOrder";

type TicketListProps = {
  sortOrder: SortOrder;
};

export default function TicketList({ sortOrder }: TicketListProps) {
  const { tickets, isLoading, removeTicket } = useTickets(sortOrder);
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${isLoading ? "py-30" : "pt-2 md:pb-6"}`}
    >
      {isLoading && <Spinner size="xl" />}
      {!isLoading && tickets.length === 0 && <NoTickets />}
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} removeTicket={removeTicket} />
      ))}
    </div>
  );
}
