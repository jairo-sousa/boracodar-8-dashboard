import { Box, Flex, Text } from "@chakra-ui/react";

import { WeekSales } from "../types/WeekSales";

import { getPercentage } from "../utils/getPercentage";

type SalesChartProps = {
	sales: WeekSales;
	mostSales: number;
};
export function SalesChart({ sales, mostSales }: SalesChartProps) {
	const weekDays = [
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

	return (
		<Flex gap="5.9rem" position="relative" align="end" minH="19.1rem">
			{weekDays.map((weekDay, i) => {
				return (
					<Flex
						direction="column"
						align="center"
						key={`${weekDay} - ${i}`}
						alignItems="center"
						gap="0.8rem"
						zIndex={1}
					>
						<Box
							w="1.5rem"
							h={`calc(15.9rem * ${weekDay.percent ? weekDay.percent : 0.1})`}
							bg="linear-gradient(180deg, #90F7EC 0%, #32CCBC 100%)"
							borderRadius="2rem"
						></Box>
						<Text>{weekDay.day}</Text>
					</Flex>
				);
			})}
			<Box
				w="100%"
				h="0.3rem"
				bg="#4A4556"
				top="7.545rem"
				position="absolute"
			/>
		</Flex>
	);
}
