/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { loaderDelay } from "../utils";

type Props = {
	orientation: string;
};
const StyledSideElement = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0;
	left: ${(props: Props) => (props.orientation === "left" ? "40px" : "auto")};
	right: ${(props: Props) =>
		props.orientation === "left" ? "auto" : "40px"};
	z-index: 10;
	color: var(--light-slate);

	@media (max-width: 1080px) {
		left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
		right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

function Side({
	children,
	isHome,
	orientation,
}: {
	isHome: boolean;
	orientation: string;
	children: React.ReactNode;
}): JSX.Element {
	const [isMounted, setIsMounted] = useState(!isHome);

	useEffect(() => {
		if (!isHome) {
			return;
		}
		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, loaderDelay);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<StyledSideElement orientation={orientation}>
			<TransitionGroup component={null}>
				{isMounted && (
					<CSSTransition
						classNames={isHome ? "fade" : ""}
						timeout={isHome ? loaderDelay : 0}
					>
						{children}
					</CSSTransition>
				)}
			</TransitionGroup>
		</StyledSideElement>
	);
}

// eslint-disable-next-line import/no-default-export
export default Side;
