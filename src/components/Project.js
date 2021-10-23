import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Project = ({ title, image, description, link }) => {
	return (
		<AnchorStyle href={link} target="_blank" rel="noreferrer">
			<ProjectStyle>
				<StyledImg image={getImage(image)} alt={title} />
				<div className="project-details-container">
					<div className="title">{title}</div>
					<div className="description">{description}</div>
				</div>
			</ProjectStyle>
		</AnchorStyle>
	);
};

const StyledImg = styled(GatsbyImage)`
	max-width: 6rem;
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
	line-height: 1.2em;
	.project-details-container {
		margin: 16px;
		margin-left: 0px;
		display: flex;
		flex-direction: column;
	}
	.title {
		margin-bottom: 6px;
		color: var(--color-text);
	}
	.description {
		font-size: 0.8em;
		color: var(--color-gray700);
		overflow: auto;
	}
`;

Project.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Project;
