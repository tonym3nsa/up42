export const GET_BLOCKS = "BLOCKS:GET_BLOCKS";
import axios from "axios";

export const getBlocks = () => {
  const config = {
    method: "GET",
    url: "/blocks",
  };
  return (dispatch) => {
    return axios(config)
      .then((response) => {
        dispatch({
          type: GET_BLOCKS,
          response,
        });
      })
      .catch((error) => {
        console.error("error", error);
        throw error;
      });
  };
};
