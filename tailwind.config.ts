import type { Config } from "tailwindcss";

export default {
  content: [
    "./routes/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./islands/**/*.{ts,tsx}",
    "./static/theme.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "oklch(0.97 0.008 85)",
          elevated: "oklch(0.99 0.004 85)",
          inset: "oklch(0.94 0.012 80)",
        },
        fg: {
          DEFAULT: "oklch(0.22 0.02 80)",
          muted: "oklch(0.50 0.03 75)",
          subtle: "oklch(0.65 0.02 75)",
        },
        accent: {
          DEFAULT: "oklch(0.58 0.19 62)",
          fg: "oklch(0.98 0.01 62)",
          muted: "oklch(0.68 0.16 62)",
        },
        border: {
          DEFAULT: "oklch(0.88 0.02 80)",
          strong: "oklch(0.80 0.03 80)",
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        body: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        btn: "0.75rem",
        img: "1rem",
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "400" }],
        "heading": ["1.75rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
