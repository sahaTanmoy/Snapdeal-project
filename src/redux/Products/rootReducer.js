import { combineReducers } from "redux";
import productCategoryReducer from "./productCategoryReducer";
import productDetailsReducer from "./productDetailsReducer";
import reducer from "./productReducer";

const rootReducer=combineReducers({
    allproduct: reducer,
    product: productDetailsReducer,
    category: productCategoryReducer
}
)

export default rootReducer