const isSSR = typeof window === "undefined";
// eslint-disable-next-line new-cap
const sr = isSSR ? null : require("scrollreveal").default();
// eslint-disable-next-line import/no-default-export
export default sr;
