import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = (props) => {
  const { children, className, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} btn rounded`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
