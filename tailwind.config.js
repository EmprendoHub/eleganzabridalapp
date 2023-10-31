/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': "#f6f6f6"
      },
      fontFamily: {
        "playfair-display": "'Playfair Display'",
        "poppins": ['Poppins', 'sans-serif'],
        
      },

      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
      },
      screens: {
        xlg: {
          max: "1400px",
        },
        lg: {
          max: "1200px",
        },
        md: {
          max: "960px",
          
        },
        mdsm: {
          max: "700px",
          
        },
        sm: {
          max: "521px",
        },
        xsm: {
          max: "420px",
        },
        xxs: {
          max: "374px",
        },
      },
    },
  },
  plugins: [],
}
