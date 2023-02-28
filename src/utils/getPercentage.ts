export function getPercentage(total: number, achived: number) {
	const fraction = (achived / total).toFixed(2);
	return parseFloat(fraction);
}
