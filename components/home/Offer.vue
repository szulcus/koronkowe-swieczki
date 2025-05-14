<script setup lang="ts">
	import { type SizeOfferVariant, type SetOfferVariant, type SpecialOffer } from '~/types';
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
	import decorativeSet from '~/assets/images/sets/decorative.jpg';
	import bigSet from '~/assets/images/sets/big.jpeg';
	import premiumSet from '~/assets/images/sets/premium.jpg';
	// Special offer
	// import christmasOffer from '~/assets/data/christmas-offer';
	// import grandpaOffer from '~/assets/data/grandpa-offer';
	import valentineOffer from '~/assets/data/valentine-offer';
	const specialOffer: SpecialOffer | undefined = valentineOffer;

	const sizes: SizeOfferVariant[] = [
		{
			name: 'Rozmiar S',
			price: '10zł / 13zł*',
			img: sSize,
			properties: {
				burningTime: '4 godziny',
				dimensions: '4cm x 1.5cm',
				// 'wymienny podgrzewacz',
			},
		},
		{
			name: 'Rozmiar M',
			price: '20zł / 25zł*',
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
			name: 'Zestaw Mini',
			price: '20zł / 25zł*',
			img: miniSet,
			properties: {
				items: '2xS',
			},
		},
		{
			name: 'Zestaw Mały',
			price: '35zł / 45zł*',
			img: smallSet,
			properties: {
				items: '1xM + 2xS',
			},
		},
		{
			name: 'Zestaw Prezentowy',
			price: '45zł / 65zł*',
			img: giftSet,
			properties: {
				items: '3xM',
			},
		},
		{
			name: 'Zestaw Dekoracyjny',
			price: '60zł / 70zł*',
			img: decorativeSet,
			properties: {
				items: '1xM + 6 obrączek',
			},
		},
		{
			name: 'Zestaw Duży',
			price: '85zł / 100zł*',
			img: bigSet,
			properties: {
				items: '3xM + 4xS',
			},
		},
		{
			name: 'Zestaw PREMIUM',
			price: '100zł / 120zł*',
			img: premiumSet,
			properties: {
				items: '3xM + 5xS',
			},
		},
	];
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
					v-for="size in rootStore.homeData.offerSizes"
					:key="size.name"
					:variant="size"
				/>
			</div>
			<div class="price-list__part">
				<h3 class="part__title">{{ rootStore.homeData.offer.sets }}</h3>
				<AppVariant
					v-for="set in rootStore.homeData.offerSets"
					:key="set.name"
					:variant="set"
				/>
			</div>
		</div>
		<div class="home-offer__warning">* {{ rootStore.homeData.offer.footnote }}</div>
		<div v-if="rootStore.homeData.specialOffer" :id="rootStore.homeData.specialOffer.id" class="home-offer__special">
			<div class="special__part">
				<h3 class="part__title">{{ rootStore.homeData.specialOffer.name }}</h3>
				<div
					v-for="variant in rootStore.homeData.specialOffer.variants"
					:key="variant.name"
					class="part__variant"
				>
					<img class="variant__img" :src="variant.image" :alt="variant.name" />
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
			// display: grid;
			// margin-top: 20px;
			// gap: 40px;
			// grid-template-columns: repeat(1, 1fr);
			// @media (min-width: 900px) {
			// 	grid-template-columns: repeat(2, 1fr);
			// }
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
				// display: grid;
				// grid-column: 1 / -1;
				// grid-template-columns: repeat(1, 1fr);

				// @include decorative-bg(red, rgb(red, 0.1));
				.part__variant {
					flex-direction: column;
					&:not(:last-child) {
						padding-bottom: 30px;
						border-bottom: 1px solid rgb($text-secondary, 0.3);
					}
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
