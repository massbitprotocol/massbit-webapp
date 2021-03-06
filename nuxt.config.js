const description = `Find and consume data faster from the leading Polkadot/Substrate protocols using our free MassBit explorer. The world’s decentralised data is now available to query using GraphQL.`;
const color = `#2C3ACF`;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MassBit',
    bodyAttrs: {
      class: ['antialiased bg-white text-base'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: {
    color,
  },

  publicRuntimeConfig: {},

  privateRuntimeConfig: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    '~/modules/apollo-server',
  ],

  tailwindcss: {
    viewer: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  dayjs: {},

  sitemap: {
    gzip: true,
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo.config.js',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'MassBit',
      short_name: 'MassBit',
      description,
      lang: 'en',
      theme_color: color,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  },
};
