import { useState, useEffect } from "react";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

const useScrollDirection = ({
	initialDirection,
	thresholdPixels,
	off,
} = {}) => {
	const [scrollDir, setScrollDir] = useState(initialDirection);

	useEffect(() => {
		const threshold = thresholdPixels || 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				// We haven't exceeded the threshold
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		/**
		 * Bind the scroll handler if `off` is set to false.
		 * If `off` is set to true reset the scroll direction.
		 */
		off
			? setScrollDir(initialDirection)
			: window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [initialDirection, thresholdPixels, off]);

	return scrollDir;
};

// eslint-disable-next-line import/no-default-export
export default useScrollDirection;

/* 

import { useState, useEffect } from "react";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

const useScrollDirection = function (
	props: {
		initialDirection?: string;
		thresholdPixels?: number;
		off?: boolean;
	}
): string|undefined {
	const [scrollDir, setScrollDir] = useState(props.initialDirection);

	useEffect(() => {
		const threshold = props.thresholdPixels || 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				// We haven't exceeded the threshold
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		props.off
			? setScrollDir(props.initialDirection)
			: window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [props.initialDirection, props.thresholdPixels, props.off]);

	return scrollDir;
};

// eslint-disable-next-line import/no-default-export
export default useScrollDirection;

*/