import { Invoice } from 'Models/InvoiceModel';
import { BASEURL } from '../constants';

const InvoiceDb = {
  async createInvoice(invoice: Invoice, token: String) {
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/pdf');
    headers.append('Origin', `${BASEURL}${process.env.PORT}`);
    headers.append('Authorization', `Bearer ${token}`);

    try {
      const url = `${BASEURL}5000/invoice`;
      console.log(`url to send invoice is ${url}`);
      fetch(`${url}`, {
        // http://127.0.0.1/:5000/users/login
        // fetch(`:5000/invoice`, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(invoice),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'invoice.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
    } catch (error) {
      return error;
    }
  },
};

export default InvoiceDb;
