import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

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
		fluid(maxWidth: 300) {
			...GatsbyImageSharpFluid
		}
	}
}
`;
const Projects = ({ partial }) => {
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
			link="https://ashishsaini.me/projects/ignou-datesheet/index.html"
			title="IGNOU Date-sheet"
			image={data.ignouDateSheetImage.childImageSharp.fluid}
			description="You can download date-sheet for your programme or individual courses. No need to download full date-sheet and searching for your subjects." />,
		<Project
			key={2}
			link="https://github.com/meashishsaini/captcha-solver"
			title="Captcha Solver" image={data.captchaSolver.childImageSharp.fluid}
			description="Train and solve captchas of UP Scholarship website using tensorflow." />,
		<Project
			key={3}
			link="https://github.com/meashishsaini/tmpmail-python"
			title="tmpmail" image={data.python.childImageSharp.fluid}
			description="Create and view temporary mailbox using 1secmail API." />,
		<Project
			key={4}
			link="https://github.com/meashishsaini/bsnl"
			title="BSNL Scripts" image={data.python.childImageSharp.fluid}
			description="Collection of scripts for BSNL broadband connection." />,
		<Project
			key={5}
			link="https://github.com/meashishsaini/ignou-datesheet-extract"
			title="IGNOU date-sheet extractor" image={data.python.childImageSharp.fluid}
			description="Extract the date-sheet from pdf provided by IGNOU in a json file. " />
	];
	return (
		<section>
			{!partial &&
				<article>
					Here are the projects I have worked on and/or currently working ✌🏽:
				</article>}
			<h1>Projects</h1>
			{projects.slice(0, 2)}
			{partial
				? <Link to="/projects">View all →</Link>
				: projects.slice(2, projects.length)
			}

		</section>
	);
};

Projects.defaultProps = {
	partial: true
};

Projects.propTypes = {
	partial: PropTypes.bool
};

export default Projects;