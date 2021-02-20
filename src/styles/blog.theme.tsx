import styled from "styled-components";

const Container = styled.main`
	padding: 100px 0;
	text-align: left;
`;

const Content = styled.section`
	width: 90%;
	max-width: 700px;
	margin: auto;
	font-size: 21px;
	letter-spacing: -0.003em;
	line-height: 1.6;
	font-style: normal;
	word-break: break-word;
	a {
		color: var(--highlight);
		text-decoration: underline;
	}
	a:hover {
		text-decoration: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 600;
	}
	pre, code {
		background-color: var(--light-navy);
		color: var(--white);
		font-size: var(--fz-sm);
		border-radius: var(--border-radius);
		padding: 0.3em 0.5em;
	}

	h4 svg {
		width: unset;
		height: unset;
	}
	h1 {
		font-size: 60px;
	}
	img {
		width: 99%;
		margin-bottom:40px;
	}
`;
const StyledTitle = styled.h1`
	font-size: 70px;
	text-align: center;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const AuthorSection = styled.div`
	text-align: center;
	margin-bottom: 100px;
	padding-bottom: 20px;
	border-bottom: 1px var(--green) solid;
	h4 {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h2 {
		font-size: 28px;
		font-weight: 400;
	}
`;

export { Container, Content, StyledTitle, AuthorSection };
