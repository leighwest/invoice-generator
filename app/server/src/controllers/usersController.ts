import { IUser } from '../models/user';
import { RequestHandler } from 'express';
import {
  validateSignUpUser,
  validateLoginUser,
} from '../services/userValidationService';
import User from '../models/user';

import { Request, Response, NextFunction } from 'express';

export const DUMMY_USERS: IUser[] = [
  {
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  },
];

export const signup = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction,
) => {
  const validationErrors = await validateSignUpUser(req.body);

  if (validationErrors.length !== 0) {
    res.status(422).json(validationErrors);
    return;
  }

  // From here:
  // Should be a new service which creates the user and saves it.
  // Call it userService that has a bunch of user functions
  // Keep your controller lean (request and responses only)

  const createdUser = new User(req.body);

  try {
    await createdUser.save();
  } catch (err) {
    if (err.code === 11000) {
      res.status(422).json({
        message: 'Could not create user, email already exists.',
      });
    }
    res.status(422).json({
      message: 'Sign up failed, please try again.',
    });
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

export const login: RequestHandler = async (req, res) => {
  const validationErrors = await validateLoginUser(req.body);

  if (validationErrors.length !== 0) {
    res.status(401).json(validationErrors);
    return;
  }

  res.json({ message: 'Logged in!' });
};
