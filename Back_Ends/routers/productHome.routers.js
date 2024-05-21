import express from 'express';
import { addproductHomeData, deleteproductHomeData, getproductHomeData, getproductHomeDataAll, updateproductHomeData } from '../controllers/productHome.controllers';

const productHomeRouter = express.Router();

productHomeRouter.post("/add-addproductHomeData", addproductHomeData);
productHomeRouter.get("/get-getproductHomeDataAll", getproductHomeDataAll);
productHomeRouter.get("/get-getproductHomeData/:productHomeData_id", getproductHomeData);
productHomeRouter.put("/update-updateproductHomeData/:productHomeData_id", updateproductHomeData);
productHomeRouter.delete("/delete-deleteproductHomeData/:productHomeData_id", deleteproductHomeData);

export default productHomeRouter;
