import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Projects from "../components/Projects";

const ProjectsPage = () => (
	<Layout>
		<SEO title="Project" />
		<Projects partial={false} />
	</Layout>
);

export default ProjectsPage;
