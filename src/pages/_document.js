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
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<meta
						name="google-site-verification"
						content="tKabbDcLNnzaVk1PR4QNF6C0bzBSr1fV3GoTGeiWnlQ"
					/>
					<meta itemProp="name" content={seo.title} />
					<meta itemProp="description" content={seo.description} />
					<meta itemProp="image" content={seo.image} />

					<meta property="og:url" content={seo.url} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={seo.title} />
					<meta property="og:description" content={seo.description} />
					<meta property="og:image" content={seo.image} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={seo.title} />
					<meta
						name="twitter:description"
						content={seo.description}
					/>
					<meta name="twitter:image" content={seo.image} />

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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
