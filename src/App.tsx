import { Flex, Text, Image } from "@chakra-ui/react";

import { DashboardCard } from "./components/DashboardCard";

function App() {
	return (
		<Flex
			direction="column"
			className="App"
			justify="center"
			align="center"
			gap="5.9rem"
			w="112rem"
			h="100%"
		>
			<Flex gap="3.2rem" w="100%" justify="center">
				<DashboardCard heading="General NPS">
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
					<Flex
						gap="1rem"
						justify="center"
						w="20rem"
						fontSize="1.4rem"
						fontWeight={400}
					>
						<Text>NPS Score</Text> <Text>75</Text>
					</Flex>
				</DashboardCard>
				<DashboardCard heading="General NPS">
					<Flex gap="1rem" justify="center">
						<Text>NPS Score</Text> <Text>75</Text>
					</Flex>
				</DashboardCard>
				<DashboardCard heading="General NPS">
					<Flex gap="1rem" justify="center">
						<Text>NPS Score</Text> <Text>75</Text>
					</Flex>
				</DashboardCard>
			</Flex>
			<Flex w="100%" justify="center">
				<DashboardCard heading="Sales by day of the week">
					SALES INFO
				</DashboardCard>
			</Flex>
		</Flex>
	);
}

export default App;
