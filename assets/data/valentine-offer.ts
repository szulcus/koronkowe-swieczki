import { type SpecialOffer } from '~/types';
import valentineLoveS from '~/assets/images/valentine-offer/love-s.jpeg';
import valentineCandleS from '~/assets/images/valentine-offer/candle-s.jpeg';
import valentineCandleL from '~/assets/images/valentine-offer/candle-l.jpeg';
import valentineSetMiniJars from '~/assets/images/valentine-offer/set-mini-jars.jpeg';
import valentineSetXL from '~/assets/images/valentine-offer/set-of-xl.jpeg';
import valentineSetS from '~/assets/images/valentine-offer/set-of-s.jpeg';
import valentineSetWithRoseS from '~/assets/images/valentine-offer/set-with-rose.jpeg';

export default {
	name: 'Oferta Walentynkowa',
	id: 'oferta-walentynkowa',
	variants: [
		{
			name: 'Świeczka "Love" S',
			price: '12zł / 15zł*',
			img: valentineLoveS,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Mini świeczuszka w lnianym koronkowym ubranku bezzapachowa lub sojowa o zapachu "Życie jest piękne" oraz ażurowe czerwone serduszko, zapakowane w celofan przewiązane kokardką z dołączonym drewnianym napisem "Love". Piękny gadżet - dodatek do prezentu lub eleganckie wyznanie miłości.',
		},
		{
			name: 'Świeczka upominkowa S',
			price: '10zł / 13zł*',
			img: valentineCandleS,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Czerwona mini świeczuszka w koronkowym ubranku bezzapachowa lub sojowa o zapachu "Zimowa Jagoda" zapakowana w stylowe czarne pudełko przewiązane metaliczną czerwoną kokardką z dołączonym drewnianym napisem "Love". Idealna jako dodatek do prezentu lub skromny wyraz miłości - "Zostań moją Walentynką".',
		},
		{
			name: 'Świeca upominkowa L',
			price: '25zł / 55zł*',
			img: valentineCandleL,
			properties: {
				equivalent: 'Rozmiar L',
			},
			description: 'Elegancka świeczka w szkle kojącą wonią lasu i bursztynu oraz nutami cytrusów lub sojowa o zapachu "Zimowa Jagoda". Dostępna w czerwonym ubranku. Ustawiona na drewienku, zapakowana w celofan z doczepionym sercem z napisem "Love".',
		},
		{
			name: 'Zestaw RÓŻYCZKA',
			price: '35zł*',
			img: valentineSetWithRoseS,
			properties: {
				equivalent: 'Rozmiar S + wosk do kominka',
			},
			description: 'Czerwona Koronkowa Świeczka Mini w słoiczku o zapachu "Zimowa Jagoda" oraz urocza różyczka - wosk do kominka  o zapachu "Malina". Zapakowane w pudełko z okienkiem, przewiązane złotą kokardą z dołączonym czerwonym serduszkiem.',
		},
		{
			name: 'Zestaw MINI SŁOICZKI',
			price: '40zł*',
			img: valentineSetMiniJars,
			properties: {
				equivalent: '2 x Rozmiar S',
			},
			description: 'Dwie Koronkowe Świeczki Mini w słoiczkach, o zapachu "Życie jest piękne" (w lnianym ubranku) i "Zimowa Jagoda" (w czerwonym ubranku). W gratisie ratanowe serduszko. Zapakowane w pudełko z okienkiem, przewiązane złotą kokardą z dołączonym czerwonym serduszkiem.',
		},
		{
			name: 'Zestaw świeczek XL',
			price: '60zł',
			img: valentineSetXL,
			properties: {
				equivalent: '2 x Rozmiar XL',
			},
			description: 'Dwie eleganckie bryłowe świece owinięte ręcznie szydełkowanym koronkowym ubrankiem w czerwonym kolorze miłości. Umieszczone na metalowej czarnej podstawie z dołączonym (również drewnianym) napisem "Love", zapakowana w celofan i doczepionym czerwonym sercem love.',
		},
		{
			name: 'Zestaw świeczek S',
			price: '50zł / 65zł*',
			img: valentineSetS,
			properties: {
				equivalent: '6 x Rozmiar S',
			},
			description: 'Inspiracja na romantyczny wieczór przy eleganckich koronkowych świeczkach lub pomysł na wyjątkowy prezent walentynkowy - zestaw składający się z sześciu czerwonych świeczek rozmiaru S - wersja bezzapachowa lub zapachowa "Zimowa Jagoda". W gratisie konfetti walentynkowe. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione metaliczną kokardą i dołączonym drewnianym napisem "Love".',
		},
		// {
		// 	name: 'Zestaw RÓŻYCZKA',
		// 	price: '35zł*',
		// 	img: valentineSetS,
		// 	properties: {
		// 		equivalent: 'Rozmiar S + wosk do kominka',
		// 	},
		// 	description: 'Czerwona Koronkowa Świeczka Mini w słoiczku o zapachu "Zimowa Jagoda" oraz urocza różyczka - wosk do kominka  o zapachu "Malina". Zapakowane w pudełko z okienkiem, przewiązane złotą kokardą z dołączonym czerwonym serduszkiem.',
		// },
	],
} as SpecialOffer;
