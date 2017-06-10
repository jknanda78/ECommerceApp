export const loadSass = path => {
  if(process.env.NODE_ENV === 'development') {
    require(`../${path}`);
  }
};
