/* eslint-disable react/no-array-index-key */
import { Icon } from "@components/icons";
import mixins from "@styles/mixins";
import React from "react";
import styled from "styled-components";

import { siteData } from "../config";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	min-height: 70px;
	padding: 15px;
	text-align: center;
`;

const StyledSocialLinks = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		width: 100%;
		max-width: 270px;
		margin: 0 auto 10px;
		color: var(--light-slate);
	}

	ul {
		${mixins.flexBetween};
		padding: 0;
		margin: 0;
		list-style: none;

		a {
			padding: 10px;
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

const StyledCredit = styled.div`
	color: var(--light-slate);
	font-family: var(--font-mono);
	font-size: var(--fz-xxs);
	line-height: 1;
`;

// eslint-disable-next-line import/no-default-export
export default function Footer(): JSX.Element {
	return (
		<StyledFooter>
			<StyledSocialLinks>
				<ul>
					{siteData.socialMedia?.map(
						(data: { name: string; url: string }, i: number) => (
							<li key={i}>
								<a href={data.url} aria-label={data.name}>
									<Icon name={data.name} />
								</a>
							</li>
						)
					)}
				</ul>
			</StyledSocialLinks>

			<StyledCredit tabIndex={-1}>
				<p>
					Developed in NextJS by{" "}
					<a href="https://github.com/HazimAr">Hazim Arafa</a> and{" "}
					<a href="https://github.com/NikSchaefer">Nik Schaefer</a>
					<br />
				</p>
			</StyledCredit>
		</StyledFooter>
	);
}
