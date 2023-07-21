export interface IInvoiceData {
  address: {
    recipient: string;
    streetAddress: string;
    suburb: string;
    state: string;
    postcode: string;
  };
  dateIssued: string;
  dateDue: string;
  service: { description: string; cost: number }[];
}
