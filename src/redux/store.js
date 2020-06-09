import { createStore } from "redux";
import { calcReducer } from "./calcReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(calcReducer, composeWithDevTools());

export default store;
