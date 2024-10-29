/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        topHeaderBgColor: '#ED145B',
        topHeaderIcColor: '#F7941E',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}