import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
