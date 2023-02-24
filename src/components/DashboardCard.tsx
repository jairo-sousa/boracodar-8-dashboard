import { Flex, Heading } from "@chakra-ui/react";

type DashboardCardProps = {
	children: React.ReactNode;
	heading: string;
};

export function DashboardCard({ children, heading }: DashboardCardProps) {
	return (
		<Flex
			direction="column"
			bg="#363447"
			p="2.9rem 4.8rem"
			gap="3.2rem"
			borderRadius="1.6rem"
			w="fit-content"
			h="fit-content"
			shadow="3px 4px 26px rgba(0, 0, 0, 0.25)"
		>
			<Heading as="h2">{heading}</Heading>
			{children}
		</Flex>
	);
}
