// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from "vite";

console.log(process.env.API_URL);
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        // css: "./node_modules/@devui-design/icons/icomoon/devui-icon.css",
      },
    },
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@huntersofbook/naive-ui-nuxt"],
});
