import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "RoxoNeon": "#8A2BE2",
        "AzulEletrico": "#1E90FF",
        "AmareloDourado": "#FFD700",
        "CinzaMetalico": "#A9A9A9",
      },
    },
  },
  plugins: [],
} satisfies Config;
