import React from "react";

import useSound from "use-sound";
import { useIntl } from "gatsby-plugin-react-intl";

import { useSoundEffect } from "./SoundEffectHook";
import sound_on from "../sounds/sound_on.mp3";
import sound_off from "../sounds/sound_off.mp3";
import ToggleSwitch from "./ToggleSwitch";

const SoundOnSVG = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#fff"
			width={24}
			height={24}
			xmlSpace="preserve"
			{...props}
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
		</svg>
	);
};
const SoundOffSVG = props => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="#fff"
			width={24}
			height={24}
			xmlSpace="preserve"
			{...props}
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
		</svg>
	);
};
const SoundToggle = () => {
	const intl = useIntl();
	const { soundEffect, setSoundEffect } = useSoundEffect();
	const [soundOn] = useSound(sound_on);
	const [soundOff] = useSound(sound_off);

	if (!soundEffect) {
		return null;
	}

	return (
		<ToggleSwitch
			id="sound-effect"
			LeftSVG={SoundOffSVG}
			RightSVG={SoundOnSVG}
			checked={soundEffect === "on"}
			onChange={ev => {
				let checked = ev.target.checked;
				if (checked) soundOn();
				else soundOff();
				setSoundEffect(checked ? "on" : "off");
			}}
			label={intl.formatMessage({
				defaultMessage: "Turn sound on or off.",
			})}
		/>
	);
};
export default SoundToggle;
