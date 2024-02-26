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
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        red: {
          50: "#FEE7EF",
          100: "#FDD0DF",
          200: "#FAA0BF",
          300: "#F871A0",
          400: "#F54180",
          500: "#F31260",
          600: "#C20E4D",
          700: "#920B3A",
          800: "#610726",
          900: "#310413",
        },
        // .. rest of the colors
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
