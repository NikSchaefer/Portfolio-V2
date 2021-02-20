/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

import { siteData } from "../config";
import { Icon } from "./icons";

import { Side } from ".";

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

function Social({ isHome }: { isHome: boolean }): JSX.Element {
	return (
		<Side isHome={isHome} orientation="left">
			<StyledSocialList>
				{siteData.socialMedia?.map(
					(data: { name: string; url: string }, i: number) => (
						<li key={i}>
							<a href={data.url} aria-label={data.name}>
								<Icon name={data.name} />
							</a>
						</li>
					)
				)}
			</StyledSocialList>
		</Side>
	);
}

// eslint-disable-next-line import/no-default-export
export default Social;
