module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        lg: "992px",
        maxmd: { max: "991px", min: "480px" },
        xl: "1200px",
        custom: "1280px",
      },
      borderRadius: {
        custom: "calc(0.25rem - 1px)",
      },
      colors: {
        primary: "#2b60ba",
        secondary: "#2b2b2b",
        tertiary: "#3634cf17",
      },
      fontFamily: {
        sans: ["Source Sans Pro"],
        poppins: ["Poppins", "sans-serif"],
        work_sans: ["WorkSans", "sans-serif"],
        barlow_semi_condensed: ["Barlow Semi Condensed", "sans-serif"],
      },
      transitionProperty: {
        height: ["responsive", "hover", "focus"],
      },
      backgroundImage: {
        hero: "url('../assets/hero.jpg')",
        about: "url('../assets/about.png')",
        blog: "url('../assets/blog.png')",
      },
    },
  },
  plugins: [],
};
