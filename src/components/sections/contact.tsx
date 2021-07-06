import sr from "@utils/sr";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { siteData } from "../../config";

const StyledContactSection = styled.section`
	max-width: 400px;
	margin: 0 auto 100px;
	text-align: center;

	@media (max-width: 768px) {
		margin: 0 auto 50px;
	}

	.overline {
		display: block;
		margin-bottom: 20px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-md);
		font-weight: 400;

		&:before {
			bottom: 0;
			font-size: var(--fz-sm);
		}

		&:after {
			display: none;
		}
	}

	.title {
		font-size: clamp(40px, 5vw, 60px);
	}

	.email-link {
		${({ theme }) => theme.mixins.bigButton};
		margin-top: 50px;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Contact(): JSX.Element {
	const revealContainer = useRef(null);
	useEffect(
		() => sr.reveal(revealContainer.current, siteData.srConfig()),
		[]
	);

	return (
		<StyledContactSection id="contact" ref={revealContainer}>
			<h2 className="numbered-heading overline">What’s Next?</h2>
			<h2 className="title">Get In Touch</h2>

			<p>
				I am a Full Stack Developer. Feel free to send me a
				message for possible inquires, collaborations, or projects. My
				inbox is always open. Say Hello!
			</p>

			<a className="email-link" href={`mailto:${siteData.email}`}>
				Say Hello
			</a>
		</StyledContactSection>
	);
}
