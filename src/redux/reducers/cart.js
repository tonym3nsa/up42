import { ADD_TO_CART, BUY_CART_ITEMS, REMOVE_FROM_CART } from "../actions/cart";

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
        cartSum: [...state.cart, { id, displayName, credits }].reduce(
          (creditsSum, cartItem) => {
            return creditsSum + cartItem.credits;
          },
          0
        ),
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
        cartSum: cart.reduce((creditsSum, cartItem) => {
          return creditsSum + cartItem.credits;
        }, 0),
      };
    }
    case BUY_CART_ITEMS: {
      return {
        state,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
