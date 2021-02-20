/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { siteData } from "../config";
import { useOnClickOutside } from "../hooks";

type Props = {
	menuOpen: boolean;
};
const StyledMenu = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;
const StyledHamburgerButton = styled.button`
	display: none;

	@media (max-width: 768px) {
		${({ theme }) => theme.mixins.flexCenter};
		position: relative;
		z-index: 10;
		margin-right: -15px;
		padding: 15px;
		border: 0;
		background-color: transparent;
		color: inherit;
		text-transform: none;
		transition-timing-function: linear;
		transition-duration: 0.15s;
		transition-property: opacity, filter;
	}

	.ham-box {
		display: inline-block;
		position: relative;
		width: var(--hamburger-width);
		height: 24px;
	}

	.ham-box-inner {
		position: absolute;
		top: 50%;
		right: 0;
		width: var(--hamburger-width);
		height: 2px;
		border-radius: var(--border-radius);
		background-color: var(--green);
		transition-duration: 0.22s;
		transition-property: transform;
		transition-delay: ${(props: Props) =>
			props.menuOpen ? `0.12s` : `0s`};
		transform: rotate(
			${(props: Props) => (props.menuOpen ? `225deg` : `0deg`)}
		);
		transition-timing-function: cubic-bezier(
			${(props) =>
				props.menuOpen
					? `0.215, 0.61, 0.355, 1`
					: `0.55, 0.055, 0.675, 0.19`}
		);
		&:before,
		&:after {
			content: "";
			display: block;
			position: absolute;
			left: auto;
			right: 0;
			width: var(--hamburger-width);
			height: 2px;
			border-radius: 4px;
			background-color: var(--green);
			transition-timing-function: ease;
			transition-duration: 0.15s;
			transition-property: transform;
		}
		&:before {
			width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
			top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			opacity: ${(props) => (props.menuOpen ? 0 : 1)};
			transition: ${({ menuOpen }) =>
				menuOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
		}
		&:after {
			width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
			bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
			transition: ${({ menuOpen }) =>
				menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
		}
	}
`;

const StyledSidebar = styled.aside`
	display: none;

	@media (max-width: 768px) {
		${({ theme }) => theme.mixins.flexCenter};
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		padding: 50px 10px;
		width: min(75vw, 400px);
		height: 100vh;
		outline: 0;
		background-color: var(--light-navy);
		box-shadow: -10px 0px 30px -15px var(--navy-shadow);
		z-index: 9;
		transform: translateX(
			${(props: Props) => (props.menuOpen ? 0 : 100)}vw
		);
		visibility: ${(props: Props) =>
			props.menuOpen ? "visible" : "hidden"};
		transition: var(--transition);
	}

	nav {
		${({ theme }) => theme.mixins.flexBetween};
		width: 100%;
		flex-direction: column;
		color: var(--lightest-slate);
		font-family: var(--font-mono);
		text-align: center;
	}

	ol {
		padding: 0;
		margin: 0;
		list-style: none;
		width: 100%;

		li {
			position: relative;
			margin: 0 auto 20px;
			counter-increment: item 1;
			font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

			@media (max-width: 600px) {
				margin: 0 auto 10px;
			}

			&:before {
				content: "0" counter(item) ".";
				display: block;
				margin-bottom: 5px;
				color: var(--green);
				font-size: var(--fz-sm);
			}
		}

		a {
			${({ theme }) => theme.mixins.link};
			width: 100%;
			padding: 3px 20px 20px;
		}
	}

	.resume-link {
		${({ theme }) => theme.mixins.bigButton};
		padding: 18px 50px;
		margin: 10% auto 0;
		width: max-content;
	}
`;

// eslint-disable-next-line sonarjs/cognitive-complexity
function Menu(): JSX.Element {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const onResize = () => {
		setMenuOpen(false);
	};
	useEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const wrapperRef = useRef<any>();
	useOnClickOutside(wrapperRef, () => {
		setMenuOpen(false);
	});

	return (
		<StyledMenu>
			<Head>
				<body className={menuOpen ? "blur" : ""} />
			</Head>

			<div ref={wrapperRef}>
				<StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen}>
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar
					menuOpen={menuOpen}
					aria-hidden={!menuOpen}
					tabIndex={menuOpen ? 1 : -1}
				>
					<nav>
						{siteData.navLinks && (
							<ol>
								{siteData.navLinks.map(({ url, name }, i) => (
									<li key={i}>
										<Link href={url}>{name}</Link>
									</li>
								))}
							</ol>
						)}
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	);
}

// eslint-disable-next-line import/no-default-export
export default Menu;
