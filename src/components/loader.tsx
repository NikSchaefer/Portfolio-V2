/* eslint-disable react-hooks/exhaustive-deps */
import { IconLoader } from "@components/icons";
import anime from "animejs";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
	isMounted: boolean;
};

const StyledLoader = styled.div`
	${({ theme }) => theme.mixins.flexCenter};
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--dark-navy);
	z-index: 99;

	.logo-wrapper {
		width: max-content;
		max-width: 100px;
		transition: var(--transition);
		opacity: ${(props: Props) => (props.isMounted ? 1 : 0)};
		svg {
			display: block;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			fill: none;
			user-select: none;
			#B {
				opacity: 0;
			}
		}
	}
`;

function Loader({ finishLoading }: { finishLoading: Function }): JSX.Element {
	const animate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		});

		loader
			.add({
				targets: "#logo path",
				delay: 300,
				duration: 1200,
				easing: "easeInOutQuart",
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: "#logo",
				delay: 100,
				duration: 300,
				easing: "easeInOutQuart",
				opacity: 0,
				scale: 0.1,
			});
	};

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 10);
		animate();
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<StyledLoader className="loader" isMounted={isMounted}>
			<div className="logo-wrapper">
				<IconLoader />
			</div>
		</StyledLoader>
	);
}

// eslint-disable-next-line import/no-default-export
export default Loader;
