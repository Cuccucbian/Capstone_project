/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1CBBB4", // Thêm màu xanh tùy chỉnh
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
