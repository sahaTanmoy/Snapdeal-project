import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryProductReducer from "./categoryProductReducer";
import productCategoryReducer from "./productCategoryReducer";
import productDetailsReducer from "./productDetailsReducer";
import reducer from "./productReducer";
import userCartReducer from "./userCartReducer";
import cartProductDetailsReducer from "./cartProductDetailsReducer";

const rootReducer=combineReducers({
    allproduct: reducer,
    product: productDetailsReducer,
    category: productCategoryReducer,
    categoryProduct: categoryProductReducer,
    user: userReducer,
    cart: userCartReducer,
    cartproduct: cartProductDetailsReducer
}
)

export default rootReducer