/** @type {import('tailwindcss').Config} */
const _0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}`) };
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      zIndex: _0_10,
    },
  },
  plugins: [],
};
