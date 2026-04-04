import { useState } from "react";
import { Eye, MessageSquare, CircleCheck } from "lucide-react";
import type { Ticket, TicketStatus, TicketPriority } from "../types/support.types";
import ViewTicketModal from "./ViewTicketModal";
import ReplyTicketModal from "./ReplyTicketModal";
import ResolveTicketModal from "./ResolveTicketModal";

const statusStyles: Record<TicketStatus, string> = {
  Open: "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Resolved: "bg-green-100 text-green-700",
};

const priorityStyles: Record<TicketPriority, string> = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-600",
  Low: "bg-blue-100 text-blue-600",
};

interface Props {
  tickets: Ticket[];
}

export default function TicketsTable({ tickets }: Props) {
  const [viewTicket, setViewTicket] = useState<Ticket | null>(null);
  const [replyTicket, setReplyTicket] = useState<Ticket | null>(null);
  const [resolveTicket, setResolveTicket] = useState<Ticket | null>(null);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-262.5 text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Ticket ID</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">User</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Issue</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Priority</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Date</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4 font-medium text-gray-900">{ticket.id}</td>
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{ticket.userName}</p>
                      <p className="text-xs text-gray-400">{ticket.userRole}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{ticket.issueTitle}</p>
                      <p className="text-xs text-gray-400">{ticket.issueDescription}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${priorityStyles[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[ticket.status]}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{ticket.date}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setViewTicket(ticket)} className="text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                      <button onClick={() => setReplyTicket(ticket)} className="text-gray-400 hover:text-gray-600">
                        <MessageSquare size={18} />
                      </button>
                      {ticket.status !== "Resolved" && (
                        <button onClick={() => setResolveTicket(ticket)} className="text-green-500 hover:text-green-700">
                          <CircleCheck size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ViewTicketModal isOpen={!!viewTicket} onClose={() => setViewTicket(null)} ticket={viewTicket} />
      <ReplyTicketModal isOpen={!!replyTicket} onClose={() => setReplyTicket(null)} ticket={replyTicket} />
      <ResolveTicketModal isOpen={!!resolveTicket} onClose={() => setResolveTicket(null)} ticket={resolveTicket} />
    </>
  );
}
