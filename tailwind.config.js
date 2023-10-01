/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1020px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
