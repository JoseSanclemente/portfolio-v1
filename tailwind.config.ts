import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: '#e61717',
      green: '#bfd732',
      purple: '#77a9ff',
      gray: {
        dark: '#1c1c1e',
        light: '#f2f2f7',
      }
    },
  },
  plugins: [],
};
export default config;
