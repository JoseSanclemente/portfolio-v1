import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/theme.ts",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: "var(--red)",
      green: "var(--green)",
      purple: "var(--purple)",
      gray: {
        dark: "var(--grayDark)",
        light: "var(--grayLight)",
      },
    },
  },
  plugins: [],
};
export default config;
