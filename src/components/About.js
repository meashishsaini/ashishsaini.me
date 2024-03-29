import React from "react";

import styled from "styled-components";
import { useIntl } from "gatsby-plugin-react-intl";

import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import Leafs from "./Leafs";
import { mq } from "../constants";

const About = () => {
	const intl = useIntl();

	return (
		<AboutSection>
			<div className="name-avatar-container">
				<Avatar />
				<div className="name-container">
					<h1 className="title">
						{intl.formatMessage({ defaultMessage: "Ashish Saini" })}
					</h1>
					<h2 className="subtitle">
						{intl.formatMessage({
							defaultMessage: "Software Developer",
						})}
					</h2>
				</div>
			</div>
			<DescriptionArticle>
				{intl.formatMessage({
					defaultMessage: `Hi👋🏽! I am a software developer. 
						I make tiny things solving tiny problems.`,
				})}
			</DescriptionArticle>
			<SocialLinks />
			<Leafs />
		</AboutSection>
	);
};

const DescriptionArticle = styled.article`
	margin: 16px 0;
	font-size: 1em;
	line-height: 1.5rem;
	text-align: justify;
`;

const AboutSection = styled.section`
	.name-avatar-container {
		display: block;
		margin: 32px 0;
		${mq.desktop} {
			display: flex;
			justify-content: center;
		}
	}
	.name-container {
		margin: auto;
		text-align: center;
		${mq.desktop} {
			margin: auto 0px auto 16px;
			text-align: inherit;
		}
	}
	.title {
		font-size: 2.5em;
		margin-top: 4px;
		margin-bottom: 4px;
	}
	.subtitle {
		font-weight: 100;
		font-size: 1.5em;
		color: var(--color-gray500);
		margin-top: 4px;
		margin-bottom: 4px;
	}
`;

export default About;
