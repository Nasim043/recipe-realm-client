/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mypurple': '#7C47D6',
        'myblack': '#030303',
        'myblue': '#140549',
        'mygreen': '#1C6531',
        'mygolden': '#E98B0E',
        'myyellow': '#EFB244',
        'mywhite': '#FAFAFB',
      },
    },
  },
  plugins: [require("daisyui")],
}
