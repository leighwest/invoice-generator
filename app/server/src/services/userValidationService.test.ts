import { validateUser } from './userValidationService';
import { User } from '../models/user';

const MOCKUSER: User = {
  id: 'u1',
  firstName: 'Peter',
  lastName: 'Griffin',
  email: 'p.griffin@example.com',
  password: 'password123',
};

describe('New user validator tests', () => {
  test('Returns a "first name invalid" error message if first name is empty', async () => {
    MOCKUSER.firstName = '';
    const validationResult = validateUser(MOCKUSER);

    expect(validationResult.length).toEqual(1);
    expect(validationResult[0].message).toBe('First name cannot be empty');
  });
});
