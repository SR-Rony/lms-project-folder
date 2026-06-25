"use client";

import type { SupportManagementData } from "@/types/admin-support-management";

export function AdminSupportManagementPage({ data }: { data: SupportManagementData }) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-6">
      <h1 className="text-2xl font-bold">SupportManagement</h1>
      <p className="mt-2 text-sm text-[#757575]">{data.items.length} records loaded.</p>
    </div>
  );
}
