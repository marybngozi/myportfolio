/* eslint-disable prettier/prettier */
module.exports = {
  theme: {
    zIndex: {
      9999: 9999,
    },
    extend: {
      colors: {
        navGray: "#AEABAB",
        navyBlue: "#001528",
        lemon: "#6EF4AC",
        lightLemon: "#6C8879",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      curves: ["cursive", "Island Moments"],
    },
  },
  screens: {
    xs: "320px",

    sm: "425px",
    // => @media (min-width: 425px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  variants: {
    outline: ["responsive", "focus", "hover", "active"],
  },
  plugins: [],
};
