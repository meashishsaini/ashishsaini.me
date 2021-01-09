import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";
import About from "../components/About";

const IndexPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title="Home"
				lang={intl.locale}
			/>
			<About />
			<Projects />
		</Layout>
	);
};

export default IndexPage;
