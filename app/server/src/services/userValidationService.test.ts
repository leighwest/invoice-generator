import { validateUser } from './userValidationService';
import { User } from '../models/user';

describe('New user validator tests', () => {
  const user: User = {
    id: 'u1',
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'p.griffin@example.com',
    password: 'password123',
  };

  test('Returns a "first name invalid" error message if first name is empty', async () => {
    const userBlankFirstName: User = { ...user, firstName: '' };

    const validationResult = validateUser(userBlankFirstName);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('First name cannot be empty');
  });

  test('Returns a "last name invalid" error message if first name is empty', async () => {
    const userBlankLastName: User = { ...user, lastName: '' };

    const validationResult = validateUser(userBlankLastName);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('Last name cannot be empty');
  });
});
