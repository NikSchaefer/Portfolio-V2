/* eslint-disable react/no-array-index-key */
import sr from "@utils/sr";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { srConfig } from "../../config";

const StyledAboutSection = styled.section`
	max-width: 900px;
	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;

		@media (max-width: 768px) {
			display: block;
		}
	}
`;
const StyledText = styled.div`
	ul.skills-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 200px));
		padding: 0;
		margin: 20px 0 0 0;
		overflow: hidden;
		list-style: none;

		li {
			position: relative;
			margin-bottom: 10px;
			padding-left: 20px;
			font-family: var(--font-mono);
			font-size: var(--fz-xs);

			&:before {
				content: "▹";
				position: absolute;
				left: 0;
				color: var(--green);
				font-size: var(--fz-sm);
				line-height: 12px;
			}
		}
	}
`;
const StyledPic = styled.div`
	position: relative;
	max-width: 300px;

	@media (max-width: 768px) {
		margin: 50px auto 0;
		width: 70%;
	}

	.wrapper {
		${({ theme }) => theme.mixins.boxShadow};
		display: block;
		position: relative;
		width: 100%;
		border-radius: var(--border-radius);
		background-color: var(--green);

		&:hover,
		&:focus {
			background: transparent;
			outline: 0;

			&:after {
				top: 15px;
				left: 15px;
			}

			.img {
				filter: none;
				mix-blend-mode: normal;
			}
		}

		.img {
			position: relative;
			border-radius: var(--border-radius);
			mix-blend-mode: multiply;
			filter: grayscale(100%) contrast(1);
			transition: var(--transition);
		}

		&:before,
		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: var(--border-radius);
			transition: var(--transition);
		}

		&:before {
			top: 0;
			left: 0;
			background-color: var(--navy);
			mix-blend-mode: screen;
		}

		&:after {
			border: 2px solid var(--green);
			top: 20px;
			left: 20px;
			z-index: -1;
		}
	}
`;

function About() {
	const data = useStaticQuery(graphql`
		query {
			avatar: file(
				sourceInstanceName: { eq: "images" }
				relativePath: { eq: "me.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	`);

	const revealContainer = useRef(null);

	useEffect(() => {
		sr.reveal(revealContainer.current, srConfig());
	}, []);

	const skills = [
		"JavaScript (ES6+)",
		"HTML & CSS",
		"Typescript(ES6+)",
		"NextJS",
		"ReactJS",
		"Node.js",
		"Django",
		"C#",
		"Firebase",
		"React Native",
		"Python",
		"Gatsby",
	];

	return (
		<StyledAboutSection id="about" ref={revealContainer}>
			<h2 className="numbered-heading">About Me</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							I'm Nik, self-taught full-stack developer and
							hobbyist programmer student based in Minnesota, US
						</p>

						<p>
							I've been enjoying programming since I first began.
							I love supporting open source and making my own
							projects. I have taken on various roles between
							design, research and development. In my free time I
							like to be contributing to open source projects,
							building my own projects, and further my education.{" "}
						</p>

						<p>
							Here are a few technologies I've been working with
							recently:
						</p>
					</div>

					<ul className="skills-list">
						{skills &&
							skills.map((skill, i) => (
								<li key={`skill-${i}`}>{skill}</li>
							))}
					</ul>
				</StyledText>

				<StyledPic>
					<div className="wrapper">
						<Image
							width={500}
							height={500}
							src="/me.png"
							alt="Avatar"
							className="img"
						/>
					</div>
				</StyledPic>
			</div>
		</StyledAboutSection>
	);
}

// eslint-disable-next-line import/no-default-export
export default About;
