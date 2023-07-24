// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    tailwindcss: {
        exposeConfig: true,
        configPath: '~/config/tailwind.js'
    },
    css:[
        '~/assets/fonts/Orbitron.css',
        '~/assets/fonts/Oswald.css'
    ],
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
        }
    }
})


