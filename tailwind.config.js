/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        'mainBlue': "rgb(23, 93, 247)",
        "transparentBorder": "rgb(0, 80, 255)",
        "hoverMainBlue": "rgb(15,77,212)",
        "menuSeperatorText": "rgb(128,167,255)",
        "mainBackground": "rgb(245,245,245)"
      }
    },
  },
  plugins: [],
};
