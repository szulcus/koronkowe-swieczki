export default () => {
	const rootStore = useRootStore();
	const availableColors = computed(() => {
		if (!rootStore.homeData) return []
		return rootStore.homeData.colors.filter((color) => color.available);
	});
	const scentedColors = computed(() => {
		return availableColors.value.filter((color) => color.smell);
	});

	return {
		availableColors,
		scentedColors,
	};
};
