// import { User } from '/home/vagrant/Desktop/Projects/invoice-generator/app/server/src/models/user'
import { User } from '../models/user';

type userValidationError = {
  message: string;
};

export const validateUser = (user: User) => {
  const { id, firstName, lastName, email, password } = user;
  const errorMessages: userValidationError[] | null = [];

  if (firstName.length === 0 || firstName === null) {
    errorMessages.push({
      message: 'First name cannot be empty',
    });
  }

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

  if (password.length === 0 || password === null) {
    errorMessages.push({
      message: 'Password cannot be empty',
    });
  }

  return errorMessages;
};
