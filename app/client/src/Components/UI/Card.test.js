import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders "Test card"', () => {
  render(
    <Card>
      <p>Test card</p>
    </Card>,
  );

  expect(screen.getByText('Test card')).toBeInTheDocument();
});
