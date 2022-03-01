import { applyMiddleware, createStore } from "redux";
//import reducer
import reducer from "./reducer/reducer";

import thunk from "redux-thunk";
//create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
