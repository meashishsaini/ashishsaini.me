import React from "react";
import { IntlContextConsumer, Link } from "gatsby-plugin-intl";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Location } from '@reach/router';

const languageName = {
	en: "English",
	hi: "हिन्दी",
};
// Adapted from https://github.com/wiziple/gatsby-plugin-intl/issues/42#issuecomment-673018579
const Language = () => {
	const supportedLocaleRegexGroups = Object.keys(languageName).join(`|`);

	return (
		<div>
			<Location>
				{({ location }) =>
					<IntlContextConsumer>
						{({ languages, language: currentLocale }) =>
							languages.map(language => (
								(currentLocale !== language &&
									<StyledLink
										key={language}
										language={language}
										lang={language}
										to={`${location.pathname.replace(new RegExp(`^/(${supportedLocaleRegexGroups})`), ``)}`}
									>
										{languageName[language]}
									</StyledLink>)
							))
						}
					</IntlContextConsumer>
				}
			</Location>
		</div>
	);
};

const StyledLink = styled(Link)`
	margin: 8px;
`;

Language.propTypes = {
	location: PropTypes.object
};

export default Language;