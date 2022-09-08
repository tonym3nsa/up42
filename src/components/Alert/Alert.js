import React from "react";
import PropTypes from "prop-types";

export const Alert = (props) => {
  const { children } = props;
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.string,
};
