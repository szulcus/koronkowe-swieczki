<script setup lang="ts">

	// Composables
	const rootStore = useRootStore();

</script>

<template>
	<AppSection v-if="rootStore.homeData" id="edycja-kaszubska" title="Edycja Kaszubska" class="home-smell-offer">
		<div class="home-offer__description">
			<MDC :value="rootStore.homeData.kashubianOffer.description" :tag="false" />
		</div>
		<div class="home-offer__price-list">
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.kashubianOffer.sizes }}</h3>
				<AppVariant
					v-for="(size, sizeIndex) in rootStore.homeData.kashubianOfferSizes"
					:key="size.name"
					:variant="size"
					@open-gallery="rootStore.openGallery('kashubianOffer', sizeIndex)"
				/>
			</div>
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.kashubianOffer.sets }}</h3>
				<AppVariant
					v-for="(set, setIndex) in rootStore.homeData.kashubianOfferSets"
					:key="set.name"
					:variant="set"
					@open-gallery="rootStore.openGallery('kashubianOffer', rootStore.homeData.kashubianOfferSizes.length + setIndex)"
				/>
			</div>
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-smell-offer {
		.home-offer__description {
			margin-top: 20px;
			margin-bottom: 10px;
			text-align: center;
		}
		.home-offer__price-list {
			display: grid;
			margin-top: 20px;
			gap: 40px;
			grid-template-columns: repeat(1, 1fr);
			@media (min-width: 900px) {
				grid-template-columns: repeat(2, 1fr);
			}
			.price-list__part {
				@include decorative-bg;
				.part__title {
					margin-bottom: 20px;
					font-size: 1.125rem;
					text-align: center;
					text-transform: uppercase;
				}
			}
		}
	}
</style>
