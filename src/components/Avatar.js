import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Avatar = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(
				relativePath: { eq: "avatar.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	if (!data?.placeholderImage?.childImageSharp?.fluid) {
		return <div>Picture not found</div>;
	}

	return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const StyledImg = styled(Img)`
	border-radius: 50%;
	width: 16rem;
	height: 16rem;
	margin: 0 auto;
`;

export default Avatar;
