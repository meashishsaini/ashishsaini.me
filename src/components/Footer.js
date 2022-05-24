import React from "react";

import styled from "styled-components";
import { useIntl } from "gatsby-plugin-react-intl";

const Footer = () => {
	const intl = useIntl();

	return (
		<StyledFooter>
			{intl.formatMessage({
				defaultMessage: "Thanks for visiting",
			})}
			<AnimatedHeartWrapper>
				<AnimatedHeart
					href={"https://give.ashishsaini.dev"}
					target="_blank"
					rel="noreferrer"
				>
					{"❤️"}
				</AnimatedHeart>
			</AnimatedHeartWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	flex-shrink: 0;
	text-align: center;
	margin: 1em 0;
	padding-bottom: 0.5em;
`;

const AnimatedHeartWrapper = styled.div`
	padding-left: 0.5em;
	display: inline-flex;
	width: 1.6em;
	height: 1.1em;
	justify-content: center;
	align-items: center;
`;
const AnimatedHeart = styled.a`
	text-decoration: none;
	&:hover {
		animation: beat;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
	}
	@keyframes beat {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
`;
export default Footer;
