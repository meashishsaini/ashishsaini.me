import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";

const ProjectsPage = () => (
	<Layout>
		<SEO title="Project" />
		<Projects wholePage={true} />
	</Layout>
);

export default ProjectsPage;
