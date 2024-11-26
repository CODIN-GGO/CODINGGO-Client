import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", ...fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: "2px 2px 15px rgba(6, 17, 28, 0.07), -2px -2px 15px rgba(6, 17, 28, 0.07)",
      },
      colors: {
        black: { DEFAULT: "#06111C" },
        sky: {
          DEFAULT: "#5CAFFF",
          light: "#ADD7FF",
          dark: "#1E90FF",
        },
        gray: {
          DEFAULT: "#414141",
          dark: "#6E6E6E",
          mideum: "#818181",
          light: "#9A9A9A",
          lightest: "#C1C1C1",
        },
        red: {
          DEFAULT: "#EB4335",
          light: "#F47A70",
        },
        green: {
          DEFAULT: "#32CD32",
        },
        yellow: {
          DEFAULT: "#FEE500",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
