import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure Tailwind scans ALL files inside src/
    "./src/app/globals.css", // Explicitly include your global CSS file
  ],
  theme: {
    extend: {
      colors: {
        "back-ground": "#F9F9F9",
        "border-tombol": "#DFDFDF",
        "icon-wording": "#707070",
        "box-icon": "#F0F0F0",
        "hitam-judul-body": "#171717",
        "back-box-icon": "#262525",
        "background-box-border-line": "#D3D2D2",
        "tulisan-search-price": "#666666",
        "email-address": "#7B7979",
        "menu-footer": "#E5E4E4",
        "desc-footer": "#ACABAB",
      },
    },
  },
  plugins: [],
};

export default config;
