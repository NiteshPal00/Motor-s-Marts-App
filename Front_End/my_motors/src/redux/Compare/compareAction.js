import axios from 'axios';
const userid = localStorage.getItem("user");
const user = userid ? JSON.parse(userid) : null;
const userCompare = user ? user._id : null;
console.log(userCompare);

export const CompareItems = () => {
  return (dispatch) => {
    dispatch({ type: "SET_Compare_ITEMS" });
    if (userCompare) {
      axios
        .get(`http://localhost:8001/get-getCompareData/${userCompare}`)
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
