// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    tailwindcss: {
        exposeConfig: true,
        configPath: '~/tailwind.config.js'
    },
    css:[
        '~/assets/fonts/Orbitron.css',
        '~/assets/fonts/Oswald.css',
        '~/assets/css/tailwind.css',
        "~/assets/css/main.css"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    buildModules: [
        '@nuxtjs/google-fonts',
        {
            families: {
                'Oswald': {
                    wght:[200, 300, 400, 500, 600, 700]
                },
                'Orbitron': {
                    wght:[400, 500, 600, 700, 800, 900]
                }
            },
            display: 'swap',
            download: true
        }
    ],
    devtools: {enabled: true},
    ssr: false,
    routeRules: {
        '/api/users': {
            proxy: {to: "http://172.10.230.30:8084/users"}
        },
        '/api/vehicles': {
            proxy: {to:"http://172.10.230.20:8082/vehicles"}
        },
        '/api/reservations/**': {
            proxy: {to:"http://172.10.230.10:8083/reservations/**"}
        },
        '/api/types': {
            proxy: {to:"http://172.10.230.20:8082/types"}
        }
    }
})


