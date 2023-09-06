/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#004481",
        green: "#004A00",
        grey: "#768692",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "light-grey": "#BEC3C6",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      visibility: ["group-hover"], 
   
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(90deg, #004481 14.53%, #757575 69.36%, #BEC3C6 107.73%)"
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

