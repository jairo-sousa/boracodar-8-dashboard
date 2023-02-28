export function sumOfProperties(collection: object, summableKey: string) {
	let sum = 0;
	for (const [key, value] of Object.entries(collection)) {
		sum += value[`${summableKey}`];
	}
	return sum;
}
