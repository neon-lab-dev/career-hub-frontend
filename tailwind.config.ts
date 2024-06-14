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
        "gradient-primary-button":
          "linear-gradient(180deg, #F9533A 0%, #C22A13 93.51%)",
        "gradient-primary-button-hover":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #F9533A 0%, #C22A13 93.51%)",
      },
      boxShadow: {
        "primary-button": "0px 8px 24px -10px rgba(249, 83, 58, 0.50)",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fff3f1",
          100: "#ffe4e0",
          200: "#ffcec7",
          300: "#ffaca0",
          400: "#ff7d69",
          500: "#f9533a",
          600: "#e7361b",
          700: "#c22a13",
          800: "#a02614",
          900: "#852517",
          950: "#481007",
        },
        secondary: {
          50: "#f5f6fa",
          100: "#eaecf4",
          200: "#d0d7e7",
          300: "#a6b4d3",
          400: "#778db9",
          500: "#556ea2",
          600: "#425687",
          700: "#37466d",
          800: "#303d5c",
          900: "#2c364e",
          950: "#161a27",
        },
        neutral: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d8d9df",
          300: "#b6b7c3",
          400: "#8f91a1",
          500: "#717386",
          600: "#5b5c6e",
          700: "#4a4a5a",
          800: "#40414c",
          900: "#383842",
          950: "#25252c",
        },
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
