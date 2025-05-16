<script setup lang="ts">
	// Composables
	const { scentedColors } = useColors();
	const rootStore = useRootStore();

</script>

<template>
	<AppSection v-if="rootStore.homeData" id="edycja-zapachowa" :title="rootStore.homeData.scentedOffer.title" class="home-smell-offer">
		<div class="home-offer__description">
			<MDC :value="rootStore.homeData.scentedOffer.description" :tag="false" />
			<!-- Ręcznie robione, pachnące świeczki z wosku sojowego w koronkowych ubrankach:<br /> -->
			<!-- (link do sklepu: <a href="https://soyastar.pl/" target="_blank">SoyaStar</a>) -->
		</div>
		<div class="home-offer__price-list">
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.scentedOffer.sizes }}</h3>
				<AppVariant
					v-for="(size, sizeIndex) in rootStore.homeData.scentedOfferSizes"
					:key="size.name"
					:variant="size"
					@open-gallery="rootStore.openGallery('scentedOffer', sizeIndex)"
				/>
			</div>
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.scentedOffer.colors }}</h3>
				<ul class="part__list">
					<li
						v-for="color in scentedColors"
						:key="color.id"
						class="list__item"
					>
						<div class="item__sample" :style="{ '--bg': color.color }" />
						{{ color.smell }} ({{ color.customName ?? color.name }})
					</li>
				</ul>
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
			// white-space: pre-line;
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
				.part__variant {
					display: flex;
					align-items: stretch;
					gap: 20px;
					&:not(:last-child) {
						margin-bottom: 20px;
					}
					.variant__img {
						width: 150px;
						border: 1px solid $text-secondary;
						aspect-ratio: 4 / 3;
						object-fit: cover;
					}
					.variant__info {
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
				}
				.part__list {
					display: grid;
					margin-top: 20px;
					gap: 10px;
					grid-template-columns: repeat(1, 1fr);
					@media (min-width: 480px) {
						grid-template-columns: repeat(1, 1fr);
					}
					.list__item {
						display: flex;
						align-items: center;
						font-size: 0.875rem;
						gap: 5px;
						.item__sample {
							width: 30px;
							height: 30px;
							border: 1px solid $text-secondary;
							background-color: var(--bg);
						}
					}
				}
			}
			.price-list__part--special {
				display: grid;
				grid-column: 1 / -1;
				grid-template-columns: repeat(1, 1fr);

				// @include decorative-bg(red, rgb(red, 0.1));
				.part__variant {
					flex-direction: column;
					@media (min-width: 720px) {
						flex-direction: row;
					}
					.variant__info {
						font-size: 18px;
					}
					.variant__img {
						width: 70%;
						margin: 0 auto;
						@media (min-width: 720px) {
							width: 200px;
							flex-direction: row;
						}
					}
				}
			}
		}
	}
</style>
