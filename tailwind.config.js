/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_projects/**/*.md",
    "./projects/**/*.html",
    "./_research/**/*.md",
    "./pages/**/*.md",
    "./*.html",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0f172a", // deep slate
          geo: "#1d4ed8", // geospatial blue
          water: "#047857", // hydrology green
          muted: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      backgroundImage: {
        'header': "url('/assets/images/background/usgs-002-unsplash.jpg')",
        'footer': "url('/assets/images/background/usgs-000-unsplash.jpg')",
      }
    },
  },

  plugins: [],
};
