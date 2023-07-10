// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@interfaces": "/interface/index.ts",
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },

  css: ["element-plus/dist/index.css"],
  nitro: {
    devProxy: {
      "/api": {
        target: import.meta.env.VITE_API_URL + import.meta.env.VITE_API_PREFIX,
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
});
