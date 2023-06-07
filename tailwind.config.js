/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'xs': { 'min': "0px", 'max': "640px" },
      'sm': { 'min': "640px", 'max': "768px" },
      'md': { 'min': "768px", 'max': "1024px" },
      'lg': { 'min': "1024px", 'max': "1280px" },
      
    },
    extend: {},
  },
  plugins: [],
};
