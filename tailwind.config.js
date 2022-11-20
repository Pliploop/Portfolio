/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        sans: ['inter'],
        mono: ['monospace']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
