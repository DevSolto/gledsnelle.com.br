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
      backgroundImage: {
        '1': "url('./src/assets/1.jpg')",
        '2': "url('./src/assets/2.jpg')",
        '3': "url('./src/assets/3.jpg')",
        '4': "url('./src/assets/4.jpg')",
        '5': "url('./src/assets/5.jpg')",
        '6': "url('./src/assets/6.jpg')",
        '7': "url('./src/assets/7.jpg')",
        'default': "url('./src/assets/default.png')",
      }
    },
  },
  plugins: [],
};