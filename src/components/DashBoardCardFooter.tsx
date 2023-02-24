import { Box, Flex, Text } from "@chakra-ui/react";

type DashBoardCardFooterProps = {
	firstText?: string;
	firstCircleBg?: string;
	secondText?: string;
	secondCircleBg?: string;
};

export function DashBoardCardFooter({
	firstText,
	firstCircleBg,
	secondText,
	secondCircleBg,
}: DashBoardCardFooterProps) {
	return (
		<Flex
			gap="1rem"
			justify="center"
			align="center"
			minW="20rem"
			fontSize="1.4rem"
			fontWeight={400}
		>
			<Flex gap="0.4rem" align="center">
				{firstCircleBg && (
					<Box
						bg={firstCircleBg}
						w="1.5rem"
						h="1.5rem"
						borderRadius="50%"
					></Box>
				)}
				{firstText && <Text mr="1rem">{firstText}</Text>}
			</Flex>
			<Flex gap="0.4rem" align="center">
				{secondCircleBg && (
					<Box
						bg={secondCircleBg}
						w="1.5rem"
						h="1.5rem"
						borderRadius="50%"
					></Box>
				)}
				{secondText && <Text>{secondText}</Text>}
			</Flex>
		</Flex>
	);
}
