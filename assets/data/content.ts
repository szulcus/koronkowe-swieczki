import sSize from '../images/sizes/s.jpeg';
import mSize from '../images/sizes/m.jpg';
import lSize from '../images/sizes/l.jpg';
import miniSet from '../images/sets/mini.jpg';
import smallSet from '../images/sets/small.jpg';
import giftSet from '../images/sets/gift.jpg';
import bigSet from '../images/sets/big.jpg';

interface Content {
	intro: string;
	offer: {
		title: string;
		sizes: {
			title: string;
			variants: {
				name: string;
				price: string;
				img: string;
				properties: {
					burningTime: string;
					dimensions: string;
				};
			}[];
		};
		sets: {
			title: string;
			variants: {
				name: string;
				price: string;
				img: string;
				properties: {
					items: string;
				};
			}[];
		};
	};
	colors: {
		title: string;
		variants: {
			id: string;
			color: string;
			name: string;
			customName?: string;
			available: boolean;
		}[];
		warning: string;
	};
	usage: {
		title: string;
		description: string;
	};
	contact: {
		title: string;
		description: string;
	};
}
const content: Content = {
	intro: 'Ręcznie szydełkowane, eleganckie, stylowe ubranka. Tworzone z miłością, pasją i sercem. Wykonane z bawełny merceryzowanej. Można je używać wielokrotnie. Do każdego produktu dołączona jest świeczka wykonana z wosku roślinnego. Dostępne w trzech rozmiarach. S i M - bezzapachowe, L - kojące wonią lasu i bursztynu z pikantnymi nutami cytrusów.',
	offer: {
		title: 'Oferta',
		sizes: {
			title: 'Rozmiary',
			variants: [
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
			],
		},
		sets: {
			title: 'Zestawy',
			variants: [
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
			],
		},
	},
	colors: {
		title: 'Dostepne kolory',
		variants: [
			{ id: '0000', color: '#F9F4E0', name: 'Natural', customName: 'Lniany', available: true },
			{ id: '0099', color: '#000000', name: 'Czarny', available: true },
			{ id: '0346', color: '#692506', name: 'Brązowy', available: true },
			{ id: '0347', color: '#DE6528', name: 'Rudy', available: false },
			{ id: '0350', color: '#BDC4A9', name: 'Zielonoszary', customName: 'Seledynowy', available: true },
			{ id: '0351', color: '#CCA14B', name: 'Złoty', available: true },
			{ id: '0352', color: '#DB302D', name: 'Czerwony', available: true },
			{ id: '0353', color: '#A7363F', name: 'Bordowy', available: true },
			{ id: '0354', color: '#CCC9C1', name: 'Jasnoszary', customName: 'Siwy', available: true },
			{ id: '0355', color: '#3B3E65', name: 'Granatowy', available: true },
			{ id: '0356', color: '#F9EFBE', name: 'Jasnożółty', customName: 'Cytrynowy', available: true },
			{ id: '0358', color: '#DBB1AE', name: 'Wrzosowy', customName: 'Różowy', available: true },
			{ id: '0359', color: '#A1C5CE', name: 'Błękitny', customName: 'Niebieski', available: true },
			{ id: '0360', color: '#ffe750', name: 'Żółty', available: true },
			{ id: '0361', color: '#ED9144', name: 'Pomarańczowy', available: true },
			{ id: '0362', color: '#CBC650', name: 'Groszkowy', customName: 'Limonkowy', available: true },
			{ id: '0363', color: '#64ADD0', name: 'Niebieski', customName: 'Chabrowy', available: true },
			{ id: '0364', color: '#B63058', name: 'Biskupi', customName: 'Malinowy', available: true },
			{ id: '0365', color: '#F3D9D3', name: 'Jasny wrzos', customName: 'Różowy pastelowy', available: true },
			{ id: '0367', color: '#FF4059', name: 'Malinowy', available: false },
			{ id: '0368', color: '#7F4A82', name: 'Fioletowy', available: true },
			{ id: '0369', color: '#295E18', name: 'Ciemnozielony', customName: 'Zielony', available: true },
			{ id: '0370', color: '#FCEAB6', name: 'Beżowy', available: true },
			{ id: '0400', color: '#FFFFFF', name: 'Biały', available: true },
			{ id: '1642', color: '#329B91', name: 'Brudny turkusowy', available: false },
			{ id: '1754', color: '#FAE6D2', name: 'Jasny łososiowy', available: false },
			{ id: '1815', color: '#C9C7C5', name: 'Beżowoszary', available: false },
			{ id: '1588B', color: '#F5E2FC', name: 'New|jasny fioletowy', available: false },
			{ id: '1626A', color: '#D9E2FF', name: 'New|jasny niebieskoszary', available: false },
			{ id: '1635C', color: '#B4C6CF', name: 'New|szaromorski', available: false },
			{ id: '1698A', color: '#EAFFBF', name: 'New|jasny groszkowy', available: false },
			{ id: '1782B', color: '#FCF3E8', name: 'New|perłowe ecru', available: false },
		],
		warning: 'Prezentowane kolory mogą różnić się od kolorów rzeczywistych. Wynika to z różnorodności dostępnego sprzętu komputerowego oraz jego indywidualnych ustawień a w szczególności wyświetlacza.',
	},
	usage: {
		title: 'Zastosowanie',
		description: 'Małe świeczki są doskonałym pomysłem na podziękowania dla gości z okazji: chrztu, komunii, bierzmowania, wieczoru panieńskiego, wesela, baby shower, urodzin, jubileuszu i nie tylko! Są pakowane w gustowne pudełka (białe, brązowe lub czarne), prezentują się bardzo elegancko!\n\nKoronkowe Świeczki zapakowane pojedynczo lub w zestawach, w celofan lub pudełko mogą również być świetnym prezentem z okazji różnych uroczystości czy świąt. Obdarowana takim upominkiem osoba z całą pewnością poczuje się wyjątkowo! Są produktem premium - wysokiej jakości, tworzone z dbałością o szczegóły.\n\nRękodzieło jest zawsze dobrym wyborem!',
	},
	contact: {
		title: 'Kontakt',
		description: 'Zapraszam do kontaktu na <a href="https://www.facebook.com/profile.php?id=100089067432296" target="_blank">Facebooku</a>, <a href="https://www.instagram.com/koronkowe_swieczki" target="_blank">Instagramie</a>, lub poprzez formularz kontaktowy:',
	},
};
export default content;
