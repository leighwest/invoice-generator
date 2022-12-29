import { invoiceGenerator } from "../services/createInvoiceService";
import { Request, Response } from 'express';


export const createInvoice = async (req: Request, res: Response) => {
  const invoiceData = {
    address: req.body.address as {text: string},
    dateIssued: req.body.dateIssued as {text: string},
    dateDue: req.body.dateDue as {text: string},
    service: req.body.service as {text: string},
  };

  const invoice = await invoiceGenerator(invoiceData);
  res.status(201).send(invoice);
};
