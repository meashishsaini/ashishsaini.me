import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<FullViewPort>
				<Wrapper>
					<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
					<main>{children}</main>
					<footer>
						<div>Thanks for visiting.</div>
						<div>Made in India with ❤️</div>
					</footer>

				</Wrapper >
			</FullViewPort>
		</>
	);
};
const FullViewPort = styled.div`
	height: 100vh;
`;
const Wrapper = styled.div`
	display: flex;
	height:100%;
	min-height:40rem;
	flex-direction: column;
	padding: 0px 16px 0px;
	main {
		flex: 1 0 auto;
		margin: 0 auto;
		max-width: 36rem;
		
	}
	footer {
		flex-shrink: 0;
		text-align: center;
		margin: 16px 0;
		padding-bottom: 8px;
	}
`;
Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
