module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
      },
      colors: {
        primary: "#2b60ba",
        secondary: "#2b2b2b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
