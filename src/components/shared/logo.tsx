import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/config";
import { cn } from "@/utils";

interface LogoProps {
  className?: string;
  /** Show tagline always, or only from the `lg` breakpoint upward */
  showTagline?: boolean | "lg";
  compact?: boolean;
}

export function Logo({ className, showTagline = false, compact = false }: LogoProps) {
  const taglineClassName =
    showTagline === "lg"
      ? "hidden lg:block"
      : showTagline
        ? "block"
        : "hidden";

  return (
    <Link href="/" className={cn("group flex items-center gap-2.5 lg:gap-3", className)}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_20px_-10px_rgba(37,99,235,0.45)] transition-transform group-hover:scale-105 lg:h-10 lg:w-10 lg:rounded-2xl">
        <GraduationCap className="h-5 w-5 lg:h-[1.35rem] lg:w-[1.35rem]" aria-hidden />
      </div>
      <div className={cn("min-w-0 leading-tight", compact && "hidden min-[420px]:block")}>
        <span className="block truncate text-base font-bold tracking-tight text-foreground lg:text-lg">
          {siteConfig.name}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "truncate text-[10px] font-medium text-muted-foreground sm:text-xs lg:text-[13px]",
              taglineClassName
            )}
          >
            {siteConfig.tagline}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
