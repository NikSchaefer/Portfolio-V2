/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-require-imports */
import { GlobalStyle, theme } from "@styles/index";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

import { siteData } from "../config";
import { Icon } from "./icons";
import Nav from "./nav";

import { Loader, Footer, Side } from ".";

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]');
}
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

const StyledSocialList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	&:after {
		content: "";
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: var(--light-slate);
	}

	li {
		&:last-of-type {
			margin-bottom: 20px;
		}

		a {
			padding: 10px;

			&:hover,
			&:focus {
				transform: translateY(-3px);
			}

			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;
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
				{isLoading && isHome ? (
					<Loader
						finishLoading={() => {
							setIsLoading(false);
						}}
					/>
				) : (
					<StyledContent>
						<Nav isHome={isHome} />
						<Side isHome={isHome} orientation="left">
							<StyledSocialList>
								{siteData.socialMedia?.map(
									(
										data: { name: string; url: string },
										i: number
									) => (
										<li key={i}>
											<a
												href={data.url}
												aria-label={data.name}
											>
												<Icon name={data.name} />
											</a>
										</li>
									)
								)}
							</StyledSocialList>
						</Side>
						<Side isHome={isHome} orientation="right">
							<StyledLinkWrapper>
								<a href={`mailto:${String(siteData.email)}`}>
									{siteData.email}
								</a>
							</StyledLinkWrapper>
						</Side>

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
