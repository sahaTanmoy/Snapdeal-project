import { FETCH_CART_PRODUCT_DETAILS_REQUEST,FETCH_CART_PRODUCT_DETAILS_SUCCESS,FETCH_CART_PRODUCT_DETAILS_FAILURE, REMOVE_CART_PRODUCT_DETAILS } from "./cartProductDetailsTypes"

const initialState = {
    loading: false,
    cartproduct: [],
    error:''
}

const cartProductDetailsReducer = (state = initialState, action9) => {
    switch (action9.type) {
        case FETCH_CART_PRODUCT_DETAILS_REQUEST:

            return {
                ...state,
                loading: true
            }

        case FETCH_CART_PRODUCT_DETAILS_SUCCESS:

            return {
                ...state,
                loading: false,
                cartproduct: state.cartproduct.concat(action9.payload),
                error: ''
            }

            case FETCH_CART_PRODUCT_DETAILS_FAILURE:

                return {
                    ...state,
                    loading: false,
                    cartproduct: state.cartproduct,
                    error: action9.payload
                }

        case REMOVE_CART_PRODUCT_DETAILS:

            return {
                ...state,
                cartproduct: initialState.cartproduct
            }
        default:
            return state
    }
}

export default cartProductDetailsReducer
