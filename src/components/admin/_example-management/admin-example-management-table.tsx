"use client";

import type { AdminExampleItem } from "@/types/admin-example-management.types";
import { cn } from "@/utils";

export function AdminExampleManagementTable({ items }: { items: AdminExampleItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6]">
            <th className="px-5 py-3 text-sm font-bold">Title</th>
            <th className="px-5 py-3 text-sm font-bold">Status</th>
            <th className="px-5 py-3 text-sm font-bold">Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#fafafa]">
              <td className="px-5 py-3 text-sm font-medium">{item.title}</td>
              <td className="px-5 py-3">
                <span
                  className={cn(
                    "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                    item.status === "active" ? "bg-[#ecfdf3] text-[#16a34a]" : "bg-[#f3f4f6] text-[#757575]"
                  )}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-5 py-3 text-sm text-[#757575]">{item.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
