import { doc } from 'firebase/firestore';
import { defineStore } from 'pinia';
import type { ApiHomeData, ApiOfferType } from '~/types';

export const useRootStore = defineStore('root', () => {
	const { env } = useRuntimeConfig().public;
	const firestore = useFirestore();
	const homeData = useDocument<ApiHomeData>(doc(firestore, 'home', env));
	
	const activeGallery = ref<{ offerType: ApiOfferType, index: number }>();
	const allGalleryImages = computed(() => {
		return {
			offer: [...homeData.value?.offerSizes.map((size) => size.image) ?? [], ...homeData.value?.offerSets.map((set) => set.image) ?? []],
			specialOffer: homeData.value?.specialOffer?.variants.map((variant) => variant.image) ?? [],
			kashubianOffer: [...homeData.value?.kashubianOfferSizes.map((size) => size.image) ?? [], ...homeData.value?.kashubianOfferSets.map((set) => set.image) ?? []],
			scentedOffer: homeData.value?.scentedOfferSizes.map((size) => size.image) ?? [],
		}
	});
	const galleryImages = computed(() => {
		if (!activeGallery.value) return []
		return allGalleryImages.value[activeGallery.value.offerType];
	});
	const galleryOffer = computed<string | undefined>(() => {
		if (!homeData.value || !activeGallery.value) return;
		if (activeGallery.value.offerType === 'specialOffer') return homeData.value.specialOffer?.name;
		return homeData.value[activeGallery.value.offerType]?.title;
	});
	const openGallery = (offerType: ApiOfferType, index: number) => {
		activeGallery.value = { offerType, index };
	};
	const closeGallery = () => {
		activeGallery.value = undefined;
	};

	return {
		homeData,
		galleryImages,
		activeGallery,
		galleryOffer,
		openGallery,
		closeGallery,
	};
});
