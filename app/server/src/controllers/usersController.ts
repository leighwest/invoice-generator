import { IUser } from 'models/user';
import { RequestHandler } from 'express';
import {
  validateSignUpUser,
  validateLoginUser,
} from 'services/userValidationService';
import { createUserSession, saveUser } from 'services/userService';

import { Request, Response } from 'express';

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
    const validationErrorMessages: { message: string }[] = [];

    validationErrors.forEach((error) => {
      validationErrorMessages.push({ message: error.message });
    });

    console.error(validationErrors);
    return res.status(422).json(validationErrorMessages);
  }

  try {
    const createdUser = await saveUser(req.body);
    return res.status(201).json(createdUser);
  } catch (err) {
    return res.status(422).json({ message: err.message });
  }
};

export const login: RequestHandler = async (req, res) => {
  const validationErrors = await validateLoginUser(req.body);

  if (validationErrors.length !== 0) {
    const validationErrorMessages: { message: string }[] = [];

    validationErrors.forEach((error) => {
      validationErrorMessages.push({ message: error.message });
    });

    console.error(validationErrors);
    return res.status(422).json(validationErrorMessages);
  }

  const user = await createUserSession(req.body.email);

  if (user.userId) {
    console.log(`${user.userId} has successfully logged in.`);
    return res.status(200).json(user);
  } else {
    return res.status(422).json({
      message: 'User login unsuccessful, please try again.',
    });
  }
};
