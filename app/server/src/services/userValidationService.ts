import User, { IUser } from '../models/user';

export type UserValidationError = {
  message: string;
};

export const validateSignUpUser = async (user: IUser) => {
  const { firstName, lastName, email, password } = user;
  const errorMessages: UserValidationError[] = [];

  if (firstName.length === 0 || firstName === null) {
    errorMessages.push({
      message: 'First name cannot be empty',
    });
  }

  console.log('validate user B');
  if (lastName.length === 0 || lastName === null) {
    errorMessages.push({
      message: 'Last name cannot be empty',
    });
  }

  if (email.length === 0 || email === null) {
    errorMessages.push({
      message: 'Email cannot be empty',
    });
  }

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // regex for valid email format
  if (!expression.test(email)) {
    errorMessages.push({
      message: 'Email is invalid',
    });
  }

  // const existingUser = await User.findOne({ email });
  // if (existingUser) {
  //   errorMessages.push({
  //     message: 'Could not create user, email already exists',
  //   });
  // }

  if (password.length === 0 || password === null) {
    errorMessages.push({
      message: 'Password cannot be empty',
    });
  }

  return errorMessages;
};

export const validateLoginUser = async (user: {
  email: any;
  password: any;
}) => {
  const { email, password } = user;
  const errorMessages: UserValidationError[] = [];

  if (email.length === 0 || email === null) {
    errorMessages.push({
      message: 'Email cannot be empty',
    });
  }

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // regex for valid email format
  if (!expression.test(email)) {
    errorMessages.push({
      message: 'Email is invalid',
    });
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser || existingUser.password !== password) {
    errorMessages.push({
      message: 'Invalid credentials, please try again.',
    });
  }

  if (password.length === 0 || password === null) {
    errorMessages.push({
      message: 'Password cannot be empty',
    });
  }

  return errorMessages;
};
