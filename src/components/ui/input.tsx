import * as React from "react";
import { cn } from "@/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-xl border border-[#ebe8e6] bg-white px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
