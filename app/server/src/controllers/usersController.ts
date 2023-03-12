import { IUser } from '../models/user';
import { RequestHandler } from 'express';
import {
  validateSignUpUser,
  validateLoginUser,
  UserValidationError,
} from '../services/userValidationService';
import { saveUser } from '../services/userService';

import { Request, Response, NextFunction } from 'express';

export const DUMMY_USERS: IUser[] = [
  {
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  },
];

export const signup = async (req: Request<{}, {}, IUser>, res: Response) => {
  const validationErrors = await validateSignUpUser(req.body);

  if (validationErrors.length !== 0) {
    res.status(422).json(validationErrors);
    return;
  }

  try {
    // TODO: what should I return if it's successful?
    const someResponse = await saveUser(req.body);
    return res.status(201).json(someResponse);
  } catch (err) {
    // TODO: why is this an empty body? err.message works, but if I return err I receive
    // an empty object in Insomnia. Should I be returning .json({message: err.message})
    return res.status(422).json(err);
  }

  // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

export const login: RequestHandler = async (req, res) => {
  const validationErrors = await validateLoginUser(req.body);

  if (validationErrors.length !== 0) {
    res.status(401).json(validationErrors);
    return;
  }

  res.json({ message: 'Logged in!' });
};
