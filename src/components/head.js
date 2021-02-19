import HeadSeo from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import { siteMetadata } from "../config";

function HeadExport({ title, description, image }) {
	const router = useRouter();
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
		url: `${siteUrl}${router?.pathname}`,
	};

	return (
		<HeadSeo
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
		</HeadSeo>
	);
}

// eslint-disable-next-line import/no-default-export
export default HeadExport;

HeadExport.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
};

HeadExport.defaultProps = {
	title: null,
	description: null,
	image: null,
};
