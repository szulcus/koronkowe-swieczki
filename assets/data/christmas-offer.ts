import { type SpecialOffer } from '~/types';
import giftCandle from '~/assets/images/christmas-offer/gift-candle.jpeg';
import christmasEveCandle from '~/assets/images/christmas-offer/christmas-eve-candle.jpeg';
import santaClausSet from '~/assets/images/christmas-offer/santa-claus-set.jpg';
import snowmanSet from '~/assets/images/christmas-offer/snowman-set.jpeg';
import decorativeCandle from '~/assets/images/christmas-offer/decorative-candle.jpeg';
import setOfChristmasTrees from '~/assets/images/christmas-offer/set-of-christmas-trees.jpeg';
import adventSet from '~/assets/images/christmas-offer/advent-set.jpg';
import christmasGiftSet from '~/assets/images/christmas-offer/gift-set.jpeg';

export default {
	name: 'Oferta bożonarodzeniowa',
	id: 'Oferta-bozonarodzeniowa',
	variants: [
		{
			name: 'Świeczka upominkowa',
			price: '15zł',
			img: giftCandle,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Czerwona lub złota świeczka w koronkowym ubranku, zapakowana w stylowe czarne pudełko przewiązane czerwoną kokardką z dołączonym drewnianym napisem "Merry Christmas". Idealna jako dodatek do prezentu lub wyraz podziękowania dla klientów, pracowników, bliskich.',
		},
		{
			name: 'Świeca wigilijna',
			price: '25zł',
			img: christmasEveCandle,
			properties: {
				equivalent: 'Rozmiar L',
			},
			description: 'Świeca w szkle - pachnąca świętami z kojącą wonią lasu i bursztynu oraz nutami cytrusów. Dostępna w różnych kolorach ubranek: czerwonym, złotym, zielonym, lnianym, beżowym... Zapakowana w celofan z delikatnymi akcentami świątecznymi, takimi jak gwiazdki czy choinki.',
		},
		{
			name: 'Zestaw mikołajkowy',
			price: '30zł',
			img: santaClausSet,
			properties: {
				equivalent: 'Zestaw mini',
			},
			description: 'Dwie urocze świeczuszki w kształcie choinki oraz gwiazdorka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
		},
		{
			name: 'Zestaw bałwankowy',
			price: '30zł',
			img: snowmanSet,
			properties: {
				equivalent: 'Zestaw mini',
			},
			description: 'Dwie urocze świeczuszki w kształcie szyszki oraz bałwanka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
		},
		{
			name: 'Świeca stroikowa',
			price: '30zł',
			img: decorativeCandle,
			properties: {
				equivalent: 'Rozmiar XL',
			},
			description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym ubrankiem. Dostępna w kolorach: złotym, czerwonym lub zielonym. Umieszczona na drewnianej podstawie z dołączonym (również drewnianym) napisem "Merry Christmas", zapakowana w celofan.',
		},
		{
			name: 'Zestaw choinek',
			price: '45zł',
			img: setOfChristmasTrees,
			properties: {
				equivalent: '3 x Rozmiar S',
			},
			description: 'Trzy urocze świeczuszki w kształcie choinki, każda w śnieżnym koronkowym sweterku. Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
		},
		{
			name: 'Zestaw adwentowy',
			price: '100zł',
			img: adventSet,
			properties: {
				equivalent: '4 x Rozmiar XL',
			},
			description: 'Cztery bryłowe świece, każda owinięta eleganckim koronkowym ubrankiem w kolorze: czerwonym, zielonym lub złotym. Idealne do dekoracji wieńca adwentowego lub stołu wigilijnego.',
		},
		{
			name: 'Zestaw upominkowy',
			price: '110zł',
			img: christmasGiftSet,
			properties: {
				equivalent: 'Zestaw PREMIUM',
			},
			description: 'Pomysł na elegancki i oryginalny prezent - zestaw składający się z trzech koronkowych świeczek rozmiaru M w kolorze lnu oraz pięciu koronkowych świeczek rozmiaru S w kolorze czerwonym. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione czerwoną kokardą i dołączonym napisem "Merry Christmas".',
		},
	],
} as SpecialOffer;
