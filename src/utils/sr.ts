/* eslint-disable @typescript-eslint/no-require-imports */
const isSSR = typeof window === "undefined";
const sr = isSSR ? null : require("scrollreveal").default();
// eslint-disable-next-line import/no-default-export
export default sr;
