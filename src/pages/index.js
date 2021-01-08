import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects";
import About from "../components/About";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<About />
		<Projects />
	</Layout>
);

export default IndexPage;
