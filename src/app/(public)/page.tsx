import Link from "next/link";
import { siteConfig } from "@/config";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">{siteConfig.tagline}</p>
        <h1 className="mt-3 text-4xl font-bold text-[#1a1a1a] sm:text-5xl">{siteConfig.name}</h1>
        <p className="mt-4 text-lg text-[#757575]">{siteConfig.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={ROUTES.courses}>Browse courses</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={ROUTES.auth.login}>Sign in</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {["Students", "Teachers", "Admins"].map((role) => (
          <Card key={role}>
            <CardHeader>
              <CardTitle>{role}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#757575]">Role-based dashboards with shared shell architecture.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
