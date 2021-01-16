import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import useSound from "use-sound";
import { useIntl, Link } from "gatsby-plugin-intl";

import click_sound from "../sounds/click.mp3";

const Project = ({ title, image, description, link }) => {
	return (
		<AnchorStyle
			href={link}
			target="_blank"
			rel="noreferrer">
			<ProjectStyle>
				<StyledImg fluid={image} />
				<div className="project-details-container">
					<div className="title">
						{title}
					</div>
					<div className="description">
						{description}
					</div>
				</div>
			</ProjectStyle>
		</AnchorStyle>
	);
};

const StyledImg = styled(Img)`
	min-width: 6rem;
	min-height: 6rem;
	border-radius: 8px;
	margin: 16px;
`;

const AnchorStyle = styled.a`
	text-decoration: none;
`;

const ProjectStyle = styled.div`
	border: solid 1px var(--color-text);
	border-radius: 4px;
	height: 8rem;
	display: flex;
	margin: 16px 0px;
	.project-details-container {
		margin: 8px;
		overflow: auto;
	}
	.title{
		margin: 8px 0;
		color: var(--color-text);
	}
	.description{
		font-size: 0.8em;
		color: var(--color-gray700);
	}
`;

Project.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};

export const fluidImage = graphql`
fragment fluidImage on File {
	childImageSharp {
		fluid(maxWidth: 100) {
			...GatsbyImageSharpFluid
		}
	}
}
`;
const Projects = ({ wholePage }) => {
	const [showAll, setShowAll] = React.useState(false);
	const [click] = useSound(click_sound);
	const intl = useIntl();
	const [isClient, setClient] = React.useState(false);

	React.useEffect(() => setClient(true), []);

	const data = useStaticQuery(graphql`
		{
			ignouDateSheetImage: file(relativePath: {eq: "projects/ignou.jpg"}) {
				...fluidImage
			}
			captchaSolver: file(relativePath: {eq: "projects/captcha-solver.jpg"}) {
				...fluidImage
			}
			python: file(relativePath: {eq: "projects/python.png"}) {
				...fluidImage
			}
		}
	`);
	const projects = [
		<Project
			key={1}
			link="https://gc.ashishsaini.me/projects/ignou-datesheet/index.html"
			title={intl.formatMessage({ id: "project_ignou_datesheet_ttl" })}
			image={data.ignouDateSheetImage.childImageSharp.fluid}
			description={intl.formatMessage({ id: "project_ignou_datesheet_desc" })} />,
		<Project
			key={2}
			link="https://github.com/meashishsaini/tmpmail-python"
			title={intl.formatMessage({ id: "project_tmpmail_ttl" })}
			image={data.python.childImageSharp.fluid}
			description={intl.formatMessage({ id: "project_tmpmail_desc" })} />,
		<Project
			key={3}
			link="https://github.com/meashishsaini/captcha-solver"
			title={intl.formatMessage({ id: "project_captcha_solver_ttl" })}
			image={data.captchaSolver.childImageSharp.fluid}
			description={intl.formatMessage({ id: "project_captcha_solver_desc" })} />,
		<Project
			key={4}
			link="https://github.com/meashishsaini/bsnl"
			title={intl.formatMessage({ id: "project_bsnl_scripts_ttl" })}
			image={data.python.childImageSharp.fluid}
			description={intl.formatMessage({ id: "project_bsnl_scripts_desc" })} />,
		<Project
			key={5}
			link="https://github.com/meashishsaini/ignou-datesheet-extract"
			title={intl.formatMessage({ id: "project_ignou_dst_ext_ttl" })}
			image={data.python.childImageSharp.fluid}
			description={intl.formatMessage({ id: "project_ignou_dst_ext_desc" })} />
	];
	const showMessage = showAll ? intl.formatMessage({ id: "show_less" }) : intl.formatMessage({ id: "show_all" });

	return (
		<section>
			<h1>{intl.formatMessage({ id: "projects" })}</h1>
			<article>
				{intl.formatMessage({ id: "projects_introduction" })}
			</article>
			{/* Show only two projects by default. */}
			{projects.slice(0, 2)}
			{(showAll || wholePage) &&
				projects.slice(2, projects.length)
			}
			{!wholePage &&
				/* Render a link during SSR else render button.*/
				(isClient ?
					<Button
						onClick={() => {
							click();
							setShowAll((showAll) => !showAll);
						}}>
						{showMessage}
					</Button>
					:
					<Link to="/projects">
						{showMessage}
					</Link>)
			}
		</section>
	);
};

const Button = styled.button`
	background: var(--color-background)!important;
	border: none;
	padding: 0!important;
	text-decoration: underline;
	cursor: pointer;
	color: var(--color-secondary);
	font-size: 1em;
`;

Projects.defaultProps = {
	wholePage: false
};

Projects.propTypes = {
	wholePage: PropTypes.bool
};

export default Projects;