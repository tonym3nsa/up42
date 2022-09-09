import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Alert } from "../Alert/Alert";
import {
  buyCartItems,
  promptPurchase,
  removeFromCart,
} from "../../redux/actions/cart";
import { CartCard } from "../CartCard/CartCard";
import { Modal } from "../Modal/Modal";

export const Cart = () => {
  const { cart, cartSum, userCredit, displayPrompt } = useSelector(
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
        onClick={() => dispatch(promptPurchase(true))}
      >
        Buy Now
      </Button>
      {displayPrompt && (
        <Modal
          onClick={() => dispatch(buyCartItems())}
          onDismiss={() => dispatch(promptPurchase(false))}
          title="Confirm Purchase"
          message="Are you sure you want to purchase all the items in the cart?"
        />
      )}
    </div>
  );
};

export default Cart;
