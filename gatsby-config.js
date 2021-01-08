module.exports = {
	siteMetadata: {
		title: `Ashish Saini`,
		description: `Portfolio of Ashish Saini.`,
		author: `@meashishsaini`,
	},
	plugins: [
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
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#f8fdff`,
				theme_color: `#1a237e`,
				display: `standalone`,
				icon: `src/images/profile.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
