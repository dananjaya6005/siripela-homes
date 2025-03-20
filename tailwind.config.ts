const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
  			'sm-max': {
  				max: '640px'
  			},
  			'md-max': {
  				max: '768px'
  			},
  			'lg-max': {
  				max: '1024px'
  			},
  			'xl-max': {
  				max: '1280px'
  			},
  			'2xl-max': {
  				max: '1536px'
  			}
  		},
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
    const colors = theme("colors"); // Access the colors from the theme
    const flattenedColors = Object.entries(colors).reduce((acc, [key, value]) => {
      if (typeof value === "string") {
        acc[`--${key}`] = value;
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([subKey, subValue]) => {
          acc[`--${key}-${subKey}`] = subValue;
        });
      }
      return acc;
    }, {});
  
    addBase({
      ":root": flattenedColors, // Add CSS variables to the root
    });
  }
  