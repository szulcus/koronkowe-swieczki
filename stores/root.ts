import { doc } from 'firebase/firestore';
import { defineStore } from 'pinia';
import type { ApiHomeData } from '~/types';

export const useRootStore = defineStore('root', () => {
	const { env } = useRuntimeConfig().public;
	const firestore = useFirestore();
	const homeData = useDocument<ApiHomeData>(doc(firestore, 'home', env));

	return {
		homeData,
	};
});
