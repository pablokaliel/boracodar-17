/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "purple-gradient-card":"#0e1765",
        "pink-gradient-card":"#350e58",
        "purple-gradient-bg":"#030422",
        "pink-gradient-bg":"#090114",
        "color-h3":"#9C83A7",
        "color-title":"##312D74",
      },
      boxShadow: {
        '3xl': '0px 294px 118px rgba(0, 0, 0, 0.03), 0px 165px 99px rgba(0, 0, 0, 0.1), 0px 73px 73px rgba(0, 0, 0, 0.17), 0px 18px 40px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2)',
        "4xl":'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 165px 99px rgba(0, 0, 0, 0.1), 0px 73px 73px rgba(0, 0, 0, 0.17), 0px 18px 40px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
