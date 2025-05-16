import type { VueFirestoreDocumentData } from 'vuefire';

export type ApiOfferType = 'offer' | 'specialOffer' | 'kashubianOffer' | 'scentedOffer';
export interface ApiOffer {
	title: string;
	description: string;
	footnote: string;
	sizes: string;
	sets: string;
};
export type ApiOfferVariant<T extends string = string> = {
	name: string;
	price: string;
	previousPrice?: string;
	image?: string;
	properties: Record<T, string>
}
export interface ApiSpecialOfferVariant extends ApiOfferVariant<'equivalent'> {
	description: string;
}
export interface ApiColor {
	id: string;
	color: string;
	name: string;
	customName?: string;
	available: boolean;
	smell?: string;
}

export interface ApiHomeData {
	intro: {
		logo: string;
		content: string;
	};
	offer: ApiOffer;
	offerSizes: ApiOfferVariant<'burningTime' | 'dimensions'>[];
	offerSets: ApiOfferVariant<'items'>[];
	specialOffer: VueFirestoreDocumentData<{
		name: string;
		variants: ApiSpecialOfferVariant[];
	}>,
	kashubianOffer: Omit<ApiOffer, 'footnote'>
	kashubianOfferSizes: ApiOfferVariant<'burningTime' | 'dimensions'>[];
	kashubianOfferSets: ApiOfferVariant<'items'>[];
	scentedOffer: Omit<ApiOffer, 'footnote' | 'sets'> & { colors: string };
	scentedOfferSizes: ApiOfferVariant<'burningTime' | 'weight' | 'dimensions'>[];
	colors: ApiColor[];
	safety: {
		title: string;
		description: string;
		content: string;
	};
	usage: {
		title: string;
		description: string;
	};
	contact: {
		title: string;
		description: string;
		labels: {
			name: string;
			email: string;
			message: string;
			submit: string;
		}
	};
}
