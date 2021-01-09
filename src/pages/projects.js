import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";

const ProjectsPage = () => {
	const intl = useIntl();
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: "projects" })}
				lang={intl.locale}
			/>
			<Projects wholePage={true} />
		</Layout>
	);
};

export default ProjectsPage;
