export default (count: number): string => {
		if (count === 0 || count >= 5) return `${count} wariantów`;
		if (count === 1) return `${count} wariant`;
		if (count > 1 && count < 5) return `${count} warianty`;
		return '-';
};
