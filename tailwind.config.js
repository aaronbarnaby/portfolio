/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      caveat: ["var(--font-caveat)", "cursive"],
      barlow: ["var(--font-barlow)", "sans-serif"],
      mono: ["monospace"],
    },
    extend: {
      colors: {
        darkPrimary: "#181A1B",
        darkSecondary: "#25282A",
        darkWhite: "#f2f5fa",
        "dark-3": "#b8b8b8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
}
