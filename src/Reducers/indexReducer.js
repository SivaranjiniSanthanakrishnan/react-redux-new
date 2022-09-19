import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import searchReducer from "./searchReducer";

const combinedReducers = combineReducers({
  articleState: articleReducer,
  searchState: searchReducer,
});

export default combinedReducers;
