import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

import { siteMetadata } from "../config";

function Head({ title, description, image }) {
	const { pathname } = useRouter();

	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		defaultImage,
		twitterUsername,
	} = siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};

	return (
		<Helmet
			title={title}
			defaultTitle={seo.title}
			titleTemplate={`%s | ${defaultTitle}`}
		>
			<html lang="en" />

			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitterUsername} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />

			<meta
				name="google-site-verification"
				content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
			/>
		</Helmet>
	);
}

// eslint-disable-next-line import/no-default-export
export default Head;

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
};

Head.defaultProps = {
	title: null,
	description: null,
	image: null,
};
