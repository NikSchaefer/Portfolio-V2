/* eslint-disable import/no-default-export */
import styled from "styled-components";

type Skill = {
	title: string;
	img: string;
};
const skills: Skill[] = [
	{ title: "JavaScript (ES6+)", img: "/code/javascript.svg" },
	{ title: "ReactJS", img: "/code/react.svg" },
	{ title: "HTML & CSS", img: "/code/html.svg" },
	{ title: "Typescript", img: "/code/typescript.svg" },
	{ title: "NextJS", img: "/code/next-dot-js.svg" },
	{ title: "Node.js(Express)", img: "/code/javascript.svg" },
	{ title: "Django", img: "/code/django.svg" },
	{ title: "Firebase", img: "/code/firebase.svg" },
	{ title: "React Native", img: "/code/react.svg" },
	{ title: "Python", img: "/code/python.svg" },
	{ title: "Gatsby", img: "/code/gatsby.svg" },
];
const Container = styled.div``;
const Card = styled.div`
    display:flex;
`;
export default function Skills(): JSX.Element {
	return (
		<section>
			<h2 className="numbered-heading">What I use</h2>
			<Container>
				{skills.map((data) => (
					<Card key={data.title}>
						<img height={50} width={50} src={data.img} alt="" />
						<h2>{data.title}</h2>
					</Card>
				))}
			</Container>
		</section>
	);
}
