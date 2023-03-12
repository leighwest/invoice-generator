import bcrypt from 'bcryptjs';

import User, { IUser } from '../models/user';
import { UserValidationError } from './userValidationService';

export const saveUser = async (
  user: IUser,
): Promise<UserValidationError | string> => {
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

  return 'User created successfully';
};
