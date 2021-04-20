export default (sections, staticData) => {
  const modelVal = {};
  const paths = sections.map(({ path }) => path);

  paths.forEach(path => {
    staticData[path]?.map(item => {
      const key = item.seq;
      const value = null;

      return (modelVal[path] = {
        ...modelVal[path],
        [key]: value,
      });
    });
  });

  return modelVal;
};
