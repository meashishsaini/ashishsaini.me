import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SOUND_EFFECT_KEY } from "../constants";

const soundEffectContext = React.createContext(true);

export const SoundEffectProvider = ({ children }) => {
	const sound = useSoundEffectProvider();
	return (
		<soundEffectContext.Provider value={sound}>
			{children}
		</soundEffectContext.Provider>
	);
};

const useSoundEffectProvider = () => {
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
	return {
		soundEffect,
		setSoundEffect,
	};
};
export const useSoundEffect = () => {
	/**
	 * @type {useSoundEffectProvider}
	 */
	const context = useContext;
	return context(soundEffectContext);
};

SoundEffectProvider.propTypes = {
	children: PropTypes.array.isRequired,
};
