import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "./ThemeContext";
import { SoundEffectProvider } from "./SoundEffectHook";
import GlobalStyles from "./GlobalStyles";

const App = ({ children }) => {
	return (
		<ThemeProvider>
			<SoundEffectProvider>
				<GlobalStyles />
				{children}
			</SoundEffectProvider>
		</ThemeProvider>
	);
};

App.propTypes = {
	children: PropTypes.element,
};

export default App;
