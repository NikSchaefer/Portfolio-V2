import {
	Layout,
	Hero,
	About,
	Jobs,
	Featured,
	Projects,
	Contact,
} from "@components/index";
import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.main`
	counter-reset: section;
`;
function IndexPage(): JSX.Element {
	return (
		<Layout>
			<StyledMainContainer className="fillHeight">
				<Hero />
				<About />
				{/* <Skills /> */}
				<Jobs />
				<Featured />
				<Projects />
				<Contact />
			</StyledMainContainer>
		</Layout>
	);
}

// eslint-disable-next-line import/no-default-export
export default IndexPage;
