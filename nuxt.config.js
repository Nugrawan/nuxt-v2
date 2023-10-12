export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MARKET CUB - Shopping and Sale',
    author: 'Nugrawan pratama',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/static/favico.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router: {
    extendRoutes(routes) {
      routes.push(
        {
          name: 'products',
          path: '/products/:id',
          component: 'pages/products/_id.vue', // Mengarahkan ke _id.vue untuk :id
        }
      )
      routes.push(
        {
          name: 'myproducts',
          path: '/products/me/:myid',
          component: 'pages/products/_myid.vue', // Mengarahkan ke _id.vue untuk :id
        }
      );
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // htt ps://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/localforage',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://127.0.0.1:3333/api/login', method: 'post', propertyName: 'data.token' },
          user: { url: 'http://127.0.0.1:3333/api/me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  env: {
    supabaseApi: process.env.SUPABASE_API,
    supabaseKey: process.env.SUPABASE_KEY,
  },

  // konfigurasi loading component
  loading: {
    color: '#fff'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
