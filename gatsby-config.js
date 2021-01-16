const supportedLanguages = [`en`, `hi`];
const supportedLocaleRegexGroups = supportedLanguages.join(`|`);
const matchLocaleRegex = new RegExp(`^/(${supportedLocaleRegexGroups})`);

module.exports = {
	siteMetadata: {
		title: `Ashish Saini`,
		description: `Personal website of Ashish Saini.`,
		author: `@meashishsaini`,
		siteUrl: `https://ashishsaini.me`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				// exclude: ["/en/*", "/en/", "/hi/*", "/hi/"],
				exclude: [
					"/*/offline-plugin-app-shell-fallback/",
					"/*/404*"],
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						nodes {
							path
						}
					}
				}
				`,
				serialize: ({ site, allSitePage }) => allSitePage.nodes
					.map(node => {
						return {
							url: `${site.siteMetadata.siteUrl}${node.path}`,
							changefreq: 'daily',
							priority: 0.7,
							links: supportedLanguages.map(language => {
								return { lang: language, url: `${site.siteMetadata.siteUrl}/${language}${node.path.replace(matchLocaleRegex, ``)}` };
							}).concat({ lang: 'x-default', url: `${site.siteMetadata.siteUrl}${node.path.replace(matchLocaleRegex, ``)}` })
						};
					})
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
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
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: supportedLanguages,
				// language file path
				defaultLanguage: `en`,
				// option to redirect to `/en` when connecting `/`
				// redirect: true,
			},
		},
	],
};
