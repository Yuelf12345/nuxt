// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  plugins: [
    { src: '~/plugins/slid', mode: 'client' },
  ],
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://music.163.com/api/',
        changeOrigin: true,
      }
    }
  },
})
