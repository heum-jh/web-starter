/** @type {import('tailwindcss').Config} */
const _0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}`) };
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      zIndex: _0_10,
      keyframes: {
        progress: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "40%": {
            transform: "translateX(-60%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        progress: "progress 10s linear",
      },
    },
  },
  plugins: [],
};
