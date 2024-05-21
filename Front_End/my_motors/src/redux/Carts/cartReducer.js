const initialState = {
    cartItems: [],
    user: null,
    isLoading: false,
    error: null,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CART_ITEMS":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_DATA":
        return {
          ...state,
          cartItems: action.payload,
          isLoading: false,
        };
        case "Success":
        return {
          ...state,
          isLoading: false,
        };
      case "GET_ERROR":
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
       
      default:
        return state;
    }
  };
  
  export default cartReducer;  
  