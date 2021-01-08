import React from "react";
import PropTypes from "prop-types";

import { SOUND_EFFECT_KEY } from "../constants";

export const SoundContext = React.createContext(true);

export const SoundProvider = ({ children }) => {
	const [soundEffect, rawSetSoundEffect] = React.useState(undefined);

	React.useEffect(() => {
		const persistedPreference = localStorage.getItem(SOUND_EFFECT_KEY);
		let soundEffect = "on";
		const hasUsedToggle = typeof persistedPreference === "string";

		if (hasUsedToggle) {
			soundEffect = persistedPreference;
		}
		rawSetSoundEffect(soundEffect);
	});

	function setSoundEffect(newValue) {
		localStorage.setItem(SOUND_EFFECT_KEY, newValue);
		rawSetSoundEffect(newValue);
	}
	return (
		<SoundContext.Provider value={{ soundEffect, setSoundEffect }}>
			{children}
		</SoundContext.Provider>
	);
};

SoundProvider.propTypes = {
	children: PropTypes.array.isRequired
};