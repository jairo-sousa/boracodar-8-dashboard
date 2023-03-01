type DaySales = {
	closed: number;
	value: number;
};

export type WeekSales = {
	monday: DaySales;
	Tuesday: DaySales;
	Wednesday: DaySales;
	Thursday: DaySales;
	Friday: DaySales;
	Saturday: DaySales;
	Sunday: DaySales;
};
