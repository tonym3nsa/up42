import { GET_BLOCKS } from "../actions/blocks";

const initialState = {
  blocks: [],
};

const blocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS: {
      const { response, filter = "simple" } = action;
      const blocks = response?.data?.data;
      const blocksByPricingStrategy = blocks?.filter(
        (block) =>
          block?.metadata?.blockPricingStrategy?.name?.toLowerCase() === filter
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
