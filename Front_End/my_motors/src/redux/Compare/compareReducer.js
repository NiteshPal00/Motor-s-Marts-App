const initialState = {
    compareItems: [],
    user: null,
    isLoading: false,
    error: null,
  };
  
  const compareReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_COMPARE_ITEMS":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_DATA":
        return {
          ...state,
          compareItems: action.payload,
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
  
  export default compareReducer;