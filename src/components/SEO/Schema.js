import React from "react";

import PropTypes from "prop-types";

const Person = ({ name, siteUrl, description }) => {
	return (
		<script type="application/ld+json">
			{`{
					"@context": "https://schema.org",
					"@type": "Person",
					"name": ${name},
					"url": ${siteUrl},
					"description": ${description},
					"jobTitle": "Software Developer",
					"email": "mailto:hello@ashishsaini.me",
					"image": "https://ashishsaini.me/avatar.jpg",
					"sameAs": [
						"https://www.facebook.com/meAshishSaini",
						"https://instagram.com/meashishsaini",
						"https://twitter.com/meashishsaini",
						"https://www.linkedin.com/in/meashishsaini"
						]
					}
				`}
		</script>
	);
};

Person.propTypes = {
	name: PropTypes.string.isRequired,
	siteUrl: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
export default Person;
