const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', "Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        beam: {
          "0%": { top: "0%", opacity: "0" },
          "15%, 85%": { opacity: "1" },
          "100%": { top: "calc(100% - 6rem)", opacity: "0" },
        },
      },
      animation: {
        beam: "beam 5s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        gradient: "gradient 6s ease infinite",
      },
    },
  },
  plugins: [],
};
