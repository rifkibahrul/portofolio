/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      colors: {
        dark: "#222831",
        lighDark: "#393E46",
        accent: "#00ADB5",
        primary: "#EEEEEE",
      },
      screens: {
        sm: "480px",
        // => @media (min-width: 480px) { ... }

        md: "640px",
        // => @media (min-width: 640px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
