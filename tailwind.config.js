import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                'colorNuxt-green': '#08dd86',
                'colorBackground': "#272525",
                'colorPrimary': "#C1BDB3",
                'colorSecondary': "#323031",
                'colorTextLight': "#ffffff",
                'colorTextDark': "#000000"
            },
            fontFamily: {
                'sans': ['Oswald', ...defaultTheme.fontFamily.sans],
                'heading':['Orbitron'],
                // 'oswald':['Oswald']
            }
        }
    },
    plugins: [require("daisyui")],
}