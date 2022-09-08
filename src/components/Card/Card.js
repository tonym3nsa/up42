import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import { Button } from "../Button/Button";

export const Card = (props) => {
  const { className, metadata, onClick } = props;
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
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="p-6">
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  metadata: PropTypes.any,
  type: PropTypes.oneOf(["submit", "button"]),
};
