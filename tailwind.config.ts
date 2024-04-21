import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPallete,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.suggestions": "true",
  darkMode: "class",  // Correct setting for dark mode
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" } // Extended to 200% to ensure smoother loop
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient": "gradient 45s linear infinite", // Increased time and ensured linear motion
      },
      borderWidth: {
        "1": "1px",
        "3": "3px",
        "4": "4px",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, strong': {
              color: 'transparent',
              backgroundImage: 'linear-gradient(to right, #6dd3fe, #48b5f0, #348AC7, #2667d9, #348AC7, #48b5f0, #6dd3fe)',              
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '300% 300%', // Increase size to ensure smooth transitions
              animation: theme('animation.gradient'),
            }
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPallete(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config;

