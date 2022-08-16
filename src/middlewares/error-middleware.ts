import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  if (statusCode === 500) {
    res.json({
      status: 'error',
      message: error.message,
    })
  } else {
    res.json({
      status: 'fail',
      data: { error: error.message },
    })
  }
}

export default errorHandler
