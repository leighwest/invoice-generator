import jwt from 'jsonwebtoken';

import { NextFunction } from 'express';
import { HttpError } from 'models/httpError';

import { Request } from 'express';

interface JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  userData: {
    userId: string;
  };
}

export const checkAuth = (req: AuthRequest, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('Authentication failed!'); // if split fails
    }
    const decodedToken = jwt.verify(token, 'secret_$$_token') as JwtPayload;
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    console.error(err);
    const error = new HttpError('Authentication failed!', 401);
  }
};