/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lime: "#24ff00",
        grey: "rgba(105, 105, 105, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "reg-medium": "'Fira Sans'",
        "hfb-extra-small": "Cabin",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "13xl": "32px",
      "11xl": "30px",
      "17xl": "36px",
      "9xl": "28px",
      "41xl": "60px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
