import Joi from 'joi';
import baseValidator from '.';

export const validateAddComment = (req, res, next) => {
  const schema = Joi.object({
    comment: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export const validateParams = (req, res, next) => {
  const schema = Joi.object({
    episodeId: Joi.number().required(),
  });
  baseValidator(schema, req, res, next, 'params');
};
