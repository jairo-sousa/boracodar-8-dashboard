import { Flex, Img, Text } from "@chakra-ui/react";

import { SalesChart } from "./SalesChart";

import { getLessMostValuableProperty } from "../utils/getLessMostValuableProperty";

import { WeekSales } from "../types/WeekSales";

type WeekSummaryProps = {
	sales: WeekSales;
};
export function WeekSummary({ sales }: WeekSummaryProps) {
	const highlightDays = getLessMostValuableProperty(
		sales,
		"closed",
		sales.monday.value
	);

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
			<SalesChart sales={sales} mostSales={highlightDays.highesValue} />
		</Flex>
	);
}
