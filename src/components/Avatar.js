import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-react-intl";

const Avatar = () => {
	const intl = useIntl();
	const data = useStaticQuery(graphql`
		{
			avatar: file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						width: 300
						layout: CONSTRAINED
						placeholder: BLURRED
					)
				}
			}
		}
	`);

	return (
		<StyledImg
			alt={intl.formatMessage({ id: "avatar_alt" })}
			image={getImage(data.avatar)}
		/>
	);
};

const StyledImg = styled(GatsbyImage)`
	border-radius: 50%;
	width: 16rem;
	height: 16rem;
	margin: 0 auto;
`;

export default Avatar;
