import { combineReducers } from "redux";
import blocksReducer from "../reducers/blocks";
import cartReducer from "./cart";

const rootReducer = combineReducers({ blocksReducer, cartReducer });

export default rootReducer;
