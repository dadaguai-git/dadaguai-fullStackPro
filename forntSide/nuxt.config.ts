// https://nuxt.com/docs/api/configuration/nuxt-config
console.log(import.meta.env.VITE_API_URL + import.meta.env.VITE_API_PREFIX);
export default defineNuxtConfig({
  alias: {
    "@interfaces": "/interface/index.ts",
  },
  vite: {
    css: {
      preprocessorOptions: {
        // css: "./node_modules/@devui-design/icons/icomoon/devui-icon.css",
      },
    },
  },
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
  modules: ["@nuxtjs/tailwindcss", "@huntersofbook/naive-ui-nuxt"],
});
