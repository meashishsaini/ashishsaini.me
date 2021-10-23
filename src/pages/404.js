import React from "react";

import { useIntl } from "gatsby-plugin-react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => {
	const intl = useIntl();

	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ defaultMessage: "404: Not Found" })}
			/>
			<h1>{intl.formatMessage({ defaultMessage: "404: Not Found" })}</h1>
			<p>
				{intl.formatMessage({
					defaultMessage:
						"You just hit a route that doesn't exist... the sadness.",
				})}
			</p>
		</Layout>
	);
};

export default NotFoundPage;
