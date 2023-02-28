import { Flex, Text } from "@chakra-ui/react";

import "./CircleProgressBar.css";

type CircleProgressBarProps = {
	percentage: number;
	circleDiameter: number;
	startColor: string;
	endColor: string;
};

export function CircleProgressBar({
	percentage,
	circleDiameter,
	startColor,
	endColor,
}: CircleProgressBarProps) {
	const radius = 80;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * percentage) / 100;

	const circleRay = circleDiameter / 2;

	return (
		<Flex w="100%" direction="column" align="center" gap="0.8rem">
			<svg
				width={circleDiameter}
				height={circleDiameter}
				viewBox={`0 0 ${circleDiameter} ${circleDiameter}`}
			>
				<defs>
					<linearGradient
						id={`gradient-${startColor}`}
						gradientTransform="rotate(121.94)"
					>
						<stop offset="15.98%" stopColor={startColor} />
						<stop offset="82.85%" stopColor={endColor} />
					</linearGradient>
				</defs>
				<circle
					cx={circleRay}
					cy={circleRay}
					strokeWidth="3rem"
					r={radius}
					className="circle-bg"
				/>
				<circle
					cx={circleRay}
					cy={circleRay}
					strokeWidth="3rem"
					r={radius}
					className="circle-progress"
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
					}}
					transform={`rotate(-90 ${circleRay} ${circleRay})`}
					stroke={`url(#gradient-${startColor})`}
				/>
				<text y="50%" x="50%" textAnchor="middle" className="percent-text">
					{percentage}%
				</text>
				<text y="50%" x="50%" textAnchor="middle" className="second-text">
					achieved
				</text>
			</svg>
		</Flex>
	);
}
