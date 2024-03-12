// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
    "@sidebase/nuxt-auth",
  ],
  css: ["~/assets/styles/style.css"],
  auth: {
    baseURL: "https://dummyjson.com/auth",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        getSession: { path: "/me", method: "get" },
      },
      token: { signInResponseTokenPointer: "/token" },
    },
    globalAppMiddleware: true,
  },
});
