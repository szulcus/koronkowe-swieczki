// export * from './supabase';
export * from './api';

export interface OfferVariant {
	name: string;
	price: string;
	img: string;
	description?: string;
}
export interface SizeOfferVariant extends OfferVariant {
	properties: Record<'burningTime' | 'dimensions', string>;
}
export interface SetOfferVariant extends OfferVariant {
	properties: Record<'items', string>;
}
export interface SpecialOfferVariant extends OfferVariant {
	properties: Record<'equivalent', string>;
}
export interface SpecialOffer {
	name: string;
	id: string;
	variants: SpecialOfferVariant[];
}
