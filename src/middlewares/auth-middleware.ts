import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Admin } from 'models'

const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      ;[, token] = req.headers.authorization.split(' ')

      // Verify token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET!)

      // Get user from the token
      const { id } = decodedToken as { id: string }
      const admin = await Admin.findById(id)

      if (!admin) {
        throw new Error()
      }

      next()
    } catch (error: any) {
      res.json({ status: 'fail', data: { message: 'not authorized' } })
    }
  }

  if (!token) {
    res
      .status(401)
      .json({ status: 'fail', data: { message: 'not authorized, no token' } })
  }
}

export default protect
