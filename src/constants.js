export const COLORS = {
	text: {
		light: "hsl(0deg, 0%, 10%)", // white
		dark: "hsl(0deg, 0%, 100%)", // near-black
	},
	background: {
		light: "hsl(0deg, 0%, 100%)", // white
		dark: "hsl(250deg, 70%, 7%)", // navy navy blue
	},
	primary: {
		light: "hsl(340deg, 100%, 40%)", // Pinkish-red
		dark: "hsl(50deg, 100%, 50%)", // Yellow
	},
	secondary: {
		light: "hsl(202deg, 90%, 51%)", // Purplish-blue
		dark: "hsl(190deg, 100%, 40%)", // Cyan
	},
	leaf1: {
		// Ultra Red
		light: "hsl(351deg, 79%, 71%)",
		dark: "	hsl(351deg, 79%, 53%)",
	},
	leaf2: {
		// Middle Blue Purple
		light: "hsl(235deg, 29%, 61%)",
		dark: "hsl(236deg, 29%, 46%)",
	},
	leaf3: {
		// Cyber Grape
		light: "hsl(278deg, 30%, 35%)",
		dark: "hsl(278deg, 30%, 26%)",
	},
	// Grays, scaling from least-noticeable to most-noticeable
	gray300: {
		light: "hsl(0deg, 0%, 70%)",
		dark: "hsl(0deg, 0%, 30%)",
	},
	gray500: {
		light: "hsl(0deg, 0%, 50%)",
		dark: "hsl(0deg, 0%, 50%)",
	},
	gray700: {
		light: "hsl(0deg, 0%, 30%)",
		dark: "hsl(0deg, 0%, 70%)",
	},
};

export const COLOR_MODE_KEY = "color-mode";
export const SOUND_EFFECT_KEY = "sound-effect";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";

export const mq = {
	desktop: `@media (min-width: 1024px)`,
};
