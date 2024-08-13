<script setup lang="ts">
	import { SizeOfferVariant, SpecialOffer } from '~/types';
	// Sizes
	import premiumSize from '~/assets/images/scented-sizes/premium.jpg';
	import lSize from '~/assets/images/scented-sizes/l.jpeg';
	import mSize from '~/assets/images/scented-sizes/m.jpg';
	import sSize from '~/assets/images/scented-sizes/s.jpeg';
	// Special offer
	// import christmasOffer from '~/assets/data/christmas-offer';
	// import grandpaOffer from '~/assets/data/grandpa-offer';
	// import valentineOffer from '~/assets/data/valentine-offer';
	const specialOffer = undefined as SpecialOffer | undefined;

	const sizes: SizeOfferVariant[] = [
		{
			name: 'PREMIUM',
			price: '80zł',
			img: premiumSize,
			properties: {
				// burningTime: '40-51 godzin',
				dimensions: '7cm x 9cm',
			},
		},
		{
			name: 'Rzomiar L',
			price: '50zł',
			img: lSize,
			properties: {
				dimensions: '6cm x 6.5cm',
			},
		},
		{
			name: 'Rozmiar M',
			price: '25zł',
			img: mSize,
			properties: {
				// burningTime: '9 godzin',
				dimensions: '6.5cm x 2.5cm',
			},
		},
		{
			name: 'Rozmiar S',
			price: '15.50zł',
			img: sSize,
			properties: {
				// burningTime: '12 godzin',
				dimensions: '4.5cm x 4cm',
			},
		},
	];

	const { scentedColors } = useColors();
</script>

<template>
	<AppSection id="edycja-zapachowa" title="Edycja zapachowa" class="home-smell-offer">
		<div class="home-offer__description">
			Wybierz ręcznie robione, pachnące świeczki z wosku sojowego:<br />
			(link do sklepu: <a href="https://soyastar.pl/" target="_blank">SoyaStar</a>)
		</div>
		<div class="home-offer__price-list">
			<div class="price-list__part">
				<h3 class="part__title">Rozmiary</h3>
				<div
					v-for="size in sizes"
					:key="size.name"
					class="part__variant"
				>
					<img class="variant__img" :src="size.img" :alt="size.name" />
					<div class="variant__info">
						<div class="info__name">{{ size.name }}</div>
						<div class="info__price">{{ size.price }}</div>
						<div class="info__properties">
							<div v-if="size.properties.burningTime" class="properties__property">
								<icon name="fa6-solid:fire" />
								{{ size.properties.burningTime }}
							</div>
							<div class="properties__property">
								<icon name="fa6-solid:ruler" />
								{{ size.properties.dimensions }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="price-list__part">
				<h3 class="part__title">Zapachy i kolory</h3>
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
			<div v-if="specialOffer" :id="specialOffer.id" class="price-list__part price-list__part--special">
				<h3 class="part__title">{{ specialOffer.name }}</h3>
				<div
					v-for="item in specialOffer.variants"
					:key="item.name"
					class="part__variant"
				>
					<img class="variant__img" :src="item.img" :alt="item.name" />
					<div class="variant__info">
						<div class="info__name">{{ item.name }}</div>
						<div class="info__price">{{ item.price }}</div>
						<div class="info__properties">
							<div class="properties__property">
								<icon name="fa6-solid:arrow-up-right-from-square" />
								{{ item.properties.equivalent }}
							</div>
						</div>
						<div class="info__description">{{ item.description }}</div>
					</div>
				</div>
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
