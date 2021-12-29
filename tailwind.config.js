module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        lg: "992px",
        xl: "1200px",
        custom: "1280px",
      },
      colors: {
        primary: "#2b60ba",
        secondary: "#2b2b2b",
        tertiary: "#3634cf17",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: ["responsive", "hover", "focus"],
      },
      backgroundImage: {
        hero: "url('https://absmartly.com/wp-content/uploads/2020/01/banner5-3.jpg?id=743')",
      },

      keyframes: {
        wave: {
          "0%": { marginLeft: "0" },
          "100%": { marginLeft: "-1600px" },
        },
      },
      animation: {
        wave: "wave 35s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite",
        wave2:
          "wave 20s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite",
      },
    },
  },
  plugins: [],
};