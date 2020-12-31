import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "../middlewares/logger";
import bugReducer from "../reducers/bugs";

const reducer = combineReducers({ bugs: bugReducer });

const store = configureStore({
  reducer,
  middleware: [logger],
});
export default store;
