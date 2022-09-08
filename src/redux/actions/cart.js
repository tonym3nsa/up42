export const ADD_TO_CART = "CART:ADD_TO_CART";

export const addToCart = (id, displayName, credits) => {
  return {
    type: ADD_TO_CART,
    id,
    displayName,
    credits,
  };
};
