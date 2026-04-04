import Modal from "../../../../shared/components/Modal";
import type { Ticket } from "../types/support.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket | null;
}

export default function ViewTicketModal({ isOpen, onClose, ticket }: Props) {
  if (!ticket) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Ticket ${ticket.id}`}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">User</p>
            <p className="font-medium text-gray-900">{ticket.userName}</p>
            <p className="text-xs text-gray-400">{ticket.userRole}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Priority</p>
            <p className={`font-medium ${ticket.priority === "High" ? "text-red-600" : ticket.priority === "Medium" ? "text-yellow-600" : "text-blue-600"}`}>
              {ticket.priority}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className={`font-medium ${ticket.status === "Open" ? "text-yellow-600" : ticket.status === "In Progress" ? "text-blue-600" : "text-green-600"}`}>
              {ticket.status}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium text-gray-900">{ticket.date}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Issue</p>
          <p className="font-medium text-gray-900">{ticket.issueTitle}</p>
          <p className="mt-1 text-sm text-gray-600">{ticket.issueDescription}</p>
        </div>
        <div className="flex justify-end pt-2">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
