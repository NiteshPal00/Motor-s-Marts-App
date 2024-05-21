import { combineReducers } from "redux"
import cartReducer from "./Carts/cartReducer";
import compareReducer from "./Compare/compareReducer";
import orderReducer from "./Order/actionReducer";

const root = combineReducers({
    carts: cartReducer,
    compares: compareReducer,
    orders: orderReducer
})

export default root;
