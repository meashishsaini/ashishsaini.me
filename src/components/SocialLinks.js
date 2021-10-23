import React from "react";
import styled from "styled-components";

const Social = {
	twitter: "https://www.twitter.com/meAshishSaini",
	github: "https://www.github.com/meAshishSaini",
	linkedin: "https://www.linkedin.com/in/meAshishSaini",
	"yo@ashishsaini.me": "mailto:yo@ashishsaini.me",
};

const SocialLinks = () => {
	return (
		<Wrapper>
			{Object.entries(Social).map(([name, link]) => (
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
