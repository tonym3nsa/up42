import {
  ERROR_GETTING_BLOCKS,
  GET_BLOCKS,
  GETTING_BLOCKS,
} from "../actions/blocks";
import blocksReducer from "./blocks";

const state = {
  blocks: [],
};

test("Get and filter blocks", () => {
  const action = {
    type: GET_BLOCKS,
    response: {
      data: {
        data: [
          {
            metadata: {
              blockPricingStrategy: {
                name: "simple",
              },
            },
          },
          {
            metadata: {
              blockPricingStrategy: {
                name: "simple",
              },
            },
          },
          {
            metadata: {
              blockPricingStrategy: {
                name: "not_so_simple",
              },
            },
          },
        ],
      },
    },
  };
  const blocks = blocksReducer(state, action);
  expect(blocks.blocks.length).toBe(2);
});

test("Getting blocks", () => {
  const action = {
    type: GETTING_BLOCKS,
    status: true,
  };
  const blocks = blocksReducer(state, action);
  expect(blocks.gettingBlocks).toBe(true);
});

test("Error getting blocks", () => {
  const action = {
    type: ERROR_GETTING_BLOCKS,
    status: true,
    errorMessage: "message",
  };
  const blocks = blocksReducer(state, action);
  expect(blocks.errorGettingBlocks).toBe(true);
  expect(blocks.errorMessage).toBe("message");
});
