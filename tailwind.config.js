/** @type {import('tailwindcss').Config} */
const _0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}`) };
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1440 = { ...Array.from(Array(1441)).map((_, i) => `${i}px`) };
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_100,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_1440,
      minHeight: px0_1440,
      maxWidth: px0_1440,
      maxHeight: px0_1440,
      spacing: px0_1440,
      zIndex: _0_10,
    },
  },
  plugins: [],
};
