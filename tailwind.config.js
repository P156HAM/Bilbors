// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        subHeadline: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        sm: "0.7rem",
        tiny: "0.8rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.56rem",
        "2xl": "1.95rem",
        "3xl": "2.44rem",
        "4xl": "3.05rem",
        "5xl": "3.81rem",
        "6xl": "4.77rem",
        "7xl": "5.96rem",
      },
      height: {
        "50svh": "50svh",
        "70svh": "70svh",
        128: "32rem",
        160: "40rem",
      },
      screens: {
        sd: { min: "200px", max: "639px" },
        // => @media (min-width: 300px and max-width: 639px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        yoYoAnimation: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(360px)",
          },
        },
      },
      animation: {
        "spin-slow": "spinSlow 10s linear infinite",
        "yo-yo": "yoYoAnimation 10s ease-in-out infinite",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary1: "#acdeed",
        primary2: "#1753d8",
        primary3: "#001446",
        secondary1: "#003366",
        secondary2: "#fd7e54",
        secondary3: "#cfd8dc",
        secondary4: "#f0f3f7",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        fontSize: {
          tiny: "0.75rem", // text-tiny
          small: "0.875rem", // text-small
          medium: "1rem", // text-medium
          large: "1.125rem", // text-large
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "14px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            },
          },
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              50: "#F0FCFF",
              100: "#E6FAFE",
              200: "#D7F8FE",
              300: "#C3F4FD",
              400: "#A5EEFD",
              500: "#7EE7FC",
              600: "#06B7DB",
              700: "#09AACD",
              800: "#0E8AAA",
              900: "#053B48",
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          dark: {
            layout: {
              hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
              boxShadow: {
                // shadow-small
                small:
                  "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                // shadow-medium
                medium:
                  "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                // shadow-large
                large:
                  "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              },
            },
            colors: {
              background: "#000000", // or DEFAULT
              foreground: "#ECEDEE", // or 50 to 900 DEFAULT
              primary: {
                50: "#FAFAFA",
                100: "#F4F4F5",
                200: "#E4E4E7",
                300: "#D4D4D8",
                400: "#A1A1AA",
                500: "#71717A",
                600: "#52525B",
                700: "#3F3F46",
                800: "#27272A",
                900: "#18181B",
                foreground: "#FFFFFF",
                DEFAULT: "#006FEE",
              },
            },
          },
        },
      },
    }),
  ],
};
