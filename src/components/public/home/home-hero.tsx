"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { heroHighlights, heroPreviewLessons, heroStats } from "./data/home.data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HomeHero() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [query, setQuery] = useState("");

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
      };

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `${ROUTES.courses}?q=${encodeURIComponent(trimmed)}` : ROUTES.courses);
  }

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-foreground/[0.03] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 md:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div {...motionProps} className="max-w-xl lg:max-w-none">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {siteConfig.tagline}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Master skills with a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                world-class LMS
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed"
            >
              {siteConfig.description} Learn anywhere, track your progress, and earn credentials that
              advance your career.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-6 space-y-2.5"
            >
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground sm:text-base">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.form
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              onSubmit={handleSearch}
              className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center"
            >
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden
                />
                <Input
                  type="search"
                  placeholder="Search courses, topics, or skills..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-11 pl-10 pr-4 shadow-sm"
                  aria-label="Search courses"
                />
              </div>
              <Button type="submit" className="h-11 px-5 sm:shrink-0">
                Search
              </Button>
            </motion.form>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="default" className="h-11 px-5">
                <Link href={ROUTES.courses}>
                  Browse courses
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <Link href={ROUTES.auth.login}>Sign in</Link>
              </Button>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4 sm:gap-6"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-bold text-foreground sm:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: 32 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                })}
            className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end"
          >
            <div className="relative rounded-2xl border border-border bg-card p-5 shadow-[0_24px_64px_-12px_rgba(15,23,42,0.12)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">My learning</p>
                  <h2 className="mt-1 text-lg font-bold text-foreground sm:text-xl">Product Design Track</h2>
                  <p className="mt-1 text-sm text-muted-foreground">3 courses · 24 lessons</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">Overall progress</span>
                  <span className="font-bold text-primary">68%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {heroPreviewLessons.map((lesson) => (
                  <li
                    key={lesson.title}
                    className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 p-3"
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                        lesson.status === "completed" && "bg-emerald-50 text-emerald-600",
                        lesson.status === "in-progress" && "bg-primary/10 text-primary",
                        lesson.status === "locked" && "bg-border/60 text-muted-foreground"
                      )}
                    >
                      {lesson.status === "completed" ? (
                        <CheckCircle2 className="h-4 w-4" aria-hidden />
                      ) : lesson.status === "in-progress" ? (
                        <PlayCircle className="h-4 w-4" aria-hidden />
                      ) : (
                        <BookOpen className="h-4 w-4" aria-hidden />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {lesson.status === "completed"
                          ? "Completed"
                          : lesson.status === "in-progress"
                            ? `${lesson.progress}% complete`
                            : "Up next"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.45 },
                  })}
              className="absolute -left-2 top-8 hidden w-44 rounded-xl border border-border bg-card p-3 shadow-lg sm:block lg:-left-10"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                  <Award className="h-4 w-4 text-amber-600" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Certificate earned</p>
                  <p className="text-[10px] text-muted-foreground">UX Design Basics</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.55 },
                  })}
              className="absolute -right-2 bottom-6 hidden w-48 rounded-xl border border-border bg-card p-3 shadow-lg sm:block lg:-right-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-4 w-4 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Live class starting</p>
                  <p className="text-[10px] text-muted-foreground">248 learners joined</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden />
                ))}
                <span className="ml-1 text-[10px] font-medium text-muted-foreground">4.9</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
