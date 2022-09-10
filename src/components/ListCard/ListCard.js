import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import "./listCard.scss";

export const ListCard = (props) => {
  const { className, metadata, onClick, displayName, id, description, cart } =
    props;
  const dispatch = useDispatch();

  return (
    <div
      onClick={onClick}
      className={`${className} relative rounded overflow-hidden shadow-lg hover:shadow-2xl display-inline-block bg-white`}
    >
      <img
        className="w-full"
        src={
          metadata?.blockThumbnailUrl ||
          "https://via.placeholder.com/500/000000/808080%20?Text=Digital.com%20C/O%20https://placeholder.com/"
        }
        alt="Image"
      />
      <div className="p-6 py-4">
        <div className="font-bold text-black mb-5">{displayName}</div>
        <div className="description py-5">
          {description?.substring(0, 150)}
          {description?.length > 150 ? "..." : ""}
        </div>
      </div>
      <div className="absolute bottom-0 p-5 w-full">
        {cart.find((cartItem) => cartItem?.id === id) ? (
          <Button
            onClick={() => dispatch(removeFromCart(id))}
            className="remove w-full px-4 py-2"
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            onClick={() =>
              dispatch(
                addToCart(
                  id,
                  displayName,
                  metadata?.blockPricingStrategy?.credits
                )
              )
            }
            className="primary w-full px-4 py-2"
          >
            {metadata?.blockPricingStrategy?.credits || 0} credits
          </Button>
        )}
      </div>
    </div>
  );
};

ListCard.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  displayName: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  metadata: PropTypes.any,
  description: PropTypes.string,
  cart: PropTypes.any,
};
