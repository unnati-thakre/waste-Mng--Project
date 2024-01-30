/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        secondary: "#2E2E2E",
        customGreen: '#15803d',
        customGreens: '#16a34a',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
