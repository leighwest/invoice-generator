import { passwordValidator } from './AuthForm';

describe('Password validator tests', () => {
  test('Password validator returns an empty string if both passwords are identical', async () => {
    expect(passwordValidator('testPassword123', 'testPassword123')).toEqual('');
  });

  test('Password validator returns an error message string if both passwords are not identical', async () => {
    expect(passwordValidator('testPassword123', 'testPassword456')).toEqual(
      'Entered passwords do not match. Please try again.',
    );
  });
});
