const InvoiceDb = {
  async createInvoice(invoice) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:3000');

    try {
      const response = await fetch('http://localhost:8080/invoice', {
        method: "POST",
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(invoice)
      });

      const data = await response.json();
      return data
    } catch (error) {
      return error;
    }
  }
}

export default InvoiceDb;