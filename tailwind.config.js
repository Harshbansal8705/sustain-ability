/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#142e1e",
        secondary: "#e6f586",
        "bg-primary": "#e8f787",
          baseGreen: "#0c3125",
          textHighlight: "#e6f586",
      },
      backgroundImage: {
        image2: "url('images/image.jpg')",
      }
    },
  },
  plugins: [],
}

