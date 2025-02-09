import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

/**
 * validate email and password
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateSigninFormData = (req, res, next) => {
  const createSignInSchema = Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().email().required().trim(),
  });

  const errors = joiValidator(req.body, createSignInSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad Input', errors);
};
