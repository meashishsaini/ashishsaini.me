import React from "react";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { useIntl } from "gatsby-plugin-react-intl";

import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Person from "./Schema";

const query = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				defaultTitleTemplate: titleTemplate
				defaultDescription: description
				siteUrl
				defaultImage: image
				defaultAuthor: author
				twitter
			}
		}
	}
`;

const SEO = ({ description, title, titleTemplate, image }) => {
	const { site } = useStaticQuery(query);
	const { pathname } = useLocation();
	const intl = useIntl();
	const locale = intl.locale;

	const {
		defaultTitle,
		defaultTitleTemplate,
		defaultDescription,
		siteUrl,
		defaultImage,
		defaultAuthor,
		twitter,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		titleTemplate: titleTemplate || defaultTitleTemplate,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname || ""}`,
		author: defaultAuthor,
		twitter: twitter,
	};

	return (
		<>
			<Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
				<html lang={locale} />
				<meta name={"description"} content={seo.description} />
				<meta name={"image"} content={seo.image} />
				<Person
					name={seo.author}
					description={seo.description}
					siteUrl={seo.url}
				/>
			</Helmet>
			<Facebook
				desc={seo.description}
				image={seo.image}
				title={seo.title}
				type={"website"}
				url={seo.url}
				locale={locale}
			/>
			<Twitter
				title={seo.title}
				image={seo.image}
				desc={seo.description}
				username={seo.twitter}
			/>
		</>
	);
};

SEO.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	titleTemplate: PropTypes.string,
	image: PropTypes.string,
};

SEO.defaultProps = {
	description: null,
	title: null,
	titleTemplate: null,
	image: null,
};
export default SEO;
