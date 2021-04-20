import Joi from 'joi';

export default (paths, items) => {
  const schema = {};

  paths.forEach(path => {
    items[path].map(item => {
      const key = item.seq;
      const joiValidator = Joi.string()
        .alphanum()
        .min(3)
        .max(item.maxChar)
        .required();

      return (schema[path] = {
        ...schema[path],
        [key]: joiValidator,
      });
    });
  });

  return Joi.object(schema);
};
