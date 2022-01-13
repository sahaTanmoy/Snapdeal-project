import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./Products/productReducer";
import rootReducer from "./Products/rootReducer";

const store= createStore(rootReducer,applyMiddleware(thunk))

export default store