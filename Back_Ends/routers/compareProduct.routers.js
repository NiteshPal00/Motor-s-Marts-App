import express from 'express';
import { addToCompare, deleteCompareItem, getCompareData } from '../controllers/compareProduct.controllers';

const compareRouter = express.Router();

compareRouter.post("/add-addToCompare", addToCompare);
compareRouter.get('/get-getCompareData/:userid', getCompareData);
compareRouter.delete('/delete-deleteCompareItem/:compare_id', deleteCompareItem);

export default compareRouter;
