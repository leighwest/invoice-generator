const invoiceGenerator = require("../services/createInvoiceService");

exports.createInvoice = async (req, res) => {
  const invoiceData = {
    address: req.body.address,
    dateIssued: req.body.dateIssued,
    dateDue: req.body.dateDue,
    service: req.body.service,
  };

  console.log(
    `In invoiceController street address is: ${invoiceData.address.streetAddress}`
  );

  const invoice = await invoiceGenerator(invoiceData);
  res.send(invoice);
};
