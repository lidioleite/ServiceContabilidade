import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        ink: "#1E293B",
        muted: "#64707D",
        wine: "#A61C2B",
        "wine-dark": "#861624",
        line: "#E5E3DF",
        "warm-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 18px 55px rgba(30, 41, 59, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
