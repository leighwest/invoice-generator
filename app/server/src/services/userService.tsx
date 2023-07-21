import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { IUser } from '../models/user';
import { User } from '../models/user';

import { UserValidationError } from './userValidationService';

export const saveUser = async (
  user: IUser,
): Promise<UserValidationError | {}> => {
  const { firstName, lastName, email, password } = user;

  let hashedPassword: string;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    throw new UserValidationError('Could not create user, please try again.');
  }

  const createdUser = new User<IUser>({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      throw new UserValidationError(
        'Could not create user, email already exists.',
      );
    }
    throw new UserValidationError('Could not create user, please try again.');
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      'secret_$$_token',
      { expiresIn: '1h' },
    );
  } catch {
    throw Error('Could not create user, please try again');
  }

  return { userId: createdUser.id, email: createdUser.email, token };
};

// TODO: this is either going to return a ?sessionedUser or a (to be defined) Error
// I'll need to handle the flow of the controller depending on return type
export const createUserSession = async (email: string) => {
  const existingUser = await User.findOne({ email });

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser!.id, email: existingUser!.email },
      'secret_$$_token',
      { expiresIn: '1h' },
    );
  } catch {
    throw Error('Could not create user, please try again');
  }

  return { userId: existingUser!.id, email: existingUser!.email, token };
};
