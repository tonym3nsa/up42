import { combineReducers } from "redux";
import blocksReducer from "../reducers/blocks";
import cartReducer from "./cart";
import userReducer from "./user";

const rootReducer = combineReducers({
  blocksReducer,
  cartReducer,
  userReducer,
});

export default rootReducer;
