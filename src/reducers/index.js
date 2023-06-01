import { combineReducers } from "redux";
import changeNumbers from "./upDown";

const rootReducer = combineReducers({
  changeNumbers,
});

export default rootReducer;
