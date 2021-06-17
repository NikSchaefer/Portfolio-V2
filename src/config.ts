/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// google analytics measurement id
const GA_TRACKING_ID = "G-2B47V4H829";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

export { GA_TRACKING_ID, IS_PRODUCTION, IS_TEST, IS_BROWSER };
export const siteData = {
	email: "hazimarafa80@gmail.com",
	siteMetadata: {
		title: "Hazim Arafa Portfolio",
		description:
			"I'm Hazim, self-taught full-stack developer and hobbyist programmer student based in Las Vegas, US. I've been enjoying programming since I first began. I love supporting open source and making my own projects. I have taken on various roles between design, research and development. In my free time I like to be contributing to open source projects, building my own projects, and further my education.",
		siteUrl: "https://webdefy.tech", // No trailing slash allowed!
		image: "/me.png",
		author: "hazimarafa80@gmail.com Hazim Arafa",
		name: "Hazim Arafa",
		url: "https://webdefy.tech",
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
			name: "Contact",
			url: "/#contact",
		},
	],
	socialMedia: [
		{
			name: "GitHub",
			url: "https://github.com/HazimAr",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/hazim-arafa-a439aa205/",
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
