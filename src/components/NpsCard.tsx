import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type NpsCardProps = {
	npsGrade: number;
};

export function NpsCard({ npsGrade }: NpsCardProps) {
	const [satisfaction, setSatisfaction] = useState({
		imgSufix: "",
		text: "",
		textColor: "",
	});

	useEffect(() => {
		npsGrade && choseSatisfaction();
	}, [npsGrade]);

	function choseSatisfaction() {
		const satisfactionOptions = {
			great: {
				imgSufix: "smileFace.svg",
				text: "Excellent!",
				textColor: "#81FBB8",
			},
			neutral: {
				imgSufix: "neutralFace.svg",
				text: "Neutral",
				textColor: "#FFBB7A",
			},
			bad: {
				imgSufix: "angryFace.svg",
				text: "Bad...",
				textColor: "#FF997E",
			},
		};

		if (npsGrade >= 75) setSatisfaction(satisfactionOptions.great);
		if (npsGrade > 55 && npsGrade < 75)
			setSatisfaction(satisfactionOptions.neutral);
		if (npsGrade <= 55) setSatisfaction(satisfactionOptions.bad);
	}

	return (
		<Flex direction="column" gap="1.6rem" py="4.45rem" align="center">
			{satisfaction.imgSufix && (
				<Image
					src={`https://raw.githubusercontent.com/jairo-sousa/boracodar-8-dashboard/main/.github/${satisfaction.imgSufix}`}
					w="5.4rem"
					h="5.4rem"
				/>
			)}
			<Text color={satisfaction.textColor} fontSize="2.4rem" fontWeight={600}>
				{satisfaction.text}
			</Text>
		</Flex>
	);
}
