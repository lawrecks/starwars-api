import Joi from 'joi';
import baseValidator from '.';

const validateQuery = (req, res, next) => {
  const schema = Joi.object({
    sort: Joi.string().valid('name', 'height', 'gender'),
    order: Joi.string().valid('asc', 'desc'),
    gender: Joi.string().valid('male', 'female', 'n/a'),
  });
  baseValidator(schema, req, res, next, 'body');
};

export default validateQuery;
