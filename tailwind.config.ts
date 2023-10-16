import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "16px",
      base: "20px",
      lg: "24px",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
