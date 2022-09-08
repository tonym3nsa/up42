import React from "react";
import PropTypes from "prop-types";
import "./listCard.scss";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";

export const ListCard = (props) => {
  const { className, metadata, onClick, displayName, id } = props;
  const dispatch = useDispatch();

  return (
    <div
      onClick={onClick}
      className={`${className} rounded overflow-hidden shadow-lg display-inline-block`}
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
        <div className="font-bold text-xl mb-2">{displayName}</div>
        <p className="text-gray-700 text-base">
          {metadata?.blockPricingStrategy?.credits || 0} credits
        </p>
      </div>
      <div className="p-6">
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
          className="w-full"
        >
          Add to cart
        </Button>
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
};
