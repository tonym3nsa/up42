import React from "react";
import PropTypes from "prop-types";

export const ErrorState = (props) => {
  const { errorMessage } = props;
  return (
    <div className="pt-64">
      <div className="text-center">
        <div className="text-4xl">&#128552;</div>
        <dvi className="text-3xl font-semibold text-gray-500">
          {errorMessage}
        </dvi>
      </div>
    </div>
  );
};

ErrorState.propTypes = {
  errorMessage: PropTypes.string,
};
