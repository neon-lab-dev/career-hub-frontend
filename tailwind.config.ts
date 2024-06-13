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
  },
  plugins: [require("daisyui")],
};
export default config;
