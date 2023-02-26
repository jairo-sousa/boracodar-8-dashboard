import { Box, Flex, Text } from "@chakra-ui/react";

export function SalesChart() {
	const weekDays = [
		{
			day: "Mon",
			percent: "0.24",
		},
		{
			day: "Tue",
			percent: "0.72",
		},
		{
			day: "Wed",
			percent: "0.47",
		},
		{
			day: "Thu",
			percent: "1",
		},
		{
			day: "Fri",
			percent: "0.81",
		},
		{
			day: "Sat",
			percent: "0.43",
		},
	];
	return (
		<Flex gap="5.9rem" position="relative" align="end">
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
							h={`calc(15.9rem * ${weekDay.percent})`}
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
