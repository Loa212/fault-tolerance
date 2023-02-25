/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#BF32E4",
        secondary: "#14E9F1",
        light: "#EDF7F6",
        dark: "#0A090C",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
