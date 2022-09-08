import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <div>
      {cart?.map((cartItem) => {
        return <div key={cartItem.id}>{cartItem.displayName}</div>;
      })}
      Total :{" "}
      {cart?.reduce((creditsSum, cartItem) => {
        return creditsSum + cartItem.credits;
      }, 0)}
    </div>
  );
};

export default Cart;
