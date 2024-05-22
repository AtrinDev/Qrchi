/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: {
        50: "#FBF3E9",
        100: "#F8E8D3",
        200: "#F0D1A8",
        300: "#E9BA7C",
        400: "#E2A350",
        500: "#BF7A20",
        600: "#AF701D",
        700: "#835416",
        800: "#57380F",
        900: "#2C1C07",
      },
      secondary: {
        50: "#FCF7E8",
        100: "#FAEED1",
        200: "#F4DDA4",
        300: "#EFCD76",
        400: "#E9BC49",
        500: "#EBC156",
        600: "#B68916",
        700: "#896710",
        800: "#5B440B",
        900: "#2E2205",
      },
      grayScale: {
        0: "#FFFFFF",
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#464646",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
    },
    keyframes: {
      openMenu: {
        "0%": { transform: "scaleX(0)" },
        "80%": { transform: "scaleX(1.2)" },
        "100%": { transform: "scaleX(1)" },
      },
    },
    animation: {
      "open-menu": "openMenu 0.5s ease-in-out forwards",
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(primary|secondary|grayScale)/,
    },
  ],
};
