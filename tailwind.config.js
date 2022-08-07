/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./styles/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: ["Martel", "'Scope One'", "ui-serif", "serif"],
        heading: ["'Scope One'", "serif"],
        body: ["Poppins", "sans-serif"],
        button: ["Martel", "Arial", "sans-serif"],
      },

      colors: {
        primary: "rgb(var(--color-primary))",
        "primary-o": {
          5: "rgba(var(--color-primary), 0.5)",
          8: "rgba(var(--color-primary), 0.8)",
        },
        secondary: "rgb(var(--color-secondary))",
        tertiary: "rgb(var(--color-tertiary))",
        gray: {
          50: "#d9d5d0",
          100: "#b3afab",
          200: "#94918e",
          300: "#7a7876",
          400: "#615f5e",
          500: "#4a4947",
          600: "#363533",
          700: "#262524",
          800: "#121111",
          900: "#0a0a0a",
        },
        "white-o": {
          9: "rgba(255, 255, 255, 0.9)",
        },
      },

      transitionTimingFunction: {
        popup: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      translate: {
        "2/1": "-50%",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
