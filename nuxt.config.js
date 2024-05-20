import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    "@nuxt/image"
  ],
  image: {
    inject: true
  },

  vite: {
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.ico']
  },

  /*
  ** Headers of the page
  */
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
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
})
