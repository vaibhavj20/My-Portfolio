/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },

      transitionProperty: {
        width: "width",
        height: "height",
      },
      colors: {
        maincolor: "#c8f31d",
      },
      rotate: {
        10: "10deg",
        15: "15deg",
      },
    },
  },
  plugins: [],
};
