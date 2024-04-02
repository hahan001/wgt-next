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
        primary: "rgb(var(--primary-text-color) / <alpha-value> )",
        secondary: "rgb(var(--second-text-color) / <alpha-value> )",
        "secondary-light": "rgb(var(--text-color) / <alpha-value> )",
      },
      spacing: {
        "1.25": "0.3125rem",
        "2.5": "0.625rem",
        "7.5": "1.875rem",
        "48.75": "12.1875rem",
      },
    },
  },
  plugins: [],
};
export default config;
