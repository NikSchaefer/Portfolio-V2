import {
	IconExternal,
	IconFolder,
	IconGitHub,
	IconLinkedin,
	IconLoader,
	IconLogo,
	IconZap,
} from "@components/icons";
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

// eslint-disable-next-line import/no-default-export
export default Icon;
