import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Initial conditions', () => {
  render(<App />);

  const confirmButton = screen.getByRole('button', {
    name: /generate invoice/i,
  });
  expect(confirmButton).toBeEnabled();
});
