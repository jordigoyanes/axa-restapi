import * as express from 'express';
const router = express.Router();

import { router as auth } from './auth';
import { router as policies } from './policies';
import { router as clients } from './clients';

router.use('/login', auth);
router.use('/policies', policies);
router.use('/clients', clients);

export default router;