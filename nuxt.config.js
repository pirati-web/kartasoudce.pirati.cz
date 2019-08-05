export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Karta soudce' },
      { name: 'author', content: 'Česká pirátská strana' },
      { name: 'msapplication-TileColor', content: '#000000' },
      {
        name: 'msapplication-TileImage',
        content: 'img/favicon/mstile-144x144.png'
      },
      {
        name: 'msapplication-square70x70logo',
        content: 'img/favicon/mstile-70x70.png'
      },
      {
        name: 'msapplication-square150x150logo',
        content: 'img/favicon/mstile-150x150.png'
      },
      {
        name: 'msapplication-wide310x150logo',
        content: 'img/favicon/mstile-310x150.png'
      },
      {
        name: 'msapplication-square310x310logo',
        content: 'img/favicon/mstile-310x310.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'robots', content: 'index,follow' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/img/favicon/apple-touch-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/img/favicon/apple-touch-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/img/favicon/apple-touch-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/img/favicon/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/img/favicon/apple-touch-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/img/favicon/apple-touch-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/img/favicon/apple-touch-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: '/img/favicon/apple-touch-icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-196x196.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-128x128.png'
      },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&subset=latin-ext'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/affix', mode: 'client' },
    { src: '~/plugins/chart', mode: 'client' },
    { src: '~/plugins/scrollactive', mode: 'client' },
    { src: '~/plugins/smoothscroll', mode: 'client' },
    { src: '~/plugins/mq' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  env: {
    siteInfo: {
      name: process.env.SITE_NAME || 'Karta soudce',
      claim: process.env.SITE_CLAIM || 'CLAIM: TBD',
      email: process.env.SITE_EMAIL || 'info@pirati.cz',
      phone: process.env.SITE_PHONE,
      fbProfileUrl:
        process.env.SITE_FB_PROFILE_URL ||
        'https://www.facebook.com/ceska.piratska.strana',
      twitterProfileUrl:
        process.env.SITE_TW_PROFILE_URL || 'https://twitter.com/JakubMichalek19'
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/font-awesome'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.externals = {
        moment: 'moment'
      }
    }
  }
}
