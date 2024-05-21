import express from 'express';
import { addCheckout, getCheckouts } from '../controllers/checkout.controllers';

const checkoutRouter = express.Router();

checkoutRouter.post('/addCheckout', addCheckout);
checkoutRouter.get('/getCheckouts', getCheckouts);

export default checkoutRouter;