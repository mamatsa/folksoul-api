import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  console.log(res.statusCode)
  if (!res.statusCode || res.statusCode === 200) {
    res.status(500).json({
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
