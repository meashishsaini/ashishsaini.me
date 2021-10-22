import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import useSound from "use-sound";
import { useIntl, Link } from "gatsby-plugin-react-intl";

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

const getProjects = intl => {
	return [
		{
			id: "ignou_datesheet",
			link: "https://gc.ashishsaini.me/projects/ignou-datesheet/index.html",
			title: intl.formatMessage({ id: "project_ignou_datesheet_ttl" }),
			image: "ignou.jpg",
			description: intl.formatMessage({
				id: "project_ignou_datesheet_desc",
			}),
		},
		{
			id: "tmpmail",
			link: "https://github.com/meashishsaini/tmpmail-python",
			title: intl.formatMessage({ id: "project_tmpmail_ttl" }),
			image: "python.png",
			description: intl.formatMessage({ id: "project_tmpmail_desc" }),
		},
		{
			id: "captcha",
			link: "https://github.com/meashishsaini/captcha-solver",
			title: intl.formatMessage({ id: "project_captcha_solver_ttl" }),
			image: "captcha-solver.jpg",
			description: intl.formatMessage({
				id: "project_captcha_solver_desc",
			}),
		},
		{
			id: "bsnl",
			link: "https://github.com/meashishsaini/bsnl",
			title: intl.formatMessage({ id: "project_bsnl_scripts_ttl" }),
			image: "python.png",
			description: intl.formatMessage({
				id: "project_bsnl_scripts_desc",
			}),
		},
		{
			id: "datesheet_extract",
			link: "https://github.com/meashishsaini/ignou-datesheet-extract",
			title: intl.formatMessage({ id: "project_ignou_dst_ext_ttl" }),
			image: "python.png",
			description: intl.formatMessage({
				id: "project_ignou_dst_ext_desc",
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
		? intl.formatMessage({ id: "show_less" })
		: intl.formatMessage({ id: "show_all" });

	return (
		<section>
			<h1>{intl.formatMessage({ id: "projects" })}</h1>
			<article>
				{intl.formatMessage({ id: "projects_introduction" })}
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
