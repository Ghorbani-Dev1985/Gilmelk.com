import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config : Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                md: '0.625rem',
              }
      },
      colors:{
        primary: {
          50: "#EAFBF1",
          100: "#D5F6E3",
          200: "#AAEEC6",
          300: "#80E5AA",
          400: "#59DE91",
          500: "#2ED573",
          600: "#23AE5D",
          700: "#1A7F44",
          800: "#11552D",
          900: "#092A17",
          950: "#04150B",
          DEFAULT: "#2ED573",
           },
           secondary: '#444444',
           success: 'rgb(0 , 192 , 115)',
           warning: 'rgb(255 , 153 , 0)',
           error: 'rgb(255,71 , 87)',
           danger: '#f43f5e'
       },
       fontFamily: {
        estedad: ["var(--font-estedad-FD)"],
      },
      backgroundImage: {
        'paternBg' : 'url("/images/footer/footerPatern.png")',
         'Footer': 'linear-gradient(rgb(61,61,61), rgba(30,30,30,0.83)) , url("/images/footer/footerPatern.png")'
    },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      scrollbar: ["light"],
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: '100ch',
        }
      }
    }
},
  plugins: [
    nextui({
     addCommonColors: true,
     themes: {
      light: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      }
     } 
  }),
require("tailwind-scrollbar"),
require('@tailwindcss/typography'),
function ({ addVariant } : any) : void {
  addVariant("child", "& > *");
  addVariant("child-hover", "& > *:hover");
},
],
};
export default config;
