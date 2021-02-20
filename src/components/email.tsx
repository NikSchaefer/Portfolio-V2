import React from "react";
import styled from "styled-components";

import { siteData } from "../config";

import { Side } from ".";

const StyledLinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:after {
		content: "";
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: var(--light-slate);
	}

	a {
		margin: 20px auto;
		padding: 10px;
		font-family: var(--font-mono);
		font-size: var(--fz-xxs);
		letter-spacing: 0.1em;
		writing-mode: vertical-rl;

		&:hover,
		&:focus {
			transform: translateY(-3px);
		}
	}
`;

function Email({ isHome }: { isHome: boolean }): JSX.Element {
	return (
		<Side isHome={isHome} orientation="right">
			<StyledLinkWrapper>
				<a href={`mailto:${String(siteData.email)}`}>
					{siteData.email}
				</a>
			</StyledLinkWrapper>
		</Side>
	);
}

// eslint-disable-next-line import/no-default-export
export default Email;
