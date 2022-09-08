import { GET_BLOCKS } from "../actions/blocks";

const initialState = {
  blocks: [],
};

const blocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS: {
      const { response } = action;
      const blocks = response?.data?.data;
      const blocksByPricingStrategy = blocks?.filter(
        (block) =>
          block?.metadata?.blockPricingStrategy?.name?.toLowerCase() ===
          "simple"
      );
      return {
        ...state,
        blocks: blocksByPricingStrategy,
      };
    }
    default: {
      return state;
    }
  }
};

export default blocksReducer;
