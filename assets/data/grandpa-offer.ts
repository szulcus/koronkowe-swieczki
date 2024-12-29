import { type SpecialOffer } from '~/types';
import giftCandleS from '~/assets/images/grandpa-offer/gift-candle-s.jpeg';
import giftCandleL from '~/assets/images/grandpa-offer/gift-candle-l.jpeg';
import giftCandleXl from '~/assets/images/grandpa-offer/gift-candle-xl.jpeg';
import candleWithGrandpa from '~/assets/images/grandpa-offer/candle-with-grandpa.jpeg';
import candleWithGrandad from '~/assets/images/grandpa-offer/candle-with-grandad.jpeg';
import flowerSet from '~/assets/images/grandpa-offer/flower-set.jpeg';
import forGrandpaSet from '~/assets/images/grandpa-offer/for-grandpa-set.jpeg';
import grandpaGiftSet from '~/assets/images/grandpa-offer/gift-set.jpeg';

export default {
	name: 'Oferta na Dzień Babci',
	id: 'oferta-na-dzien-babci',
	variants: [
		{
			name: 'Świeczka upominkowa S',
			price: '12zł / 15zł*',
			img: giftCandleS,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Mini świeczuszka w koronkowym ubranku (kolor na życzenie), zapakowana w stylowe brązowe pudełko przewiązane piękną kokardką z dołączonym drewnianym napisem "Kochanej Babci". Idealna jako dodatek do prezentu lub wyraz miłości do Bacbi. Również w wersji zapachowej.',
		},
		{
			name: 'Świeca upominkowa L',
			price: '25zł / 50zł*',
			img: giftCandleL,
			properties: {
				equivalent: 'Rozmiar L',
			},
			description: 'Elegancka świeczka w szkle kojącą wonią lasu i bursztynu oraz nutami cytrusów. Dostępna w różnych kolorach ubranek: np. turkusowym, bordowym, złotym, lnianym, beżowym... Zapakowana w celofan z doczepionym drewnianym napisem "Kochanej Babci". Również w wersji zapachowej.',
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
				equivalent: 'Rozmiar XL',
			},
			description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym złotym ubrankiem. Umieszczona na drewnianej podstawie z dołączoną figurką babci, zapakowana w celofan.',
		},
		{
			name: 'Świeca z dziadkiem',
			price: '30zł',
			img: candleWithGrandad,
			properties: {
				equivalent: 'Rozmiar XL',
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
			name: 'Zestaw "Dla Babci"',
			price: '40zł*',
			img: forGrandpaSet,
			properties: {
				equivalent: '2 x Rozmiar S',
			},
			description: 'Dwie Koronkowe Świeczki Mini w słoiczkach, o zapachu "Życie jest piękne" (w lnianym ubranku) i "Zimowa Jagoda" (w czerwonym ubranku). W gratisie figurka dekoracyjna: Babcia. Zapakowane w pudełko z okienkiem, przewiązane złotą kokardą z dołączonym drewnianym napisem "Kochanej Babci".',
		},
		{
			name: 'Zestaw upominkowy',
			price: '100zł',
			img: grandpaGiftSet,
			properties: {
				equivalent: 'Zestaw PREMIUM',
			},
			description: 'Pomysł na elegancki i ekskluzywny prezent dla Babci  - zestaw składający się z trzech koronkowych świeczek rozmiaru M oraz pięciu koronkowych świeczek w rozmiarze S. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione elegancką kokardą i dołączonym drewnianym napisem "Kochanej Babci".',
		},
	],
} as SpecialOffer;
