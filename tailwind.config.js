/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      opacity: {
        10: ".1",
      },
      colors: {
        purple: {
          dark: "#2A27C9",
          light: "#514CFF",
        },

        grey: {
          10: "#F2F3F6",
          20: "#E2E2ED",
          50: "#BBC0D0",
          100: "#7780A1",
        },
        dark: {
          90: "#262840",
          100: "#060714",
        },
      },
      screens: {
        desktop: { max: "1392px" },
        ipad: { max: "976px" },
        mobile: { max: "768px" },
        smobile: { max: "640px" },
        xsmobile: { max: "460px" },
      },
      fontFamily: {
        sora: "Sora",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
