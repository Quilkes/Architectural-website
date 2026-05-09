/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        surface: "#FFFFFF",
        primary: "#2A2A2A",
        secondary: "#6A6A6A",
        accent: "#B0B0B0",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
