/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"]
    }
  },
  plugins: [],
}