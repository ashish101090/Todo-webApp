import todoReducers from "./todoreducer";
import { combineReducers } from "redux";

//root reducer, combines all your reducers
const rootReducers = combineReducers({
  todoReducers,
});

export default rootReducers;
