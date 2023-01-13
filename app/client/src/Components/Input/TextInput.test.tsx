import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput component', () => {
  render(
    <TextInput
      name="suburb"
      onChange={jest.fn()}
      placeholder="Exampleville"
      messages={[]}
      className={'suburb'}
    />,
  );

  expect(screen.getByText(/suburb/i)).toBeInTheDocument();

  expect(screen.getByPlaceholderText('i.e. Exampleville')).toBeInTheDocument();
});
