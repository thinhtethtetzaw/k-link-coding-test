const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          450: "#EEF1FF",
          550: "#939dd4",
          650: "#2E3EA1",
          750: "#151D72",
        },
      },
      boxShadow: {
        card: "0px 1px 2px rgba(16, 24, 40, 0.09)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
