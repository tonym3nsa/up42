export const GET_BLOCKS = "BLOCKS:GET_BLOCKS";
export const GETTING_BLOCKS = "BLOCKS:GETTING_BLOCKS";
export const ERROR_GETTING_BLOCKS = "BLOCKS:ERROR_GETTING_BLOCKS";
import axios from "axios";

export const getBlocks = () => {
  const config = {
    method: "GET",
    url: `${process.env.REACT_APP_BASE_URL}/blocks`,
  };
  return (dispatch) => {
    dispatch({
      type: GETTING_BLOCKS,
      status: true,
    });
    return axios(config)
      .then((response) => {
        dispatch({
          type: GET_BLOCKS,
          response,
        });
        dispatch({
          type: GETTING_BLOCKS,
          status: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: GETTING_BLOCKS,
          status: false,
        });
        dispatch({
          type: ERROR_GETTING_BLOCKS,
          status: true,
          errorMessage: error?.message,
        });
      });
  };
};
