import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = (props) => {
  const { children, className, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} btn rounded px-4 py-2`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
};
