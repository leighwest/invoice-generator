import { render, screen } from '@testing-library/react';
import classnames from 'vest/classnames';

import Address from './Address';
import formValidation from 'Validation/formValidation';

const res = formValidation.get();

const cn = classnames(res, {
  invalid: 'error',
  valid: 'success',
  warning: 'warning',
});

test('renders the address heading', () => {
  render(
    <Address
      handleChange={jest.fn()}
      messages={[]}
      cn={cn}
    />,
  );

  const headingElement = screen.getByRole('heading', {
    level: 2,
    name: 'Address',
  });

  expect(headingElement).toBeInTheDocument();
});
