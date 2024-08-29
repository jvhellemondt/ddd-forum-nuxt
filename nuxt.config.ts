// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV === 'production'
const title = 'DDD-Forum'
const url = isProduction ? 'http://localhost:3000' : 'http://localhost:3000'
const description = 'DDD-Forum | For all your DDD'
const primaryColor = '#ff4200'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src/',
  css: ['@/assets/css/main.scss', '@unocss/reset/tailwind.css'],
  unocss: {
    preflight: true,
  },
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/i18n', '@pinia/nuxt'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title,
      titleTemplate: `%s | ${title}`,
      htmlAttrs: {
        lang: 'nl',
      },
      link: [
        {
          rel: 'canonical',
          href: url,
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'color-scheme', content: 'light only' },
        {
          name: 'msapplication-TileColor',
          content: primaryColor,
        },
        {
          name: 'theme-color',
          content: primaryColor,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          property: 'og:site_name',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    },
  },
})