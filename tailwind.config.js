/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        komod: "url('/media/komod/619387 (1).jpg')",
      }),
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
