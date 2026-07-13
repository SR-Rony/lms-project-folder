/**
 * 10 Minute School inspired design tokens — mirrors `globals.css`.
 */
export const themeConfig = {
  font: {
    sans: "Plus Jakarta Sans",
  },
  backgrounds: {
    page: "#fff8f8",
    canvas: "#f0f1f7",
    muted: "#fdf2f2",
    card: "#ffffff",
    elevated: "#ffffff",
  },
  colors: {
    primary: "#eb2026",
    primaryHover: "#d0181e",
    primaryMuted: "#fff0f0",
    accent: "#ff6b35",
    accentPurple: "#5e37ea",
    accentGreen: "#389452",
    foreground: "#1a1a2e",
    mutedForeground: "#58688b",
    border: "#f0e4e4",
  },
  gradients: {
    brand: "linear-gradient(135deg, #eb2026 0%, #ff6b35 100%)",
    hero: "linear-gradient(180deg, #fff5f5 0%, #fff8f8 40%, #ffffff 100%)",
  },
} as const;
