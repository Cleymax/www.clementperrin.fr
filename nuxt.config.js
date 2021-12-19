export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Clément PERRIN | Etudiant en réseaux & Télécommunications',
    titleTemplate: '%s - Clément PERRIN | Etudiant en réseaux & Télécommunications',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Etudiant en deuxième année de DUT Réseaux & Télécommunications. Passioné d\'informatique et de l\'administration système j\'aime découvrir et me documenter sur les nouvelles technologies.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#077df2' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Clément PERRIN' },
      { name: 'full-screen', content: 'Yes' },
      { name: 'browsermode', content: 'application' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/redirect-module'
  ],

  router: {
    linkExactActiveClass: 'active',
  },

  redirect: [
    {
      from: '^/twitter',
      to: 'https://twitter.com/Cleymax',
    }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        stage: 2,
        autoprefixer: {
          flexbox: true,
        },
      },
    },
  },
}
