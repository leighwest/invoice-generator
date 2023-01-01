import { Router } from 'express';

import { createInvoice } from '../controllers/invoiceController';

const router = Router();

router.post('/invoice', createInvoice);

export default router