/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sora: "Sora",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
