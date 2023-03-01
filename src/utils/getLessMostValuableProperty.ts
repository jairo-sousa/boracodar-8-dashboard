export function getLessMostValuableProperty(
	collection: object,
	comparisonKey: string,
	startMin: number
) {
	let max = 0;
	let min = startMin;
	let highestProperty = "";
	let lowestProperty = "";

	for (const [key, value] of Object.entries(collection)) {
		let isHighestSoFar = value[`${comparisonKey}`] > max;
		let isLowestSoFar = value[`${comparisonKey}`] < min;

		if (isHighestSoFar) {
			max = value[`${comparisonKey}`];
			highestProperty = key;
		}
		if (isLowestSoFar) {
			min = value[`${comparisonKey}`];
			lowestProperty = key;
		}
	}

	return {
		lowestProperty: lowestProperty,
		highestProperty: highestProperty,
		lowestValue: min,
		highesValue: max,
	};
}
