import { combineReducers } from "redux";
import blocksReducer from "../reducers/blocks";

const rootReducer = combineReducers({ blocksReducer });

export default rootReducer;
