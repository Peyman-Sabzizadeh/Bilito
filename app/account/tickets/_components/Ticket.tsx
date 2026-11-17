import { CalendarClock, Trash2 } from "lucide-react";
import { type Ticket } from "../_hooks/useTickets";
import useDeleteTicket from "../_hooks/useDeleteTicket";

type TicketProps = {
  ticket: Ticket;
  removeTicket: (ticketId: string) => void;
};

export default function Ticket({ ticket, removeTicket }: TicketProps) {
  const { deleteTicket } = useDeleteTicket(removeTicket);

  return (
    <div className="border-gray-4 flex w-full justify-between rounded-lg border p-4 max-md:flex-col max-md:gap-5">
      <div className="space-y-4 md:space-y-5">
        <div className="text-gray-6 flex items-center gap-2 text-xs md:text-sm">
          <CalendarClock strokeWidth={1.5} className="size-3.5 md:size-4.5" />
          <span>
            {ticket.date} - {ticket.time}
          </span>
          <span className="bg-gray-3 text-gray-7 rounded-lg px-2 py-1">
            {ticket.subject}
          </span>
        </div>
        <p className="text-gray-8 max-md:text-sm">{ticket.message}</p>
      </div>
      <Trash2
        className="text-error-1 size-4.5 shrink-0 cursor-pointer max-md:self-end md:size-5"
        strokeWidth={1.5}
        onClick={() => deleteTicket(ticket.id)}
      />
    </div>
  );
}
