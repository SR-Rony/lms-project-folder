"use client";

import Link from "next/link";
import { publicNav } from "@/config";
import { ROUTES } from "@/constants";
import { Logo } from "@/components/shared";
import { Button } from "@/components/ui/button";

export function PublicHeader() {
  return (
    <header className="border-b border-[#ebe8e6] bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {publicNav.map((item) => (
            <Link key={item.href} href={item.href!} className="text-sm font-medium text-[#757575] hover:text-[#1a1a1a]">
              {item.title}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm">
          <Link href={ROUTES.auth.login}>Login</Link>
        </Button>
      </div>
    </header>
  );
}
