import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryProductReducer from "./categoryProductReducer";
import productCategoryReducer from "./productCategoryReducer";
import productDetailsReducer from "./productDetailsReducer";
import reducer from "./productReducer";

const rootReducer=combineReducers({
    allproduct: reducer,
    product: productDetailsReducer,
    category: productCategoryReducer,
    categoryProduct: categoryProductReducer,
    user: userReducer
}
)

export default rootReducer