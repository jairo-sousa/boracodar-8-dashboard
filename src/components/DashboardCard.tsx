import { Flex, Heading } from "@chakra-ui/react";

type DashboardCardProps = {
	children: React.ReactNode;
	heading?: string;
	p?: string;
	onclick?: {
		function: Function;
		params: any[];
	};
};

export function DashboardCard({
	children,
	heading,
	p,
	onclick,
}: DashboardCardProps) {
	return (
		<Flex
			direction="column"
			justify="center"
			bg="#363447"
			p={p ? p : "2.9rem 4.8rem"}
			gap="3.2rem"
			borderRadius="1.6rem"
			w="fit-content"
			h="100%"
			shadow="3px 4px 26px rgba(0, 0, 0, 0.25)"
			onClick={
				onclick
					? () => {
							onclick.function(onclick.params);
					  }
					: () => ""
			}
		>
			{heading && (
				<Heading as="h2" textAlign="center" fontSize="2.4rem" fontWeight={600}>
					{heading}
				</Heading>
			)}
			{children}
		</Flex>
	);
}
