import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

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
    case REMOVE_FROM_CART: {
      const { id } = action;
      const cart = [...state.cart];
      const items = cart.findIndex((item) => item.id === id);
      cart.splice(items, 1);
      return {
        ...state,
        cart,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
