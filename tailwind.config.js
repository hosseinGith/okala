/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      bodyBg: "#f6f6f6",
      contentBodyColor: "#fff",
      lowTextColor: "#3d3d3d",
      lowLgTextColor: "#888888",
      borderLowColor:"#e7e7e7",
      highTextColor: "#000",
      mainBg: "#f01436",
      mainBgLowOpacity: "#faecee",

    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
