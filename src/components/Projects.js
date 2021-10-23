import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import useSound from "use-sound";
// eslint-disable-next-line no-unused-vars
import { useIntl, Link, IntlShape } from "gatsby-plugin-react-intl";

import click_sound from "../sounds/click.mp3";
import { useSoundEffect } from "./SoundEffectHook";
import Project from "./Project";

export const fluidImage = graphql`
	fragment fluidImage on File {
		childImageSharp {
			gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
		}
	}
`;

/**
 * @description Get projects
 * @param {IntlShape} intl
 * @returns
 */
const getProjects = intl => {
	return [
		{
			id: "ignou_datesheet",
			link: "https://gc.ashishsaini.me/projects/ignou-datesheet/index.html",
			title: intl.formatMessage({ defaultMessage: "IGNOU Date-sheet" }),
			image: "ignou.jpg",
			description: intl.formatMessage({
				defaultMessage: `You can download date-sheet for your programme or individual courses. 
				No need to download full date-sheet and searching for your subjects.`,
			}),
		},
		{
			id: "tmpmail",
			link: "https://github.com/meashishsaini/tmpmail-python",
			title: intl.formatMessage({ defaultMessage: "tmpmail" }),
			image: "python.png",
			description: intl.formatMessage({
				defaultMessage:
					"Create and view temporary mailbox using 1secmail API.",
			}),
		},
		{
			id: "captcha",
			link: "https://github.com/meashishsaini/captcha-solver",
			title: intl.formatMessage({ defaultMessage: "Captcha Solver" }),
			image: "captcha-solver.jpg",
			description: intl.formatMessage({
				defaultMessage:
					"Train and solve captchas of UP Scholarship website using tensorflow.",
			}),
		},
		{
			id: "bsnl",
			link: "https://github.com/meashishsaini/bsnl",
			title: intl.formatMessage({ defaultMessage: "BSNL Scripts" }),
			image: "python.png",
			description: intl.formatMessage({
				defaultMessage:
					"Collection of scripts for BSNL broadband connection.",
			}),
		},
		{
			id: "datesheet_extract",
			link: "https://github.com/meashishsaini/ignou-datesheet-extract",
			title: intl.formatMessage({
				defaultMessage: "IGNOU date-sheet extractor",
			}),
			image: "python.png",
			description: intl.formatMessage({
				defaultMessage:
					"Extract the date-sheet from pdf provided by IGNOU in a json file.",
			}),
		},
	];
};

/**
 * @description Get a single image data from nodes.
 * @param {{allFile: {edges: Array.<{node: {ext: string, name: string, childImageSharp: Object}}>}}} all
 * @param {string} name
 * @returns {ext: string, name: string, childImageSharp: Object}}
 */
const getImageNodeByName = (all, name) => {
	return all.allFile.edges.find(
		edge => edge.node.name + edge.node.ext === name
	).node;
};

const Projects = ({ wholePage }) => {
	const [showAll, setShowAll] = React.useState(false);
	const [click] = useSound(click_sound);
	const { soundEffect } = useSoundEffect();
	const intl = useIntl();
	const [isClient, setClient] = React.useState(false);

	React.useEffect(() => setClient(true), []);

	const projects = getProjects(intl);

	const projectImages = useStaticQuery(graphql`
		query projectImages {
			allFile(filter: { dir: { glob: "**/images/projects" } }) {
				edges {
					node {
						name
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: BLURRED
							)
						}
						ext
					}
				}
			}
		}
	`);

	const showMessage = showAll
		? intl.formatMessage({ defaultMessage: "Show less ←" })
		: intl.formatMessage({ defaultMessage: "View all →" });

	return (
		<section>
			<h1>{intl.formatMessage({ defaultMessage: "Projects" })}</h1>
			<article>
				{intl.formatMessage({
					defaultMessage:
						"Here are the projects I have worked on and/or currently working on ✌🏽:",
				})}
			</article>
			{/* Show only two projects by default. */}
			{projects
				.slice(0, showAll || wholePage ? projects.length : 2)
				.map(project => (
					<Project
						key={project.id}
						{...project}
						image={getImageNodeByName(projectImages, project.image)}
					/>
				))}
			{!wholePage &&
				/* Render a link during SSR else render button.*/
				(isClient ? (
					<Button
						onClick={() => {
							if (soundEffect === "on") click();
							setShowAll(showAll => !showAll);
						}}
					>
						{showMessage}
					</Button>
				) : (
					<Link to="/projects">{showMessage}</Link>
				))}
		</section>
	);
};

const Button = styled.button`
	background: var(--color-background) !important;
	border: none;
	padding: 0 !important;
	text-decoration: underline;
	cursor: pointer;
	color: var(--color-secondary);
	font-size: 1em;
`;

Projects.defaultProps = {
	wholePage: false,
};

Projects.propTypes = {
	wholePage: PropTypes.bool,
};

export default Projects;
