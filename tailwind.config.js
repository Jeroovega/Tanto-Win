/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      aileron: ['aileron', 'sans-serif'],
      aileronRegular: ['aileronRegular', 'sans-serif'],
      averta: ['averta', 'sans-serif'],

    }
  },
  plugins: [require("daisyui")],
}