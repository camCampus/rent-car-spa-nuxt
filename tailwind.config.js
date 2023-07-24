/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./pages/*.vue",
    "./plugins/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'nuxt-green':'#08dd86',
        'raisin':'#231F20',
        'apricot':'#FFCAB1',
        'moonstone':'#69A2B0'
      },
      fontFamily: {
        'heading':['Orbitron'],
        'oswald':['Oswald']
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
}

