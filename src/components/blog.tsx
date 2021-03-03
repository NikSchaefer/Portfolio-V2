/* eslint-disable sonarjs/no-duplicate-string */
import sr from "@utils/sr";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

import { siteData } from "../config";

type Blog = {
	image: string;
	title: string;
	url: string;
	min: number;
};

const BlogData: Blog[] = [
	{
		title: "Why Developers love Golang",
		url: "/blog/why-developers-love-golang",
		image: "/blog/codeonlaptop.jpg",
		min: 3,
	},
	{
		title: "Why I use Django, and you should too",
		url: "/blog/why-django-is-great",
		image: "/blog/setting-up-django.jpg",
		min: 2,
	},
	{
		title: "How to Use a .Dockerfile",
		url: "/blog/using-a-dockerfile",
		image: "/blog/docker.png",
		min: 2,
	},
	{
		title: "A Beginner's First Machine Learning Model",
		url: "/blog/beginner-machine-learning-model",
		image: "/blog/ml.webp",
		min: 2,
	},
	{
		title: "Rest API Authentication in Django",
		url: "/blog/rest-api-auth-django",
		image: "/blog/django-rest-auth.jpg",
		min: 2,
	},
	{
		title: "Why I use NextJS over Gatsby for Personal Projects",
		url: "/blog/why-I-choose-nextjs-over-gatsby",
		image: "/blog/nextjs.jpg",
		min: 2,
	},
	{
		title: "The Basics of Webpack",
		url: "/blog/webpack-basics",
		image: "/blog/webpack.jpg",
		min: 2,
	},
	{
		title: "Why you should migrate to Typescript",
		url: "/blog/why-you-should-use-typescript",
		image: "/blog/typescript.svg",
		min: 2,
	},
];

const Container = styled.section`
	text-align: left;
	max-width: 1400px;
	margin: auto;
	padding-bottom: 100px;
	.more-button {
		${({ theme }) => theme.mixins.button};
		margin: 40px auto 0;
		display: block;
	}
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
	border-radius: 6px;
	overflow: hidden;
	margin: 20px;
	width: 350px;
	position: relative;
	padding-bottom: 30px;
	top: 0;
	transition: top ease 0.25s;
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
		top: -5px;
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
	const [showMore, setShowMore] = useState(false);

	const firstSix = BlogData.slice(0, 6);

	const blogsToShow = showMore ? BlogData : firstSix;

	useEffect(() => {
		sr.reveal(revealTitle.current, siteData.srConfig());
		revealBlogs.current.forEach((ref, i) =>
			sr.reveal(ref, siteData.srConfig(i * 100))
		);
	}, []);

	return (
		<Container id="blog">
			<Meta>
				<h2 className="numbered-heading" ref={revealTitle}>
					My Personal Blog
				</h2>
			</Meta>
			<Content>
				{blogsToShow.map((data, i) => (
					<StyledCard
						ref={(el: HTMLDivElement) => {
							revealBlogs.current[i] = el;
						}}
						key={data.url}
					>
						<Link href={data.url}>
							<a aria-label={data.title}>
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
			<button
				type="button"
				className="more-button"
				onClick={() => {
					setShowMore(!showMore);
				}}
			>
				Show {showMore ? "Less" : "More"}
			</button>
		</Container>
	);
}
