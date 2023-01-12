/** @type {import('tailwindcss').Config} */
// https://coolors.co/eff6fb-fffcd6-141414-403b3b-136f63
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFFCD6",
        dark: "#0F0F0F",
        metal: "#403B3B",
        alice: "#EFF6FB",
        pine: "#136F63",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
