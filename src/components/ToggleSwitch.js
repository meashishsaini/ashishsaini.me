import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SwitchToggle = ({ LeftSVG, RightSVG, onChange, checked, label, id }) => {

	return (
		<InputStyled className="ic-Super-toggle--on-off">
			<input id={id}
				type="checkbox"
				checked={checked}
				className="ic-Super-toggle__input"
				onChange={ev => {
					onChange(ev);
				}}
			/>
			<label className="ic-Super-toggle__label" htmlFor={id}>
				<div className="ic-Super-toggle__screenreader">
					{label}
				</div>
				<div
					className="ic-Super-toggle__disabled-msg"
					data-checked="On"
					data-unchecked="Off"
					aria-hidden="true"
				></div>
				<div className="ic-Super-toggle-switch" aria-hidden="true">
					<div className="ic-Super-toggle-option-LEFT" aria-hidden="true">
						<LeftSVG className="ic-Super-toggle__svg" />
					</div>
					<div
						className="ic-Super-toggle-option-RIGHT"
						aria-hidden="true"
					>
						<RightSVG className="ic-Super-toggle__svg" />
					</div>
				</div >
			</label>
		</InputStyled >
	);
};

// Modified from https://codepen.io/personable/pen/ZGKjwe
const InputStyled = styled.div`
* {
	box-sizing: content-box;
}
.ic-Super-toggle__label {
	box-sizing: border-box;
	margin: 0;
	user-select: none;
}

.ic-Super-toggle__input {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
}
.ic-Super-toggle__input:checked ~ label {
	.ic-Super-toggle-switch:after {
		transform: translate3d(100%, 0, 0);
	}
	.ic-Super-toggle__disabled-msg:before {
		content: attr(data-checked);
	}
}

.ic-Super-toggle__input[disabled] ~ label {
	.ic-Super-toggle__disabled-msg {
		display: block;
	}
	.ic-Super-toggle-switch,  [class^="ic-Super-toggle-option-"]{
		display: none;
	}
}

.ic-Super-toggle-switch {
	transition: background 0.1s, border-color 0.1s;
	display: inline-block;
	position: relative;
	line-height: 1;
	display: flex;
	align-items: center;
	background-clip: padding-box;
}
.ic-Super-toggle-switch::after {
	transition: all 0.1s ease-in-out;
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	transform: translate3d(0, 0, 0);
	border-radius: 100%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: 1.25em;
}

.ic-Super-toggle__disabled-msg {
	display: none;
}
.ic-Super-toggle__disabled-msg:before {
	content: attr(data-unchecked);
	font-style: italic;
	opacity: 0.8;
}

[class^="ic-Super-toggle-option-"] {
	transition: opacity 0.2s, transform 0.2s;
	flex: 0 0 50%;
	text-align: center;
	position: relative;
	z-index: 1;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
	speak: none;
	box-sizing: border-box;
}

.ic-Super-toggle__screenreader {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
}

&.ic-Super-toggle--on-off {
	display: inline-block;
	vertical-align: middle;
	position: relative;
}
&.ic-Super-toggle--on-off
.ic-Super-toggle__input:focus ~ label
.ic-Super-toggle-switch::after {
	box-shadow: inset 0 0 0 1px white, inset 0 0 0 3px var(--color-gray300), 0 3px 6px rgba(0, 0, 0, 0.3);
}
&.ic-Super-toggle--on-off
.ic-Super-toggle__input:checked
~ label
.ic-Super-toggle-switch {
	background: var(--color-gray700);
	border-color: var(--color-gray700);
}
&.ic-Super-toggle--on-off
.ic-Super-toggle__input:checked
~ label
.ic-Super-toggle-option-LEFT {
	color: white;
	opacity: 1;
	.ic-Super-toggle__svg {
		fill: white;
	}
}

&.ic-Super-toggle--on-off
.ic-Super-toggle__input:checked
~ label
.ic-Super-toggle-option-RIGHT {
	color: white;
	opacity: 0;
	.ic-Super-toggle__svg {
	fill: white;
}
}

&.ic-Super-toggle--on-off
.ic-Super-toggle__input:checked:focus
~ label
.ic-Super-toggle-switch::after {
	box-shadow: inset 0 0 0 1px white, inset 0 0 0 3px var(--color-gray300), 0 3px 6px rgba(0, 0, 0, 0.3);
}
&.ic-Super-toggle--on-off .ic-Super-toggle-switch {
	width: 3em;
	height: 1.5em;
	background: var(--color-gray300);
	border: 2px solid var(--color-gray300);
	border-radius: 1.2em;
}

&.ic-Super-toggle--on-off .ic-Super-toggle-switch:after {
	background-color: var(--color-primary);
	width: 1.5em;
	height: 1.5em;
}
&.ic-Super-toggle--on-off .ic-Super-toggle-option-LEFT {
	color: white;
}
&.ic-Super-toggle--on-off
.ic-Super-toggle-option-LEFT
.ic-Super-toggle__svg {
	  fill: white;
}
&.ic-Super-toggle--on-off
.ic-Super-toggle-option-RIGHT
.ic-Super-toggle__svg {
	color: white;
}
&.ic-Super-toggle--on-off
.ic-Super-toggle-option-RIGHT
.ic-Super-toggle__svg {
	fill: white;
}
&.ic-Super-toggle--on-off .ic-Super-toggle__svg {
	padding-top:2px;
	width: 1em;
	height: 1em;
}
&.ic-Super-toggle--on-off [class^="ic-Super-toggle-option-"] {
	transition-delay: 0.1s;
}
&.ic-Super-toggle--on-off .ic-Super-toggle-option-LEFT {
	opacity: 0;
}
&.ic-Super-toggle--on-off .ic-Super-toggle-option-RIGHT {
	opacity: 1;
}
`;

SwitchToggle.propTypes = {
	LeftSVG: PropTypes.func.isRequired,
	RightSVG: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};
export default SwitchToggle;