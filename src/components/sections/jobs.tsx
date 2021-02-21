/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { KEY_CODES } from "@utils/index";
import sr from "@utils/sr";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import jsonData from "../../../content/jobs.json";
import { siteData } from "../../config";

type Props = {
	isActive?: boolean;
	activeTabId?: number;
};

const StyledJobsSection = styled.section`
	max-width: 700px;

	.inner {
		display: flex;

		@media (max-width: 600px) {
			display: block;
		}
	}
`;

const StyledTabList = styled.ul`
	position: relative;
	z-index: 3;
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;

	@media (max-width: 600px) {
		display: flex;
		overflow-x: auto;
		width: calc(100% + 100px);
		margin-left: -50px;
		margin-bottom: 30px;
	}
	@media (max-width: 480px) {
		width: calc(100% + 50px);
		margin-left: -25px;
	}

	li {
		&:first-of-type {
			@media (max-width: 600px) {
				margin-left: 50px;
			}
			@media (max-width: 480px) {
				margin-left: 25px;
			}
		}
		&:last-of-type {
			@media (max-width: 600px) {
				padding-right: 50px;
			}
			@media (max-width: 480px) {
				padding-right: 25px;
			}
		}
	}
`;

const StyledTabButton = styled.button`
	${({ theme }) => theme.mixins.link};
	display: flex;
	align-items: center;
	width: 100%;
	height: var(--tab-height);
	padding: 0 20px 2px;
	border-left: 2px solid var(--lightest-navy);
	background-color: transparent;
	color: ${({ isActive }: Props) =>
		isActive ? "var(--green)" : "var(--slate)"};
	font-family: var(--font-mono);
	font-size: var(--fz-xs);
	text-align: left;
	white-space: nowrap;

	@media (max-width: 768px) {
		padding: 0 15px 2px;
	}
	@media (max-width: 600px) {
		${({ theme }) => theme.mixins.flexCenter};
		min-width: 120px;
		padding: 0 15px;
		border-left: 0;
		border-bottom: 2px solid var(--lightest-navy);
		text-align: center;
	}

	&:hover,
	&:focus {
		background-color: var(--light-navy);
	}
`;

const StyledHighlight = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	width: 2px;
	height: var(--tab-height);
	border-radius: var(--border-radius);
	background: var(--green);
	transform: translateY(
		calc(${({ activeTabId }: Props) => activeTabId} * var(--tab-height))
	);
	transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition-delay: 0.1s;

	@media (max-width: 600px) {
		top: auto;
		bottom: 0;
		width: 100%;
		max-width: var(--tab-width);
		height: 2px;
		margin-left: 50px;
		transform: translateX(
			calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
		);
	}
	@media (max-width: 480px) {
		margin-left: 25px;
	}
`;

const StyledTabContent = styled.div`
	width: 100%;
	height: auto;
	padding-top: 10px;
	padding-left: 30px;

	@media (max-width: 768px) {
		padding-left: 20px;
	}
	@media (max-width: 600px) {
		padding-left: 0;
	}

	ul {
		${({ theme }) => theme.mixins.fancyList};
	}

	h3 {
		margin-bottom: 5px;
		font-size: var(--fz-xxl);
		font-weight: 500;

		.company {
			color: var(--green);
		}
	}

	.range {
		margin-bottom: 30px;
		color: var(--light-slate);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
	}
`;

function Jobs(): JSX.Element {
	const jobsData = jsonData.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState(0);
	const tabs = useRef<HTMLDivElement[] | null[] | HTMLButtonElement[]>([]);

	const revealContainer = useRef(null);
	useEffect(
		() => sr.reveal(revealContainer.current, siteData.srConfig()),
		[]
	);

	const focusTab = () => {
		if (tabs.current[tabFocus] === null) {
			return;
		}
		if (tabs.current[tabFocus]) {
			tabs.current[tabFocus]?.focus();
			return;
		}
		// If we're at the end, go to the start
		if (tabFocus >= tabs.current.length) {
			setTabFocus(0);
		}
		// If we're at the start, move to the end
		if (tabFocus < 0) {
			setTabFocus(tabs.current.length - 1);
		}
	};

	// Only re-run the effect if tabFocus changes
	useEffect(() => {
		focusTab();
	}, [tabFocus]);

	// Focus on tabs when using up & down arrow keys
	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
			e.preventDefault();
			// Move up
			if (e.key === KEY_CODES.ARROW_UP) {
				setTabFocus(tabFocus - 1);
			}
			// Move down
			if (e.key === KEY_CODES.ARROW_DOWN) {
				setTabFocus(tabFocus + 1);
			}
		}
	};

	return (
		<StyledJobsSection id="jobs" ref={revealContainer}>
			<h2 className="numbered-heading">Where I’ve Worked</h2>

			<div className="inner">
				<StyledTabList
					role="tablist"
					aria-label="Job tabs"
					onKeyDown={onKeyDown}
				>
					<ul style={{listStyle:'none'}}>
						{jobsData &&
							jobsData.map((data, i) => {
								const { company } = data;
								return (
									<li key={i}>
										<StyledTabButton
											isActive={activeTabId === i}
											onClick={() => {
												setActiveTabId(i);
											}}
											ref={(el) => (tabs.current[i] = el)}
											id={`tab-${i}`}
											role="tab"
											aria-selected={activeTabId === i}
											aria-controls={`panel-${i}`}
											tabIndex={
												activeTabId === i ? 0 : -1
											}
										>
											<span>{company}</span>
										</StyledTabButton>
									</li>
								);
							})}
					</ul>
					<StyledHighlight activeTabId={activeTabId} />
				</StyledTabList>

				{jobsData &&
					jobsData.map((data, i) => {
						const { title, url, company, range, content } = data;

						return (
							<CSSTransition
								key={i}
								in={activeTabId === i}
								timeout={250}
								classNames="fade"
							>
								<StyledTabContent
									id={`panel-${i}`}
									role="tabpanel"
									tabIndex={activeTabId === i ? 0 : -1}
									aria-labelledby={`tab-${i}`}
									aria-hidden={activeTabId !== i}
									hidden={activeTabId !== i}
								>
									<h3>
										<span>{title}</span>
										<span className="company">
											&nbsp;@&nbsp;
											<a
												href={url}
												className="inline-link"
											>
												{company}
											</a>
										</span>
									</h3>

									<p className="range">{range}</p>

									<div>
										<ul>
											{content.map((temp) => (
												<li key={temp}>{temp}</li>
											))}
										</ul>
									</div>
								</StyledTabContent>
							</CSSTransition>
						);
					})}
			</div>
		</StyledJobsSection>
	);
}

// eslint-disable-next-line import/no-default-export
export default Jobs;
