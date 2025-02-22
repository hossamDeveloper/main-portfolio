/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        moveDownAnimation: "moveDown 1s linear infinite alternate",
        hiddenFollow: "hiddenFollow 2s linear infinite alternate",
        spin: "spin 5s linear infinite",
      },
      keyframes: {
        moveDown: {
          '0%': { top: "5%", opacity: "0" },
          '20%': { opacity: "1" },
          '40%': { opacity: "0" },
          '60%': { opacity: "1" },
          '80%': { opacity: "0" },
          '100%': { top: "60%", opacity: "1" },
        },
        hiddenFollow: {
          '0%': { width: "0" },
          '20%': { width: "100%" },
          '40%': { width: "100%" },
          '80%': { width: "100%" },
          '100%': { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}

