// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				// { rel: 'stylesheet', href: '' },
				// { rel: 'stylesheet', href: '' }
			],
			script: [
				// {
				// 	src: 'https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js'
				// }
			]
		}
	},

	modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/color-mode', '@nuxt/ui', 'nuxt-icons'],

	colorMode: {
		classSuffix: ''
	},

	css: ['~/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/scss/general/variables.scss" as *;
					`
				}
			}
		}
	}
})
