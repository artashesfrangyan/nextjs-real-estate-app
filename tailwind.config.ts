import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F3EF",
        surface: "#FFFFFF",
        foreground: "#1C1C1C",
        accent: "#1E3A5F",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;