/* eslint-disable sonarjs/no-duplicate-string */
import sr from "@utils/sr";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { siteData } from "../config";
const Span = styled.span`
	color: var(--green);
	font-family: var(--font-mono);
`;

type Blog = {
	image: string;
	title: string;
	url: string;
	min: number;
};

const BlogData: Blog[] = [
	{
		title: "Why we use Django, and you should too",
		url: "/blog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
	{
		title: "Title Title Title Title",
		url: "/fblog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
	{
		title: "Title Title Title Title",
		url: "/ablog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
	{
		title: "Why we use Django, and you should too",
		url: "/blog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
	{
		title: "Title Title Title Title",
		url: "/fblog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
	{
		title: "Title Title Title Title",
		url: "/ablog",
		image: "/blog/django-rest-auth.jpg",
		min: 5,
	},
];

const Container = styled.section`
	text-align: left;
	max-width: 1400px;
	margin: auto;
	padding-bottom: 100px;
`;

const Meta = styled.div`
	width: 90%;
	margin: auto;
	div {
		h1 {
			font-size: 35px;
			font-family: "Nunito", sans-serif;
			max-width: 250px;
		}
	}
`;
const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex: 1;
	padding: 20px 0;
`;
const StyledCard = styled.div`
	background-color: var(--light-navy);
	box-shadow: 0 0 10px var(--lightest-navy);
	border-radius: 6px;
	overflow: hidden;
	margin: 20px;
	width: 350px;
	position: relative;
	padding-bottom: 30px;
	div {
		box-sizing: border-box;
		padding: 3% 5%;
		h2 {
			font-size: 24px;
		}
	}
	.link {
		position: absolute;
		bottom: 15px;
		right: 25px;
		display: flex;
		align-items: center;
		svg {
			width: unset;
			height: unset;
			padding-left: 10px;
			transition: transform 0.2s ease;
		}
	}
	:hover {
		cursor: pointer;
		.link {
			color: var(--green);
			svg {
				transform: translateX(5px);
			}
		}
	}
`;
// eslint-disable-next-line import/no-default-export
export default function BlogHome(): JSX.Element {
	const revealTitle = useRef(null);
	const revealBlogs = useRef<HTMLDivElement[]>([]);
	useEffect(() => {
		sr.reveal(revealTitle.current, siteData.srConfig());
		revealBlogs.current.forEach((ref, i) =>
			sr.reveal(ref, siteData.srConfig(i * 100))
		);
	}, []);

	return (
		<Container id="Blog">
			<Meta>
				<h2 className="numbered-heading" ref={revealTitle}>
					My Personal Blog
				</h2>
			</Meta>
			<Content>
				{BlogData.map((data, i) => (
					<StyledCard
						ref={(el: HTMLDivElement) => {
							revealBlogs.current[i] = el;
						}}
						key={data.url}
					>
						<Link href={data.url}>
							<a>
								<Image
									src={data.image}
									width={400}
									alt="Blog Image"
									height={270}
								/>
							</a>
						</Link>

						<div>
							<h2>{data.title}</h2>
						</div>
						<Link href={data.url}>
							<a className="link">
								Contuine Reading <FaArrowRight size={20} />
							</a>
						</Link>
					</StyledCard>
				))}
			</Content>
		</Container>
	);
}
