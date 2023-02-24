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
				<DashboardCard />
			</Flex>
			<Flex>
				<DashboardCard />
			</Flex>
		</Flex>
	);
}

export default App;
