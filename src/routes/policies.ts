import * as express from 'express';
const router = express.Router();

import { getPolicies } from '../controllers/policies';

router.get('/', getPolicies);

export { router };