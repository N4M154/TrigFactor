/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 4s steps(40, end) infinite",
        blink: "blink 0.75s step-start infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
          "100%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
