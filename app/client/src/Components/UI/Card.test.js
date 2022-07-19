import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders "Test card"', () => {

  const component = <Card><p>Test card</p></Card>
  const cardComponent = render(component);

  expect(cardComponent.getByText('Test card')).not.toBeNull();
});