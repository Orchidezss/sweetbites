/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FEFAF6",
        },
        secondary: {
          DEFAULT: "#EADBC8",
        },
        accent: {
          DEFAULT: "#102C57",
        },
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },

    fontFamily: {
      daysone: ["Days One"],
      delius: ["Delius"],
      script: ["Dancing Script"],
    },
  },
  plugins: [],
};
