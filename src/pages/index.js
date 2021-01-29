import PropTypes from "prop-types";
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
function IndexPage({ location }) {
	return (
		<Layout location={location}>
			<StyledMainContainer className="fillHeight">
				<Hero />
				<About />
				<Jobs />
				<Featured />
				{/* <Projects /> */}
				<Contact />
			</StyledMainContainer>
		</Layout>
	);
}

IndexPage.propTypes = {
	location: PropTypes.object.isRequired,
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
