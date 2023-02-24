import { Flex, Image, Text } from "@chakra-ui/react";

export function NpsCard() {
	return (
		<Flex direction="column" gap="1.6rem" py="4.45rem" align="center">
			<Image
				src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/smileFace.svg"
				w="5.4rem"
				h="5.4rem"
			/>
			<Text color="#81FBB8" fontSize="2.4rem" fontWeight={600}>
				Excellent!
			</Text>
		</Flex>
	);
}
