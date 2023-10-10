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
        popup: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        progress: "progress 10s linear",
        popup: "popup 250ms linear",
      },
    },
  },
  plugins: [],
};
