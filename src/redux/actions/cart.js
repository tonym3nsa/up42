export const ADD_TO_CART = "CART:ADD_TO_CART";
export const REMOVE_FROM_CART = "CART:REMOVE_FROM_CART";

export const addToCart = (id, displayName, credits) => {
  return {
    type: ADD_TO_CART,
    id,
    displayName,
    credits,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
