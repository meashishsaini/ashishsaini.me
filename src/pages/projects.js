import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";

const ProjectsPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO title={intl.formatMessage({ defaultMessage: "Projects" })} />
			<Projects wholePage={true} />
		</Layout>
	);
};

export default ProjectsPage;
