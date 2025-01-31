/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { color: "#FF4500", textShadow: "0px 0px 10px #FF4500" }, // Deep Orange Glow
          "50%": { color: "#FF0000", textShadow: "0px 0px 15px #FF0000" }, // Bright Red Glow
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
