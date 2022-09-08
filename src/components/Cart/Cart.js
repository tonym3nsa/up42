import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const { userCredit } = useSelector((state) => state.userReducer);

  const cartSum = (cartItems) => {
    return cartItems?.reduce((creditsSum, cartItem) => {
      return creditsSum + cartItem.credits;
    }, 0);
  };

  return (
    <div>
      {cart?.map((cartItem) => {
        return <div key={cartItem.id}>{cartItem.displayName}</div>;
      })}
      Total : {cartSum(cart)}
      <Button className="display-block" disabled={userCredit < cartSum(cart)}>
        Buy Now
      </Button>
    </div>
  );
};

export default Cart;
