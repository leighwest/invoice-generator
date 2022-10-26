import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button component', () => {
  render(
    <Button
      buttonText="Example Text"
      onClick={() => console.log('button clicked')}></Button>,
  );

  expect(screen.getByText(/example text/i)).toBeInTheDocument();
});
