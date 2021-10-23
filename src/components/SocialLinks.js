import React from "react";

import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { useIntl, IntlShape } from "gatsby-plugin-react-intl";

/**
 * @description Get social links object
 * @param {IntlShape} intl
 * @returns {Object.<string, string>}
 */
const social = intl => ({
	[intl.formatMessage({ defaultMessage: "twitter" })]:
		"https://www.twitter.com/meAshishSaini",
	[intl.formatMessage({ defaultMessage: "github" })]:
		"https://www.github.com/meAshishSaini",
	[intl.formatMessage({ defaultMessage: "linkedin" })]:
		"https://www.linkedin.com/in/meAshishSaini",
	[intl.formatMessage({ defaultMessage: "yo@ashishsaini.me" })]:
		"mailto:yo@ashishsaini.me",
});

const SocialLinks = () => {
	const intl = useIntl();

	return (
		<Wrapper>
			{Object.entries(social(intl)).map(([name, link]) => (
				<a key={name} target="_blank" rel="noreferrer" href={link}>
					{name}
				</a>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	font-size: 1em;
	text-align: center;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin: 16px 0;
	a {
		padding: 8px;
	}
`;
export default SocialLinks;
