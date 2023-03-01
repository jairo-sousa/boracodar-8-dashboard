import { Flex, Img, Text } from "@chakra-ui/react";

//components
import { SalesChart } from "./SalesChart";

//utils
import { getLessMostValuableProperty } from "../utils/getLessMostValuableProperty";
import { GetWeekDays } from "../utils/GetWeekDays";

//types
import { WeekSales } from "../types/WeekSales";
import { WeekDays } from "../types/Weekdays";

type WeekSummaryProps = {
	sales: WeekSales;
};
export function WeekSummary({ sales }: WeekSummaryProps) {
	const highlightDays = getLessMostValuableProperty(
		sales,
		"closed",
		sales.monday.value
	);

	const weekDays = GetWeekDays(sales, highlightDays.highesValue);

	return (
		<Flex w="92.8rem" justify="space-between">
			<Flex direction="column" gap="0.8rem">
				<Flex gap="0.4rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/upArrow.svg"></Img>
					<Text fontSize="1.4rem" fontWeight={500}>
						Day with more sales
					</Text>
				</Flex>
				<Text fontSize="2.4rem" fontWeight={500} mb="2.4rem">
					{highlightDays.highestProperty}
				</Text>

				<Flex gap="0.4rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/downArrow.svg"></Img>
					<Text fontSize="1.4rem" fontWeight={500}>
						Day with less sales
					</Text>
				</Flex>
				<Text fontSize="2.4rem" fontWeight={500}>
					{highlightDays.lowestProperty}
				</Text>
			</Flex>
			<SalesChart weekDays={weekDays} />
		</Flex>
	);
}
