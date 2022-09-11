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
import "./cart.scss";

export const Cart = () => {
  const { cart, cartSum, userCredit, displayPrompt } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="fixed right-8 w-1/5 cart bg-white shadow-lg rounded mt-28">
      <div
        className="p-5 border-b-2 border-gray-100
"
      >
        <span className="font-semibold text-2xl">Cart</span>
      </div>
      <div className="cart-list p-5">
        {cart?.length > 0 ? (
          cart?.map((cartItem) => {
            return (
              <CartCard
                key={cartItem.id}
                {...cartItem}
                onClick={() => dispatch(removeFromCart(cartItem.id))}
              />
            );
          })
        ) : (
          <div className="text-center">
            <div className="text-6xl">&#128542;</div>
            <div className="font-semibold text-2xl text-gray-400">
              Your cart is empty
            </div>
            <div>You haven&#39;t added anything to cart yet</div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 p-5 w-full border-gray-100 bg-white border-t-2">
        <div className="grid grid-cols-2 font-semibold text-xl py-5">
          <div>Total :</div>
          <div className="text-right">{cartSum.toFixed(2)} credits</div>
        </div>

        {userCredit < cartSum ? (
          <Alert className="mb-5">
            You do not have enough credit to purchase all the items in the cart
          </Alert>
        ) : (
          ""
        )}
        <Button
          className="px-4 py-2 checkout w-full"
          disabled={userCredit < cartSum || cart.length < 1}
          onClick={() => dispatch(promptPurchase(true))}
        >
          Buy Now
        </Button>
      </div>
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
