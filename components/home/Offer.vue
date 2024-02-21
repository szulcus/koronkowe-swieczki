<script setup lang="ts">
	import { SizeOfferVariant, SetOfferVariant } from '~/types';
	// Sizes
	import sSize from '~/assets/images/sizes/s.jpeg';
	import mSize from '~/assets/images/sizes/m.jpg';
	import lSize from '~/assets/images/sizes/l.jpg';
	import xlSize from '~/assets/images/sizes/xl.jpeg';
	import xxlSize from '~/assets/images/sizes/xxl.jpeg';
	// Sets
	import miniSet from '~/assets/images/sets/mini.jpeg';
	import smallSet from '~/assets/images/sets/small.jpg';
	import giftSet from '~/assets/images/sets/gift.jpeg';
	import bigSet from '~/assets/images/sets/big.jpeg';
	import premiumSet from '~/assets/images/sets/premium.jpg';
	// Special offer
	// import specialOffer from '~/assets/data/christmas-offer';
	// import specialOffer from '~/assets/data/grandpa-offer';
	// import specialOffer from '~/assets/data/valentine-offer';

	const sizes: SizeOfferVariant[] = [
		{
			name: 'Rozmiar S',
			price: '15zł',
			img: sSize,
			properties: {
				burningTime: '4 godziny',
				dimensions: '4cm x 1.5cm',
				// 'wymienny podgrzewacz',
			},
		},
		{
			name: 'Rozmiar M',
			price: '20zł',
			img: mSize,
			properties: {
				burningTime: '9 godzin',
				dimensions: '6cm x 2.5cm',
				// 'wymienny podgrzewacz',
			},
		},
		{
			name: 'Rozmiar L',
			price: '25zł',
			img: lSize,
			properties: {
				burningTime: '12 godzin',
				dimensions: '5cm x 5cm',
				// 'słoiczek wielokrotnego użytku',
			},
		},
		{
			name: 'Rozmiar XL',
			price: '30zł',
			img: xlSize,
			properties: {
				burningTime: '15 godzin',
				dimensions: '5.5cm x 8cm',
				// 'słoiczek wielokrotnego użytku',
			},
		},
		{
			name: 'Rozmiar XXL',
			price: '35zł',
			img: xxlSize,
			properties: {
				burningTime: '30 godzin',
				dimensions: '6cm x 10cm',
				// 'słoiczek wielokrotnego użytku',
			},
		},
	];
	const sets: SetOfferVariant[] = [
		{
			name: 'Zestaw mini',
			price: '25zł',
			img: miniSet,
			properties: {
				items: '2xS',
			},
		},
		{
			name: 'Zestaw mały',
			price: '45zł',
			img: smallSet,
			properties: {
				items: '1xM + 2xS',
			},
		},
		{
			name: 'Zestaw prezentowy',
			price: '55zł',
			img: giftSet,
			properties: {
				items: '3xM',
			},
		},
		{
			name: 'Zestaw duży',
			price: '100zł',
			img: bigSet,
			properties: {
				items: '3xM + 4xS',
			},
		},
		{
			name: 'Zestaw PREMIUM',
			price: '110zł',
			img: premiumSet,
			properties: {
				items: '3xM + 5xS',
			},
		},
	];
</script>

<template>
	<AppSection title="Oferta" class="home-offer">
		<div class="home-offer__description">Wybierz rozmiar lub zestaw, który najbardziej Ci odpowiada:</div>
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
							<div class="properties__property">
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
				<h3 class="part__title">Zestawy</h3>
				<div
					v-for="set in sets"
					:key="set.name"
					class="part__variant"
				>
					<img class="variant__img" :src="set.img" :alt="set.name" />
					<div class="variant__info">
						<div class="info__name">{{ set.name }}</div>
						<div class="info__price">{{ set.price }}</div>
						<div class="info__properties">
							<div class="properties__property">
								<icon name="fa6-solid:box" />
								{{ set.properties.items }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="false" :id="specialOffer.id" class="price-list__part price-list__part--special">
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
	.home-offer {
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
