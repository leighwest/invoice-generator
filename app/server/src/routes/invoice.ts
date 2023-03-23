import { NextFunction, Router } from 'express';

import { createInvoice } from 'controllers/invoiceController';
import { AuthRequest, checkAuth } from 'middleware/check-auth';

const router = Router();

// router.get('/hw', (req: Request, res: Express.Response) => {
//   res.send('Hello World!');
// });

router.use('/invoice', (req: AuthRequest, _res, next: NextFunction) => {
  checkAuth(req, next);
});

router.post('/invoice', createInvoice);

export default router;
