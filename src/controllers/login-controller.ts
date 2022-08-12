import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Admin } from 'models';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// @desc     Authenticate a user
// @route    POST /login
// @access   Public
const login = asyncHandler(async (req: Request, res: Response) => {
  const body = req.body;

  // Find admin using nickname
  const admin = await Admin.findOne({ nickname: body.nickname as string });
  if (!admin) {
    res.status(400);
    throw new Error('wrong nickname or password');
  }

  // Check if password is valid
  if (!(await bcrypt.compare(body.password, admin.password))) {
    res.status(400);
    throw new Error('wrong nickname or password');
  }

  // Generate JWT token
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });

  res.json({
    status: 'success',
    data: { nickname: admin.nickname, JWTToken: token },
  });
});

export default login;
