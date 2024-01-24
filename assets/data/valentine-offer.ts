import { SpecialOffer } from '~/types';
import valentineCandleS from '~/assets/images/valentine-offer/candle-s.jpeg';
import valentineCandleL from '~/assets/images/valentine-offer/candle-l.jpeg';
import valentineSetXL from '~/assets/images/valentine-offer/set-of-xl.jpeg';
import valentineSetS from '~/assets/images/valentine-offer/set-of-s.jpeg';

export default {
	name: 'Oferta Walentynkowa',
	id: 'oferta-walentynkowa',
	variants: [
		{
			name: 'Świeczka upominkowa S',
			price: '15zł',
			img: valentineCandleS,
			properties: {
				equivalent: 'Rozmiar S',
			},
			description: 'Czerwona mini świeczuszka w koronkowym ubranku, zapakowana w stylowe czarne pudełko przewiązane metaliczną czerwoną kokardką z dołączonym drewnianym napisem "Love". Idealna jako dodatek do prezentu lub skromny wyraz miłości - "Zostań moją Walentynką".',
		},
		{
			name: 'Świeca upominkowa L',
			price: '25zł',
			img: valentineCandleL,
			properties: {
				equivalent: 'Rozmiar L',
			},
			description: 'Elegancka świeczka w szkle kojącą wonią lasu i bursztynu oraz nutami cytrusów. Dostępna w czerwonym lub malinowym ubranku. Ustawiona na drewienku, zapakowana w celofan z doczepionym sercem z napisem "Love".',
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
			price: '60zł',
			img: valentineSetS,
			properties: {
				equivalent: '6 x Rozmiar S',
			},
			description: 'Inspiracja na romantyczny wieczór przy eleganckich koronkowych świeczkach lub pomysł na wyjątkowy prezent walentynkowy - zestaw składający się z sześciu czerwonych świeczek rozmiaru S. W gratisie konfetti walentynkowe. Wszystko w pięknym karbowanym pudełku z okienkiem ozdobione metaliczną kokardą i dołączonym drewnianym napisem "Love".',
		},
	],
} as SpecialOffer;
