// Vite plugins
// import eslint from 'vite-plugin-eslint';
// import stylelint from 'vite-plugin-stylelint';
// Options
import vuefireOptions from './config/vuefire';
import mdcOptions from './config/mdc';

export default defineNuxtConfig({
	ssr: true,
	nitro: {
		preset: 'netlify',
	},
	app: {
		head: {
			title: 'Koronkowe Świeczki',
			meta: [
				{ name: 'description', content: 'Ręcznie szydełkowane, eleganckie, stylowe ubranka. Tworzone z miłością, pasją i sercem. Wykonane z bawełny merceryzowanej. Można je używać wielokrotnie. Do każdego produktu dołączona jest świeczka wykonana z wosku roślinnego. Dostępne w trzech rozmiarach. S i M - bezzapachowe (za dopłatą 3 zł możliwość wyboru świeczki sojowej, zapachowej), L - kojące wonią lasu i bursztynu z pikantnymi nutami cytrusów.' },
				{ name: 'keywords', content: 'koronkowe świeczki, ubranka na świeczki, pomysł na prezent' },
				{ property: 'og:title', content: 'Koronkowe Świeczki' },
				{ property: 'og:url', content: 'https://koronkowe-swieczki.pl' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:image', content: 'intro.png' },
				{ property: 'og:description', content: 'Ręcznie szydełkowane, eleganckie, stylowe ubranka. Tworzone z miłością, pasją i sercem. Wykonane z bawełny merceryzowanej. Można je używać wielokrotnie. Do każdego produktu dołączona jest świeczka wykonana z wosku roślinnego. Dostępne w trzech rozmiarach. S i M - bezzapachowe (za dopłatą 3 zł możliwość wyboru świeczki sojowej, zapachowej), L - kojące wonią lasu i bursztynu z pikantnymi nutami cytrusów.' },
			],
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
		'@pinia/nuxt',
		'@nuxt/icon',
		['nuxt-vuefire', vuefireOptions],
		['@nuxtjs/mdc', mdcOptions],
		'@nuxt/eslint',
	],
	// components: {
	// 	global: true,
	// 	path: './components/prose',
	// },
	vite: {
		plugins: [
			// eslint({
			// 	fix: true,
			// 	include: ['./**/*.{ts,vue}'],
			// }),
			// stylelint({
			// 	fix: true,
			// 	include: ['./**/*.{scss,vue}'],
			// }),
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
	compatibilityDate: '2024-08-16',
	runtimeConfig: {
		public: {
			env: process.env.NUXT_PUBLIC_ENV,
		},
	},
});