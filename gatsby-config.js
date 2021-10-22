const { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } = require("./src/languages");

module.exports = {
	siteMetadata: {
		title: `Ashish Saini`,
		description: `Personal website of Ashish Saini.`,
		author: `@meashishsaini`,
		siteUrl: `https://ashishsaini.me`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-react-intl`,
			options: {
				path: `${__dirname}/src/intl`,
				languages: Object.values(SUPPORTED_LANGUAGES),
				defaultLanguage: DEFAULT_LANGUAGE,
				redirect: true,
				redirectDefaultLanguageToRoot: false,
			},
		},
		{
			resolve: `gatsby-plugin-multi-language-sitemap`,
			options: {
				excludes: ["/*/offline-plugin-app-shell-fallback/", "/*/404*"],
				query: `
					query {
						allSitePage {
						nodes {
							path
						}
						}
						site {
						siteMetadata {
							siteUrl
						}
						}
					}
					`,
				langs: Object.values(SUPPORTED_LANGUAGES),
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ashish Saini`,
				short_name: `Ashish`,
				start_url: `/`,
				background_color: `#f8fdff`,
				theme_color: `#1a237e`,
				display: `standalone`,
				icon: `src/images/profile.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-robots-txt`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
};
