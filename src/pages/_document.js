import { GA_TRACKING_ID } from "@src/config.ts";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { siteData } from "../config";

const {
	defaultTitle,
	defaultDescription,
	siteUrl,
	defaultImage,
	twitterUsername,
} = siteData.siteMetadata;

const seo = {
	title: defaultTitle,
	description: defaultDescription,
	image: `${siteUrl}${defaultImage}`,
	url: `${siteUrl}`,
};

// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-us" title={seo.title}>
				<Head title={seo.title}>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
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
					<meta
						name="twitter:description"
						content={seo.description}
					/>
					<meta name="twitter:image" content={seo.image} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
