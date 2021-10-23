import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";
import About from "../components/About";

const IndexPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ defaultMessage: "Ashish Saini" })}
				titleTemplate={"%s"}
				description={intl.formatMessage({
					defaultMessage:
						"Personal website of Ashish Saini and his contact info.",
				})}
			/>
			<About />
			<Projects />
		</Layout>
	);
};

export default IndexPage;
