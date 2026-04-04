import Modal from "../../../../shared/components/Modal";
import type { Ticket } from "../types/support.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket | null;
}

export default function ResolveTicketModal({ isOpen, onClose, ticket }: Props) {
  if (!ticket) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Resolve Ticket" size="sm">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Are you sure you want to mark <span className="font-semibold">{ticket.id}</span> ({ticket.issueTitle}) as resolved?
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onClose} className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
            Resolve
          </button>
        </div>
      </div>
    </Modal>
  );
}
