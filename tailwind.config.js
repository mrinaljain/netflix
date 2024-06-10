/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": { 100: "#de0914", 50: "#c11119" },
      },
    },
  },
  plugins: [],
};
