/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#0083FF",
        red: "#DC4492",
        yellow: "#FDCC49",
        green: "#228C22",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      visibility: ["group-hover"], 
   
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00BSEE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 107.73%)"
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

