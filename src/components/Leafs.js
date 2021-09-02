import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { mq } from "../constants";

const SVGLeaf = props => {
	return (
		<svg viewBox="0 0 66 66" {...props}>
			<path d="M43.808 8.766L33.59 1.196c-.313-.232-.831-.268-1.19 0l-10.208 7.57c-.254.19-.404.487-.404.804v31.78c0 .317.149.615.404.804l9.804 7.278V64c0 1.324 2 1.323 2 0V49.433l9.812-7.28a1 1 0 00.404-.802V9.57c0-.317-.15-.615-.404-.804zm-20.02 11.111l8.208 6.087v3.476l-8.208-6.094v-3.469zm0-5.96l8.208 6.088v3.469l-8.208-6.087v-3.47zm15.318-6.146l-5.11 3.786V3.984l5.11 3.786zm-7.11-3.784v7.568l-5.103-3.784 5.103-3.784zm2 21.977l8.216-6.088v3.47l-8.216 6.095v-3.477zm0-2.49v-3.469l8.216-6.088v3.469l-8.216 6.088zm8.216-12.047l-8.216 6.088v-3.469l6.79-5.03 1.426 1.057v1.354zm-18.424-1.354l1.425-1.058 6.783 5.03v3.47l-8.208-6.087v-1.355zm0 30.775V25.837l8.208 6.094v15.012l-8.208-6.095zm10.208 6.095V31.931l8.216-6.096v15.013l-8.216 6.095z" />
		</svg>
	);
};

const Leafathon = ({ combination }) => {
	if (!combination) {
		combination = [1, 2, 3];
	}
	return (
		<span>
			{combination.map(element => (
				<StyledSVGLeaf key={element} className={"leaf" + element} />
			))}
		</span>
	);
};

Leafathon.propTypes = {
	combination: PropTypes.array,
};

const Leafs = () => {
	const numberOfLeafathones = 4;
	const combination = [1, 3, 2];
	const leafs = [];
	for (let i = 1; i <= numberOfLeafathones; i++)
		leafs.push(<Leafathon key={i} combination={combination} />);

	return <Wrapper>{leafs}</Wrapper>;
};

const StyledSVGLeaf = styled(SVGLeaf)`
	transform: rotate(90deg);
	height: 2.2rem;
	width: 2.2rem;
	padding: 0px 2px;
	${mq.desktop} {
		height: 3rem;
		width: 3rem;
		padding: 0px 4px;
	}
`;
const Wrapper = styled.div`
	text-align: center;
	overflow: hidden;
	max-height: 2.75rem;

	.leaf1 {
		fill: var(--color-leaf1);
		animation-name: color_change_1;
	}
	.leaf2 {
		fill: var(--color-leaf2);
		animation-name: color_change_2;
	}
	.leaf3 {
		fill: var(--color-leaf3);
		animation-name: color_change_3;
	}
	.leaf1,
	.leaf2,
	.leaf3 {
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
	}
	@keyframes color_change_1 {
		0% {
			fill: var(--color-leaf1);
		}
		50% {
			fill: var(--color-leaf2);
		}
		100% {
			fill: var(--color-leaf3);
		}
	}
	@keyframes color_change_2 {
		0% {
			fill: var(--color-leaf2);
		}
		50% {
			fill: var(--color-leaf3);
		}
		100% {
			fill: var(--color-leaf1);
		}
	}
	@keyframes color_change_3 {
		0% {
			fill: var(--color-leaf3);
		}
		50% {
			fill: var(--color-leaf1);
		}
		100% {
			fill: var(--color-leaf2);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.leaf1,
		.leaf2,
		.leaf3 {
			animation: none;
		}
	}
`;

export default Leafs;
