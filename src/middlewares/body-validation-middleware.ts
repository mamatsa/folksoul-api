import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateBody =
  (schema: Joi.ObjectSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const error = schema.validate(req.body).error!;
    if (error) {
      res.status(422).json({
        status: 'failed',
        data: {
          [error.details[0].context!.key as string]: error.details[0].message,
        },
      });
    } else {
      next();
    }
  };

export default validateBody;
