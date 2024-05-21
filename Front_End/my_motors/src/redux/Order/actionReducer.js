const initialState = {
    orderItems: [],
    user: null,
    isLoading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_Order_ITEMS":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_DATA":
        return {
          ...state,
          orderItems: action.payload,
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
  
  export default orderReducer;
