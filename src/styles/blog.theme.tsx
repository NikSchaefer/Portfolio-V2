import styled from "styled-components";

const Layout = styled.main`
	padding: 100px 0;
	background-color: white;
	text-align: left;
`;

const Content = styled.section`
	width: 90%;
	max-width: 700px;
	margin: auto;
	font-size: 21px;
	letter-spacing: -0.003em;
	line-height: 1.5;
	font-style: normal;
	word-break: break-word;
	color: #374151;
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
	h1 {
		font-size: 60px;
	}
	img {
		width: 99%;
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
	border-bottom: 1px var(--highlight) solid;
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

const Dates = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 18px;
	max-width: 400px;
	margin: auto;
`;

export { Layout, Content, StyledTitle, AuthorSection, Dates };
