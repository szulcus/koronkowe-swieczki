import { type SpecialOffer } from '~/types';
import giftCandleS from '~/assets/images/grandpa-offer/gift-candle-s.jpeg';
import giftCandleL from '~/assets/images/grandpa-offer/gift-candle-l.jpeg';
import giftCandleXl from '~/assets/images/grandpa-offer/gift-candle-xl.jpeg';
import candleWithGrandpa from '~/assets/images/grandpa-offer/candle-with-grandpa.jpeg';
import candleWithGrandad from '~/assets/images/grandpa-offer/candle-with-grandad.jpeg';
import flowerSet from '~/assets/images/grandpa-offer/flower-set.jpeg';
import grandpaGiftSet from '~/assets/images/grandpa-offer/gift-set.jpeg';

export default {
	name: 'Oferta na Dzień Babci',
	id: 'oferta-na-dzien-babci',
	variants: [
		{
			name: 'Świeczka upominkowa S',
			price: '15zł',
			img: giftCandleS,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Mini świeczuszka w koronkowym ubranku (kolor na życzenie), zapakowana w stylowe brązowe pudełko przewiązane piękną kokardką z dołączonym drewnianym napisem "Kochanej Babci". Idealna jako dodatek do prezentu lub wyraz miłości do Bacbi. ',
		},
		{
			name: 'Świeca upominkowa L',
			price: '25zł',
			img: giftCandleL,
			properties: {
				equivalent: 'Rozmiar L',
			},
			description: 'Elegancka świeczka w szkle kojącą wonią lasu i bursztynu oraz nutami cytrusów. Dostępna w różnych kolorach ubranek: np. turkusowym, bordowym, złotym, lnianym, beżowym... Zapakowana w celofan z doczepionym drewnianym napisem "Kochanej Babci".',
		},
		{
			name: 'Świeca upominkowa XL',
			price: '30zł',
			img: giftCandleXl,
			properties: {
				equivalent: 'Rozmiar XL',
			},
			description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym ubrankiem. Dostępna we wszystkich kolorach. Umieszczona na drewnianej podstawie z dołączonym (również drewnianym) napisem "Kochanej Babci", zapakowana w celofan.',
		},
		{
			name: 'Świeca z babcią',
			price: '30zł',
			img: candleWithGrandpa,
			properties: {
				burningTime: 'Rozmiar XL',
			},
			description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym złotym ubrankiem. Umieszczona na drewnianej podstawie z dołączoną figurką babci, zapakowana w celofan.',
		},
		{
			name: 'Świeca z dziadkiem',
			price: '30zł',
			img: candleWithGrandad,
			properties: {
				burningTime: 'Rozmiar XL',
			},
			description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym złotym ubrankiem. Umieszczona na drewnianej podstawie z dołączoną figurką dziadka, zapakowana w celofan.',
		},
		{
			name: 'Zestaw kwiatowy',
			price: '30zł',
			img: flowerSet,
			properties: {
				equivalent: '3 x Rozmiar S',
			},
			description: 'Trzy urocze świeczuszki w kształcie kwiatów, każda w ręcznie szydełkowanym koronkowym, beżowym sweterku. Zapakowane w przezroczysty celofan i przewiązanym napisem "Kochanej Babci".',
		},
		{
			name: 'Zestaw upominkowy',
			price: '110zł',
			img: grandpaGiftSet,
			properties: {
				equivalent: 'Zestaw PREMIUM',
			},
			description: 'Pomysł na elegancki i ekskluzywny prezent dla Babci  - zestaw składający się z trzech koronkowych świeczek rozmiaru M oraz pięciu koronkowych świeczek w rozmiarze S. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione elegancką kokardą i dołączonym drewnianym napisem "Kochanej Babci".',
		},
	],
} as SpecialOffer;
