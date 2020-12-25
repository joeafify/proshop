import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    productDetailsReducer,
    productListReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});
const initialState = {};
const middlewares = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
