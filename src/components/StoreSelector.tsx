import { Flex, Heading, Img } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DashboardCard } from "./DashboardCard";

type StoreSelectorProps = {
	store: {
		name: string;
		id: number;
		setAtualStoreId: Function;
	};
};

export function StoreSelector({ store }: StoreSelectorProps) {
	const [storeIdList, setStoreIdList] = useState();

	useEffect(() => {
		fetchStoreIdList();
	}, []);

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
				{store.name}
			</Heading>

			{storeIdList && (
				<Flex gap="3rem" cursor="pointer">
					<DashboardCard
						p="2.9rem 2.4rem"
						onclick={{
							function: handleClick,
							params: [-1, store.id, storeIdList],
						}}
					>
						<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/leftArrow.svg"></Img>
					</DashboardCard>

					<DashboardCard
						p="2.9rem 2.4rem"
						onclick={{
							function: handleClick,
							params: [1, store.id, storeIdList],
						}}
					>
						<Img src="https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/rightArrow.svg"></Img>
					</DashboardCard>
				</Flex>
			)}
		</Flex>
	);

	async function fetchStoreIdList() {
		const response = axios
			.get(
				`https://my-json-server.typicode.com/jairo-sousa/boracodar-8-dashboard/store-id-list`
			)
			.then((response) => response.data)
			.then((data) => {
				setStoreIdList(data);
			});
	}

	function handleClick(params: any[]) {
		let newIndex = params[0] + params[2].indexOf(params[1]);

		const isValidIndex = newIndex >= 0 && newIndex <= params[2].length - 1;

		isValidIndex ? "" : (newIndex += params[2].length * (params[0] * -1));

		store.setAtualStoreId(params[2][newIndex]);
	}
}
