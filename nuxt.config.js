require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  ssr: false,
  target: "static", // default is 'server'
  publicRuntimeConfig: {

  },
  privateRuntimeConfig: {},
  head: {
    title: "Jeffri Andriyanto",
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo-ist.png" }],
  },
  router: {
    base: "/",
    middleware: ["auth", "authenticated"],
  },
  css: ["@/assets/css/main.scss"],
  plugins: [
    { src: "~/plugins/apexChart.js", mode: "client" },
    "~/plugins/dialog",
    "~/plugins/axios",
  ],
  components: true,
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/dotenv",
      { filename: `.env.${process.env.NODE_ENV}`, systemvars: true },
    ],
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  axios: {
    baseUrl: process.env.BASE_URL,
  },
  build: {},
  loading: "~/components/app/Loading.vue",
  auth: {
    redirect: {
      login: "/login",
      logout: "/",
      home: false,
      callback: false
    },
    localStorage: {
      prefix: "auth.",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          maxAge: 60 * 60 * 8,
          global: true,
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "", method: "get" },
          user: { url: "/users/1", method: "get" },
        },
      },
    },
  },
  vuetify: {
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#5D5D5D",
          secondary: "#E93D44",
          info: "#0D726D",
          accent: "#D82F36",
          error: "#ED1C24",
          warning: "#F6A236",
          success: "#72CE56",
          disable: "#BDBDBD",
        },
      },
    },
  },
};
