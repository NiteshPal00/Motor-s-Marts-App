import axios from 'axios';
const userid = localStorage.getItem("user");
const user = userid ? JSON.parse(userid) : null;
const userOrder = user ? user._id : null;
console.log(userOrder);

export const OrderItems = () => {
  return (dispatch) => {
    dispatch({ type: "SET_Order_ITEMS" });
    if (userOrder) {
      axios
        .get(`http://localhost:8001/get-getCheckouts/${userOrder}`)
        .then((res) => {
          dispatch({ type: "GET_DATA", payload: res.data.data }); 
        })
        .catch((err) => {
          dispatch({ type: "GET_ERROR", payload: err.message }); 
        });
    } else {
    }
  };
}
