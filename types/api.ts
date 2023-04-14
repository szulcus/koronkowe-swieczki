export interface ApiCandleVariant {
	uuid: string;
	size: 'S' | 'M' | 'L';
	amount: string;
	candleUuid: string;
}
export interface ApiCandle {
	uuid: string;
	name: string;
	color: string;
	image: string | null;
}
export interface ApiCandleSet {
	uuid: string;
	name: string;
	// candles: ApiCandle[];
}
