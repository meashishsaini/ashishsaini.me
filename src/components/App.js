import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "./ThemeContext";
import { SoundProvider } from "./SoundContext";
import GlobalStyles from "./GlobalStyles";

const App = ({ children }) => {
	return (
		<ThemeProvider>
			<SoundProvider>
				<GlobalStyles />
				{children}
			</SoundProvider>
		</ThemeProvider>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;