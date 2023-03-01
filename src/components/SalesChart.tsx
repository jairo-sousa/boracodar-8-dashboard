import { Box, Flex, Text } from "@chakra-ui/react";
import { WeekDays } from "../types/Weekdays";

type SalesChartProps = {
	weekDays: WeekDays;
};
export function SalesChart({ weekDays }: SalesChartProps) {
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
