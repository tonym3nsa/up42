import { GET_BLOCKS } from "../actions/blocks";

const initialState = {
  blocks: [],
};

const blocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS: {
      const { response } = action;
      const blocks = response?.data?.data;
      console.log("blocks", blocks);
      return {
        ...state,
        blocks,
      };
    }
    default: {
      return state;
    }
  }
};

export default blocksReducer;
