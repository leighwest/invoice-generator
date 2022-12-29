import { Router } from 'express';

import { createInvoice } from '../controllers/invoiceController';

const router = Router();

router.post('/invoice', createInvoice);

// module.exports = router;

export default router