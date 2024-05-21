import express from 'express';
import { addinventoryProductData, deleteinventoryProductData, getinventoryProductData, getinventoryProductDataAll, updateinventoryProductData } from '../controllers/inventoryProduct.controllers';

const inventoryProductRouter = express.Router();

inventoryProductRouter.post("/add-addinventoryProductData", addinventoryProductData);
inventoryProductRouter.get('/get-getinventoryProductDataAll', getinventoryProductDataAll);
inventoryProductRouter.get('/get-getinventoryProductData/:inventoryProductData_id', getinventoryProductData);
inventoryProductRouter.put('/update-updateinventoryProductData/:inventoryProductData_id', updateinventoryProductData);
inventoryProductRouter.delete('/delete-deleteinventoryProductData/:inventoryProductData_id', deleteinventoryProductData);

export default inventoryProductRouter;
