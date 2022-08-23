import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

const validateParams = (req: Request, res: Response, next: NextFunction) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(422).json({
      status: 'fail',
      data: { message: 'provided id param is invalid' },
    })
  } else {
    next()
  }
}

export default validateParams
