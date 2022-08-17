import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button component', () => {
  render(<Button buttonText="Example Text"></Button>);

  expect(screen.getByText(/example text/i)).toBeInTheDocument();
});
