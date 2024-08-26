import type { Config } from "tailwindcss";
import phone from "@/assets/phone.svg";
import plugin from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, .5) 5%, rgba(0, 0, 0, .6)), url('/assets/spark/RENDERINGS/EXTERIOR/Exterior - 2.jpg')",
        "head-modal": "linear-gradient(to right, var(--white) 50%, rgba(255, 255, 255, 0)), url('/assets/images/frameview.jpg')"
      },
      backgroundColor: {
        primary: "#282828",
        gold: "#523D19", // d0a966
        main: "#FFF",
        'light-sea-green': '#523D19',
        'black-2': '#282828',
        'light-grey': '#d0d0d0',
      },
      backgroundPosition: {
        "hero-center": "0 0, 50%"
      },
      letterSpacing: {
        bittight: "-.01em"
      },
      textColor: {
        silver: "#b5b5b5",
        "dark-silver": "#424242",
        gold: "#523D19",
        "shade-black": "#2b2e38",
        'body': '#faf9f7',
        'black': '#080300',
        'white': '#ffffff',
        'midnight-blue': '#171e37',
        'corporative': '#523D19',
        'black-2': '#282828',
        'grey': '#757575',
        'linen': '#ebe0d6',
        'dim-grey': '#616265',
        'indian-red': '#b4624e',
        'dark-grey': '#a3a3a3',
        'light-grey': '#d0d0d0',
        'grey-2': '#8b8b8b',
        'light-sea-green': '#523D19',
        'light-yellow': '#e7dfa4',
        'blue': '#00ade5',
      },
      borderColor: {
        silver: "#b5b5b5",
        "table-blue": "#021d4a1a",
        gold: "#523D19",
        "silver-lux": "#d4d5db",
        "bt-hover": "#282828",
        'light-grey': '#d0d0d0',
        'light-sea-green': '#523D19'

      },
      content: {
        phone: "url(/assets/phone.svg)"
      },
      colors: {
        "bt-primary": "#FFF",
        "bt-secondary": "#FFF",
        "bt-hover": "#282828",
        "gray": "#d0d0d0"
      },
      gridTemplateAreas: {
        'about': [
          "about-index about-text",
          "about-index about-text",
          "about-index about-text",
          "about-pic1 about-pic2",
          "about-pic1 about-pic3",
          "about-logo about-pic3",
        ],
        "modal-heading": [
          "heading-form img",
          "form img"
        ],
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-3d')(),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
};
export default config;
