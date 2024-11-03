import { type SpecialOffer } from '~/types';
import giftCandle from '~/assets/images/christmas-offer/gift-candle.jpeg';
import gadgets from '~/assets/images/christmas-offer/gadgets.jpg';
import christmasEveCandle from '~/assets/images/christmas-offer/christmas-eve-candle.jpeg';
import santaClausSet from '~/assets/images/christmas-offer/santa-claus-set.jpg';
import snowmanSet from '~/assets/images/christmas-offer/snowman-set.jpeg';
import decorativeCandle from '~/assets/images/christmas-offer/decorative-candle.jpeg';
import setOfChristmasTrees from '~/assets/images/christmas-offer/set-of-christmas-trees.jpeg';
// import adventSet from '~/assets/images/christmas-offer/advent-set.jpg';
import christmasPremiumSet from '~/assets/images/christmas-offer/gift-set.jpeg';
import christmasGift from '~/assets/images/christmas-offer/gift.jpeg';
import snowflakeSet from '~/assets/images/christmas-offer/snowflake-set.jpeg';

export default {
	name: 'Oferta bożonarodzeniowa',
	id: 'Oferta-bozonarodzeniowa',
	variants: [
		{
				name: 'Świeczka Upominkowa',
				price: '12zł / 15zł*',
				img: giftCandle,
				properties: {
					equivalent: 'Rozmiar S',
				},
				description: 'Mini świeczka w koronkowym ubranku koloru czerwonego lub złotego, zapakowana w stylowe czarne pudełko przewiązane czerwoną kokardką z dołączonym drewnianym napisem "Merry Christmas". Idealna jako dodatek do prezentu lub wyraz podziękowania dla klientów, pracowników, bliskich.',
		},
		{
				name: '"Thank you" - GADŻETY',
				price: '10zł',
				img: gadgets,
				properties: {
					equivalent: 'Rozmiar S (edycja zapachowa)',
				},
				description: 'Pachnące podziękowania dla pracowników, klientów, gości lub dodatki do upominków świątecznych - sojowe mini świeczuszki zapakowane w przezroczystą folię z nadrukiem "Thank you". Do wyboru zapachy świąteczne: ZIMOWA JAGODA (czerwona koronka), PIERNIK (perłowa koronka), PALO SANTO (złota koronka), PIECZONE JABŁKO (ruda koronka), GRZANE WINO (bordowa koronka), DRZEWO SANDAŁOWE I CEDR (czarna koronka).',
		},
		{
				name: 'Świeca Wigilijna',
				price: '25zł / 50zł*',
				img: christmasEveCandle,
				properties: {
					equivalent: 'Rozmiar L',
				},
				description: 'Świeca w szkle, pachnąca świętami: z wosku roślinnego z delikatnymi nutami cytrusów, z kojącą wonią lasu i bursztynu; w ubranku czerwonym, zielonym, lnianym, beżowym. Świeca sojowa dostępna w zapachach: ZIMOWA JAGODA (czerwona koronka), PIERNIK (perłowa koronka), PALO SANTO (złota koronka), PIECZONE JABŁKO (ruda koronka), GRZANE WINO (bordowa koronka), DRZEWO SANDAŁOWE I CEDR (czarna koronka). Zapakowane w celofan z delikatnymi akcentami świątecznymi, takimi jak gwiazdki, choinki, kokarda z nadrukiem "Merry Christmas".',
		},
		{
				name: 'Zestaw Mikołajkowy',
				price: '30zł',
				img: santaClausSet,
				properties: {
					equivalent: '2 x Rozmiar S',
				},
				description: 'Dwie urocze świeczuszki w kształcie choinki oraz Mikołajka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
		},
		{
				name: 'Zestaw Bałwankowy',
				price: '30zł',
				img: snowmanSet,
				properties: {
					equivalent: '2 x Rozmiar S',
				},
				description: 'Dwie urocze świeczuszki w kształcie szyszki oraz bałwanka, każda w zimowym koronkowym sweterku (lnianym i czerwonym). Zapakowane w przezroczysty celofan i przewiązanym napisem "Merry Christmas".',
		},
		{
				name: 'Świeca Stroikowa',
				price: '30zł',
				img: decorativeCandle,
				properties: {
					equivalent: 'Rozmiar XL',
				},
				description: 'Elegancka bryłowa świeca owinięta ręcznie szydełkowanym koronkowym ubrankiem. Dostępna w kolorach: złotym, czerwonym lub zielonym. Umieszczona na drewnianej podstawie z dołączonym (również drewnianym) napisem "Merry Christmas", zapakowana w celofan, przewiązana kokardą.',
		},
		{
				name: 'Zestaw Choinek',
				price: '45zł',
				img: setOfChristmasTrees,
				properties: {
					equivalent: '3 x Rozmiar S',
				},
				description: 'Trzy urocze świeczuszki w kształcie choinki, każda w śnieżnym koronkowym sweterku. Zapakowane w przezroczysty celofan i przewiązane napisem "Merry Christmas".',
		},
		{
				name: 'Zestaw Upominkowy',
				price: '45zł / 65zł*',
				img: christmasGift,
				properties: {
					equivalent: '3 x Rozmiar M',
				},
				description: 'Zestaw złożony z trzech koronkowych świeczek rozmiaru M, w karbowanym pudełku z okienkiem, ozdobione czerwoną kokardą i dołączonym napisem "Merry Christmas". Świeczki roślinne, bezzapachowe, w dowolnym kolorze, natomiast sojowe o zapachach: ZIMOWA JAGODA (czerwona koronka), PIERNIK (perłowa koronka), PALO SANTO (złota koronka), PIECZONE JABŁKO (ruda koronka), GRZANE WINO (bordowa koronka), DRZEWO SANDAŁOWE I CEDR (czarna koronka).',
		},
		{
				name: 'Zestaw PREMIUM',
				price: '100zł',
				img: christmasPremiumSet,
				properties: {
					equivalent: '3 x Rozmiar M + 5 x Rozmiar S',
				},
				description: 'Pomysł na elegancki i oryginalny prezent - zestaw składający się z trzech koronkowych świeczek rozmiaru M w kolorze lnu oraz pięciu koronkowych świeczek rozmiaru S w kolorze czerwonym. Bezzapachowe, roślinne. Wszystko w pięknym karbowanym pudełku z okienkiem, ozdobione czerwoną kokardą i dołączonym napisem "Merry Christmas".',
		},
		{
				name: 'Zestaw Śnieżynkowy',
				price: '49zł',
				img: snowflakeSet,
				properties: {
					equivalent: '2 x Rozmiar M (edycja zapachowa)',
				},
				description: 'Połączenie sojowej świeczki Śnieżynka o zapachu PIERNIK oraz koronkowej świeczki rozmiaru M o jednym z trzech zapachów: PIERNIK (perłowa koronka), GRZANE WINO (bordowa koronka), DRZEWO SANDAŁOWE I CEDR (czarna koronka). Zestaw w pudełku z okienkiem ozdobionym czerwoną kokardą i dołączonym napisem "Merry Christmas".',
		},
		{
				name: 'Zestaw Wigilijny',
				price: '85zł',
				// img: christmasEveSet,
				properties: {
					equivalent: '2 x Rozmiar L (edycja zapachowa)',
				},
				description: 'Dwie ręcznie robione zapachowe świece sojowe - jedna w słoiczku o zapachu GRZANE WINO, natomiast druga otulona ręcznie szydełkowaną koronką, dostępna w dwóch zapachach i dopasowanym kolorze ubranka: PIERNIK (perłowa koronka), PIECZONE JABŁKO (ruda koronka). Całość zapakowana w gustowne, eleganckie czarne pudełko, przewiązane czerwoną kokardą z napisem "Merry Christmas".',
		},
		{
				name: 'Świece Bożonarodzeniowe PREMIUM',
				price: '80zł',
				// img: premiumChristmasCandles,
				properties: {
					equivalent: 'PREMIUM (edycja zapachowa)',
				},
				description: 'Wyjątkowe, eleganckie sojowe świece pachnące świętami, oprawione w ręcznie szydełkowane koronki. Zapakowane pojedynczo w celofan, związane kokardą z napisem "Merry Christmas". Dostępne w świątecznych zapachach: ZIMOWA JAGODA (czerwona koronka), PIERNIK (perłowa koronka), PALO SANTO (złota koronka), PIECZONE JABŁKO (ruda koronka), GRZANE WINO (bordowa koronka), DRZEWO SANDAŁOWE I CEDR (czarna koronka).',
		},
	],
} as SpecialOffer;
