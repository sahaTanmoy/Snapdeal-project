import { combineReducers } from "redux";
import productDetailsReducer from "./productDetailsReducer";
import reducer from "./productReducer";

const rootReducer=combineReducers({
    allproduct: reducer,
    product: productDetailsReducer
}
)

export default rootReducer