export const hex2rgba = (hex, alpha = 1) => {
	// eslint-disable-next-line require-unicode-regexp
	const [r, g, b] = hex.match(/\w\w/g).map((x) => Number.parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};

export const navDelay = 1000;
export const loaderDelay = 2000;

export const KEY_CODES = {
	ARROW_LEFT: "ArrowLeft",
	ARROW_LEFT_IE11: "Left",
	ARROW_RIGHT: "ArrowRight",
	ARROW_RIGHT_IE11: "Right",
	ESCAPE: "Escape",
	ESCAPE_IE11: "Esc",
	TAB: "Tab",
	SPACE: " ",
	SPACE_IE11: "Spacebar",
	ENTER: "Enter",
};
