/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import sr from "@utils/sr";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import projectData from '../../../content/projects.json'
import { siteData } from "../../config";
import { Icon } from "../icons";

const StyledProjectsSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: clamp(24px, 5vw, var(--fz-heading));
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 15px;
		position: relative;
		margin-top: 50px;

		@media (max-width: 1080px) {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}

	.more-button {
		${({ theme }) => theme.mixins.button};
		margin: 80px auto 0;
	}
`;

const StyledProject = styled.div`
	cursor: default;
	transition: var(--transition);

	&:hover,
	&:focus {
		outline: 0;
		.project-inner {
			transform: translateY(-5px);
		}
	}

	.project-inner {
		${({ theme }) => theme.mixins.boxShadow};
		${({ theme }) => theme.mixins.flexBetween};
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		height: 100%;
		padding: 2rem 1.75rem;
		border-radius: var(--border-radius);
		background-color: var(--light-navy);
		transition: var(--transition);
	}

	.project-top {
		${({ theme }) => theme.mixins.flexBetween};
		margin-bottom: 35px;

		.folder {
			color: var(--green);
			svg {
				width: 40px;
				height: 40px;
			}
		}

		.project-links {
			display: flex;
			align-items: center;
			margin-right: -10px;
			color: var(--light-slate);

			a {
				${({ theme }) => theme.mixins.flexCenter};
				padding: 5px 7px;

				&.external {
					svg {
						width: 22px;
						height: 22px;
						margin-top: -4px;
					}
				}

				svg {
					width: 20px;
					height: 20px;
				}
			}
		}
	}

	.project-title {
		margin: 0 0 10px;
		color: var(--lightest-slate);
		font-size: var(--fz-xxl);
	}

	.project-description {
		color: var(--light-slate);
		font-size: 17px;

		a {
			${({ theme }) => theme.mixins.inlineLink};
		}
	}

	.project-tech-list {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		flex-wrap: wrap;
		padding: 0;
		margin: 20px 0 0 0;
		list-style: none;

		li {
			font-family: var(--font-mono);
			font-size: var(--fz-xxs);
			line-height: 1.75;

			&:not(:last-of-type) {
				margin-right: 15px;
			}
		}
	}
`;

function Projects() {
	const [showMore, setShowMore] = useState(false);
	const revealTitle = useRef(null);
	const revealArchiveLink = useRef(null);
	const revealProjects = useRef([]);

	useEffect(() => {
		sr.reveal(revealTitle.current, siteData.srConfig());
		sr.reveal(revealArchiveLink.current, siteData.srConfig());
		revealProjects.current.forEach((ref, i) =>
			sr.reveal(ref, siteData.srConfig(i * 100))
		);
	}, []);

	const GRID_LIMIT = 6;
	const projects = projectData.sort((a, b) => {
		return a.index - b.index;
	});
	const firstSix = projects.slice(0, GRID_LIMIT);
	const projectsToShow = showMore ? projects : firstSix;

	return (
		<StyledProjectsSection>
			<h2 ref={revealTitle}>Other Noteworthy Projects</h2>

			<TransitionGroup className="projects-grid">
				{projectsToShow.map((data, i) => {
						const { github, external, title, tech, text } = data;

						return (
							<CSSTransition
								key={i}
								classNames="fadeup"
								timeout={
									i >= GRID_LIMIT
										? (i - GRID_LIMIT) * 300
										: 300
								}
								exit={false}
							>
								<StyledProject
									key={i}
									ref={(el) =>
										(revealProjects.current[i] = el)
									}
									tabIndex="0"
									style={{
										transitionDelay: `${
											i >= GRID_LIMIT
												? (i - GRID_LIMIT) * 100
												: 0
										}ms`,
									}}
								>
									<div className="project-inner">
										<header>
											<div className="project-top">
												<div className="folder">
													<Icon name="Folder" />
												</div>
												<div className="project-links">
													{github && (
														<a
															href={github}
															aria-label="GitHub Link"
														>
															<Icon name="GitHub" />
														</a>
													)}
													{external && (
														<a
															href={external}
															aria-label="External Link"
															className="external"
														>
															<Icon name="External" />
														</a>
													)}
												</div>
											</div>

											<h3 className="project-title">
												{title}
											</h3>

											<div
												className="project-description"
											>
												<p>{text}</p>
											</div>
										</header>

										<footer>
											{tech && (
												<ul className="project-tech-list">
													{tech.map((tech, i) => (
														<li key={i}>{tech}</li>
													))}
												</ul>
											)}
										</footer>
									</div>
								</StyledProject>
							</CSSTransition>
						);
					})}
			</TransitionGroup>

			<button
				type="button"
				className="more-button"
				onClick={() => setShowMore(!showMore)}
			>
				Show {showMore ? "Less" : "More"}
			</button>
		</StyledProjectsSection>
	);
}

// eslint-disable-next-line import/no-default-export
export default Projects;

