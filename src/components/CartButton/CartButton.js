import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export const CartButton = (props) => {
  const { onClick, displayCart, cart } = props;
  return (
    <Button
      data-test="alert"
      className={`fixed bottom-10 right-10 rounded-3xl px-4 py-2 sm:invisible lg:invisible xl:invisible 2xl:invisible  xs:visible ${
        displayCart ? "close" : ""
      }`}
      role="alert"
      onClick={onClick}
    >
      {displayCart ? "Close Cart" : <span>Cart {cart.length || ""}</span>}
    </Button>
  );
};

export default CartButton;

CartButton.propTypes = {
  onClick: PropTypes.func,
  displayCart: PropTypes.bool,
  cart: PropTypes.array,
};
