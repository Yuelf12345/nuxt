// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  plugins: [
    { src: '~/plugins/slidIn', mode: 'client' },
  ],
})
