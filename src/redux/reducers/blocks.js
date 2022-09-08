import { GET_BLOCKS } from "../actions/blocks";

const initialState = {
  blocks: [],
};

const blocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default blocksReducer;
