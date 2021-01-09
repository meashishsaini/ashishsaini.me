import React from "react";
import styled from "styled-components";

import DarkToggle from "./DarkToggle";
import SoundToggle from "./SoundToggle";
import Language from "./Language";

const Header = () => (
	<StyledHeader>
		<ToggleWrapper>
			<DarkToggle />
		</ToggleWrapper>
		<ToggleWrapper>
			<SoundToggle />
		</ToggleWrapper>
		<ToggleWrapper>
			<Language />
		</ToggleWrapper>
	</StyledHeader>
);

const ToggleWrapper = styled.div`
	margin: auto 8px;
`;

const StyledHeader = styled.header`
	display: flex;
	flex: 1 0 auto;
	height: 4rem;
	max-height: 4rem;
	margin: auto 0px auto auto;
`;

export default Header;
