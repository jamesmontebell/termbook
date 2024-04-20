import type { Config } from "tailwindcss";

const config: Config = {
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
        "gradient": {  // Define the gradient animation keyframes
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient": "gradient 25s linear infinite",  // Define the gradient animation
      },
      borderWidth: {
        "1": "1px",
        "3": "3px",
        "4": "4px",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            'strong': {
              color: 'transparent', // Ensures the text itself is transparent
              backgroundImage: 'linear-gradient(to right, #6dd3fe, #348AC7, #6dd3fe, #348AC7, #6dd3fe, #348AC7)', // Specifies the gradient
              backgroundClip: 'text', // Ensures the background is only applied to the text
              WebkitBackgroundClip: 'text', // Compatibility for WebKit browsers
              WebkitTextFillColor: 'transparent', // Specifically for WebKit browsers
              backgroundSize: '200% 100%', // Necessary for animation
              animation: theme('animation.gradient'), // Use the defined gradient animation
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),  // Ensuring the typography plugin is loaded
    require("tailwindcss-animate"),  // Assuming this plugin exists and is correctly configured to handle animations
  ],
};

export default config;
