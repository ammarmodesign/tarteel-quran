/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "greeny-primary": "#2BAE66",
        "greeny-secondary": "#007635",
        blacky: "#121212",
        "light-blacky": "#818181",
      },
      animation: {
        wiggle: "wiggle 7s ease-in-out infinite",
        round: "round 4s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-24deg)" },
          "50%": { transform: "rotate(24deg)" },
        },

        round: {
          "0%, 100%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(-8deg)" },
        },
      },
    },
  },
  plugins: [],
};
