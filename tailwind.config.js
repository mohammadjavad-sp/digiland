/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        komod: "url('/media/komod/komod.jpg')",
      },
    },
    fontFamily: {
      yekan: "yekan",
      yekBold: "bold",
      yekExtra: "extra",
      iranSansBold: "iranSansBold",
      iranYekanMedium: "iranYekanMedium",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
