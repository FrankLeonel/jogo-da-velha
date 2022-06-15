export const screenSizes = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  max: 1920,
};

const breakpoints = Object.keys(screenSizes).reduce((acc, curr) => {
  acc[curr] = `@media(min-width: ${screenSizes[curr] + 1}px)`;
  return acc;
}, {});

export default breakpoints;
