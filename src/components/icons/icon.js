import {
	IconExternal,
	IconFolder,
	IconGitHub,
	IconLinkedin,
	IconLoader,
	IconLogo,
	IconZap,
} from "@components/icons";
import PropTypes from "prop-types";
import React from "react";

function Icon({ name }) {
	switch (name) {
		case "External":
			return <IconExternal />;
		case "Folder":
			return <IconFolder />;
		case "GitHub":
			return <IconGitHub />;
		case "LinkedIn":
			return <IconLinkedin />;
		case "Loader":
			return <IconLoader />;
		case "Logo":
			return <IconLogo />;
		default:
			return <IconExternal />;
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

// eslint-disable-next-line import/no-default-export
export default Icon;
