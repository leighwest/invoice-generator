import bcrypt from 'bcryptjs';

import User, { IUser } from 'models/user';

export class UserValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const validateSignUpUser = async (user: IUser) => {
  const { firstName, lastName, email, password } = user;
  const errorMessages: UserValidationError[] = [];

  if (!firstName || firstName.length === 0 || firstName === null) {
    errorMessages.push(new UserValidationError('First name cannot be empty'));
  }

  if (!lastName || lastName.length === 0 || lastName === null) {
    errorMessages.push(new UserValidationError('Last name cannot be empty'));
  }

  if (!email || email.length === 0 || email === null) {
    errorMessages.push(new UserValidationError('Email cannot be empty'));
  }

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // regex for valid email format
  if (!expression.test(email)) {
    errorMessages.push(new UserValidationError('Email is invalid'));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    errorMessages.push(
      new UserValidationError('Could not create user, email already exists'),
    );
  }

  if (!password || password.length === 0 || password === null) {
    errorMessages.push(new UserValidationError('Password cannot be empty'));
  }

  return errorMessages;
};

export const validateLoginUser = async (user: {
  email: string;
  password: string;
}) => {
  const { email, password } = user;
  const errorMessages: UserValidationError[] = [];

  if (!email || email.length === 0 || email === null) {
    errorMessages.push(new UserValidationError('Email cannot be empty'));
  }

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // regex for valid email format
  if (!expression.test(email)) {
    errorMessages.push(new UserValidationError('Email is invalid'));
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    errorMessages.push(
      new UserValidationError('Invalid credentials, please try again.'),
    );
  }

  if (!password || password.length === 0 || password === null) {
    errorMessages.push(new UserValidationError('Password cannot be empty'));
  }

  let isValidPassword = false;
  if (existingUser) {
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
      throw new UserValidationError('Password invalid, please try again.');
    }
  }

  if (!isValidPassword) {
    throw new UserValidationError('Password invalid, please try again.');
  }

  return errorMessages;
};
