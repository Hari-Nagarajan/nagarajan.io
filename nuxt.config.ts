import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image'
  ],
  image: {
    inject: true,
    format: ['webp']
  },

  vite: {
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg']
  },

  app: {
    head: {
      title: 'Hari\'s Website',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'user-scalable=yes, width=device-width, initial-scale=1, maximum-scale=5' },
        { hid: 'description', name: 'description', content: 'Hari\'s Personal Website!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }

})
