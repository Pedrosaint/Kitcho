import { useState } from "react";
import Modal from "../../../../shared/components/Modal";
import type { Ticket } from "../types/support.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket | null;
}

export default function ReplyTicketModal({ isOpen, onClose, ticket }: Props) {
  const [message, setMessage] = useState("");

  if (!ticket) return null;

  const handleSubmit = () => {
    // TODO: integrate with API
    onClose();
    setMessage("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Reply to ${ticket.id}`}>
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-sm font-medium text-gray-900">{ticket.issueTitle}</p>
          <p className="mt-1 text-sm text-gray-500">{ticket.issueDescription}</p>
          <p className="mt-2 text-xs text-gray-400">— {ticket.userName} ({ticket.userRole})</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Your Reply</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Type your response..."
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Send Reply
          </button>
        </div>
      </div>
    </Modal>
  );
}
