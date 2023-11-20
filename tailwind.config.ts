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
      animation: {
        "fade-in-down": "fadeInDown 1s ease-out both",
        "fade-out-up": "fadeOutUp 1s ease-in both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        light: "#F7F7F7",
        primary: "#3582ae",
        secondary: "#102037",
        terciary: "#91b8cc",
        dark: "#121212",
        done: "#4CAF50",
        scheduled: "#FFC107",
        notShowed: "#FF5722",
      },
    },
  },
  plugins: [],
};
export default config;
