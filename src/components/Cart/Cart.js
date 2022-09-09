import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Alert } from "../Alert/Alert";
import { buyCartItems, removeFromCart } from "../../redux/actions/cart";
import { CartCard } from "../CartCard/CartCard";

export const Cart = () => {
  const { cart, cartSum, userCredit } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  return (
    <div>
      {cart?.map((cartItem) => {
        return (
          <CartCard
            key={cartItem.id}
            {...cartItem}
            onClick={() => dispatch(removeFromCart(cartItem.id))}
          />
        );
      })}
      Total : {cartSum}
      {userCredit < cartSum ? (
        <Alert>
          You do not have enough credit to purchase all the items in the cart
        </Alert>
      ) : (
        ""
      )}
      <Button
        className="px-4 py-2 primary"
        disabled={userCredit < cartSum}
        onClick={() => dispatch(buyCartItems())}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default Cart;
