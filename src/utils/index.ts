import Joi from 'joi'
import jwt, {JwtPayload} from 'jsonwebtoken';

export const updateTaskSchema = Joi.object().keys({
    description: Joi.string().min(5),
    status: Joi.string(),
})
export const creatTaskSchema = Joi.object().keys({
    description: Joi.string().min(5).required(),
})

export const option = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};