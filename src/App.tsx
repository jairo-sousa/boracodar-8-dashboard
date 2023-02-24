import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { CircleProgressBar } from "./components/CircleProgressBar/CircleProgressBar";

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
			<Flex gap="3.2rem" w="100%" h="37.9rem" justify="center">
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
				<DashboardCard heading="Closed sales">
					<CircleProgressBar
						percentage={70}
						circleDiameter={200}
						startColor="#ce9ffc"
						endColor="#7367F0"
					/>
					<Flex
						gap="1rem"
						justify="center"
						align="center"
						w="fit-content"
						fontSize="1.4rem"
						fontWeight={400}
					>
						<Flex gap="0.4rem" align="center">
							<Box bg="#4A4556" w="1.5rem" h="1.5rem" borderRadius="50%"></Box>
							<Text mr="1rem">Expected 100</Text>
						</Flex>
						<Flex gap="0.4rem" align="center">
							<Box
								bg="linear-gradient(121.94deg,
								#CE9FFC 15.98%, #7367F0 82.85%);
								border-radius: 999px"
								w="1.5rem"
								h="1.5rem"
								borderRadius="50%"
							></Box>
							<Text>Achieved 70</Text>
						</Flex>
					</Flex>
				</DashboardCard>
				<DashboardCard heading="Monthly goal">
					<CircleProgressBar
						percentage={90}
						circleDiameter={197}
						startColor="#DF9780"
						endColor="#A66DE9"
					/>
					<Flex
						gap="1rem"
						justify="center"
						align="center"
						w="fit-content"
						fontSize="1.4rem"
						fontWeight={400}
					>
						<Flex gap="0.4rem" align="center">
							<Box bg="#4A4556" w="1.5rem" h="1.5rem" borderRadius="50%"></Box>
							<Text mr="1rem">Expected R$ 70K</Text>
						</Flex>
						<Flex gap="0.4rem" align="center">
							<Box
								bg="linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%)"
								w="1.5rem"
								h="1.5rem"
								borderRadius="50%"
							></Box>
							<Text>Achieved R$ 63K</Text>
						</Flex>
					</Flex>
				</DashboardCard>
			</Flex>
			<Flex w="100%" h="31.4rem" justify="center">
				<DashboardCard heading="Sales by day of the week">
					<p style={{ width: "97.6rem" }}>SALES INFO</p>
				</DashboardCard>
			</Flex>
		</Flex>
	);
}

export default App;
