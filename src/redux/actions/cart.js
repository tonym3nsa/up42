export const ADD_TO_CART = "CART:ADD_TO_CART";
export const REMOVE_FROM_CART = "CART:REMOVE_FROM_CART";
export const BUY_CART_ITEMS = "CART:BUY_CART_ITEMS";
export const PROMPT_PURCHASE = "CART:PROMPT_PURCHASE";
export const DISPLAY_MOBILE_CART = "CART:DISPLAY_MOBILE_CART";

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

/**
 * Action to prompt purchase
 * @param {boolean} status
 * @returns {{type: string, status}}
 */
export const promptPurchase = (status) => {
  return {
    type: PROMPT_PURCHASE,
    status,
  };
};

/**
 * Toggle cart in mobile view
 * @param {boolean} status
 * @returns {{type: string, status}}
 */
export const displayMobileCart = (status) => {
  return {
    type: DISPLAY_MOBILE_CART,
    status,
  };
};
