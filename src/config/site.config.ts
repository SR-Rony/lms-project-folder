export const siteConfig = {
  name: "LMS Platform",
  tagline: "Learn. Teach. Grow.",
  description: "Enterprise-grade learning management platform for students, teachers, and institutions.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    support: "/help",
  },
} as const;
