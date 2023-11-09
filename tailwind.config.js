/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        komod: "url('/media/komod/619387 (1).jpg')",
        test: "url('/media/1.avif')",
      },
    },
    fontFamily: {
      yekan: "yekan",
      yekBold: "bold",
      yekExtra: "extra",
      iranSansBold: "iranSansBold",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
