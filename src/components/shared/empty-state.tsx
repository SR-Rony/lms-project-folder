import { cn } from "@/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div className={cn("rounded-2xl border border-dashed border-[#ebe8e6] bg-white p-10 text-center", className)}>
      <h2 className="text-lg font-semibold text-[#1a1a1a]">{title}</h2>
      <p className="mt-2 text-sm text-[#757575]">{description}</p>
    </div>
  );
}
