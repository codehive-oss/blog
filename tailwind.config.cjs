/** @type {import('tailwindcss').Config} */
// https://coolors.co/fae0db-0f0f0f-282a2a-3d5249-97d8b2
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        misty: "#FAE0DB",
        dark: "#0F0F0F",
        jet: "#1F1F1F",
        sea: "#84B398",
        turquoise: "#97D8B2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
