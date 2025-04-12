// export * from './supabase';
export * from './api';

export interface OfferVariant {
	name: string;
	price: string;
	img: string;
	description?: string;
}
export interface SizeOfferVariant extends OfferVariant {
	properties: {
		dimensions?: string;
		weight?: string;
		burningTime?: string;
	};
}
export interface SetOfferVariant extends OfferVariant {
	properties: {
		items: string;
	};
}
export interface SpecialOfferVariant extends OfferVariant {
	properties: {
		equivalent: string;
	};
}
export interface SpecialOffer {
	name: string;
	id: string;
	variants: SpecialOfferVariant[];
}
