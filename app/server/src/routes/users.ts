import { Router } from 'express';

import { signup, login } from '../controllers/usersController';

const router = Router();

router.post('/signup', signup);

router.post('/login', login);

export default router;
