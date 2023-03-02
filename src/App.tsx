import { Flex, Heading, Img, Text } from "@chakra-ui/react";

import { CircleProgressBar } from "./components/CircleProgressBar/CircleProgressBar";
import { DashboardCard } from "./components/DashboardCard";
import { DashBoardCardFooter } from "./components/DashBoardCardFooter";
import { NpsCard } from "./components/NpsCard";
import { WeekSummary } from "./components/WeekSummary";

import { sumOfProperties } from "./utils/sumOfProperties";
import { getPercentage } from "./utils/getPercentage";

import { useEffect, useState } from "react";
import axios from "axios";
import { StoreSelector } from "./components/StoreSelector";

export function App() {
	const [atualStoreId, setAtualStoreId] = useState(1);

	const [atualStore, setAtualStore] = useState({
		id: 1,
		store: "",
		npsGrade: 0,
		sales: {
			monday: { closed: 0, value: 0 },
			Tuesday: { closed: 0, value: 0 },
			Wednesday: { closed: 0, value: 0 },
			Thursday: { closed: 0, value: 0 },
			Friday: { closed: 0, value: 0 },
			Saturday: { closed: 0, value: 0 },
			Sunday: { closed: 0, value: 0 },
		},
	});

	const [calculatedData, setCalculatedData] = useState({
		achievedSales: 0,
		percentSales: 0,
		achievedGoal: 0,
		percentGoal: 0,
	});

	const [metrics, setMetrics] = useState({
		expectedSales: 100,
		expectedGoal: 70000,
	});

	const renderingId = atualStoreId;

	useEffect(() => {
		fetchStores(renderingId);
		percentCalculation();
	}, [renderingId]);

	return (
		<Flex
			direction="column"
			className="App"
			justify="center"
			align="center"
			gap="4rem"
			w="112rem"
			h="100%"
		>
			<StoreSelector
				store={{
					name: atualStore.store,
					id: atualStoreId,
					setAtualStoreId: setAtualStoreId,
				}}
			/>

			<Flex
				gap="3.2rem"
				w="100%"
				h="37.9rem"
				justify="center"
				onLoad={() => percentCalculation()}
			>
				<DashboardCard heading="General NPS">
					<NpsCard npsGrade={atualStore.npsGrade} />
					<DashBoardCardFooter firstText={`NPS Score ${atualStore.npsGrade}`} />
				</DashboardCard>

				<DashboardCard heading="Closed sales">
					<CircleProgressBar
						percentage={calculatedData.percentSales}
						circleDiameter={200}
						startColor="#ce9ffc"
						endColor="#7367F0"
					/>
					<DashBoardCardFooter
						firstText={`Expected ${metrics.expectedSales}`}
						firstCircleBg="#4A4556"
						secondText={`Achieved ${calculatedData.achievedSales}`}
						secondCircleBg="linear-gradient(121.94deg,
							#CE9FFC 15.98%, #7367F0 82.85%);
							border-radius: 999px"
					/>
				</DashboardCard>

				<DashboardCard heading="Monthly goal">
					<CircleProgressBar
						percentage={calculatedData.percentGoal}
						circleDiameter={200}
						startColor="#DF9780"
						endColor="#A66DE9"
					/>
					<DashBoardCardFooter
						firstText={`Expected ${metrics.expectedGoal / 1000}K`}
						firstCircleBg="#4A4556"
						secondText={`Achieved ${calculatedData.achievedGoal / 1000}K`}
						secondCircleBg="linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%)"
					/>
				</DashboardCard>
			</Flex>
			<Flex w="100%" justify="center">
				<DashboardCard>
					<Heading as="h2" fontSize="2.4rem" fontWeight={600}>
						Sales by day of the week
					</Heading>
					<WeekSummary sales={atualStore.sales} />
				</DashboardCard>
			</Flex>
		</Flex>
	);

	async function fetchStores(id: number) {
		const response = axios
			.get(
				`https://my-json-server.typicode.com/jairo-sousa/boracodar-8-dashboard/stores/${id}`
			)
			.then((response) => response.data)
			.then((data) => setAtualStore(data));
	}

	function percentCalculation() {
		const sales = sumOfProperties(atualStore.sales, "closed");
		const earned = sumOfProperties(atualStore.sales, "value");

		const salesPercent = getPercentage(metrics.expectedSales, sales) * 100;
		const goalPercent = getPercentage(metrics.expectedGoal, earned) * 100;

		setCalculatedData({
			achievedSales: sales,
			percentSales: salesPercent,
			achievedGoal: earned,
			percentGoal: goalPercent,
		});
	}
}
