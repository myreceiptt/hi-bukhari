import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "back-ground": "#F9F9F9",
        "hitam-judul-body": "#171717",
        "border-tombol": "#DFDFDF",
        "icon-wording": "#707070",
        "box-icon": "#F0F0F0",
        "warna-icon": "#171717",
        "background-box-border-line": "#D3D2D2",
        "tulisan-search-price": "#666666",
        "back-box-icon": "#262525",
        "email-address": "#7B7979",
        "menu-footer": "#E5E4E4",
        "desc-footer": "#ACABAB",
      },
    },
  },
  plugins: [],
};
export default config;
