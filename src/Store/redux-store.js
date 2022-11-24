import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import searchReducer from "./searchReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  search: searchReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
