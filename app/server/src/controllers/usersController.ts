import { User } from '../models/user';
import { RequestHandler } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { HttpError } from '../models/httpError';
import { validateUser } from '../services/userValidationService';

const DUMMY_USERS: User[] = [
  {
    id: 'u1',
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  },
];

// does this need to be async?
export const signup: RequestHandler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // should this be a class instead?
  const createdUser: User = {
    id: uuidV4(),
    firstName,
    lastName,
    email,
    password,
  };

  const validationErrors = validateUser(createdUser);

  if (validationErrors.length !== 0) {
    res.status(422).json(validationErrors);
  }

  const userExists = DUMMY_USERS.find((u) => u.email === email);

  if (userExists) {
    throw new HttpError('Could not create user, email already exists', 422);
  }

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('Credentials invalid, could not identify user', 401);
  }

  res.json({ message: 'Logged in!' });
};
