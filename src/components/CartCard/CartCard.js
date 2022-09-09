import React from "react";
import PropTypes from "prop-types";
import "./cartCard.scss";
import { Button } from "../Button/Button";
import { CloseIcon } from "../CloseIcon";

export const CartCard = (props) => {
  const { onClick, displayName, credits } = props;

  return (
    <div className="bg-white border border-gray-100 text-red-700 px-4 py-3 rounded relative mb-2">
      <strong className="font-bold">{displayName}</strong>
      <span className="block sm:inline">{credits || 0} credits</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <Button className="link" onClick={onClick}>
          <CloseIcon className="fill-current h-6 w-6 text-black" />
        </Button>
      </span>
    </div>
  );
};

CartCard.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  displayName: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  credits: PropTypes.number,
};
