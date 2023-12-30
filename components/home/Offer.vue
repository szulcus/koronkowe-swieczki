<script setup lang="ts">
	// Sizes
	import sSize from '~/assets/images/sizes/s.jpeg';
	import mSize from '~/assets/images/sizes/m.jpg';
	import lSize from '~/assets/images/sizes/l.jpg';
	import xlSize from '~/assets/images/sizes/xl.jpeg';
	// Sets
	import miniSet from '~/assets/images/sets/mini.jpeg';
	import smallSet from '~/assets/images/sets/small.jpg';
	import giftSet from '~/assets/images/sets/gift.jpeg';
	import bigSet from '~/assets/images/sets/big.jpeg';
	import premiumSet from '~/assets/images/sets/premium.jpg';
	// Christmas offer
	// import giftCandle from '~/assets/images/christmas-offer/gift-candle.jpeg';
	// import christmasEveCandle from '~/assets/images/christmas-offer/christmas-eve-candle.jpeg';
	// import santaClausSet from '~/assets/images/christmas-offer/santa-claus-set.jpg';
	// import snowmanSet from '~/assets/images/christmas-offer/snowman-set.jpeg';
	// import decorativeCandle from '~/assets/images/christmas-offer/decorative-candle.jpeg';
	// import setOfChristmasTrees from '~/assets/images/christmas-offer/set-of-christmas-trees.jpeg';
	// // import setOfChristmasTrees from '~/assets/images/christmas-offer/trees.jpeg';
	// import adventSet from '~/assets/images/christmas-offer/advent-set.jpg';
	// import christmasGiftSet from '~/assets/images/christmas-offer/gift-set.jpeg';

	type Variant = {
		name: string;
		price: string;
		img: string;
		properties: Partial<Record<'burningTime' | 'dimensions' | 'items', string>>;
		description?: string;
	}
	const sizes: Variant[] = [
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
	];
	const sets: Variant[] = [
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

	// const christmasOffer: Variant[] = [
	// 	{
	// 		name: 'Świeczka upominkowa',
	// 		price: '15zł',
	// 		img: giftCandle,
	// 		properties: {
	// 			burningTime: 'Rozmiar S',
	// 		},
	// 		description: 'Czerwona lub złota świeczka w koronkowym ubranku, zapakowana w stylowe czarne pudełko przewiązane czerwoną kokardką z dołączonym drewnianym napisem "Merry Christmas". Idealna jako dodatek do prezentu lub wyraz podziękowania dla klientów, pracowników, bliskich.',
	// 	},
	// 	{
	// 		name: 'Świeca wigilijna',
	// 		price: '25zł',
	// 		img: christmasEveCandle,
	// 		properties: {
	// 			burningTime: 'Rozmiar L',
	// 		},
	// 		description: 'Świeca w szkle - pachnąca świętami z kojącą wonią lasu i bursztynu oraz nutami cytrusów. Dostępna w różnych kolorach ubranek: czerwonym, złotym, zielonym, lnianym, beżowym... Zapakowana w celofan z delikatnymi akcentami świątecznymi, takimi jak gwiazdki czy choinki.',
	// 	},
	// 	{
	// 		name: 'Zestaw mikołajkowy',
	// 		price: '30zł',
	// 		img: santaClausSet,
	// 		properties: {
	// 			burningTime: 'Zestaw mini',
	// 		},
	// 		description: 'Dwie urocze świeczuszki w kształcie choinki oraz gwiazdorka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
	// 	},
	// 	{
	// 		name: 'Zestaw bałwankowy',
	// 		price: '30zł',
	// 		img: snowmanSet,
	// 		properties: {
	// 			burningTime: 'Zestaw mini',
	// 		},
	// 		description: 'Dwie urocze świeczuszki w kształcie szyszki oraz bałwanka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
	// 	},
	// 	{
	// 		name: 'Świeca stroikowa',
	// 		price: '30zł',
	// 		img: decorativeCandle,
	// 		properties: {
	// 			burningTime: 'Rozmiar XL',
	// 		},
	// 		description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym ubrankiem. Dostępna w kolorach: złotym, czerwonym lub zielonym. Umieszczona na drewnianej podstawie z dołączonym (również drewnianym) napisem "Merry Christmas", zapakowana w celofan.',
	// 	},
	// 	{
	// 		name: 'Zestaw choinek',
	// 		price: '45zł',
	// 		img: setOfChristmasTrees,
	// 		properties: {
	// 			burningTime: '3 x Rozmiar S',
	// 		},
	// 		description: 'Trzy urocze świeczuszki w kształcie choinki, każda w śnieżnym koronkowym sweterku. Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
	// 	},
	// 	{
	// 		name: 'Zestaw adwentowy',
	// 		price: '100zł',
	// 		img: adventSet,
	// 		properties: {
	// 			burningTime: '4 x Rozmiar XL',
	// 		},
	// 		description: 'Cztery bryłowe świece, każda owinięta eleganckim koronkowym ubrankiem w kolorze: czerwonym, zielonym lub złotym. Idealne do dekoracji wieńca adwentowego lub stołu wigilijnego.',
	// 	},
	// 	{
	// 		name: 'Zestaw upominkowy',
	// 		price: '110zł',
	// 		img: christmasGiftSet,
	// 		properties: {
	// 			burningTime: 'Zestaw PREMIUM',
	// 		},
	// 		description: 'Pomysł na elegancki i oryginalny prezent - zestaw składający się z trzech koronkowych świeczek rozmiaru M w kolorze lnu oraz pięciu koronkowych świeczek rozmiaru S w kolorze czerwonym. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione czerwoną kokardą i dołączonym napisem "Merry Christmas".',
	// 	},
	// ];
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
							<div v-if="size.properties.burningTime" class="properties__property">
								<icon name="fa6-solid:fire" />
								{{ size.properties.burningTime }}
							</div>
							<div v-if="size.properties.dimensions" class="properties__property">
								<icon name="fa6-solid:ruler" />
								{{ size.properties.dimensions }}
							</div>
							<div v-if="size.properties.items" class="properties__property">
								<icon name="fa6-solid:box" />
								{{ size.properties.items }}
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
			<!-- <div id="oferta-bozonarodzeniowa" class="price-list__part price-list__part--special">
				<h3 class="part__title">Oferta bożonarodzeniowa</h3>
				<div
					v-for="item in christmasOffer"
					:key="item.name"
					class="part__variant"
				>
					<img class="variant__img" :src="item.img" :alt="item.name" />
					<div class="variant__info">
						<div class="info__name">{{ item.name }}</div>
						<div class="info__price">{{ item.price }}</div>
						<div class="info__properties">
							<div v-if="item.properties.burningTime" class="properties__property">
								<icon name="fa6-solid:arrow-up-right-from-square" />
								{{ item.properties.burningTime }}
							</div>
							<div v-if="item.properties.dimensions" class="properties__property">
								<icon name="fa6-solid:ruler" />
								{{ item.properties.dimensions }}
							</div>
							<div v-if="item.properties.items" class="properties__property">
								<icon name="fa6-solid:box" />
								{{ item.properties.items }}
							</div>
						</div>
						<div class="info__description">{{ item.description }}</div>
					</div>
				</div>
			</div> -->
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

			// .price-list__part--special {
			// 	display: grid;
			// 	grid-column: 1 / -1;
			// 	grid-template-columns: repeat(1, 1fr);

			// 	// @include decorative-bg(red, rgb(red, 0.1));
			// 	.part__variant {
			// 		flex-direction: column;
			// 		@media (min-width: 720px) {
			// 			flex-direction: row;
			// 		}
			// 		.variant__info {
			// 			font-size: 18px;
			// 		}
			// 		.variant__img {
			// 			width: 70%;
			// 			margin: 0 auto;
			// 			@media (min-width: 720px) {
			// 				width: 200px;
			// 				flex-direction: row;
			// 			}
			// 		}
			// 	}
			// }
		}
	}
</style>
