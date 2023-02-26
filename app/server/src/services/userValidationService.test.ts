import {
  validateSignUpUser,
  UserValidationError,
} from './userValidationService';
import { IUser } from '../models/user';

describe('New user validator tests', () => {
  const user: IUser = {
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  };

  test('Returns a "first name invalid" error message if first name is empty', async () => {
    const userBlankFirstName: IUser = { ...user, firstName: '' };

    const validationResult: UserValidationError[] = await validateSignUpUser(
      userBlankFirstName,
    );

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('First name cannot be empty');
  });

  test('Returns a "last name invalid" error message if first name is empty', async () => {
    const userBlankLastName: IUser = { ...user, lastName: '' };

    const validationResult: UserValidationError[] = await validateSignUpUser(
      userBlankLastName,
    );

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Last name cannot be empty');
  });
});
