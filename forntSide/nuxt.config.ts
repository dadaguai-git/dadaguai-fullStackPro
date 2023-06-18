// https://nuxt.com/docs/api/configuration/nuxt-config
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
