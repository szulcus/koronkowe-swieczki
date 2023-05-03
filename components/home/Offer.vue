<script setup lang="ts">
	import sSize from '~/assets/images/sizes/s.jpeg';
	import mSize from '~/assets/images/sizes/m.jpg';
	import lSize from '~/assets/images/sizes/l.jpg';
	import miniSet from '~/assets/images/sets/mini.jpg';
	import smallSet from '~/assets/images/sets/small.jpg';
	import giftSet from '~/assets/images/sets/gift.jpg';
	import bigSet from '~/assets/images/sets/big.jpg';

	type Variant<T extends string> = {
		name: string;
		price: string;
		img: string;
		properties: Record<T, string>;
	}
	const sizes: Variant<'burningTime' | 'dimensions'>[] = [
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
			price: '30zł',
			img: lSize,
			properties: {
				burningTime: '12 godzin',
				dimensions: '5cm x 5cm',
				// 'słoiczek wielokrotnego użytku',
			},
		},
	];
	const sets: Variant<'items'>[] = [
		{
			name: 'Zestaw duży',
			price: '100zł',
			img: bigSet,
			properties: {
				items: '3xM + 4xS',
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
			name: 'Zestaw mini',
			price: '25zł',
			img: miniSet,
			properties: {
				items: '2xS',
			},
		},
	];
</script>

<template>
	<AppSection title="Oferta" class="home-offer">
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
		</div>
	</AppSection>
</template>

<style lang="scss" scoped>
	.home-offer {
		.home-offer__price-list {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
			gap: 40px;
			@media (min-width: 900px) {
				flex-direction: row;
			}
			.price-list__part {
				flex: 1;
				@include decorative-bg;
				.part__title {
					margin-bottom: 10px;
					font-size: 1.125rem;
					text-align: center;
					text-transform: uppercase;
				}
				.part__variant {
					display: flex;
					align-items: stretch;
					gap: 10px;
					&:not(:last-child) {
						margin-bottom: 10px;
					}
					.variant__img {
						width: 150px;
						border: 2px dashed $text-secondary;
						border-radius: 10px;
						aspect-ratio: 4 / 3;
						object-fit: cover;
					}
					.variant__info {
						// .info__name {}
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
					}
				}
			}
		}
	}
</style>
