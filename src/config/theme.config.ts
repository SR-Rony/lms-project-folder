/**
 * Design tokens — source of truth mirrors `globals.css` for docs and tooling.
 * Prefer Tailwind semantic classes (`bg-background`, `bg-card`, etc.) in components.
 */
export const themeConfig = {
  font: {
    sans: "Plus Jakarta Sans",
  },
  backgrounds: {
    page: "#f8fafc",
    canvas: "#eef2f7",
    muted: "#f1f5f9",
    card: "#ffffff",
    elevated: "#ffffff",
  },
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    primaryMuted: "#eff6ff",
    accent: "#6366f1",
    foreground: "#0f172a",
    mutedForeground: "#64748b",
    border: "#e2e8f0",
  },
} as const;
