import * as express from 'express';
const router = express.Router();

import { login } from '../controllers/auth';

router.post('/', login);

export { router };