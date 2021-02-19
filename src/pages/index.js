import React from "react";
import styled from "styled-components";

import {
	Layout,
	Hero,
	About,
	Jobs,
	Featured,
	Projects,
	Contact,
} from "../components";

const StyledMainContainer = styled.main`
	counter-reset: section;
`;
function IndexPage()
{
	return (
		<Layout>
			<StyledMainContainer className="fillHeight">
				<Hero />
				<About />
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
