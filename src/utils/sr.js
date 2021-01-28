import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
// eslint-disable-next-line new-cap
const sr = isSSR ? null : ScrollReveal();

// eslint-disable-next-line import/no-default-export
export default sr;
