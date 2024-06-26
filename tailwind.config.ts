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
        "courseCard-gradient-blue":
          "linear-gradient(282deg, #213FAC 0%, #2D65E8 100%)",
        "courseCard-gradient-white":
          "linear-gradient(282deg, #DCEAFD 0%, #EFF6FF 100%)",
        line: "rgba(255, 255, 255, 0.12)",
        "gradient-primary-button":
          "linear-gradient(180deg, #F9533A 0%, #C22A13 93.51%)",
        "gradient-primary-button-hover":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #F9533A 0%, #C22A13 93.51%)",
      },
      boxShadow: {
        "primary-button": "0px 8px 24px -10px rgba(249, 83, 58, 0.50)",
      },
      customBorder: {
        'white-horizontal-line': 'rgba(255, 255, 255, 0.12)',
        'gray-horizontal-line': 'rgba(89, 90, 97, 0.15)',
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          25: "#FFF1F1",
          50: "#fff3f1",
          100: "#ffe4e0",
          200: "#ffcec7",
          300: "#ffaca0",
          400: "#ff7d69",
          500: "#f9533a",
          550: '#F9533A',
          600: "#e7361b",
          650: "#FF6464",
          700: "#c22a13",
          800: "#a02614",
          900: "#852517",
          950: "#481007",
        },
        secondary: {
          20: "#FFFFEA",
          25: "#FABB00",
          50: "#f5f6fa",
          100: "#eaecf4",
          200: "#d0d7e7",
          300: "#a6b4d3",
          400: "#778db9",
          500: "#556ea2",
          525: "#2D65E8",
          550: "#264FC6",
          575: "#3E81F3",
          600: "#425687",
          650: '#556EA2',
          700: "#37466d",
          800: "#303d5c",
          900: "#2c364e",
          925: "#303D5C",
          950: "#161a27",
        },
        neutral: {
          50: "#f7f7f8",
          100: "#eeeef0",
          150: "#E5E5E8",
          200: "#d8d9df",
          300: "#b6b7c3",
          400: "#8f91a1",
          450: "#F5F6FA",
          500: "#717386",
          550: "#EAECF4",
          600: "#5b5c6e",
          650: '#D0D7E7',
          700: "#4a4a5a",
          800: "#40414c",
          900: "#383842",
          925: "#434447",
          950: "#25252c",
          960: '#4A4A5A',
          970: '#37466D',
          975: "#434347"
        },
        success: {
          50: "#EFFEF7",
          100: "#1ACD81",
        },
        warning: {
          50: "#FFC244",
          // 100: "#1ACD81",
        },
        error: {
          500: "#FF3333",
        },
       
        woodsmoke: {
          800: "#434347",
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
  daisyui: {
    themes: ["light"],
  },

  plugins: [require("daisyui")],
};

export default config;
