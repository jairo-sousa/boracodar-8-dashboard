import { Flex, Heading } from "@chakra-ui/react";

import { CircleProgressBar } from "./components/CircleProgressBar/CircleProgressBar";
import { DashboardCard } from "./components/DashboardCard";
import { DashBoardCardFooter } from "./components/DashBoardCardFooter";
import { NpsCard } from "./components/NpsCard";
import { WeekSummary } from "./components/WeekSummary";

import { useEffect, useState } from "react";
import axios from "axios";

export function App() {
	const [atualStore, setAtualStore] = useState({
		id: 0,
		store: "",
		npsGrade: 0,
		sales: {},
	});

	const [calculatedData, setSalculatedData] = useState({
		bestSalesDay: "",
		lessSalesDay: "",
		salesPercent: 0,
		goalsPercent: 0,
	});

	useEffect(() => {
		fetchStores();
	}, []);

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
					<NpsCard npsGrade={atualStore.npsGrade} />
					<DashBoardCardFooter firstText={`NPS Score ${atualStore.npsGrade}`} />
				</DashboardCard>

				<DashboardCard heading="Closed sales">
					{
						//TODO evaluate percentage, achived and reuse in next card
					}
					<CircleProgressBar
						percentage={70}
						circleDiameter={200}
						startColor="#ce9ffc"
						endColor="#7367F0"
					/>
					<DashBoardCardFooter
						firstText="Expected 100"
						firstCircleBg="#4A4556"
						secondText="Achieved 70"
						secondCircleBg="linear-gradient(121.94deg,
							#CE9FFC 15.98%, #7367F0 82.85%);
							border-radius: 999px"
					/>
				</DashboardCard>

				<DashboardCard heading="Monthly goal">
					<CircleProgressBar
						percentage={90}
						circleDiameter={197}
						startColor="#DF9780"
						endColor="#A66DE9"
					/>
					<DashBoardCardFooter
						firstText="Expected R$ 70K"
						firstCircleBg="#4A4556"
						secondText="Achieved R$ 63K"
						secondCircleBg="linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%)"
					/>
				</DashboardCard>
			</Flex>
			<Flex w="100%" justify="center">
				<DashboardCard>
					<Heading as="h2" fontSize="2.4rem" fontWeight={600}>
						Sales by day of the week
					</Heading>
					<WeekSummary />
				</DashboardCard>
			</Flex>
		</Flex>
	);

	async function fetchStores() {
		const response = axios
			.get(
				`https://my-json-server.typicode.com/jairo-sousa/boracodar-8-dashboard/stores/${1}`
			)
			.then((response) => response.data)
			.then((data) => setAtualStore(data));
	}
}
