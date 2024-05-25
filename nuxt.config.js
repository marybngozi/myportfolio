export default {
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MaryBlessing || Software Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "MaryBlessing Umeh",
        content:
          "MaryBlessing Ngozichukwu Chimagbanwe Umeh, Software Engineer, Full-Stack Developer",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,400;1,700&display=swap",
      },
    ],
  },

  // loading: "~/components/loading.vue",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/auth", "@nuxtjs/axios", "@nuxtjs/pwa"],

  serverMiddleware: {
    "/api": "~/api",
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/api",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          // required: true,
          type: "Bearer",
        },
        user: {
          autoFetch: false,
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "POST",
            propertyName: "token",
          },
          // user: {
          //   url: "/user/me",
          //   method: "GET",
          //   propertyName: "user",
          // },
          logout: false,
        },
      },
    },
    redirect: {
      login: "/admin/login",
      logout: "/admin/login",
      callback: false,
      home: "/admin/app",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
