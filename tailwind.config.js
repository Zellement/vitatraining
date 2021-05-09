const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: ["is-active"],
    },
  },
  theme: {
    fontSize: {
      "2xs": "0.75rem",
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "6rem",
      "8xl": "7rem",
      "9xl": "8rem",
      "10xl": "9rem",
      "11xl": "10rem",
      "12xl": "11rem",
      "13xl": "12rem",
      "14xl": "13rem",
      "15xl": "14rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    extend: {
      fontFamily: {
        sans: ["Cabin", "Arial", "sans-serif"],
      },
      height: {
        "screen-1/10": "10vh",
        "screen-2/10": "20vh",
        "screen-3/10": "30vh",
        "screen-4/10": "40vh",
        "screen-5/10": "50vh",
        "screen-6/10": "60vh",
        "screen-7/10": "70vh",
        "screen-8/10": "80vh",
        "screen-9/10": "90vh",
      },
      colors: {
        gray: colors.warmGray,
        orange: {
          DEFAULT: "#FF820D",
          50: "#FFF9F3",
          100: "#FFEBD9",
          200: "#FFD1A6",
          300: "#FFB773",
          400: "#FF9C40",
          500: "#FF820D",
          600: "#D96900",
          700: "#A65000",
          800: "#733800",
          900: "#401F00",
        },
        red: {
          DEFAULT: "#AB0033",
          50: "#FF92B2",
          100: "#FF78A0",
          200: "#FF457C",
          300: "#FF1259",
          400: "#DE0042",
          500: "#AB0033",
          600: "#780024",
          700: "#450015",
          800: "#120005",
          900: "#000000",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "group-hover",
      "hover",
      "focus",
      "group-focus",
    ],
    textColor: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    padding: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    scale: [
      "hover",
      "focus",
      "group-hover",
      "group-focus",
      "responsive",
      "focus-within",
    ],
    margin: ["responsive", "group-hover", "hover", "focus", "group-hover"],
    translate: ["responsive", "group-hover", "hover", "focus", "group-hover"],
  },
  corePlugins: {
    container: false,
  },
}
