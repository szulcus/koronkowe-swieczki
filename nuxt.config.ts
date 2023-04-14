// Vite plugins
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' },
			],
		},
	},
	css: [
		'~/assets/styles/global.scss',
	],
	modules: [
		'nuxt-icon',
	],
	vite: {
		plugins: [
			eslint({
				fix: true,
				include: ['./**/*.{ts,vue}'],
			}),
			stylelint({
				fix: true,
				include: ['./**/*.{scss,vue}'],
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "~/assets/styles/variables" as *;
						@use "~/assets/styles/mixins" as *;
					`,
				},
			},
		},
	},
});
