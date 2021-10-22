import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-react-intl";

const Social = {
	twitter: "https://www.twitter.com/meAshishSaini",
	github: "https://www.github.com/meAshishSaini",
	linkedin: "https://www.linkedin.com/in/meAshishSaini",
	"yo@ashishsaini.me": "mailto:yo@ashishsaini.me",
};

const SocialLinks = () => {
	const links = [];
	const intl = useIntl();

	for (let key in Social) {
		links.push(
			<a key={key} target="_blank" rel="noreferrer" href={Social[key]}>
				{intl.formatMessage({ id: key })}
			</a>
		);
	}
	return <Wrapper>{links}</Wrapper>;
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
