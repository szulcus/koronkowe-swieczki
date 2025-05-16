<script setup lang="ts">
	// Composables
	const rootStore = useRootStore();
</script>

<template>
	<AppSection v-if="rootStore.homeData" id="oferta" :title="rootStore.homeData.offer.title" class="home-offer">
		<div class="home-offer__description">
			<MDC :value="rootStore.homeData.offer.description" :tag="false" />
		</div>
		<div class="home-offer__price-list">
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.offer.sizes }}</h3>
				<AppVariant
					v-for="(size, sizeIndex) in rootStore.homeData.offerSizes"
					:key="size.name"
					:variant="size"
					@open-gallery="rootStore.openGallery('offer', sizeIndex)"
				/>
			</div>
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.offer.sets }}</h3>
				<AppVariant
					v-for="(set, setIndex) in rootStore.homeData.offerSets"
					:key="set.name"
					:variant="set"
					@open-gallery="rootStore.openGallery('offer', rootStore.homeData.offerSizes.length + setIndex)"
				/>
			</div>
		</div>
		<div class="home-offer__warning">* {{ rootStore.homeData.offer.footnote }}</div>
		<div v-if="rootStore.homeData.specialOffer" :id="rootStore.homeData.specialOffer.id" class="home-offer__special">
			<div class="special__part">
				<h3 class="part__title">{{ rootStore.homeData.specialOffer.name }}</h3>
				<div
					v-for="(variant, variantIndex) in rootStore.homeData.specialOffer.variants"
					:key="variant.name"
					class="part__variant"
				>
					<div class="variant__thumbnail">
						<img class="thumbnail__img"
							:src="getImage(variant.image, 's')"
							:alt="variant.name"
							@click="rootStore.openGallery('specialOffer', variantIndex)"
						/>
					</div>
					<div class="variant__info">
						<div class="info__name">{{ variant.name }}</div>
						<div class="info__price">{{ variant.price }}</div>
						<div class="info__properties">
							<div class="properties__property">
								<icon name="fa6-solid:arrow-up-right-from-square" />
								{{ variant.properties.equivalent }}
							</div>
						</div>
						<div class="info__description">{{ variant.description }}</div>
					</div>
				</div>
			</div>
			<div class="special__warning">* {{ rootStore.homeData.offer.footnote }}</div>
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-offer {
		.home-offer__description {
			margin-top: 20px;
			margin-bottom: 10px;
			text-align: center;
		}
		.home-offer__price-list,
		.home-offer__special {
			.price-list__part,
			.special__part {
				@include decorative-bg;
				.part__title {
					margin-bottom: 20px;
					font-size: 1.125rem;
					text-align: center;
					text-transform: uppercase;
				}
			}
			.special__part {
				.part__variant {
					display: flex;
					align-items: flex-start;
					gap: 20px;
					flex-direction: column;
					&:not(:last-child) {
						margin-bottom: 30px;
						padding-bottom: 30px;
						border-bottom: 1px solid rgb($text-secondary, 0.3);
					}
					@media (min-width: 720px) {
						flex-direction: row;
					}
					.variant__info {
						font-size: 18px;
						.info__name {
							white-space: pre-line;
						}
						.info__price {
							font-size: 1.25rem;
							font-weight: bold;
						}
						.info__properties {
							.properties__property {
								display: flex;
								align-items: center;
								font-size: 12px;
								font-weight: bold;
								gap: 5px;
							}
						}
						.info__description {
							margin-top: 10px;
							font-size: 14px;
						}
					}
					.variant__thumbnail {
						overflow: hidden;
						width: 150px;
						flex-shrink: 0;
						aspect-ratio: 4 / 3;
						border: 1px solid $text-secondary;
						margin: 0 auto;
						@media (min-width: 720px) {
							width: 200px;
						}
						.thumbnail__img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							transition: 0.2s ease;
							@include hover {
								scale: 1.1;
								opacity: 0.7;
							}
						}
					}
					// .variant__img {
					// 	width: 150px;
					// 	border: 1px solid $text-secondary;
					// 	aspect-ratio: 4 / 3;
					// 	object-fit: cover;
					// }
				}
			}
		}
		.home-offer__price-list {
			display: grid;
			margin-top: 20px;
			gap: 40px;
			grid-template-columns: repeat(1, 1fr);
			@media (min-width: 900px) {
				grid-template-columns: repeat(2, 1fr);
			}
		}
		.home-offer__warning,
		.home-offer__special .special__warning {
			margin-top: 5px;
			font-size: 10px;
		}
		.home-offer__special {
			margin-top: 40px;
		}
	}
</style>
