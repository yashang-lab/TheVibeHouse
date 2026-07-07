/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14140F",    // Off-black for main text & strong elements
          perk: "#BEFF50",       // Lime Green (Primary Call to Action)
          offwhite: "#F5F5EB",   // Background off-white
          orange: "#FF8C5F",     // Accent Orange
          purple: "#C8A0FF",     // Accent Purple
          cyan: "#82DCFA",       // Accent Cyan
          pink: "#FAB9FA",       // Accent Pink
          yellow: "#FFBE00",     // Accent Yellow
          accent: "#BEFF50",     // Alias for perk
          secondary: "#44443C",  // Dark gray for secondary elements
        },
        text: {
          main: "#14140F",       // Extremely dark off-black
          muted: "#6E6E64",      // Muted text
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'clean': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'clean-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'clean-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};
