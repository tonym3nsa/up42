export const ADD_TO_CART = "CART:ADD_TO_CART";
export const REMOVE_FROM_CART = "CART:REMOVE_FROM_CART";
export const BUY_CART_ITEMS = "CART:BUY_CART_ITEMS";

/**
 * Action to add block to cart
 * @param {string} id id of block added to cart
 * @param {string} displayName name of block added to cart
 * @param {number} credits credit worth of block added to cart
 * @returns {{credits, displayName, id, type: string}}
 */
export const addToCart = (id, displayName, credits) => {
  return {
    type: ADD_TO_CART,
    id,
    displayName,
    credits,
  };
};

/**
 * Action to remove block from cart
 * @param {string} id id of block removed from cart
 * @returns {{id, type: string}}
 */
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

/**
 * Action to buy blocks added to cart
 * @returns {{type: string}}
 */
export const buyCartItems = () => {
  return {
    type: BUY_CART_ITEMS,
  };
};
