import Link from "next/link";
import { siteConfig } from "@/config";

export function Logo() {
  return (
    <Link href="/" className="text-lg font-bold text-[#1a1a1a]">
      {siteConfig.name}
    </Link>
  );
}
