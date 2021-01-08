import React from "react";
import styled from "styled-components";

import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import Leafs from "./Leafs";
import { mq } from "../constants";

const About = () => (
	<AboutSection>
		<div className="name-avatar-container">
			<Avatar />
			<div className="name-container">
				<div className="title">Ashish Saini</div>
				<div className="subtitle">Software Developer</div>
			</div>
		</div>
		<DescriptionArticle>
			Hi👋🏽! I am a freelance software developer.
			I make things which help solve little problems.
		</DescriptionArticle>
		<SocialLinks />
		<Leafs />
	</AboutSection>
);

const DescriptionArticle = styled.article`
	margin: 16px 0;
	font-size: 1em;
	line-height: 1.5rem;
`;

const AboutSection = styled.section`
	.name-avatar-container {
		display: block;
		margin: 32px 0;
		${mq.desktop} {
			display: flex;
		}
	}
	.name-container {
		margin: auto;
		text-align: center;
		${mq.desktop} {
			text-align: inherit;
		}
	}
	.title {
		font-size: 2.5em;
	}
	.subtitle {
		font-weight: 100;
		font-size: 1.5em;
		color: var(--color-gray500);
	}
`;

export default About;