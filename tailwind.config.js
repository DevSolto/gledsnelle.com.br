/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#0D68AF",
        },
        pink: {
          300: "#E23C54",
        },
        purple: {
          300: "#8C03C5",
        },
        green: {
          300: "#94C120",
        },
      },  
    },
  },
  plugins: [],
};