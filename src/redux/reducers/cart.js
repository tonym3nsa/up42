import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, displayName, credits } = action;
      return {
        ...state,
        cart: [...state.cart, { id, displayName, credits }],
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
