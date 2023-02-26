import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function WeekSummary() {
	return (
		<Flex direction="column" w="97.6rem" gap="0.8rem">
			<Flex>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/upArrow.svg"></Img>
				<Text fontSize="1.4rem" fontWeight={500}>
					Day with more sales
				</Text>
			</Flex>
			<Text fontSize="2.4rem" fontWeight={500} mb="2.4rem">
				Wednesday
			</Text>

			<Flex>
				<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/downArrow.svg"></Img>
				<Text fontSize="1.4rem" fontWeight={500}>
					Day with less sales
				</Text>
			</Flex>
			<Text fontSize="2.4rem" fontWeight={500}>
				Sunday
			</Text>
		</Flex>
	);
}
