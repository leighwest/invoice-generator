exports.createInvoice = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  
  // TODO: Create invoice in db
  res.status(201).json({
    message: 'Invoice created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
}