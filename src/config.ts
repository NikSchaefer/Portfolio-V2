/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// google analytics mearsurement id
const GA_TRACKING_ID = "G-2B47V4H829";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };
export const siteData = {
	email: "nikkschaefer@gmail.com",
	siteMetadata: {
		title: "Nik Schaefer Portfolio",
		description:
			"I'm Nik, self-taught full-stack developer and hobbyist programmer student based in Minnesota, US. I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development. In my free time I like to be contributing to open source projects, building my own projects, and further my education.",
		siteUrl: "https://nikschaefer.tech", // No trailing slash allowed!
		image: "/me.png",
		twitterUsername: "@NikSchaefer_",
		author: "nikkschaefer@gmail.com Nik Schaefer",
		name: "Nik Schaefer",
		url: "https://nikschaefer.tech",
		language: `en-us`,
	},
	navLinks: [
		{
			name: "About",
			url: "/#about",
		},
		{
			name: "Experience",
			url: "/#jobs",
		},
		{
			name: "Work",
			url: "/#projects",
		},
		{
			name: "Blog",
			url: "/#blog",
		},
		{
			name: "Contact",
			url: "/#contact",
		},
	],
	socialMedia: [
		{
			name: "GitHub",
			url: "https://github.com/NikSchaefer",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/nik-schaefer//",
		},
	],
	colors: {
		green: "#64ffda",
		navy: "#0a192f",
		darkNavy: "#020c1b",
	},

	srConfig: (delay = 200, viewFactor = 0.25) => ({
		origin: "bottom",
		distance: "20px",
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
		mobile: true,
		reset: false,
		useDelay: "always",
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
	}),
};
