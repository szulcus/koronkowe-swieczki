<script setup lang="ts">
	import type { SetOfferVariant, SizeOfferVariant } from '~/types';
	import lSize from '~/assets/images/kashubian-offer/l.jpg';
	import xlSize from '~/assets/images/kashubian-offer/xl.jpg';
	import miniSet from '~/assets/images/kashubian-offer/mini.jpg';
	import smallSet from '~/assets/images/kashubian-offer/small.jpg';
	import bigSet from '~/assets/images/kashubian-offer/big.jpg';
	import decorativeSet from '~/assets/images/kashubian-offer/decorative.jpg';

	const sizes: (SizeOfferVariant & { previousPrice?: string })[] = [
		{
			name: 'Rozmiar L',
			previousPrice: '25zł',
			price: '15zł',
			img: lSize,
			properties: {
				burningTime: '~12 godzin',
				dimensions: '5cm x 5cm',
			},
		},
		{
			name: 'Rozmiar XL',
			previousPrice: '30zł',
			price: '25zł',
			img: xlSize,
			properties: {
				burningTime: '~15 godzin',
				dimensions: '5.5cm x 8cm',
			},
		},
	];

	const sets: (SetOfferVariant & { previousPrice?: string })[] = [
		{
			name: 'Zestaw Mini',
			previousPrice: '20zł',
			price: '15zł',
			img: miniSet,
			properties: {
				items: '2xS',
			},
		},
		{
			name: 'Zestaw Mały',
			previousPrice: '35zł',
			price: '25zł',
			img: smallSet,
			properties: {
				items: '1xM + 2xS',
			},
		},
		{
			name: 'Zestaw Dekoracyjny',
			previousPrice: '60zł',
			price: '50zł',
			img: decorativeSet,
			properties: {
				items: '1xM + 6 obrączek',
			},
		},
		{
			name: 'Zestaw Duży',
			previousPrice: '85zł',
			price: '70zł',
			img: bigSet,
			properties: {
				items: '3xM + 4xS',
			},
		},
	];

</script>

<template>
	<AppSection id="edycja-kaszubska" title="Edycja Kaszubska" class="home-smell-offer">
		<div class="home-offer__description">
			Unikalne Koronkowe Świeczki inspirowane barwami kaszubskimi, nawiązujące do bogatej kultury regionu.
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
						<div class="info__price">
							<span v-if="size.previousPrice" class="price__previous">{{ size.previousPrice }}</span>
							{{ size.price }}
						</div>
						<div class="info__properties">
							<div v-if="size.properties.dimensions" class="properties__property">
								<icon name="fa6-solid:ruler" />
								{{ size.properties.dimensions }}
							</div>
							<div v-if="size.properties.weight" class="properties__property">
								<icon name="fa6-solid:scale-unbalanced" />
								{{ size.properties.weight }}
							</div>
							<div v-if="size.properties.burningTime" class="properties__property">
								<icon name="fa6-solid:fire" />
								{{ size.properties.burningTime }}
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
						<div class="info__price">
							<span v-if="set.previousPrice" class="price__previous">{{ set.previousPrice }}</span>
							{{ set.price }}
						</div>
						<div class="info__properties">
							<div class="properties__property">
								<icon name="fa6-solid:box" />
								{{ set.properties.items }}
							</div>
						</div>
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
							.price__previous {
								font-size: 1rem;
								text-decoration: line-through;
							}
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
