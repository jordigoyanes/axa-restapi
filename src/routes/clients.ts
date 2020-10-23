import * as express from 'express';
const router = express.Router();

import { getClients } from '../controllers/clients';


router.get('/', getClients);

export { router };