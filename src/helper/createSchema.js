import Joi from 'joi';

export default (sections, staticData) => {
  const schema = {};
  const paths = sections.map(({ path }) => path);

  paths.forEach(path => {
    staticData[path]?.map(item => {
      const key = item.seq;
      const joiValidator = Joi.string()
        .min(3)
        .max(item.maxChar)
        .required()
        .trim();

      return (schema[path] = {
        ...schema[path],
        [key]: joiValidator,
      });
    });
  });

  return Joi.object(schema);
};
