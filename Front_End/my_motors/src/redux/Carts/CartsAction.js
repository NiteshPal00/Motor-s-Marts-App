import axios from 'axios';
const userid = localStorage.getItem("user");
const user = userid ? JSON.parse(userid) : null;
const usercart = user ? user._id : null;
console.log(usercart);

export const CartItems = () => {
  return (dispatch) => {
    dispatch({ type: "SET_CART_ITEMS" });
    if (usercart) {
      axios
        .get(`http://localhost:8001/get-cart-items/${usercart}`)
        .then((res) => {
          dispatch({ type: "GET_DATA", payload: res.data.data }); 
        })
        .catch((err) => {
          dispatch({ type: "GET_ERROR", payload: err.message }); 
        });
    } else {
      // Handle case where usercart is null or undefined
    }
  };
}

export const incrementCartItemQuantity = (productId, quantity) => (dispatch) => {
  axios
    .put(`http://localhost:8001/update-quantity/${productId}?type=inc`, {
      quantity: quantity,
    })
    .then((response) => {
      dispatch({
        type: "INCREMENT_CART_ITEM_QUANTITY",
        payload: { productId, quantity },
      });
    })
    .catch((error) => {
      console.error('Error updating cart item quantity:', error);
    });
};
