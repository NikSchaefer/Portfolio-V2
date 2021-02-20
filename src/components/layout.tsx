/* eslint-disable @typescript-eslint/no-require-imports */
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../styles";
import Nav from "./nav";

import { Loader, Social, Email, Footer } from ".";

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]');
}

const SkipToContentLink = styled.a`
	position: absolute;
	top: auto;
	left: -999px;
	width: 1px;
	height: 1px;
	overflow: hidden;
	z-index: -99;
	&:focus,
	&:active {
		top: 0;
		left: 0;
		width: auto;
		height: auto;
		padding: 18px 23px;
		outline: 0;
		border-radius: var(--border-radius);
		background-color: var(--light-navy);
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-sm);
		line-height: 1;
		text-decoration: none;
		cursor: pointer;
		overflow: auto;
		transition: var(--transition);
		z-index: 99;
	}
`;
const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;
// Sets target="_blank" rel="noopener noreferrer" on external links
const handleExternalLinks = () => {
	const allLinks = [...document.querySelectorAll("a")];
	if (allLinks.length > 0) {
		allLinks.forEach((link) => {
			if (link.host !== window.location.host) {
				link.setAttribute("rel", "noopener noreferrer");
				link.setAttribute("target", "_blank");
			}
		});
	}
};

// eslint-disable-next-line sonarjs/cognitive-complexity
function Layout({ children }: { children: React.ReactNode }): JSX.Element {
	const router = useRouter();
	const isHome = router.pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);
	useEffect(() => {
		handleExternalLinks();
	}, []);

	return (
		<div id="root">
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<SkipToContentLink href="#content">
					Skip to Content
				</SkipToContentLink>

				{isLoading && isHome ? (
					<Loader
						finishLoading={() => {
							setIsLoading(false);
						}}
					/>
				) : (
					<StyledContent>
						<Nav isHome={isHome} />
						<Social isHome={isHome} />
						<Email isHome={isHome} />

						<div id="content">
							{children}
							<Footer />
						</div>
					</StyledContent>
				)}
			</ThemeProvider>
		</div>
	);
}

// eslint-disable-next-line import/no-default-export
export default Layout;
