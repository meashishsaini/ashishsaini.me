import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<FullViewPort>
				<Wrapper>
					<Header />
					<main>{children}</main>
					<Footer />
				</Wrapper>
			</FullViewPort>
		</>
	);
};
const FullViewPort = styled.div`
	height: 100vh;
`;
const Wrapper = styled.div`
	display: flex;
	height: 100%;
	min-height: 40rem;
	flex-direction: column;
	padding: 0px 16px 0px;
	main {
		flex: 1 0 auto;
		margin: 0 auto;
		max-width: 36rem;
	}
`;
Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
