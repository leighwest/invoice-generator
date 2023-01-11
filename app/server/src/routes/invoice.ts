import { Router } from 'express';

import { createInvoice } from '../controllers/invoiceController';

const router = Router();

router.get('/hw', (req, res) => {
  res.send('Hello World!');
});

router.post('/invoice', createInvoice);

export default router;
