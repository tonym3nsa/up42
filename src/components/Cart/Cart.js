import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Alert } from "../Alert/Alert";
import { removeFromCart } from "../../redux/actions/cart";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { userCredit } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const cartSum = (cartItems) => {
    return cartItems?.reduce((creditsSum, cartItem) => {
      return creditsSum + cartItem.credits;
    }, 0);
  };

  return (
    <div>
      {cart?.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            {cartItem.displayName}{" "}
            <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
              Delete
            </button>
          </div>
        );
      })}
      Total : {cartSum(cart)}
      {userCredit < cartSum(cart) ? (
        <Alert>
          You do not have enough credit to purchase all the items in the cart
        </Alert>
      ) : (
        ""
      )}
      <Button className="display-block" disabled={userCredit < cartSum(cart)}>
        Buy Now
      </Button>
    </div>
  );
};

export default Cart;
