/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: "#1B8CCF",
        grass:"#4da227",
        orange: "#FDC618",
        sunny: "#efcd1f",
        grey: "#768692",
        "deep-sky": "#1B4F72",
        "dark-grey": "#757575",
        "light-grey": "#BEC3C6",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      visibility: ["group-hover"], 
   
      backgroundImage: (theme) => ({
        "gradient-bgy":
          "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)"
      }),
      fontFamily: {
        playfair: ["Playfair Display", 'serif'],
        opensans: ["Open Sans", "sans-serif"],
        soon: ["Coming Soon", "serif"]
      },
      content: {
        bursh: "url('./assets/brush.png')"
      }
    },
    screens: {
      xs: '488px',
      s: '768px',
      md: '1060px'
    }
  },
  plugins: [],
}

