/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        bold: "Calistoga, sans-serif",
        sans: "Raleway, sans-serif",
      },
      colors: {
        Highlight: "#4650BD",
        AccordionDescription: "#C8DEEF",
        Date: "#008364",
      },
      backgroundImage: {
        background:
          "linear-gradient(180deg, #304968 0%, #36C1A0 52.6%, #4650BD 100%)",
      },
    },
  },
  plugins: [],
};
