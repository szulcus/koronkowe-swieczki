import type { ModuleOptions } from '@nuxtjs/mdc';

export default {
	components: {
		prose: true,
	},
	headings: {
		anchorLinks: {
			h1: false,
			h2: false,
			h3: false,
		}
	},
} as const satisfies ModuleOptions;
