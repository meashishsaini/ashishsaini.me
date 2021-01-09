import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO title={intl.formatMessage({ id: "404_not_found" })} />
			<h1>{intl.formatMessage({ id: "404_not_found" })}</h1>
			<p>{intl.formatMessage({ id: "404_description" })}</p>
		</Layout>
	);
};

export default NotFoundPage;
