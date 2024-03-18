/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1140px",
        },
      },
      fontFamily: {
        secondary: "Poppins",
      },
      boxShadow: {
        primary: " 0px 1px 6px 0px rgba(0, 0, 0, 0.15)",
        card: "1px 1px 8px 0px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        aswadBlack: "#19191C",
        cloudedVision: "#D1D1D2",
        harrisonGrey: "#979C9E",
        dugong: "#707070",
        deepSpace: "#3F4143",
        placebo: "#E7E7E7",
        darkVoid: "#131418",
        vivaldiRed: "#EA3838",
        argent: "#888",
        cascadingWhite: "#F6F6F6",
        blackOut: "#222",
      },
      backgroundImage: {
        loginBg: "url('/src/assets/img/loginBg.png')",
        profileBg: "url('/src/assets/img/profileBg.png')",
      },
    },
  },
  plugins: [],
};
