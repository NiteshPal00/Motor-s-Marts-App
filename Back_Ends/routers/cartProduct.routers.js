import express from "express";
import {
  addToCart,
  deleteCartItem,
  getCartData,
  updateQuantity,
} from "../controllers/cartProduct.controllers";

const cartRouter = express.Router();

cartRouter.post("/add-to-cart", addToCart);
cartRouter.get("/get-cart-items/:userid", getCartData);
cartRouter.put("/update-quantity/:cart_id", updateQuantity);
cartRouter.delete("/delete-cart-item/:cart_id", deleteCartItem);

export default cartRouter;
