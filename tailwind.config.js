/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        gerald: "#bada55",
        kopi: "#c0ffee",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite;",
        wiggle: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
