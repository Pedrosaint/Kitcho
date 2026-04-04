import { useState } from "react";
import { Eye, UserX } from "lucide-react";
import type { Customer, CustomerStatus } from "../types/customer.types";
import ViewCustomerModal from "./ViewCustomerModal";
import SuspendCustomerModal from "./SuspendCustomerModal";

const statusStyles: Record<CustomerStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Suspended: "bg-red-100 text-red-500",
};

interface Props {
  customers: Customer[];
}

export default function CustomersTable({ customers }: Props) {
  const [viewCustomer, setViewCustomer] = useState<Customer | null>(null);
  const [suspendCustomer, setSuspendCustomer] = useState<Customer | null>(null);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5 text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Name</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Email</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Phone</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Total Orders</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4 font-medium text-gray-900">{customer.name}</td>
                  <td className="px-5 py-4 text-gray-700">{customer.email}</td>
                  <td className="px-5 py-4 text-gray-700">{customer.phone}</td>
                  <td className="px-5 py-4 text-gray-700">{customer.totalOrders}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[customer.status]}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setViewCustomer(customer)} className="text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                      <button onClick={() => setSuspendCustomer(customer)} className="text-red-400 hover:text-red-600">
                        <UserX size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ViewCustomerModal isOpen={!!viewCustomer} onClose={() => setViewCustomer(null)} customer={viewCustomer} />
      <SuspendCustomerModal isOpen={!!suspendCustomer} onClose={() => setSuspendCustomer(null)} customer={suspendCustomer} />
    </>
  );
}
