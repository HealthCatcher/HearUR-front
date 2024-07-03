import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-primary": {
          100: "#FFEDEA",
          200: "#FFCCC2",
          300: "#FFAB9C",
          400: "#FC8069",
          500: "#FF6549",
          600: "#EC4122",
          700: "#D92100",
          800: "#B41C00",
          900: "#4D0C00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
