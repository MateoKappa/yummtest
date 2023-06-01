/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      salsa: ["Salsa"],
      sans: ["Open sans"],
      Inter: ["Inter"],
    },

    extend: {
      textShadow: {
        sm: "0 -20px 0px var(--tw-shadow-color)",
      },
    },
    backgroundImage: {
      ourPlaceBg: "url('/Home/ourPlaceBg.png')",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
