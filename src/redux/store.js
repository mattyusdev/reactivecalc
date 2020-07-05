import { createStore, applyMiddleware } from "redux";
import { calcReducer } from "./calcReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  calcReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
