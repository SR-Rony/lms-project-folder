import { siteConfig } from "@/config";

export function PublicFooter() {
  return (
    <footer className="border-t border-[#ebe8e6] bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-[#757575] md:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
