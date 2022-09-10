import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { CloseIcon } from "../Icons/CloseIcon/CloseIcon";
import "./cartCard.scss";

export const CartCard = (props) => {
  const { credits, displayName, onClick } = props;

  return (
    <div className="bg-white border border-gray-100 text-gray-500 px-4 py-3 rounded relative mb-2">
      <strong className="font-bold">{displayName}</strong>
      <div className="block ">{credits || 0} credits</div>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <Button className="link" onClick={onClick}>
          <CloseIcon className="fill-current h-6 w-6 text-black" />
        </Button>
      </span>
    </div>
  );
};

CartCard.propTypes = {
  credits: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
