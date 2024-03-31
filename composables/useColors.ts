interface Color {
	id: string;
	color: string;
	name: string;
	customName?: string;
	available: boolean;
	smell?: string;
}
export default () => {
	const colors: Color[] = [
		{ id: '0400', color: '#FFFFFF', name: 'Biały', available: true, smell: 'Bezzapachowy' },
		{ id: '0000', color: '#F9F4E0', name: 'Natural', customName: 'Lniany', available: true, smell: 'Życie jest piękne' },
		{ id: '0099', color: '#000000', name: 'Czarny', available: true, smell: 'Drzewo Sandałowe + Cedr' },
		{ id: '0346', color: '#692506', name: 'Brązowy', available: true, smell: 'Gorąca czekolada' },
		{ id: '0347', color: '#DE6528', name: 'Rudy', available: false },
		{ id: '0350', color: '#BDC4A9', name: 'Zielonoszary', customName: 'Seledynowy', available: true },
		{ id: '0351', color: '#CCA14B', name: 'Złoty', available: true, smell: 'Palo Santo' },
		{ id: '0352', color: '#DB302D', name: 'Czerwony', available: true },
		{ id: '0353', color: '#A7363F', name: 'Bordowy', available: true, smell: 'Wanilia + Wiśnia' },
		{ id: '0354', color: '#CCC9C1', name: 'Jasnoszary', customName: 'Siwy', available: true },
		{ id: '0355', color: '#3B3E65', name: 'Granatowy', available: true },
		{ id: '0356', color: '#F9EFBE', name: 'Jasnożółty', customName: 'Cytrynowy', available: true },
		{ id: '0358', color: '#DBB1AE', name: 'Wrzosowy', customName: 'Różowy', available: true },
		{ id: '0359', color: '#A1C5CE', name: 'Błękitny', customName: 'Niebieski', available: true, smell: 'Petrichor' },
		{ id: '0360', color: '#ffe750', name: 'Żółty', available: true },
		{ id: '0361', color: '#ED9144', name: 'Pomarańczowy', available: true, smell: 'Ciasto Dyniowe' },
		{ id: '0362', color: '#CBC650', name: 'Groszkowy', customName: 'Limonkowy', available: true, smell: 'Łąka Kwietna' },
		{ id: '0363', color: '#64ADD0', name: 'Niebieski', customName: 'Chabrowy', available: true },
		{ id: '0364', color: '#B63058', name: 'Biskupi', customName: 'Malinowy', available: true, smell: 'Malina' },
		{ id: '0365', color: '#F3D9D3', name: 'Jasny wrzos', customName: 'Różowy pastelowy', available: true, smell: 'Różowy Cukier' },
		{ id: '0367', color: '#FF4059', name: 'Malinowy', available: false },
		{ id: '0368', color: '#7F4A82', name: 'Fioletowy', available: true, smell: 'Kwiat Piwonii' },
		{ id: '0369', color: '#295E18', name: 'Ciemnozielony', customName: 'Zielony', available: true },
		{ id: '0370', color: '#FCEAB6', name: 'Beżowy', available: true, smell: 'Złoto Bałtyku' },
		{ id: '1642', color: '#329B91', name: 'Brudny turkusowy', customName: 'Turkusowy', available: true },
		{ id: '1754', color: '#FAE6D2', name: 'Jasny łososiowy', available: false },
		{ id: '1815', color: '#C9C7C5', name: 'Beżowoszary', available: false },
		{ id: '1588B', color: '#F5E2FC', name: 'New|jasny fioletowy', available: false },
		{ id: '1626A', color: '#D9E2FF', name: 'New|jasny niebieskoszary', available: false },
		{ id: '1635C', color: '#B4C6CF', name: 'New|szaromorski', available: false },
		{ id: '1698A', color: '#EAFFBF', name: 'New|jasny groszkowy', available: false },
		{ id: '1782B', color: '#FCF3E8', name: 'New|perłowe ecru', available: false },
	];
	const availableColors = colors.filter((color) => color.available);
	const scentedColors = availableColors.filter((color) => color.smell);
	return {
		availableColors,
		scentedColors,
	};
};
