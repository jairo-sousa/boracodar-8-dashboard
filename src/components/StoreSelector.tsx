import { Flex, Heading, Img } from "@chakra-ui/react";
import { DashboardCard } from "./DashboardCard";

type StoreSelectorProps = {
	store: string;
};

export function StoreSelector({ store }: StoreSelectorProps) {
	return (
		<Flex
			justify="center"
			align="center"
			gap="3rem"
			justifyContent="space-between"
			w="102.4rem"
		>
			<DashboardCard p="1.5rem 2.4rem">
				<Img
					src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/store.svg"
					height="5rem"
				></Img>
			</DashboardCard>

			<Heading as="h2" fontSize="2.4rem" fontWeight={600}>
				{store}
			</Heading>

			<Flex gap="3rem" cursor="pointer">
				<DashboardCard p="2.9rem 2.4rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/leftArrow.svg"></Img>
				</DashboardCard>

				<DashboardCard p="2.9rem 2.4rem">
					<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/rightArrow.svg"></Img>
				</DashboardCard>
			</Flex>
		</Flex>
	);
}
