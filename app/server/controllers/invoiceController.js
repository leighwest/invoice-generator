const invoiceGenerator = require('../services/createInvoiceService');

exports.createInvoice = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  
  // TODO: Create invoice in db
  // class.createInvoice(req.body)

  // res.status(201).json({
  //   message: 'Invoice created successfully!',
  //   post: { id: new Date().toISOString(), title: title, content: content }
  // });
  const invoice = await invoiceGenerator();
  res.send(invoice);
}