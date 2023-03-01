import { getPercentage } from "../utils/getPercentage";

import { WeekSales } from "../types/WeekSales";
import { WeekDays } from "../types/Weekdays";

export function GetWeekDays(sales: WeekSales, mostSales: number): WeekDays {
	return [
		{
			day: "Sun",
			percent: getPercentage(mostSales, sales.Sunday.closed),
		},
		{
			day: "Mon",
			percent: getPercentage(mostSales, sales.monday.closed),
		},
		{
			day: "Tue",
			percent: getPercentage(mostSales, sales.Tuesday.closed),
		},
		{
			day: "Wed",
			percent: getPercentage(mostSales, sales.Wednesday.closed),
		},
		{
			day: "Thu",
			percent: getPercentage(mostSales, sales.Thursday.closed),
		},
		{
			day: "Fri",
			percent: getPercentage(mostSales, sales.Friday.closed),
		},
		{
			day: "Sat",
			percent: getPercentage(mostSales, sales.Saturday.closed),
		},
	];
}
