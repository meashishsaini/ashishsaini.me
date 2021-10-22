import React from "react";
import { IntlContextConsumer, Link } from "gatsby-plugin-react-intl";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import { SUPPORTED_LANGUAGES, SUPPORTED_LANGUAGES_NAME } from "../languages";

// Adapted from https://github.com/wiziple/gatsby-plugin-react-intl/issues/42#issuecomment-673018579
const Language = () => {
	const supportedLocaleRegexGroups =
		Object.keys(SUPPORTED_LANGUAGES).join(`|`);

	return (
		<div>
			<Location>
				{({ location }) => (
					<IntlContextConsumer>
						{({ languages, language: currentLocale }) =>
							languages.map(
								language =>
									currentLocale !== language && (
										<StyledLink
											key={language}
											language={language}
											to={`${location.pathname.replace(
												new RegExp(
													`^/(${supportedLocaleRegexGroups})`
												),
												``
											)}`}
										>
											{SUPPORTED_LANGUAGES_NAME[language]}
										</StyledLink>
									)
							)
						}
					</IntlContextConsumer>
				)}
			</Location>
		</div>
	);
};

const StyledLink = styled(Link)`
	margin: 8px;
`;

Language.propTypes = {
	location: PropTypes.object,
};

export default Language;
