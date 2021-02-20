/* eslint-disable react/no-array-index-key */
import Link from "next/link";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";

import { siteData } from "../config";
import { useScrollDirection } from "../hooks";
import { loaderDelay } from "../utils";
import { IconLogo } from "./icons";
import Menu from "./menu";

type Props = {
	scrollDirection: string;
	scrolledToTop: boolean;
};

const StyledHeader = styled.header`
	${({ theme }) => theme.mixins.flexBetween};
	position: fixed;
	top: 0;
	z-index: 11;
	padding: 0px 50px;
	width: 100%;
	height: var(--nav-height);
	background-color: var(--navy);
	filter: none !important;
	pointer-events: auto !important;
	user-select: auto !important;
	backdrop-filter: blur(10px);
	transition: var(--transition);

	${(props: Props) =>
		props.scrollDirection === "up" &&
		!props.scrolledToTop &&
		css`
			height: var(--nav-scroll-height);
			transform: translateY(0px);
			background-color: rgba(10, 25, 47, 0.85);
			box-shadow: 0 10px 30px -10px var(--navy-shadow);
		`};

	${(props) =>
		props.scrollDirection === "down" &&
		!props.scrolledToTop &&
		css`
			height: var(--nav-scroll-height);
			transform: translateY(calc(var(--nav-scroll-height) * -1));
			box-shadow: 0 10px 30px -10px var(--navy-shadow);
		`};

	@media (max-width: 1080px) {
		padding: 0 40px;
	}
	@media (max-width: 768px) {
		padding: 0 25px;
	}
`;

const StyledNav = styled.nav`
	${({ theme }) => theme.mixins.flexBetween};
	position: relative;
	width: 100%;
	color: var(--lightest-slate);
	font-family: var(--font-mono);
	counter-reset: item 0;
	z-index: 12;

	.logo {
		${({ theme }) => theme.mixins.flexCenter};

		a {
			color: var(--green);
			width: 42px;
			height: 42px;

			&:hover,
			&:focus {
				svg {
					fill: var(--green-tint);
				}
			}

			svg {
				fill: none;
				transition: var(--transition);
				user-select: none;
			}
		}
	}
`;

const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}

	ol {
		${({ theme }) => theme.mixins.flexBetween};
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin: 0 5px;
			position: relative;
			counter-increment: item 1;
			font-size: var(--fz-xs);

			a {
				padding: 10px;

				&:before {
					content: "0" counter(item) ".";
					margin-right: 5px;
					color: var(--green);
					font-size: var(--fz-xxs);
					text-align: right;
				}
			}
		}
	}

	.resume-button {
		${({ theme }) => theme.mixins.smallButton};
		margin-left: 15px;
		font-size: var(--fz-xs);
	}
`;

function Nav({ isHome }: { isHome: boolean }): JSX.Element {
	const [isMounted, setIsMounted] = useState(!isHome);
	const scrollDirection = useScrollDirection();
	const [scrolledToTop, setScrolledToTop] = useState(true);

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50);
	};

	useEffect(() => {
		const time = setTimeout(() => {
			setIsMounted(true);
		}, 100);

		window.addEventListener("scroll", handleScroll);

		return () => {
			clearTimeout(time);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const timeout = isHome ? loaderDelay : 0;
	const fadeClass = isHome ? "fade" : "";
	const fadeDownClass = isHome ? "fadedown" : "";

	return (
		<StyledHeader
			scrollDirection={scrollDirection}
			scrolledToTop={scrolledToTop}
		>
			<StyledNav>
				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition classNames={fadeClass} timeout={timeout}>
							<div className="logo" tabIndex={-1}>
								<Link href="/">
									<a aria-label="home">
										<IconLogo />
									</a>
								</Link>
							</div>
						</CSSTransition>
					)}
				</TransitionGroup>

				<StyledLinks>
					<ol>
						<TransitionGroup component={null}>
							{isMounted &&
								siteData.navLinks?.map(({ url, name }, i) => (
									<CSSTransition
										key={i}
										classNames={fadeDownClass}
										timeout={timeout}
									>
										<li
											key={i}
											style={{
												transitionDelay: `${
													isHome ? i * 100 : 0
												}ms`,
											}}
										>
											<Link href={url}>
												<a>{name}</a>
											</Link>
										</li>
									</CSSTransition>
								))}
						</TransitionGroup>
					</ol>
				</StyledLinks>

				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition classNames={fadeClass} timeout={timeout}>
							<Menu />
						</CSSTransition>
					)}
				</TransitionGroup>
			</StyledNav>
		</StyledHeader>
	);
}

// eslint-disable-next-line import/no-default-export
export default Nav;
