import {
  ADD_TO_CART,
  BUY_CART_ITEMS,
  PROMPT_PURCHASE,
  REMOVE_FROM_CART,
} from "../actions/cart";
import cartReducer from "./cart";

const state = {
  cart: [{ id: "0", displayName: "SAMPLE 0", credits: 5 }],
  cartSum: 5,
  userCredit: 10,
};

test("Add to cart", () => {
  const action = {
    type: ADD_TO_CART,
    id: "1",
    displayName: "SAMPLE 1",
    credits: 10,
  };
  const cart = cartReducer(state, action);
  expect(cart.cart.length).toBe(2);
  expect(cart.cartSum).toBe(15);
});

test("Remove from cart", () => {
  const action = {
    type: REMOVE_FROM_CART,
    id: "0",
  };
  const cart = cartReducer(state, action);
  expect(cart.cart.length).toBe(0);
  expect(cart.cartSum).toBe(0);
});

test("Buy cart items", () => {
  const action = {
    type: BUY_CART_ITEMS,
  };
  const cart = cartReducer(state, action);
  expect(cart.userCredit).toBe(5);
});

test("Prompt purchase", () => {
  const action = {
    type: PROMPT_PURCHASE,
    status: true,
  };
  const cart = cartReducer(state, action);
  expect(cart.displayPrompt).toBe(true);
});
