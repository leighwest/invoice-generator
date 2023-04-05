import { Invoice } from 'Models/InvoiceModel';
import { BASEURL } from '../constants';

const InvoiceDb = {
  async createInvoice(
    invoice: Invoice,
    token: String,
  ): Promise<string | unknown> {
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', `${BASEURL}3000`);
    headers.append('Authorization', `Bearer ${token}`);

    try {
      const response: Response = await fetch(`${BASEURL}8080/invoice`, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(invoice),
      });

      const data: string = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default InvoiceDb;
