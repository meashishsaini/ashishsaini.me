import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto-mono";
import "@fontsource/khula";

const GlobalStyles = createGlobalStyle`
	html {
		font-size: 16px;
	}
	*, *:before, *:after {
			box-sizing: border-box;
			font-family: "Roboto Mono", "khula", monospace;

	}
	body {
			background: var(--color-background);
			color: var(--color-text);
			margin: 0;

	}
	a {
			color: var(--color-secondary);
			}
`;

export default GlobalStyles;