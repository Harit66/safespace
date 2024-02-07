/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {},
  },
  plugins: [],
};
