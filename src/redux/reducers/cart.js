import {
  ADD_TO_CART,
  BUY_CART_ITEMS,
  PROMPT_PURCHASE,
  REMOVE_FROM_CART,
} from "../actions/cart";

const initialState = {
  cart: [],
  cartSum: 0,
  userCredit: 10.0,
  displayPrompt: false,
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
      const { userCredit, cartSum } = state;
      return {
        ...state,
        cart: [],
        displayPrompt: false,
        userCredit: userCredit - cartSum,
      };
    }
    case PROMPT_PURCHASE: {
      const { status } = action;
      return {
        ...state,
        displayPrompt: status,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
