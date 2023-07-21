import {
  validateSignUpUser,
  UserValidationError,
} from './userValidationService';
import { IUser, User } from '../models/user';

describe('New user validator tests', () => {
  const user: IUser = {
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  };

  User.findOne = jest.fn().mockReturnValue(null);

  test('Returns a "first name invalid" error message if first name is empty', async () => {
    const userBlankFirstName: IUser = { ...user, firstName: '' };

    const validationResult: UserValidationError[] = await validateSignUpUser(
      userBlankFirstName,
    );

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('First name cannot be empty');
  });

  test('Returns a "last name invalid" error message if last name is empty', async () => {
    const userBlankLastName: IUser = { ...user, lastName: '' };

    const validationResult: UserValidationError[] = await validateSignUpUser(
      userBlankLastName,
    );

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Last name cannot be empty');
  });

  test('Returns two "email invalid" error messages if email is empty', async () => {
    const userBlankEmail: IUser = { ...user, email: '' };

    const validationResult: UserValidationError[] = await validateSignUpUser(
      userBlankEmail,
    );

    expect(validationResult.length).toEqual(2);
    expect(validationResult[0].message).toBe('Email cannot be empty');
    expect(validationResult[1].message).toBe('Email is invalid');
  });

  test('Invalid email format fails email validation', async () => {
    let invalidEmail: IUser = { ...user, email: 'test@example' };

    let validationResult: UserValidationError[] = await validateSignUpUser(
      invalidEmail,
    );

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Email is invalid');

    invalidEmail = { ...user, email: 'test.com' };

    validationResult = await validateSignUpUser(invalidEmail);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Email is invalid');

    invalidEmail = { ...user, email: '@example.com' };

    validationResult = await validateSignUpUser(invalidEmail);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Email is invalid');
  });

  test('Duplicate email fails email validation', async () => {
    User.findOne = jest.fn().mockResolvedValue({
      firstName: 'Existing',
      lastName: 'User',
      email: 'p.griffin1@example.com',
      password: 'password123',
    });

    const validationResult = await validateSignUpUser(user);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe(
      'Could not create user, email already exists',
    );
  });
});
