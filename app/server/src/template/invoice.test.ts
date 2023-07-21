import { IInvoiceData } from 'models/invoice';
import { calcSubtotal } from './invoice';

describe('Invoice template tests', () => {
  const invoiceData: IInvoiceData = {
    address: {
      recipient: 'Mr Joe Smith',
      streetAddress: '123 Example Ave',
      suburb: 'Exampleton',
      state: 'VIC',
      postcode: '3421',
    },
    dateIssued: '05/06/2023',
    dateDue: '05/06/2023',
    service: [
      {
        description: 'Some service',
        cost: 65,
      },
      {
        description: 'Some other service',
        cost: 165,
      },
    ],
  };

  test('Correctly calculates the subtotal cost of all services', () => {
    const expected = calcSubtotal(invoiceData.service);

    expect(expected).toEqual(230);
  });
});
