import { Flex } from "@chakra-ui/react";

import { DashboardCard } from "./components/DashboardCard";

function App() {
	return (
		<Flex
			direction="column"
			className="App"
			justify="center"
			align="center"
			gap="5.9rem"
			w="100%"
			h="100%"
		>
			<Flex>
				<DashboardCard heading="General NPS">SCORES</DashboardCard>
			</Flex>
			<Flex>
				<DashboardCard heading="Sales by day of the week">
					SALES INFO
				</DashboardCard>
			</Flex>
		</Flex>
	);
}

export default App;
