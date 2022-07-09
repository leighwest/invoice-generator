const invoiceGenerator = require('../services/createInvoiceService');

exports.createInvoice = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const address = req.body.address;

  const invoice = await invoiceGenerator(address);
  res.send(invoice);
}